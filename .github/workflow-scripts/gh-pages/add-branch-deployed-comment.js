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
    // [] add comment
    //
    // [{ name: 'deployed' }] don't add comment

    // add the comment only if the branch hasn't been deployed yet
    if (!labels.find(({ name }) => name === 'deployed')) {
      await github.rest.issues.createComment({
        owner,
        repo,
        issue_number: pullNumber,
        body: `### :rocket: Branch deployed\n*Note that the deployment might take ~1 minute before being available.*\nThe **branch URL** is:\nhttps://legal-and-general.github.io/canopy/sb-${branch}`
      });
    }
    return labels;
  } catch (e) {
    console.info(e);
  }
}
