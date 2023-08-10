const fs = require('fs-extra');

module.exports = async ({
  branch,
  sha,
  github,
  context: { repo: { repo, owner } }
}) => {
  try {
    const { data: { workflow_runs: workflowRepoRuns } } = await github.rest.actions.listWorkflowRunsForRepo({
      owner,
      repo,
      branch
    });

    const { data: { artifacts } } = await github.rest.actions.listWorkflowRunArtifacts({
      owner,
      repo,
      run_id: workflowRepoRuns.find(({ head_sha, name }) => head_sha === sha && name === 'Pull request').id
    });

    const { data } = await github.rest.actions.downloadArtifact({
      owner,
      repo,
      artifact_id: artifacts.find(({ name }) => name === 'lg-sb-build').id,
      archive_format: 'zip'
    });

    fs.writeFileSync('./lg-sb-build.zip', Buffer.from(data));
  } catch {
    throw `🚫 Error: no artifacts found`;
  }
}
