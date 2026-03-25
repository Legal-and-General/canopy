'use strict';

const getPrData = require('../get-pr-data.cjs');

const owner = 'legal-and-general';
const repo = 'canopy';
const context = { repo: { owner, repo } };

describe('get-pr-data', () => {
  let github;

  beforeEach(() => {
    github = {
      rest: {
        pulls: {
          get: jest.fn().mockResolvedValue({
            data: { head: { sha: 'abc123', ref: 'feature/my-feature' } },
          }),
        },
      },
    };
  });

  it('should return the sha, branch, pullNumber, and environmentUrl', async () => {
    const result = await getPrData({ pullNumber: '42', github, context });

    expect(result).toEqual({
      sha: 'abc123',
      branch: 'feature/my-feature',
      pullNumber: 42,
      environmentUrl: 'https://legal-and-general.github.io/canopy/lg-sb-feature-my-feature',
    });
  });

  it('should call pulls.get with the correctly parsed pull number', async () => {
    await getPrData({ pullNumber: '42', github, context });

    expect(github.rest.pulls.get).toHaveBeenCalledWith({
      owner,
      repo,
      pull_number: 42,
    });
  });

  it('should strip the # prefix when parsing the pull number', async () => {
    await getPrData({ pullNumber: '#42', github, context });

    expect(github.rest.pulls.get).toHaveBeenCalledWith({
      owner,
      repo,
      pull_number: 42,
    });
  });

  it('should throw when the PR is not found', async () => {
    github.rest.pulls.get.mockRejectedValue(new Error('Not found'));

    await expect(getPrData({ pullNumber: '99', github, context })).rejects.toMatch(
      /PR #99 was not found/,
    );
  });
});


