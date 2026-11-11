import React from 'react';
import {
  AnchorMdx,
  CodeOrSourceMdx,
  HeadersMdx,
  Markdown,
} from '@storybook/addon-docs/blocks';

import { resolveRepositoryHref, resolveRepositoryImage } from './repository-links.cjs';

export function RepositoryLink({ href, target, ...props }) {
  const resolvedHref = resolveRepositoryHref(href);

  if (resolvedHref == null) {
    return React.createElement('a', { ...props, target });
  }

  if (resolvedHref && resolvedHref.startsWith('./?path=/docs/')) {
    // Navigate the manager directly so sidebar URLs retain preview subpaths.
    return React.createElement('a', { ...props, href: resolvedHref, target: target || '_top' });
  }

  if (resolvedHref && /^(mailto:|tel:)/i.test(resolvedHref)) {
    return React.createElement('a', { ...props, href: resolvedHref, target });
  }

  return React.createElement(AnchorMdx, { ...props, href: resolvedHref, target });
}

function RepositoryImage({ src, ...props }) {
  return React.createElement('img', { ...props, src: resolveRepositoryImage(src) });
}

const markdownOptions = {
  overrides: {
    code: CodeOrSourceMdx,
    ...HeadersMdx,
    a: RepositoryLink,
    img: RepositoryImage,
  },
};

const sectionMarkdownOptions = {
  overrides: {
    ...markdownOptions.overrides,
    h2: HeadersMdx.h1,
    h3: HeadersMdx.h2,
    h4: HeadersMdx.h3,
    h5: HeadersMdx.h4,
    h6: HeadersMdx.h5,
  },
};

export function RepositoryMarkdown({ children, promoteHeadings = false }) {
  const options = promoteHeadings
    ? sectionMarkdownOptions
    : markdownOptions;

  return React.createElement(Markdown, { options }, children);
}
