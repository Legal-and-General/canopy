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

    if (!labels.find(({ name }) => name === 'deployed')) {
      await github.rest.issues.createComment({
        owner,
        repo,
        issue_number: pullNumber,
        body: `### :rocket: Branch deployed\n*Note that the deployment might take ~1 minute before being available.*\n\nThe **branch URL** is:\nhttps://legal-and-general.github.io/canopy/sb-${branch}`
      });
    }
    return labels;
  } catch (e) {
    console.info(e);
  }
}
