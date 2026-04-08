'use strict';

const createDeployment = require('../create-gh-deployment.cjs');

const owner = 'legal-and-general';
const repo = 'canopy';
const context = { repo: { owner, repo } };

describe('create-gh-deployment', () => {
  let github;

  beforeEach(() => {
    github = {
      rest: {
        repos: {
          createDeployment: jest.fn().mockResolvedValue({ data: { id: 99 } }),
        },
      },
    };
  });

  it('should call createDeployment with the correct parameters', async () => {
    await createDeployment({ sha: 'abc123', github, context });

    expect(github.rest.repos.createDeployment).toHaveBeenCalledWith({
      owner,
      repo,
      ref: 'abc123',
      environment: 'github-pages',
      transient_environment: true,
      auto_merge: false,
    });
  });

  it('should return the deployment id', async () => {
    const id = await createDeployment({ sha: 'abc123', github, context });

    expect(id).toBe(99);
  });
});

