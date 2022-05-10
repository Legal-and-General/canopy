module.exports = async ({
  issueNumber,
  labels,
  github,
  context: { repo: { repo, owner } },
}) => {
  await github.rest.issues.addLabels({
    owner,
    repo,
    issue_number: issueNumber,
    labels
  })
}
