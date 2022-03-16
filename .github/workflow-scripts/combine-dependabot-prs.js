module.exports = async ({
  github,
  context: { repo: { repo, owner } },
}) => {
  const combinedBranchName = 'dependabot-updates';
  const baseBranchName = 'master';

  const { data: openPulls } = await github.rest.pulls.list({
    owner,
    repo,
    state: 'open',
    base: baseBranchName,
    per_page: 100,
  });

  let pullsToCombine = openPulls
    .filter(pr => pr.head.ref.startsWith('dependabot/'))
    .map(pr => ({
      branch: pr.head.ref,
      number: pr.number,
    }))

  if (!pullsToCombine.length) {
    console.info('ℹ️ No dependabot PRs have been found');
    return;
  }

  console.info(`ℹ️ ${pullsToCombine.length} dependabot PR(s) found`);

  const combinedBranchExists = !!openPulls.filter(pr => pr.head.ref === combinedBranchName).length;

  const { data: { object: { sha: baseBranchSHA } } } = await github.rest.git.getRef({
    owner,
    repo,
    ref: `heads/${baseBranchName}`,
  });

  if (!combinedBranchExists) {
    console.info(`ℹ️ ${combinedBranchName}: Creating branch`);

    await github.rest.git.createRef({
      owner,
      repo,
      ref: `refs/heads/${combinedBranchName}`,
      sha: baseBranchSHA,
    });
  }

  // Loop over the branches and merge with combinedBranchName
  // if the branch cannot be merged skip
  const unmergedPulls = [];

  for (const { branch, number } of pullsToCombine) {
    console.info(`ℹ️ ${branch}: Trying to merge into ${combinedBranchName}`);

    try {
      await github.rest.repos.merge({
        owner,
        repo,
        base: combinedBranchName,
        head: branch,
      });
    } catch (error) {
      unmergedPulls.push({
        branch,
        number,
      });

      console.info(`🚫 ${branch}: ${error}`);
    }
  }

  unmergedPulls.forEach(({ number }) => {
    // Remove unmerged PRs from PRs to combine
    pullsToCombine = pullsToCombine.filter(pull => pull.number !== number);
  });

  if (pullsToCombine.length) {
    const combinedPullTitle = 'Combined dependency updates';
    const pullsListMessage = pullsToCombine.map(pull => `- #${pull.number}\n`).join('');
    const dateInfo = `**${new Date().toDateString()}**`;

    if (combinedBranchExists) {
      // The combined PR already exists so we need to update it
      const { number, body } = openPulls.filter(pull => pull.title === combinedPullTitle)[0];

      console.info('ℹ️ Update the existing combined PR');

      await github.rest.pulls.update({
        owner,
        repo,
        pull_number: number,
        body: `${body}\n\n${dateInfo}\n\n${pullsListMessage}`
      });
    } else {
      // The combined PR doesn't exist so we need to create it
      const body = `This PR was created by the Combine Dependabot PRs action by combining the following PRs:\n\n${dateInfo}\n\n${pullsListMessage}`;

      console.info('ℹ️ Creating the combined PR');
      await github.rest.pulls.create({
        owner,
        repo,
        title: combinedPullTitle,
        head: combinedBranchName,
        base: baseBranchName,
        body: body
      });
    }

    for (const { branch, number } of pullsToCombine) {
      // Close the PRs that have been combined into the new branch
      console.info(`ℹ️ Closing PR #${number}`);

      await github.rest.pulls.update({
        owner,
        repo,
        status: 'closed',
        pull_number: number,
      });

      console.info(`ℹ️ Deleting branch ${branch}`);

      await github.rest.git.deleteRef({
        owner,
        repo,
        ref: `heads/${branch}`,
      });

      console.info(`ℹ️ Adding label to PR #${number}`);

      github.rest.issues.addLabels({
        owner,
        repo,
        issue_number: number,
        labels: [ 'dependabot-combined' ],
      })
    }
  } else {
    console.info('🚫 No PRs to combine');
  }

  if (unmergedPulls.length) {
    console.info('\n🚫 These branches could not be combined:');
    console.info(unmergedPulls.map(({ branch }) => branch).join('\n'));
  }

  console.info('\n✅ All done');
}
