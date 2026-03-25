'use strict';

const createDeploymentStatus = require('../create-gh-deployment-status.cjs');

const owner = 'legal-and-general';
const repo = 'canopy';
const context = { repo: { owner, repo } };

describe('create-gh-deployment-status', () => {
  let github;

  beforeEach(() => {
    github = {
      rest: {
        repos: {
          createDeploymentStatus: jest.fn().mockResolvedValue({}),
        },
      },
    };
  });

  it('should call createDeploymentStatus with the correct parameters', async () => {
    await createDeploymentStatus({
      deploymentId: 42,
      state: 'success',
      environmentUrl: 'https://example.com',
      github,
      context,
    });

    expect(github.rest.repos.createDeploymentStatus).toHaveBeenCalledWith({
      owner,
      repo,
      deployment_id: 42,
      state: 'success',
      environment_url: 'https://example.com',
    });
  });

  it('should call createDeploymentStatus exactly once', async () => {
    await createDeploymentStatus({
      deploymentId: 1,
      state: 'pending',
      environmentUrl: 'https://example.com',
      github,
      context,
    });

    expect(github.rest.repos.createDeploymentStatus).toHaveBeenCalledTimes(1);
  });
});

