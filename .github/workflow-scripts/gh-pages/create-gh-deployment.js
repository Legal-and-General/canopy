module.exports = async ({
  sha,
  branch,
  github,
  context: { repo: { repo, owner } },
}) => {
  const { data: { id } } = await github.rest.repos.createDeployment({
    owner,
    repo,
    ref: sha,
    environment: branch,
    transient_environment: true,
    auto_merge: false,
  });

  return id;
}
