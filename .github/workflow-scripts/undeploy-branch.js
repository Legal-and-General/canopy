module.exports = async ({
  branch,
  exec,
  core
}) => {
  try {
    console.info(`ℹ️ Commencing storybook gh-pages un-deploy for branch ${branch}`);

    console.info('ℹ️ Configuring git');
    await exec.exec('git', ['config', '--global', 'user.email', 'github-actions[bot]@users.noreply.github.com']);
    await exec.exec('git', ['config', '--global', 'user.name', 'github-actions[bot]']);

    console.info('ℹ️ Fetching the latest changes from gh-pages branch');
    await exec.exec('git', ['fetch', 'origin', 'gh-pages:gh-pages']);

    console.info('ℹ️ Checking out gh-pages branch');
    await exec.exec('git', ['checkout', 'gh-pages']);

    console.info('ℹ️ Deleting branch folder');
    await exec.exec('rm', '-rf', `./docs/${branch}`);

    console.info('ℹ️ Removing storybook static files for the branch');
    await exec.exec('git', ['add', '.']);

    console.info('ℹ️ Committing changes');
    await exec.exec('git', ['commit', '-m', `docs(gh-pages): remove storybook build of ${branch}`]);

    console.info('ℹ️ Pushing to gh-pages');
    await exec.exec('git', ['push', '-f', '--set-upstream', 'origin', 'gh-pages']);
  } catch (error) {
    core.setFailed(`⚠ Error: something went wrong while un-deploying the branch ${branch}`);
  }
}
