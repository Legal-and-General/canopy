const core = require('@actions/core');
const exec = require('@actions/exec');

async function run () {
  try {
    if (core.isDebug()) {
      core.startGroup('Debug: context');
      core.debug(core.context);
      core.endGroup();
    }

    const buildPath = 'storybook-static';
    
    core.info('[INFO]: commencing storybook gh-pages deploy')

    core.info('[INFO]: running storybook build')
    await exec.exec('npm', ['run', 'build-storybook']);

    core.info('[INFO]: configuring git')
    await exec.exec('git', ['config', '--global', 'user.email', 'github-actions[bot]@users.noreply.github.com']);
    await exec.exec('git', ['config', '--global', 'user.name', 'github-actions[bot]']);

    core.info('[INFO]: checking out gh-pages branch')
    // -B: don't error if the branch already exists
    await exec.exec('git', ['checkout', '-B', 'gh-pages']);

    core.info('[INFO]: adding storybook static files')
    // --force: override .gitignore
    await exec.exec('git', ['add', '--force', buildPath]);

    core.info('[INFO]: committing changes');
    // TODO: retrieve latest release and put it in the commit msg, token does not have privileges
    await exec.exec('git', ['commit', '-m', 'docs(gh-pages): latest storybook build']);

    core.info('[INFO]: pushing to gh-pages');
    await exec.exec('git', ['push', '-f', '--set-upstream', 'origin', 'gh-pages']);


  } catch (error) {
    core.setFailed(error.message);
  }
}

(async () => { await run() })();
