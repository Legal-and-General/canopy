'use strict';

const fs = require('fs');
const path = require('path');

const {
  GUIDE_ROUTES,
  SKILL_GUIDE_ROUTES,
  resolveRepositoryHref,
  resolveRepositoryImage,
} = require('../../../projects/canopy/src/lib/docs/repository-guides/repository-links.cjs');
const {
  extractSkillSection,
} = require('../../../projects/canopy/src/lib/docs/repository-guides/skill-sections.cjs');

const repositoryRoot = path.resolve(__dirname, '../../..');
const guidesDirectory = path.join(
  repositoryRoot,
  'projects/canopy/src/lib/docs/repository-guides',
);

describe('repository documentation links', () => {
  it('lists AI and Development between Welcome and Foundations', () => {
    const config = fs.readFileSync(
      path.join(repositoryRoot, '.storybook/main.js'),
      'utf8',
    );
    const welcome = config.indexOf('/docs/welcome/welcome.mdx');
    const ai = config.indexOf('/repository-guides/best-practice-skills.mdx');
    const development = config.indexOf('/repository-guides/usage.mdx');
    const foundations = config.indexOf('/docs/foundation/colours/colours.mdx');

    expect(welcome).toBeGreaterThanOrEqual(0);
    expect(ai).toBeGreaterThan(welcome);
    expect(development).toBeGreaterThan(ai);
    expect(foundations).toBeGreaterThan(development);
  });

  it('maps every Markdown-backed page to its registered Storybook ID', () => {
    const storybookConfig = fs.readFileSync(
      path.join(repositoryRoot, '.storybook/main.js'),
      'utf8',
    );
    const mappedFiles = [];
    const skillPages = [];

    for (const page of fs
      .readdirSync(guidesDirectory)
      .filter((file) => file.endsWith('.mdx'))) {
      const source = fs.readFileSync(path.join(guidesDirectory, page), 'utf8');
      const markdownImport = source.match(/from ['"]([^'"]+\.md)\?raw['"]/);

      expect(storybookConfig).toContain(`repository-guides/${page}`);

      if (!markdownImport) {
        continue;
      }

      const title = source.match(/<Meta title="([^"]+)"/);
      expect(title).not.toBeNull();

      const markdownFile = path
        .relative(
          path.join(repositoryRoot, 'docs'),
          path.resolve(guidesDirectory, markdownImport[1]),
        )
        .split(path.sep)
        .join('/');

      const storyId = title[1]
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');

      if (markdownFile === 'COPILOT_SKILLS.md') {
        skillPages.push(`${storyId}--docs`);
      } else {
        mappedFiles.push(markdownFile);
        expect(GUIDE_ROUTES[markdownFile]).toBe(`${storyId}--docs`);
      }
    }

    expect(mappedFiles.sort()).toEqual(Object.keys(GUIDE_ROUTES).sort());
    expect(skillPages.sort()).toEqual(Object.values(SKILL_GUIDE_ROUTES).sort());
  });

  it.each([
    ['RELEASES.md', 'development-contributing-releases-overview--docs'],
    ['NEXT_BRANCH.md', 'development-contributing-releases-pre-release-branch--docs'],
    [
      'MAINTENANCE_RELEASES.md',
      'development-contributing-releases-maintenance-releases--docs',
    ],
  ])('groups %s under Contributing releases', (file, route) => {
    expect(GUIDE_ROUTES[file]).toBe(route);
    expect(resolveRepositoryHref(file)).toBe(`./?path=/docs/${route}`);
  });

  it.each([
    'README.md',
    'projects/canopy/README.md',
    'projects/canopy/src/lib/docs/welcome/usage.component.ts',
    'projects/canopy/src/lib/docs/welcome/welcome.component.ts',
  ])('links to registered guides from %s', (file) => {
    const source = fs.readFileSync(path.join(repositoryRoot, file), 'utf8');
    const ids = [...source.matchAll(/\?path=\/docs\/([a-z0-9-]+--docs)/g)].map(
      (match) => match[1],
    );

    expect(ids.length).toBeGreaterThan(0);
    const routes = [...Object.values(GUIDE_ROUTES), ...Object.values(SKILL_GUIDE_ROUTES)];
    ids.forEach((id) => expect(routes).toContain(id));
  });

  it('opens external community and policy links in new tabs', () => {
    const source = fs.readFileSync(path.join(guidesDirectory, 'policies.mdx'), 'utf8');
    const externalLinks = [...source.matchAll(/<a\s+([^>]+)>/g)]
      .map((match) => match[1])
      .filter((attributes) => /\bhref="https?:\/\//.test(attributes));

    expect(externalLinks).toHaveLength(5);
    externalLinks.forEach((attributes) => {
      expect(attributes).toMatch(/\btarget="_blank"/);
      expect(attributes).toMatch(/\brel="[^"]*\bnoopener\b/);
      expect(attributes).toMatch(/\brel="[^"]*\bnoreferrer\b/);
    });
  });

  it('does not duplicate the contributing page table of contents', () => {
    const guide = fs.readFileSync(
      path.join(repositoryRoot, 'docs/CONTRIBUTING.md'),
      'utf8',
    );

    expect(guide).not.toMatch(/^## Table of contents\s*$/im);
  });

  it('links coding standards and conventional commits from the contributing overview', () => {
    const guide = fs.readFileSync(
      path.join(repositoryRoot, 'docs/CONTRIBUTING.md'),
      'utf8',
    );

    expect(guide).toContain('[coding standards guide](./CODING_STANDARDS.md)');
    expect(guide).toContain('[Conventional commits](#conventional-commits)');
    expect(guide).toMatch(/^## Conventional commits$/m);
    expect(resolveRepositoryHref('CODING_STANDARDS.md')).toBe(
      './?path=/docs/development-contributing-coding-standards--docs',
    );
  });

  it('links coding standards references to existing repository files', () => {
    const guide = fs.readFileSync(
      path.join(repositoryRoot, 'docs/CODING_STANDARDS.md'),
      'utf8',
    );
    const links = [...guide.matchAll(/\]\((\.\.\/[^)#]+)\)/g)].map((match) => match[1]);

    expect(links).toContain('../projects/canopy/src/public-api.ts');
    links.forEach((href) => {
      expect(fs.existsSync(path.resolve(repositoryRoot, 'docs', href))).toBe(true);
    });
  });

  it('labels sample design tokens as placeholders', () => {
    const guide = fs.readFileSync(
      path.join(repositoryRoot, 'docs/CODING_STANDARDS.md'),
      'utf8',
    );

    expect(guide).toContain('border-radius: var(--<example>-border-radius)');
    expect(guide).toContain('`<example>` is a placeholder');
  });

  it('keeps the dependency guide headings outside blockquotes', () => {
    const guide = fs.readFileSync(
      path.join(repositoryRoot, 'docs/DEPENDABOT.md'),
      'utf8',
    );

    expect(guide).not.toMatch(/^>.*\r?\n#{1,6}\s/m);
    expect(guide).toMatch(/^## Dependency Updater agent$/m);
  });

  it('keeps the status implementation notes with the directive', () => {
    const notes = '../projects/canopy/src/lib/status/STATUS_IMPLEMENTATION.md';
    const config = fs.readFileSync(
      path.join(repositoryRoot, '.storybook/main.js'),
      'utf8',
    );

    expect(fs.existsSync(path.resolve(repositoryRoot, 'docs', notes))).toBe(true);
    expect(config).not.toContain('repository-guides/status-implementation.mdx');
    expect(GUIDE_ROUTES[notes]).toBeUndefined();
    expect(resolveRepositoryHref(notes)).toBe(
      'https://github.com/Legal-and-General/canopy/blob/master/projects/canopy/src/lib/status/STATUS_IMPLEMENTATION.md',
    );
  });

  it.each(Object.entries(GUIDE_ROUTES))(
    'routes %s to its Storybook page',
    (file, route) => {
      expect(resolveRepositoryHref(`./${file}`)).toBe(`./?path=/docs/${route}`);
    },
  );

  it('preserves section anchors on links between guides', () => {
    expect(resolveRepositoryHref('CONTRIBUTING.md#conventional-commits')).toBe(
      './?path=/docs/development-contributing-overview--docs#conventional-commits',
    );
    expect(resolveRepositoryHref('AGENTIC_AI.md#using-an-agent')).toBe(
      './?path=/docs/development-contributing-agents-and-workflows--docs#using-an-agent',
    );
    expect(resolveRepositoryHref('RELEASES.md#conventional-commits')).toBe(
      './?path=/docs/development-contributing-releases-overview--docs#conventional-commits',
    );
    const agentGuide = fs.readFileSync(
      path.join(repositoryRoot, 'docs/AGENTIC_AI.md'),
      'utf8',
    );
    expect(agentGuide).toMatch(/^### Using an agent$/m);
  });

  it.each([
    ['migration-skills', SKILL_GUIDE_ROUTES.migration, 'migration', 'Migration Skills'],
    [
      'installing-migration-skills',
      SKILL_GUIDE_ROUTES.migration,
      'migration',
      'Installing migration skills',
    ],
    [
      'best-practice-skills',
      SKILL_GUIDE_ROUTES.bestPractice,
      'bestPractice',
      'Best Practice Skills',
    ],
    [
      'installing-best-practice-skills',
      SKILL_GUIDE_ROUTES.bestPractice,
      'bestPractice',
      'Installing best practice skills',
    ],
    [
      'generating-best-practice-skills',
      SKILL_GUIDE_ROUTES.bestPractice,
      'bestPractice',
      'Generating best practice skills',
    ],
    [
      'available-best-practice-skills',
      SKILL_GUIDE_ROUTES.bestPractice,
      'bestPractice',
      'Available best practice skills',
    ],
  ])(
    'routes skills catalogue anchor %s to the correct page',
    (anchor, route, section, heading) => {
      expect(resolveRepositoryHref(`COPILOT_SKILLS.md#${anchor}`)).toBe(
        `./?path=/docs/${route}#${anchor}`,
      );
      const catalogue = fs.readFileSync(
        path.join(repositoryRoot, 'docs/COPILOT_SKILLS.md'),
        'utf8',
      );

      expect(extractSkillSection(catalogue, section)).toMatch(
        new RegExp(`^#{2,3} ${heading}$`, 'm'),
      );
    },
  );

  it('links the complete skills catalogue and its shared introduction to GitHub', () => {
    expect(resolveRepositoryHref('COPILOT_SKILLS.md')).toBe(
      'https://github.com/Legal-and-General/canopy/blob/master/docs/COPILOT_SKILLS.md',
    );
    expect(resolveRepositoryHref('COPILOT_SKILLS.md#installing-a-skill')).toBe(
      'https://github.com/Legal-and-General/canopy/blob/master/docs/COPILOT_SKILLS.md#installing-a-skill',
    );
    expect(resolveRepositoryHref('COPILOT_SKILLS.md#toString')).toBe(
      'https://github.com/Legal-and-General/canopy/blob/master/docs/COPILOT_SKILLS.md#toString',
    );
    expect(resolveRepositoryHref('AGENTIC_AI.md#agents')).toBe(
      './?path=/docs/development-contributing-agents-and-workflows--docs#agents',
    );
  });

  it('keeps links relative to the current Storybook deployment', () => {
    const link = resolveRepositoryHref('./USAGE.md');

    expect(new URL(link, 'https://example.com/canopy/lg-sb-next/iframe.html').href).toBe(
      'https://example.com/canopy/lg-sb-next/?path=/docs/development-using-canopy-installation-and-usage--docs',
    );
  });

  describe('skills catalogue sections', () => {
    const catalogue = fs.readFileSync(
      path.join(repositoryRoot, 'docs/COPILOT_SKILLS.md'),
      'utf8',
    );

    it('renders migration and best-practice instructions separately', () => {
      const migration = extractSkillSection(catalogue, 'migration');
      const bestPractice = extractSkillSection(catalogue, 'bestPractice');

      expect(migration).toMatch(/^## Migration Skills/);
      expect(migration).toContain('--skill canopy-v43-migration');
      expect(migration).toContain('npx skills remove Legal-and-General/canopy');
      expect(migration).not.toContain('## Best Practice Skills');
      expect(migration).not.toContain('--skill canopy-button');
      expect(bestPractice).toMatch(/^## Best Practice Skills/);
      expect(bestPractice).toContain('--skill canopy-button');
      expect(bestPractice).toContain('Always pin the install');
      expect(bestPractice).toContain('AGENTIC_AI.md#agents');
      expect(bestPractice).not.toContain('--skill canopy-v43-migration');
    });

    it('supports Windows line endings', () => {
      const windowsCatalogue = catalogue.replace(/\n/g, '\r\n');

      expect(extractSkillSection(windowsCatalogue, 'migration')).toMatch(
        /^## Migration Skills/,
      );
      expect(extractSkillSection(windowsCatalogue, 'bestPractice')).toMatch(
        /^## Best Practice Skills/,
      );
    });

    it('fails explicitly when catalogue headings are missing, duplicated or out of order', () => {
      expect(() => extractSkillSection('## Migration Skills\n', 'migration')).toThrow(
        'The skills catalogue must contain each section exactly once, in order.',
      );
      expect(() =>
        extractSkillSection(`${catalogue}\n## Migration Skills\n`, 'migration'),
      ).toThrow('The skills catalogue must contain each section exactly once, in order.');
      expect(() =>
        extractSkillSection(
          '## Best Practice Skills\n## Migration Skills\n',
          'migration',
        ),
      ).toThrow('The skills catalogue must contain each section exactly once, in order.');
      expect(() => extractSkillSection(catalogue, 'other')).toThrow(
        'Unknown skills section: other',
      );
    });
  });

  it('links other repository files to GitHub', () => {
    expect(resolveRepositoryHref('../.github/ISSUE_TEMPLATE/dependency-update.yml')).toBe(
      'https://github.com/Legal-and-General/canopy/blob/master/.github/ISSUE_TEMPLATE/dependency-update.yml',
    );
    expect(resolveRepositoryHref('../package.json')).toBe(
      'https://github.com/Legal-and-General/canopy/blob/master/package.json',
    );
  });

  it.each([
    '../projects/canopy/src/lib/separator/docs/separator.stories.ts',
    '../projects/canopy/src/lib/notice/docs/guide.mdx',
    '../.github/instructions/component-docs.instructions.md',
    '../.storybook/main.js',
  ])('links the contributor reference %s to an existing repository file', (href) => {
    const guide = fs.readFileSync(
      path.join(repositoryRoot, 'docs/CONTRIBUTING.md'),
      'utf8',
    );
    const file = path.resolve(repositoryRoot, 'docs', href);
    const repositoryPath = path.relative(repositoryRoot, file).split(path.sep).join('/');

    expect(guide).toContain(`](${href})`);
    expect(fs.existsSync(file)).toBe(true);
    expect(resolveRepositoryHref(href)).toBe(
      `https://github.com/Legal-and-General/canopy/blob/master/${repositoryPath}`,
    );
  });

  it.each([
    '#storybook',
    'https://example.com/guide',
    'mailto:example@example.com',
    './?path=/docs/example--docs',
  ])('does not rewrite %s', (href) => {
    expect(resolveRepositoryHref(href)).toBe(href);
  });

  it('serves documentation images from the current Storybook deployment', () => {
    expect(resolveRepositoryImage('./assets/deployment-gh-pages.png')).toBe(
      './repository-docs-assets/deployment-gh-pages.png',
    );
    expect(resolveRepositoryImage('https://example.com/image.png')).toBe(
      'https://example.com/image.png',
    );
  });
});
