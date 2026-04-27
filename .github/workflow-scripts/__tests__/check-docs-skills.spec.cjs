'use strict';

const fs = require('fs');

const checkDocsSkills = require('../check-docs-skills.cjs');

describe('checkDocsSkills', () => {
  const context = {
    repo: { owner: 'legal-and-general', repo: 'canopy' },
    payload: { pull_request: { number: 42 } },
  };

  let github;
  let core;
  let readFileSyncSpy;

  beforeEach(() => {
    jest.clearAllMocks();
    readFileSyncSpy = jest.spyOn(fs, 'readFileSync').mockReturnValue('');

    github = {
      rest: {
        pulls: {
          listFiles: jest.fn(),
        },
      },
    };

    core = {
      info: jest.fn(),
      setFailed: jest.fn(),
      warning: jest.fn(),
    };
  });

  function mockListFiles(filenames) {
    github.rest.pulls.listFiles.mockResolvedValue({
      data: filenames.map(filename => ({ filename })),
    });
  }

  function skillFrontmatter(sourcePath) {
    return [
      '---',
      'name: some-skill',
      'metadata:',
      `  source: https://github.com/Legal-and-General/canopy/tree/master/${sourcePath}`,
      '---',
    ].join('\n');
  }

  describe('when the PR has the skip-skill-check label', () => {
    it('skips the check and does not fail', async () => {
      const labelledContext = {
        ...context,
        payload: {
          pull_request: {
            number: 42,
            labels: [{ name: 'skip-skill-check' }],
          },
        },
      };
      mockListFiles(['projects/canopy/src/lib/accordion/docs/guide.mdx']);

      await checkDocsSkills({ github, context: labelledContext, core });

      expect(core.info).toHaveBeenCalledWith(
        expect.stringContaining('"skip-skill-check"'),
      );
      expect(core.setFailed).not.toHaveBeenCalled();
    });

    it('does not call the GitHub API to list changed files', async () => {
      const labelledContext = {
        ...context,
        payload: {
          pull_request: {
            number: 42,
            labels: [{ name: 'skip-skill-check' }],
          },
        },
      };

      await checkDocsSkills({ github, context: labelledContext, core });

      expect(github.rest.pulls.listFiles).not.toHaveBeenCalled();
    });
  });

  describe('when the PR has other labels but not skip-skill-check', () => {
    it('still enforces the skill check', async () => {
      const labelledContext = {
        ...context,
        payload: {
          pull_request: {
            number: 42,
            labels: [{ name: 'bug' }, { name: 'documentation' }],
          },
        },
      };
      mockListFiles(['projects/canopy/src/lib/accordion/docs/guide.mdx']);

      await checkDocsSkills({ github, context: labelledContext, core });

      expect(core.setFailed).toHaveBeenCalled();
    });
  });

  describe('when no .mdx files are changed', () => {
    it('skips the check and does not fail', async () => {
      mockListFiles(['projects/canopy/src/lib/button/button.component.ts']);

      await checkDocsSkills({ github, context, core });

      expect(core.info).toHaveBeenCalledWith(
        expect.stringContaining('Skipping check'),
      );
      expect(core.setFailed).not.toHaveBeenCalled();
    });
  });

  describe('when .mdx files are changed with no skill updates', () => {
    it('logs the detected .mdx files', async () => {
      mockListFiles(['projects/canopy/src/lib/accordion/docs/guide.mdx']);

      await checkDocsSkills({ github, context, core });

      expect(core.info).toHaveBeenCalledWith(
        expect.stringContaining('projects/canopy/src/lib/accordion/docs/guide.mdx'),
      );
    });

    it('fails with a message listing the missing skills', async () => {
      mockListFiles(['projects/canopy/src/lib/accordion/docs/guide.mdx']);

      await checkDocsSkills({ github, context, core });

      expect(core.setFailed).toHaveBeenCalledWith(
        expect.stringContaining(
          'no corresponding best-practice skill(s) were found',
        ),
      );
      expect(core.setFailed).toHaveBeenCalledWith(
        expect.stringContaining('projects/canopy/src/lib/accordion/docs/guide.mdx'),
      );
    });

    it('includes the reminder to run the Best Practice Skill Generator agent', async () => {
      mockListFiles(['projects/canopy/src/lib/button/docs/guide.mdx']);

      await checkDocsSkills({ github, context, core });

      expect(core.setFailed).toHaveBeenCalledWith(
        expect.stringContaining('Best Practice Skill Generator'),
      );
    });
  });

  describe('when .mdx and all corresponding skills are changed', () => {
    it('passes and reports the covered count', async () => {
      mockListFiles([
        'projects/canopy/src/lib/accordion/docs/guide.mdx',
        'skills/best-practice/accordion/SKILL.md',
      ]);
      readFileSyncSpy.mockReturnValue(
        skillFrontmatter('projects/canopy/src/lib/accordion/docs/guide.mdx'),
      );

      await checkDocsSkills({ github, context, core });

      expect(core.setFailed).not.toHaveBeenCalled();
      expect(core.info).toHaveBeenCalledWith(
        expect.stringContaining('All 1 changed .mdx file(s)'),
      );
    });
  });

  describe('when only some .mdx files have a corresponding skill update', () => {
    beforeEach(() => {
      mockListFiles([
        'projects/canopy/src/lib/accordion/docs/guide.mdx',
        'projects/canopy/src/lib/button/docs/guide.mdx',
        'skills/best-practice/accordion/SKILL.md',
      ]);
      readFileSyncSpy.mockReturnValue(
        skillFrontmatter('projects/canopy/src/lib/accordion/docs/guide.mdx'),
      );
    });

    it('fails with the partial count in the message', async () => {
      await checkDocsSkills({ github, context, core });

      expect(core.setFailed).toHaveBeenCalledWith(
        expect.stringContaining('1 of 2 changed .mdx file(s) are missing'),
      );
    });

    it('lists the missing .mdx path', async () => {
      await checkDocsSkills({ github, context, core });

      expect(core.setFailed).toHaveBeenCalledWith(
        expect.stringContaining('projects/canopy/src/lib/button/docs/guide.mdx'),
      );
    });

    it('lists the already-covered .mdx path', async () => {
      await checkDocsSkills({ github, context, core });

      expect(core.setFailed).toHaveBeenCalledWith(
        expect.stringContaining('projects/canopy/src/lib/accordion/docs/guide.mdx'),
      );
    });

    it('includes the reminder to run the Best Practice Skill Generator agent', async () => {
      await checkDocsSkills({ github, context, core });

      expect(core.setFailed).toHaveBeenCalledWith(
        expect.stringContaining('Best Practice Skill Generator'),
      );
    });
  });

  describe('when a skill is updated but its source .mdx was not changed', () => {
    it('emits a warning and does not fail', async () => {
      mockListFiles(['skills/best-practice/accordion/SKILL.md']);
      readFileSyncSpy.mockReturnValue(
        skillFrontmatter('projects/canopy/src/lib/accordion/docs/guide.mdx'),
      );

      await checkDocsSkills({ github, context, core });

      expect(core.warning).toHaveBeenCalledWith(
        expect.stringContaining('projects/canopy/src/lib/accordion/docs/guide.mdx'),
      );
      expect(core.setFailed).not.toHaveBeenCalled();
    });
  });

  describe('when the PR has more than 100 changed files', () => {
    it('paginates and still detects .mdx changes', async () => {
      const firstPage = Array.from({ length: 100 }, (_, i) => ({
        filename: `src/file${i}.ts`,
      }));
      const secondPage = [
        { filename: 'projects/canopy/src/lib/accordion/docs/guide.mdx' },
      ];

      github.rest.pulls.listFiles
        .mockResolvedValueOnce({ data: firstPage })
        .mockResolvedValueOnce({ data: secondPage });

      await checkDocsSkills({ github, context, core });

      expect(github.rest.pulls.listFiles).toHaveBeenCalledTimes(2);
      expect(core.setFailed).toHaveBeenCalledWith(
        expect.stringContaining('accordion'),
      );
    });
  });

  describe('when a changed SKILL.md has no source metadata', () => {
    it('does not count the skill as covering any .mdx file', async () => {
      mockListFiles([
        'projects/canopy/src/lib/accordion/docs/guide.mdx',
        'skills/best-practice/accordion/SKILL.md',
      ]);
      readFileSyncSpy.mockReturnValue('---\nname: accordion\n---\n');

      await checkDocsSkills({ github, context, core });

      expect(core.setFailed).toHaveBeenCalledWith(
        expect.stringContaining('accordion'),
      );
    });
  });

  describe('when a changed SKILL.md cannot be read from disk', () => {
    it('skips the unreadable skill and fails for the uncovered .mdx file', async () => {
      mockListFiles([
        'projects/canopy/src/lib/accordion/docs/guide.mdx',
        'skills/best-practice/accordion/SKILL.md',
      ]);
      readFileSyncSpy.mockImplementation(() => {
        throw new Error('ENOENT');
      });

      await checkDocsSkills({ github, context, core });

      expect(core.setFailed).toHaveBeenCalledWith(
        expect.stringContaining('accordion'),
      );
    });
  });
});
