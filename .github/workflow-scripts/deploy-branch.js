module.exports = async ({
  branch,
  pullNumber,
  github,
  context,
  exec,
  core
}) => {
  if (branch === 'master') {
    await deploy(branch, exec);
  } else {
    pullNumber = parseInt(pullNumber.replace('#', ''));

    const checksPassed = await evaluatePullChecks(
      github,
      context,
      pullNumber,
    );

    if (checksPassed) {
      console.info('ℹ️ The PR checks passed successfully');
      await deploy(branch, exec);
    } else {
      core.setFailed(`⚠ Error: please make sure the checks for PR #${pullNumber} have all passed before running the deployment`);
    }
  }
}

async function evaluatePullChecks(github, { repo: { repo, owner } }, pullNumber) {
  console.info('ℹ️ Evaluating the PR checks');

  const { data: pullRequest } = await github.rest.pulls.get({
    owner,
    repo,
    pull_number: pullNumber,
  });

  const { data: { check_runs: listCheckRuns } } = await github.rest.checks.get({
    owner,
    repo,
    check_run_id: pullRequest.head.sha
  });

  return listCheckRuns.every(checkRun => checkRun.conclusion === 'success');
}

async function deploy(branch, exec) {
  try {
    const docsPath = branch === 'master' ? './docs' : `./docs/${branch}`;

    console.info('ℹ️ Commencing storybook gh-pages deploy');

    console.info('ℹ️ Running storybook build');
    // gh-pages only works in the root directory, or '/docs'
    // -c: directory where to load Storybook configurations from
    await exec.exec('npm', ['run', 'build-storybook', '--', '-o', docsPath, '--', '-c', docsPath]);

    console.info('ℹ️ Configuring git');
    await exec.exec('git', ['config', '--global', 'user.email', 'github-actions[bot]@users.noreply.github.com']);
    await exec.exec('git', ['config', '--global', 'user.name', 'github-actions[bot]']);

    console.info('ℹ️ Stashing the storybook changes');
    // -u: includes untracked files
    await exec.exec('git', ['stash', '-u']);

    console.info('ℹ️ Fetching the latest changes from gh-pages branch');
    await exec.exec('git', ['fetch', 'origin', 'gh-pages:gh-pages']);

    console.info('ℹ️ Checking out gh-pages branch');
    await exec.exec('git', ['checkout', 'gh-pages']);

    console.info('ℹ️ Applying the stash with the storybook changes');
    await exec.exec('git', ['stash', 'pop']);

    console.info('ℹ️ Adding storybook static files');
    await exec.exec('git', ['add', docsPath]);

    console.info('ℹ️ Committing changes');
    const commitMessage = await createCommitMessage(branch);
    await exec.exec('git', ['commit', '-m', commitMessage]);

    console.info('ℹ️ Pushing to gh-pages');
    await exec.exec('git', ['push', '-f', '--set-upstream', 'origin', 'gh-pages']);
  } catch (e) {
    core.setFailed(`⚠ Error: something went wrong during the deployment of branch ${branch}`);
  }
}

async function createCommitMessage(branch) {
  return `docs(gh-pages): latest storybook build from ${branch}

  Commit ${await (exec.exec('git', ['log', '--pretty=format:%h', '-n', '1']))}`
}
