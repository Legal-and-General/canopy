const fs = require('fs-extra');

module.exports = async ({
  github,
  context: { repo: { repo, owner } },
  exec,
}) => {
  // get the existing deployed branches from the docs folder (removing the prefix)
  const branches = fs.readdirSync('./docs', { withFileTypes: true }).filter(item => item.isDirectory() && item.name.startsWith('sb-')).map(dir => dir.name.replace(/^sb-/, ''));

  const { data: pullsList } = await github.rest.pulls.list({
    owner,
    repo,
    state: 'open',
  });

  const branchesToUndeploy = branches.filter(branch => !pullsList.map(pull => pull.head.ref).includes(branch));

  if (!branchesToUndeploy.length) {
    console.info(`✅️ Skipping: no branches to un-deploy`);
    return;
  }

  try {
    console.info(`ℹ️ Commencing storybook gh-pages un-deploy for: ${branchesToUndeploy.join(', ')}`);

    console.info('ℹ️ Configuring git');
    await exec.exec('git', ['config', '--global', 'user.email', 'github-actions[bot]@users.noreply.github.com']);
    await exec.exec('git', ['config', '--global', 'user.name', 'github-actions[bot]']);

    console.info('ℹ️ Fetching the latest changes from gh-pages branch');
    await exec.exec('git', ['fetch', 'origin', 'gh-pages:gh-pages']);

    console.info('ℹ️ Checking out gh-pages branch');
    await exec.exec('git', ['checkout', 'gh-pages']);

    for (const branch of branchesToUndeploy) {
      console.info(`ℹ️ Removing storybook static files for branch ${branch}`);
      await exec.exec('rm', '-rf', `./docs/sb-${branch}`);
      await exec.exec('git', ['add', `./docs/sb-${branch}`]);

      console.info('ℹ️ Committing changes');
      await exec.exec('git', [
        'commit',
        '-m',
        `docs(gh-pages): remove storybook build

        Branch: ${branch}`
      ]);
    }

    console.info('ℹ️ Pushing to gh-pages');
    await exec.exec('git', ['push', '-f', '--set-upstream', 'origin', 'gh-pages']);

    console.info('✅ Un-deployment successful');
  } catch (error) {
    throw `🚫 Error: something went wrong during the un-deployment`;
  }
}
