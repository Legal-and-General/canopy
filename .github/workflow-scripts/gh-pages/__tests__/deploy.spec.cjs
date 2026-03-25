'use strict';

jest.mock('fs-extra', () => ({
  existsSync: jest.fn(),
  readdirSync: jest.fn(),
}));

const fs = require('fs-extra');
const deploy = require('../deploy.cjs');

const owner = 'legal-and-general';
const repo = 'canopy';
const context = { repo: { owner, repo } };

describe('deploy', () => {
  let github;
  let exec;

  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(console, 'info').mockImplementation(() => {});
    jest.spyOn(console, 'log').mockImplementation(() => {});
    exec = { exec: jest.fn().mockResolvedValue(0) };
    github = {
      rest: {
        checks: {
          listForRef: jest.fn().mockResolvedValue({ data: { check_runs: [] } }),
        },
        pulls: {
          list: jest.fn().mockResolvedValue({ data: [] }),
        },
      },
    };
    fs.existsSync.mockReturnValue(false);
    fs.readdirSync.mockImplementation((path) => {
      if (path === './lg-sb-build') return [{ name: 'index.html' }];

      return [];
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('when deploying the master branch', () => {
    it('should deploy without evaluating PR checks', async () => {
      await deploy({ branch: 'master', sha: 'abc123', pullNumber: null, github, context, exec });

      expect(github.rest.checks.listForRef).not.toHaveBeenCalled();
      expect(console.info).toHaveBeenCalledWith('ℹ️ Commencing storybook gh-pages deploy');
      expect(console.info).toHaveBeenCalledWith('ℹ️ Branch to deploy: master');
    });

    it('should push to gh-pages', async () => {
      await deploy({ branch: 'master', sha: 'abc123', pullNumber: null, github, context, exec });

      expect(exec.exec).toHaveBeenCalledWith('git', [
        'push',
        '-f',
        '--set-upstream',
        'origin',
        'gh-pages',
      ]);
      expect(console.info).toHaveBeenCalledWith('ℹ️ Pushing to gh-pages');
    });

    it('should configure git user before deploying', async () => {
      await deploy({ branch: 'master', sha: 'abc123', pullNumber: null, github, context, exec });

      expect(exec.exec).toHaveBeenCalledWith('git', [
        'config',
        '--global',
        'user.email',
        'github-actions[bot]@users.noreply.github.com',
      ]);
      expect(exec.exec).toHaveBeenCalledWith('git', [
        'config',
        '--global',
        'user.name',
        'github-actions[bot]',
      ]);
      expect(console.info).toHaveBeenCalledWith('ℹ️ Configuring git');
    });

    it('should move the storybook build files to the docs path', async () => {
      await deploy({ branch: 'master', sha: 'abc123', pullNumber: null, github, context, exec });

      expect(exec.exec).toHaveBeenCalledWith('mv', ['./lg-sb-build/index.html', './docs']);
      expect(console.info).toHaveBeenCalledWith('ℹ️ Adding storybook static files');
    });
  });

  describe('when deploying the legacy branch', () => {
    it('should deploy without evaluating PR checks', async () => {
      await deploy({ branch: 'legacy', sha: 'def456', pullNumber: null, github, context, exec });

      expect(github.rest.checks.listForRef).not.toHaveBeenCalled();
      expect(exec.exec).toHaveBeenCalledWith('git', [
        'push',
        '-f',
        '--set-upstream',
        'origin',
        'gh-pages',
      ]);
      expect(console.info).toHaveBeenCalledWith('ℹ️ Branch to deploy: legacy');
    });

    it('should deploy to a legacy-prefixed docs path', async () => {
      await deploy({ branch: 'legacy', sha: 'def456', pullNumber: null, github, context, exec });

      expect(exec.exec).toHaveBeenCalledWith('git', ['add', './docs/lg-sb-legacy']);
    });
  });

  describe('when deploying the next branch', () => {
    it('should deploy without evaluating PR checks', async () => {
      await deploy({ branch: 'next', sha: 'ghi789', pullNumber: null, github, context, exec });

      expect(github.rest.checks.listForRef).not.toHaveBeenCalled();
      expect(exec.exec).toHaveBeenCalledWith('git', [
        'push',
        '-f',
        '--set-upstream',
        'origin',
        'gh-pages',
      ]);
      expect(console.info).toHaveBeenCalledWith('ℹ️ Branch to deploy: next');
    });
  });

  describe('when deploying a feature branch', () => {
    const featureParams = {
      branch: 'feature/my-feature',
      sha: 'abc123',
      pullNumber: 42,
      context,
    };

    it('should evaluate PR checks before deploying', async () => {
      github.rest.checks.listForRef.mockResolvedValue({
        data: { check_runs: [{ conclusion: 'success' }, { conclusion: 'skipped' }] },
      });

      await deploy({ ...featureParams, github, exec });

      expect(github.rest.checks.listForRef).toHaveBeenCalledWith({
        owner,
        repo,
        ref: 'abc123',
      });
      expect(console.info).toHaveBeenCalledWith('ℹ️ Evaluating the PR checks');
    });

    it('should deploy when all checks have passed or been skipped', async () => {
      github.rest.checks.listForRef.mockResolvedValue({
        data: { check_runs: [{ conclusion: 'success' }, { conclusion: 'skipped' }] },
      });

      await deploy({ ...featureParams, github, exec });

      expect(exec.exec).toHaveBeenCalledWith('git', [
        'push',
        '-f',
        '--set-upstream',
        'origin',
        'gh-pages',
      ]);
      expect(console.info).toHaveBeenCalledWith('ℹ️ The PR checks passed successfully');
    });

    it('should throw when any check has not passed', async () => {
      github.rest.checks.listForRef.mockResolvedValue({
        data: { check_runs: [{ conclusion: 'success' }, { conclusion: 'failure' }] },
      });

      await expect(deploy({ ...featureParams, github, exec })).rejects.toMatch(
        /please make sure the checks for PR #42 have all passed/,
      );
    });

    it('should convert slashes to hyphens in the branch docs path', async () => {
      github.rest.checks.listForRef.mockResolvedValue({
        data: { check_runs: [{ conclusion: 'success' }] },
      });

      await deploy({ ...featureParams, github, exec });

      expect(exec.exec).toHaveBeenCalledWith('git', [
        'add',
        './docs/lg-sb-feature-my-feature',
      ]);
    });
  });

  describe('when git restore documentation.json fails', () => {
    it('should log a warning and continue the deployment', async () => {
      exec.exec.mockImplementation((cmd, args) => {
        if (cmd === 'git' && args[0] === 'restore') return Promise.reject(new Error('restore failed'));

        return Promise.resolve(0);
      });

      await deploy({ branch: 'master', sha: 'abc123', pullNumber: null, github, context, exec });

      expect(console.info).toHaveBeenCalledWith(
        expect.stringContaining('ℹ️ Unable to restore the documentation.json:'),
      );
    });
  });

  describe('when the docs path already exists', () => {
    beforeEach(() => {
      fs.existsSync.mockReturnValue(true);
    });

    it('should remove the specific branch directory for a non-default branch', async () => {
      await deploy({ branch: 'next', sha: 'abc123', pullNumber: null, github, context, exec });

      expect(exec.exec).toHaveBeenCalledWith('rm', ['-rf', './docs/lg-sb-next']);
      expect(console.info).toHaveBeenCalledWith('ℹ️ Cleaning existing ./docs/lg-sb-next');
    });

    it('should remove non-branch files from docs root for the default branch', async () => {
      fs.readdirSync.mockImplementation((path) => {
        if (path === './docs') {
          return [
            { name: 'index.html', isDirectory: () => false },
            { name: 'lg-sb-feature-branch', isDirectory: () => true },
          ];
        }
        if (path === './lg-sb-build') return [{ name: 'main.js' }];

        return [];
      });
      github.rest.pulls.list.mockResolvedValue({
        data: [{ head: { ref: 'feature-branch' } }],
      });

      await deploy({ branch: 'master', sha: 'abc123', pullNumber: null, github, context, exec });

      expect(exec.exec).toHaveBeenCalledWith('rm', ['-rf', './docs/index.html']);
      expect(exec.exec).not.toHaveBeenCalledWith('rm', ['-rf', './docs/lg-sb-feature-branch']);
      expect(console.info).toHaveBeenCalledWith('ℹ️ Cleaning existing ./docs');
    });
  });

  describe('when undeploy finds stale branch environments', () => {
    it('should remove branch directories not associated with any open PR', async () => {
      fs.readdirSync.mockImplementation((path) => {
        if (path === './docs') {
          return [{ name: 'lg-sb-stale-branch', isDirectory: () => true }];
        }
        if (path === './lg-sb-build') return [{ name: 'index.html' }];

        return [];
      });
      github.rest.pulls.list.mockResolvedValue({ data: [] });

      await deploy({ branch: 'master', sha: 'abc123', pullNumber: null, github, context, exec });

      expect(exec.exec).toHaveBeenCalledWith('rm', ['-rf', './docs/lg-sb-stale-branch']);
      expect(console.info).toHaveBeenCalledWith(
        'ℹ️ Commencing storybook gh-pages un-deploy for: stale-branch',
      );
      expect(console.info).toHaveBeenCalledWith(
        'ℹ️ Removing storybook static files for branch stale-branch',
      );
    });

    it('should not remove branch directories that are still associated with an open PR', async () => {
      fs.readdirSync.mockImplementation((path) => {
        if (path === './docs') {
          return [{ name: 'lg-sb-active-branch', isDirectory: () => true }];
        }
        if (path === './lg-sb-build') return [{ name: 'index.html' }];

        return [];
      });
      github.rest.pulls.list.mockResolvedValue({
        data: [{ head: { ref: 'active-branch' } }],
      });

      await deploy({ branch: 'master', sha: 'abc123', pullNumber: null, github, context, exec });

      expect(exec.exec).not.toHaveBeenCalledWith('rm', ['-rf', './docs/lg-sb-active-branch']);
      expect(console.info).toHaveBeenCalledWith('✅️ Skipping: no environments to un-deploy');
    });

    it('should log the error and continue when the undeploy commit fails', async () => {
      fs.readdirSync.mockImplementation((path) => {
        if (path === './docs') {
          return [{ name: 'lg-sb-stale-branch', isDirectory: () => true }];
        }
        if (path === './lg-sb-build') return [{ name: 'index.html' }];

        return [];
      });
      github.rest.pulls.list.mockResolvedValue({ data: [] });
      exec.exec.mockImplementation((cmd, args) => {
        if (cmd === 'git' && args[0] === 'commit' && args[2] && args[2].includes('remove storybook build')) {
          return Promise.reject(new Error('commit failed'));
        }

        return Promise.resolve(0);
      });

      await deploy({ branch: 'master', sha: 'abc123', pullNumber: null, github, context, exec });

      expect(console.log).toHaveBeenCalledWith(expect.any(Error));
    });
  });

  describe('when undeploy encounters an unexpected error', () => {
    it('should throw when pulls.list fails', async () => {
      fs.readdirSync.mockImplementation((path) => {
        if (path === './docs') {
          return [{ name: 'lg-sb-stale-branch', isDirectory: () => true }];
        }
        if (path === './lg-sb-build') return [{ name: 'index.html' }];

        return [];
      });
      github.rest.pulls.list.mockRejectedValue(new Error('API error'));

      await expect(
        deploy({ branch: 'master', sha: 'abc123', pullNumber: null, github, context, exec }),
      ).rejects.toMatch(/something went wrong during the un-deployment/);
    });
  });

  describe('when a git command fails', () => {
    it('should throw a descriptive error message containing the branch name', async () => {
      exec.exec.mockRejectedValue(new Error('git error'));

      await expect(
        deploy({ branch: 'master', sha: 'abc123', pullNumber: null, github, context, exec }),
      ).rejects.toMatch(/something went wrong during the deployment of branch master/);
    });
  });
});

