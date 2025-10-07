const fs = require('fs-extra');

const DEFAULT_BRANCH = 'master';
const BM_BRANCH = 'master-bm';
const ROOT_DOCS_PATH = './docs';
const STORYBOOK_BUILD_PREFIX = 'lg-sb-';
const STORYBOOK_BUILD_PATH = `./${STORYBOOK_BUILD_PREFIX}build`;
const STASH_NAME = 'sb-stash';

module.exports = async ({
  branch,
  sha,
  pullNumber,
  github,
  context: { repo: { repo, owner } },
  exec,
}) => {
  console.info('ℹ️ Commencing storybook gh-pages deploy');
  let docsPath = ROOT_DOCS_PATH;

  if (branch === DEFAULT_BRANCH) {
    console.info(`ℹ️ Branch to deploy: ${DEFAULT_BRANCH}`);
    await deploy({ branch, sha, repo, owner, docsPath, github, exec });

    return;
  }

  console.info(`ℹ️ Branch to deploy: ${branch}`);

  docsPath = `${ROOT_DOCS_PATH}/${STORYBOOK_BUILD_PREFIX}${branch}`;

  if (branch === BM_BRANCH) {
    await deploy({ branch, sha, repo, owner, docsPath, github, exec });

    return;
  }

  const checksPassed = await evaluatePullChecks({
    sha,
    github,
    repo,
    owner,
  });

  if (checksPassed) {
    console.info('ℹ️ The PR checks passed successfully');
    await deploy({ branch, sha, repo, owner, docsPath, github, exec });
  } else {
    throw `🚫 Error: please make sure the checks for PR #${pullNumber} have all passed before running the deployment`;
  }
}

async function evaluatePullChecks({ sha, github, repo, owner }) {
  console.info('ℹ️ Evaluating the PR checks');

  const { data: { check_runs: listCheckRuns } } = await github.rest.checks.listForRef({
    owner,
    repo,
    ref: sha
  });

  return listCheckRuns.every(({ conclusion }) => conclusion === 'success');
}

async function deploy({ branch, sha, repo, owner, docsPath, github, exec }) {
  try {
    console.info('ℹ️ Configuring git');
    await exec.exec('git', ['config', '--global', 'user.email', 'github-actions[bot]@users.noreply.github.com']);
    await exec.exec('git', ['config', '--global', 'user.name', 'github-actions[bot]']);

    console.info('ℹ️ Logging status');
    await exec.exec('git', ['status']);

    console.info('ℹ️ Restore the documentation.json');
    try {
      await exec.exec('git', ['restore', 'documentation.json']);
    } catch (e) {
      console.info(`ℹ️ Unable to restore the documentation.json: \n${e}`);
    }

    const buildPath = branch === DEFAULT_BRANCH ? STORYBOOK_BUILD_PATH : docsPath;

    console.info('ℹ️ Starting to track the storybook changes before stashing');
    await exec.exec('git', ['add', buildPath]);

    console.info('ℹ️ Stashing the storybook changes');
    await exec.exec('git', ['stash', 'push', '-m', STASH_NAME, '--', buildPath]);

    console.info('ℹ️ Clearing the current environment');
    await exec.exec('git', ['reset', '--hard']);

    console.info('ℹ️ Fetching the latest changes from gh-pages branch');
    await exec.exec('git', ['fetch', 'origin', 'gh-pages:gh-pages']);

    console.info('ℹ️ Checking out gh-pages branch');
    await exec.exec('git', ['checkout', 'gh-pages']);

    if (fs.existsSync(docsPath)) {
      // this is to avoid any merge conflict when an environment is redeployed
      console.info(`ℹ️ Cleaning existing ${docsPath}`);
      if (branch === DEFAULT_BRANCH) {
        // for the default branch we want to clean everything from `./docs` with the exception of the directories of the deployed branches
        const filesToRemove = fs.readdirSync(ROOT_DOCS_PATH, { withFileTypes: true })
          .filter(item => !item.name.startsWith(STORYBOOK_BUILD_PREFIX))
          .map(({ name }) => name);

        for (const file of filesToRemove) {
          await exec.exec('rm', ['-rf', `${ROOT_DOCS_PATH}/${file}`]);
        }
      } else {
        // for a branch we want to clean the specific branch folder e.g. `./docs/lg-sb-<branch-name>`
        await exec.exec('rm', ['-rf', docsPath]);
      }

      await exec.exec('git', ['add', docsPath]);
      await exec.exec('git', [
        'commit',
        '-m',
        `docs(gh-pages): cleaning ${docsPath} before applying new changes`,
        '--no-verify'
      ]);
    }

    console.info('ℹ️ Applying the stash with the storybook changes');
    await exec.exec('git', ['stash', 'apply', `stash^{/${ STASH_NAME }}`]);

    if (branch === DEFAULT_BRANCH) {
      // gh-pages only works in the root directory, or '/docs'
      await moveFiles({
        destinationPath: docsPath,
        exec
      });
    }

    console.info('ℹ️ Adding storybook static files');
    await exec.exec('git', ['add', docsPath]);

    console.info('ℹ️ Committing changes');
    await exec.exec('git', [
      'commit',
      '-m',
      `docs(gh-pages): latest storybook build from ${branch}\nCommit: ${sha.substring(0,7)}`,
      '--no-verify'
    ]);

    console.info('ℹ️ Un-deploy unused environments');
    await undeploy({ branch, repo, owner, github, exec });

    console.info('ℹ️ Pushing to gh-pages');
    await exec.exec('git', ['push', '-f', '--set-upstream', 'origin', 'gh-pages']);
  } catch (e) {
    throw `🚫 Error: something went wrong during the deployment of branch ${branch}\n${e}`;
  }
}

async function moveFiles({ destinationPath, exec }) {
  // moving one file at the time because using `*` in the mv command breaks the code
  const sbFiles = fs.readdirSync(STORYBOOK_BUILD_PATH, { withFileTypes: true }).map(({ name }) => name);

  for (const file of sbFiles) {
    await exec.exec('mv', [`${STORYBOOK_BUILD_PATH}/${file}`, destinationPath]);
  }

  await exec.exec('rm', ['-rf', STORYBOOK_BUILD_PATH]);
  await exec.exec('git', ['add', STORYBOOK_BUILD_PATH]);
}

async function undeploy({ branch, repo, owner, github, exec }) {
  try {
    const prefixRegex = new RegExp(`^${STORYBOOK_BUILD_PREFIX}`);

    // get the existing deployed branches from the docs folder (removing the prefix)
    const branches = fs.readdirSync(ROOT_DOCS_PATH, { withFileTypes: true })
      .filter(item => item.isDirectory() &&
        item.name.startsWith(STORYBOOK_BUILD_PREFIX) &&
        item.name !== `${STORYBOOK_BUILD_PREFIX}${branch}` &&
        item.name !== `${STORYBOOK_BUILD_PREFIX}${BM_BRANCH}`
      )
      .map(({ name }) => name.replace(prefixRegex, ''));

    if (!branches.length) {
      console.info(`✅️ Skipping: no environments to un-deploy`);
      return;
    }

    const { data: pullsList } = await github.rest.pulls.list({
      owner,
      repo,
      state: 'open',
    });

    const branchesToUndeploy = branches.filter(branch => !pullsList.map(pull => pull.head.ref).includes(branch));

    if (!branchesToUndeploy.length) {
      console.info(`✅️ Skipping: no environments to un-deploy`);
      return;
    }

    console.info(`ℹ️ Commencing storybook gh-pages un-deploy for: ${branchesToUndeploy.join(', ')}`);

    for (const branch of branchesToUndeploy) {
      console.info(`ℹ️ Removing storybook static files for branch ${branch}`);
      await exec.exec('rm', ['-rf', `${ROOT_DOCS_PATH}/${STORYBOOK_BUILD_PREFIX}${branch}`]);
      await exec.exec('git', ['add', `${ROOT_DOCS_PATH}/${STORYBOOK_BUILD_PREFIX}${branch}`]);

      try {
        console.info('ℹ️ Committing changes');
        await exec.exec('git', [
          'commit',
          '-m',
          `docs(gh-pages): remove storybook build\nBranch: ${branch}`,
          '--no-verify'
        ]);
      } catch (e) {
        console.log(e);
      }
    }
  } catch (error) {
    throw `🚫 Error: something went wrong during the un-deployment`;
  }
}
