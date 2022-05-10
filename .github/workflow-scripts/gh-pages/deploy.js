module.exports = async ({
  branch,
  sha,
  pullNumber,
  github,
  context: { repo: { repo, owner } },
  exec,
}) => {
  console.info('ℹ️ Commencing storybook gh-pages deploy');
  let docsPath = './docs';

  if (branch === 'master') {
    console.info('ℹ️ Branch to deploy: master');
    console.info('ℹ️ Running storybook build');
    // gh-pages only works in the root directory, or '/docs'
    await exec.exec('npm', ['run', 'build-storybook', '--', '-o', docsPath]);

    await deploy(branch, docsPath, exec);
  } else {
    console.info(`ℹ️ Branch to deploy: ${branch}`);

    docsPath = `./docs/sb-${branch}`;

    const checksPassed = await evaluatePullChecks(
      sha,
      github,
      repo,
      owner
    );

    if (checksPassed) {
      console.info('ℹ️ The PR checks passed successfully');
      await deploy(branch, docsPath, exec);
    } else {
      throw `🚫 Error: please make sure the checks for PR #${pullNumber} have all passed before running the deployment`;
    }
  }
}

async function evaluatePullChecks(sha, github, repo, owner) {
  console.info('ℹ️ Evaluating the PR checks');

  const { data: { check_runs: listCheckRuns } } = await github.rest.checks.listForRef({
    owner,
    repo,
    ref: sha
  });

  return listCheckRuns.every(({ conclusion }) => conclusion === 'success');
}

async function deploy(branch, docsPath, exec) {
  try {
    console.info('ℹ️ Configuring git');
    await exec.exec('git', ['config', '--global', 'user.email', 'github-actions[bot]@users.noreply.github.com']);
    await exec.exec('git', ['config', '--global', 'user.name', 'github-actions[bot]']);

    console.info('ℹ️ Logging status');
    await exec.exec('git', ['status']);

    console.info('ℹ️ Stashing the storybook changes');
    // -u: includes untracked files
    await exec.exec('git', ['stash', '-u']);

    console.info('ℹ️ Fetching the latest changes from gh-pages branch');
    await exec.exec('git', ['fetch', 'origin', 'gh-pages:gh-pages']);

    console.info('ℹ️ Checking out gh-pages branch');
    await exec.exec('git', ['checkout', 'gh-pages']);

    console.info('ℹ️ Applying the stash with the storybook changes');
    // force the stash to be applied
    await exec.exec('git', ['checkout', 'stash', '--', '.']);

    console.info('ℹ️ Adding storybook static files');
    await exec.exec('git', ['add', docsPath]);

    console.info('ℹ️ Committing changes');
    try {
      await exec.exec('git', [
        'commit',
        '-m',
        `docs(gh-pages): latest storybook build from ${branch}`,
        '--no-verify'
      ]);
    } catch (e) {
      console.log(e);
    }

    console.info('ℹ️ Pushing to gh-pages');
    await exec.exec('git', ['push', '-f', '--set-upstream', 'origin', 'gh-pages']);
  } catch (e) {
    throw `🚫 Error: something went wrong during the deployment of branch ${branch}`;
  }
}
