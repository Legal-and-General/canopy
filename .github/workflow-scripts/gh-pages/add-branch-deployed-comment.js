const addComment = require('../add-pr-comment.js');

module.exports = async ({
  branch,
  pullNumber,
  github,
  context,
}) => {
  const { data: labels } = await github.rest.issues.listLabelsOnIssue({
    owner,
    repo,
    issue_number: pullNumber,
  });

  // add the comment only if the branch hasn't been deployed yet
  if (!labels.includes('deployed')) {
    await addComment({
      pullNumber,
      github,
      context,
      body: `
        ### :rocket: Branch deployed

        The **branch URL** is:
        https://legal-and-general.github.io/canopy/sb-${branch}
      `
    });
  }
}
