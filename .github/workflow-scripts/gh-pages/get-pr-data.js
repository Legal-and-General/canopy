module.exports = async ({
  pullNumber,
  github,
  context: { repo: { repo, owner } },
}) => {
  pullNumber = parseInt(pullNumber.replace('#', '').trim());

  const { data: pullsList } = await github.rest.pulls.get({
    owner,
    repo,
    pull_number: pullNumber,
  });

  if (!pullsList.length) {
    throw `🚫 Error: PR #${pullNumber} was not found`
  }

  const { head: { sha, ref: branch } } = pullsList;
  return { sha, branch, pullNumber };
}
