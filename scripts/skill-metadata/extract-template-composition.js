#!/usr/bin/env node
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { parseTemplate } from '@angular/compiler';
import { extractAngularApi } from './extract-angular-api.js';
import { discoverSources } from './discover-sources.js';
import {
  isMain,
  parseArguments,
  pathExists,
  relativePath,
  repositoryRoot,
} from './lib.js';

// Converts documented Angular examples into a small serialisable tree. The
// generated index preserves hierarchy without retaining complete example markup.
const elementTree = (html) => {
  const parsed = parseTemplate(html, 'example.html', { preserveWhitespaces: false });
  const visit = (nodes) =>
    nodes.flatMap((node) => {
      const name = node.name || node.tagName;
      const children = visit(node.children || []);
      return name
        ? [{ selector: name, ...(children.length ? { children } : {}) }]
        : children;
    });
  return visit(parsed.nodes);
};

// Splits a content-projection selector list on top-level commas only, so
// attribute selectors such as `[priority='link']` or `:not(a, b)` stay intact.
export const splitSelectorList = (selector) => {
  const parts = [];
  let depth = 0;
  let quote = null;
  let current = '';
  for (const character of selector) {
    if (quote) {
      if (character === quote) quote = null;
    } else if (character === '"' || character === "'") {
      quote = character;
    } else if (character === '[' || character === '(') {
      depth += 1;
    } else if (character === ']' || character === ')') {
      depth -= 1;
    } else if (character === ',' && depth === 0) {
      parts.push(current.trim());
      current = '';
      continue;
    }
    current += character;
  }
  parts.push(current.trim());
  return parts.filter(Boolean);
};

// Finds every <ng-content> using Angular's own parser rather than a regular
// expression, so quoting, attribute order, multi-line tags and control-flow
// blocks (@if, @for) are all handled as the compiler would handle them.
export const extractProjectionSlots = (template) => {
  const slots = [];
  const visit = (value, conditional) => {
    if (!value || typeof value !== 'object') return;
    if (Array.isArray(value)) {
      value.forEach((item) => visit(item, conditional));
      return;
    }
    if (value.constructor?.name === 'Content') {
      const selector = value.selector || '*';
      slots.push({
        selector,
        selectors: selector === '*' ? [] : splitSelectorList(selector),
        catchAll: selector === '*',
        conditional,
        line: (value.sourceSpan?.start?.line ?? 0) + 1,
      });
      return;
    }
    const isBlock = /Block$/.test(value.constructor?.name || '');
    for (const [key, child] of Object.entries(value)) {
      if (['sourceSpan', 'startSourceSpan', 'endSourceSpan', 'i18n'].includes(key)) {
        continue;
      }
      visit(child, conditional || isBlock);
    }
  };
  try {
    visit(
      parseTemplate(template, 'template.html', { preserveWhitespaces: false }).nodes,
      false,
    );
  } catch {
    // An unparsable template yields no projection facts rather than guesses.
  }
  return slots;
};

const tokenReferences = (text) =>
  [
    ...text.matchAll(
      /(?:var\(\s*(--[\w-]+)|\$([\w-]+)|\b((?:colour|spacing|typography|radius|shadow)-[\w-]+)\b)/gi,
    ),
  ]
    .map((match) => match[1] || match[2] || match[3])
    .filter(Boolean)
    .sort();

const hasCanopyNode = (tree) =>
  tree.some(
    (node) => node.selector?.startsWith('lg-') || hasCanopyNode(node.children || []),
  );

// Locates the first line matching a pattern so evidence follows the text when a
// file is edited, and generation fails loudly if the supporting text is removed.
const locate = async (file, pattern) => {
  const lines = (await readFile(path.resolve(repositoryRoot, file), 'utf8')).split('\n');
  const index = lines.findIndex((line) => pattern.test(line));
  if (index < 0) throw new Error(`Evidence for ${pattern} not found in ${file}`);
  return `${file}:${index + 1}`;
};

// Hand-authored conditional rules for card footer actions. Evidence cites the
// Canopy documentation the skills are generated from, not the generated skills,
// so regenerating a skill cannot invalidate it. The footer's projection slot
// accepts links, buttons and button groups directly, and a button group only
// changes the layout when there are several buttons, so a group around one
// button is acceptable rather than an error.
const cardActionCompositions = async () => {
  const cardGuide = 'projects/canopy/src/lib/card/docs/card/guide.mdx';
  const buttonGuide = 'projects/canopy/src/lib/button/docs/guide.mdx';
  const footerTemplate =
    'projects/canopy/src/lib/card/card-footer/card-footer.component.html';
  const fixedAction = await locate(cardGuide, /^- \*\*One fixed action:\*\*/);
  const conditionalAction = await locate(cardGuide, /^- \*\*An action that is sometimes/);
  const navigation = await locate(
    buttonGuide,
    /Only use an `<a>` element styled as a button/,
  );
  const group = await locate(buttonGuide, /group together two or more buttons/);
  const onePrimary = await locate(buttonGuide, /place more than one primary button/);
  const footerSlot = await locate(footerTemplate, /<ng-content select=/);
  const groupGuidance =
    'lg-button-group is for two or more related actions, and is also acceptable when a second action may be shown conditionally.';
  return [
    {
      id: 'card-single-primary-action',
      intent: 'Place one fixed action directly in a card footer.',
      rules: [
        'Place one fixed action directly in the card footer as a button.',
        groupGuidance,
      ],
      conditions: {
        actionCount: { equals: 1 },
        actionType: 'button',
        secondActionPossible: false,
      },
      tree: [
        {
          selector: 'lg-card-footer',
          children: [
            { selector: 'button[lg-button]', attributes: { priority: 'primary' } },
          ],
        },
      ],
      evidence: [fixedAction, group, footerSlot],
      confidence: 'high',
    },
    {
      id: 'card-single-navigation-action',
      intent: 'Place one fixed navigation link directly in a card footer.',
      rules: [
        'Place one fixed navigation action directly in the card footer as a link styled as a button.',
        groupGuidance,
      ],
      conditions: {
        actionCount: { equals: 1 },
        actionType: 'navigation',
        secondActionPossible: false,
      },
      tree: [
        {
          selector: 'lg-card-footer',
          children: [{ selector: 'a[lg-button]' }],
        },
      ],
      evidence: [fixedAction, navigation, footerSlot],
      confidence: 'high',
    },
    {
      id: 'card-optional-second-action',
      intent: 'Keep the footer layout stable when a second action is sometimes shown.',
      rules: [
        'Use lg-button-group when a second action may be shown conditionally.',
        'Give only one of the actions primary priority.',
      ],
      conditions: {
        actionCount: { minimum: 1, maximum: 2 },
        secondActionPossible: true,
      },
      tree: [
        {
          selector: 'lg-card-footer',
          children: [
            {
              selector: 'lg-button-group',
              children: [
                { selector: 'button[lg-button]', repeat: { minimum: 1, maximum: 2 } },
              ],
            },
          ],
        },
      ],
      evidence: [conditionalAction, onePrimary, footerSlot],
      confidence: 'high',
    },
    {
      id: 'card-related-actions',
      intent: 'Group two or more related actions in a card footer.',
      rules: [
        'For a minimum of two related actions, use lg-button-group.',
        'Give only one of the related actions primary priority.',
      ],
      conditions: { actionCount: { minimum: 2 }, relationship: 'related' },
      tree: [
        {
          selector: 'lg-card-footer',
          children: [
            {
              selector: 'lg-button-group',
              children: [{ selector: 'button[lg-button]', repeat: { minimum: 2 } }],
            },
          ],
        },
      ],
      evidence: [group, onePrimary, footerSlot],
      confidence: 'high',
    },
  ];
};

export const extractTemplateComposition = async (skill, api = null) => {
  const markdown = await readFile(skill.skillFile, 'utf8');
  const symbols = api || (await extractAngularApi(skill.source));
  const slots = [];
  const children = new Set();
  for (const symbol of symbols) {
    if (symbol.kind !== 'component') continue;
    const sourceFile = path.resolve(repositoryRoot, symbol.source);
    const source = await readFile(sourceFile, 'utf8');
    const inline = source.match(/\btemplate\s*:\s*`([\s\S]*?)`/);
    const templateUrl = source.match(/\btemplateUrl\s*:\s*['"](.+?)['"]/);
    const templateFile = templateUrl
      ? path.resolve(path.dirname(sourceFile), templateUrl[1])
      : null;
    const template =
      inline?.[1] ||
      (templateFile && (await pathExists(templateFile))
        ? await readFile(templateFile, 'utf8')
        : '');
    // Projection slots describe the consumer contract; internal child
    // elements are recorded separately and are not treated as requirements.
    for (const slot of extractProjectionSlots(template)) {
      slots.push({
        owner: symbol.symbol,
        ...slot,
        evidence: templateFile
          ? `${relativePath(templateFile)}:${slot.line}`
          : relativePath(sourceFile),
      });
    }
    for (const match of template.matchAll(/<\/?(lg-[\w-]+)/g)) {
      if (match[1] !== symbol.selector) children.add(match[1]);
    }
  }
  const examples = [];
  let exampleIndex = 0;
  for (const match of markdown.matchAll(/```(?:html|angular)\s*\n([\s\S]*?)```/gi)) {
    try {
      const tree = elementTree(match[1]);
      if (!tree.length || !hasCanopyNode(tree)) continue;
      exampleIndex += 1;
      const line = markdown.slice(0, match.index).split('\n').length;
      examples.push({
        id: `${skill.id}-example-${exampleIndex}`,
        intent: `Follow documented ${skill.id} example ${exampleIndex}.`,
        rules: ['Preserve the documented Canopy component hierarchy.'],
        conditions: { documentedExample: true },
        tree,
        evidence: [`${relativePath(skill.skillFile)}:${line}`],
        confidence: 'high',
      });
    } catch {
      // A malformed or non-template fence is not reliable composition evidence.
    }
  }
  const compositions = [
    ...(skill.id === 'card' ? await cardActionCompositions() : []),
    ...examples,
  ];
  return {
    skill: skill.id,
    slots,
    children: [...children].sort(),
    compositions,
    tokens: [...new Set(tokenReferences(markdown))],
  };
};

if (isMain(import.meta.url)) {
  const arguments_ = parseArguments(process.argv.slice(2));
  const skills = await discoverSources(arguments_);
  console.info(
    JSON.stringify(
      await Promise.all(skills.map((skill) => extractTemplateComposition(skill))),
      null,
      2,
    ),
  );
}
