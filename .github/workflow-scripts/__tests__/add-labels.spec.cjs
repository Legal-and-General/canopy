'use strict';

const addLabels = require('../add-labels.cjs');

describe('addLabels', () => {
  const owner = 'legal-and-general';
  const repo = 'canopy';
  const context = { repo: { owner, repo } };
  let github;

  beforeEach(() => {
    github = {
      rest: {
        issues: {
          addLabels: jest.fn().mockResolvedValue({}),
        },
      },
    };
  });

  it('should call github.rest.issues.addLabels with the correct parameters', async () => {
    await addLabels({
      issueNumber: 123,
      labels: ['bug', 'enhancement'],
      github,
      context,
    });

    expect(github.rest.issues.addLabels).toHaveBeenCalledWith({
      owner,
      repo,
      issue_number: 123,
      labels: ['bug', 'enhancement'],
    });
  });

  it('should call github.rest.issues.addLabels exactly once', async () => {
    await addLabels({
      issueNumber: 456,
      labels: ['feature'],
      github,
      context,
    });

    expect(github.rest.issues.addLabels).toHaveBeenCalledTimes(1);
  });

  it('should handle a single label', async () => {
    await addLabels({
      issueNumber: 789,
      labels: ['documentation'],
      github,
      context,
    });

    expect(github.rest.issues.addLabels).toHaveBeenCalledWith(
      expect.objectContaining({ labels: ['documentation'] }),
    );
  });
});


