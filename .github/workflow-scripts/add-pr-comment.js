module.exports = async ({
  pullNumber,
  github,
  context: { repo: { repo, owner } },
  body,
}) => {
  await github.rest.pulls.createReviewComment({
    owner,
    repo,
    pull_number: pullNumber,
    body,
  })
}
