const fs = require('fs-extra');

module.exports = async ({
  branch,
  sha,
  github,
  context: { repo: { repo, owner } }
}) => {
  const { data: { workflow_runs: workflowRepoRuns } } = await github.rest.actions.listWorkflowRunsForRepo({
    owner,
    repo,
    branch
  });

  const { data: { artifacts } } = await github.rest.actions.listWorkflowRunArtifacts({
    owner,
    repo,
    run_id: workflowRepoRuns.find(run => run.head_sha === sha && run.name === 'Pull request').id
  });

  const { data } = await github.rest.actions.downloadArtifact({
    owner,
    repo,
    artifact_id: artifacts.find(artifact => artifact.name === 'sb-build').id,
    archive_format: 'zip'
  });

  fs.writeFileSync('./sb-build.zip', Buffer.from(data));
}
