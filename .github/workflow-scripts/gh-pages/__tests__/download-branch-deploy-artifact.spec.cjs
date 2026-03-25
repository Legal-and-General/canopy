'use strict';

jest.mock('fs-extra', () => ({
  writeFileSync: jest.fn(),
}));

const fs = require('fs-extra');
const downloadBranchDeployArtifact = require('../download-branch-deploy-artifact.cjs');

const owner = 'legal-and-general';
const repo = 'canopy';
const context = { repo: { owner, repo } };

describe('download-branch-deploy-artifact', () => {
  let github;

  beforeEach(() => {
    jest.clearAllMocks();
    github = {
      rest: {
        actions: {
          listWorkflowRunsForRepo: jest.fn().mockResolvedValue({
            data: {
              workflow_runs: [{ head_sha: 'abc123', name: 'Pull request', id: 1 }],
            },
          }),
          listWorkflowRunArtifacts: jest.fn().mockResolvedValue({
            data: { artifacts: [{ name: 'lg-sb-build', id: 10 }] },
          }),
          downloadArtifact: jest.fn().mockResolvedValue({ data: [1, 2, 3] }),
        },
      },
    };
  });

  it('should find the correct workflow run and download the lg-sb-build artifact', async () => {
    await downloadBranchDeployArtifact({
      branch: 'feature/my-feature',
      sha: 'abc123',
      github,
      context,
    });

    expect(github.rest.actions.listWorkflowRunsForRepo).toHaveBeenCalledWith({
      owner,
      repo,
      branch: 'feature/my-feature',
    });
    expect(github.rest.actions.listWorkflowRunArtifacts).toHaveBeenCalledWith({
      owner,
      repo,
      run_id: 1,
    });
    expect(github.rest.actions.downloadArtifact).toHaveBeenCalledWith({
      owner,
      repo,
      artifact_id: 10,
      archive_format: 'zip',
    });
  });

  it('should write the downloaded artifact to disk as a zip file', async () => {
    await downloadBranchDeployArtifact({
      branch: 'feature/my-feature',
      sha: 'abc123',
      github,
      context,
    });

    expect(fs.writeFileSync).toHaveBeenCalledWith('./lg-sb-build.zip', expect.any(Buffer));
  });

  it('should throw when no matching workflow run is found for the given sha', async () => {
    github.rest.actions.listWorkflowRunsForRepo.mockResolvedValue({
      data: {
        workflow_runs: [{ head_sha: 'differentsha', name: 'Pull request', id: 1 }],
      },
    });

    await expect(
      downloadBranchDeployArtifact({
        branch: 'feature/my-feature',
        sha: 'abc123',
        github,
        context,
      }),
    ).rejects.toMatch(/no artifacts found/);
  });

  it('should throw when the workflow run list is empty', async () => {
    github.rest.actions.listWorkflowRunsForRepo.mockResolvedValue({
      data: { workflow_runs: [] },
    });

    await expect(
      downloadBranchDeployArtifact({
        branch: 'feature/my-feature',
        sha: 'abc123',
        github,
        context,
      }),
    ).rejects.toMatch(/no artifacts found/);
  });
});

