import { AnchorMdx } from '@storybook/addon-docs/blocks';

import { RepositoryLink, RepositoryMarkdown } from './repository-markdown.js';

jest.mock('@storybook/addon-docs/blocks', () => ({
  AnchorMdx: jest.fn(),
  CodeOrSourceMdx: jest.fn(),
  HeadersMdx: { h1: 'h1', h2: 'h2', h3: 'h3', h4: 'h4', h5: 'h5', h6: 'h6' },
  Markdown: jest.fn(),
}));

describe('repository Markdown links', () => {
  it('keeps named anchors without an href out of the tab order', () => {
    const anchor = RepositoryLink({
      href: undefined,
      target: undefined,
      id: 'legacy-anchor',
    });

    expect(anchor.type).toBe('a');
    expect(anchor.props.id).toBe('legacy-anchor');
    expect(anchor.props.href).toBeUndefined();
  });

  describe('repository Markdown sections', () => {
    it('promotes section headings without changing the source Markdown', () => {
      const markdown = '## Migration Skills\n\n### Installing migration skills';
      const element = RepositoryMarkdown({ children: markdown, promoteHeadings: true });

      expect(element.props.children).toBe(markdown);
      expect(element.props.options.overrides.h2).toBe('h1');
      expect(element.props.options.overrides.h3).toBe('h2');
    });

    it('leaves headings unchanged for full guides', () => {
      const element = RepositoryMarkdown({
        children: '# Full guide',
        promoteHeadings: false,
      });

      expect(element.props.options.overrides.h2).toBe('h2');
    });
  });

  it('opens links between guides in the Storybook manager', () => {
    const link = RepositoryLink({
      href: './USAGE.md',
      target: undefined,
      children: 'Usage',
    });

    expect(link.type).toBe('a');

    expect(link.props.href).toBe(
      './?path=/docs/development-using-canopy-installation-and-usage--docs',
    );

    expect(link.props.target).toBe('_top');
  });

  it('uses the Storybook link renderer for external links', () => {
    const link = RepositoryLink({
      href: 'https://example.com',
      target: undefined,
      children: 'Example',
    });

    expect(link.type).toBe(AnchorMdx);
    expect(link.props.href).toBe('https://example.com');
  });

  it('uses the Storybook link renderer for same-page fragments', () => {
    const link = RepositoryLink({
      href: '#section',
      target: undefined,
      children: 'Section',
    });

    expect(link.type).toBe(AnchorMdx);
    expect(link.props.href).toBe('#section');
  });

  it('keeps email links as native anchors', () => {
    const link = RepositoryLink({
      href: 'mailto:team@example.com',
      target: undefined,
      children: 'Email',
    });

    expect(link.type).toBe('a');
    expect(link.props.href).toBe('mailto:team@example.com');
  });
});
