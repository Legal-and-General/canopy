module.exports = async ({
  branch,
  pullNumber,
  github,
  context: { repo: { repo, owner } },
}) => {
  try {
    const { data: labels } = await github.rest.issues.listLabelsOnIssue({
      owner,
      repo,
      issue_number: pullNumber,
    });

    // add the comment only if the branch hasn't been deployed yet
    if (!labels.length || !labels.find(({ name }) => name === 'deployed')) {
      await github.rest.issues.createComment({
        owner,
        repo,
        issue_number: pullNumber,
        body: `### :rocket: Branch deployed\n*Note that the deployment might take ~1 minute before being available.*\n\nThe **branch URL** is:\nhttps://legal-and-general.github.io/canopy/sb-${branch}`
      });
    }
  } catch (e) {
    console.info(e);
  }
}
