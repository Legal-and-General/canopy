module.exports = async ({
  deploymentId,
  state,
  environmentUrl,
  github,
  context: { repo: { repo, owner } },
}) => {
  console.log('hello');
  await github.rest.repos.createDeploymentStatus({
    owner,
    repo,
    deployment_id: deploymentId,
    state,
    environment_url: environmentUrl
  });
}


