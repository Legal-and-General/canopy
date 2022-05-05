module.exports = async ({
  pullNumber,
  github,
  context: { repo: { repo, owner } },
}) => {
  pullNumber = parseInt(pullNumber.replace('#', ''));

  const { data: { head: { sha, ref: branch } } } = await github.rest.pulls.get({
    owner,
    repo,
    pull_number: pullNumber,
  });

  return { sha, branch, pullNumber };
}
