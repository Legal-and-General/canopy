'use strict';

const { kebabCase } = require('./utils.cjs');

module.exports = async ({
  pullNumber,
  github,
  context: { repo: { repo, owner } },
}) => {
  try {
    pullNumber = parseInt(pullNumber.replace('#', '').trim());

    const { data: { head: { sha, ref: branch } } } = await github.rest.pulls.get({
      owner,
      repo,
      pull_number: pullNumber,
    });

    return {
      sha,
      branch,
      pullNumber,
      environmentUrl: `https://legal-and-general.github.io/canopy/lg-sb-${kebabCase(branch)}`
    };
  } catch {
    throw `🚫 Error: PR #${pullNumber} was not found`;
  }
}
