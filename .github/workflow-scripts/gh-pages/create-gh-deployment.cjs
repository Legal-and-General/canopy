module.exports = async ({
  sha,
  github,
  context: { repo: { repo, owner } },
}) => {
  const { data: { id } } = await github.rest.repos.createDeployment({
    owner,
    repo,
    ref: sha,
    environment: 'github-pages',
    transient_environment: true,
    auto_merge: false,
  });

  return id;
}
