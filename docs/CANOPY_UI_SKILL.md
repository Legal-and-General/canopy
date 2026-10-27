# Canopy UI Orchestration Skill

## Overview

The `canopy-ui-orchestration` skill helps coding agents discover and combine Canopy
capabilities from plain-English UI requirements. It coordinates version-matched
component-specific skills and a bundled static index. It does not replace component
documentation, Angular compilation, rendered testing, or design review.

## Who Should Install It

Install the skill in Angular applications that use `@legal-and-general/canopy`, especially
when agents need to select several components, directives, utilities, tokens, or assets for
one feature.

The skill is consumer-facing. Contributors changing Canopy source should use the maintainer
workflow below to regenerate and validate its metadata.

## Installation

Pin the source to the same Canopy release as the application:

```bash
# Replace vx.x.x with the installed Canopy version.
npx skills add \
  Legal-and-General/canopy/skills/best-practice#vx.x.x \
  --skill canopy-ui-orchestration

# Install the orchestration skill and all detailed component skills.
npx skills add \
  Legal-and-General/canopy/skills/best-practice#vx.x.x \
  --skill '*'
```

Do not install from an unversioned branch for a released consumer application.

## Version Matching

The agent should read the requested version from `package.json`, confirm the resolved version
in the lockfile or installed package, and use skills from the matching git tag. It must not
silently upgrade Canopy or use current Storybook guidance for an older version.

If exact-version evidence is unavailable, the agent should explain the limitation and avoid
inventing a selector, input, output, or composition.

## How Capability Discovery Works

The bundled `references/capabilities.json` index contains concise records generated from
public exports, Angular source, templates, guides, stories, tests, styles, and reviewed
skills. Search favours:

1. Exact skill and component names.
2. Selectors and public symbols.
3. Intent phrases and aliases.
4. Category and related capabilities.
5. Descriptive guide and skill terms.

The agent returns a shortlist, then loads detailed component skills only for the selected
capabilities. This keeps the orchestration skill small and component guidance authoritative.

## How Cross-Component Composition Works

The agent creates a composition map before implementation. The map records the owning
component, projected children, directives, action relationships, assets, spacing ownership,
responsive behaviour, accessibility behaviour, and supporting evidence.

Conditions remain attached to their rules. A contextual rule must not become a universal
dependency.

### One Card Action Versus Multiple Related Actions

```text
One action belonging to a card
→ lg-card
  → lg-card-content
  → lg-card-footer
    → button[lg-button]

Two related actions belonging to a card
→ lg-card
  → lg-card-content
  → lg-card-footer
    → lg-button-group
      → button[lg-button]
      → button[lg-button]
```

The button group is conditional on there being multiple related actions. It is not required
for every card footer.

## Asking Effective Questions

Describe intent, content, actions, state, and constraints rather than guessing a component:

- "Add Continue and Cancel actions to the form card."
- "Show a prominent success message with an illustration and a link."
- "Build a responsive content area containing radio choices and validation."
- "Review this icon-only action for Canopy and accessibility compliance."
- "Find the supported replacement for this deprecated Canopy component."

## Evidence the Agent Should Inspect

For the installed Canopy version, the agent should inspect:

- the bundled capability and composition indexes;
- relevant component-specific skills;
- public exports and TypeScript declarations;
- projected slots in component templates;
- documented guides and representative stories;
- accessibility and composition tests;
- referenced tokens and responsive utilities.

Source-code capability alone is not design approval. The reviewed guide and detailed skill
remain authoritative for semantic usage guidance.

## Verification Responsibilities

Consumers remain responsible for:

- Angular template type-checking;
- relevant unit and integration tests;
- rendered DOM inspection for projected content;
- computed-style and responsive checks;
- keyboard, focus, accessible-name, description, and status-message checks;
- visual regression or manual design review where appropriate.

Generated metadata and skill guidance cannot prove visual fidelity without rendering.

## Generated Metadata Architecture

The metadata tooling separates deterministic facts from reviewed semantic guidance:

```text
Canopy source and public exports
→ deterministic API, template, example, and token extraction
→ per-skill capability records
→ aggregate capabilities and conditional compositions
→ version-matched orchestration skill references
```

Every fact includes repository-relative evidence. Deterministic output uses stable ordering
and contains no volatile timestamps.

Technical facts include public symbols, selectors, inputs, outputs, defaults, required
status, deprecations, projected slots (`api.projection`, one record per `<ng-content>` with its
split `selectors`, `catchAll` and `conditional` flags), and token references. Semantic fields include intents,
avoidance guidance, related skills, conditional patterns, accessibility constraints, and
confidence.

Each skill's routing `category` is declared in its `SKILL.md` frontmatter
(`metadata.category`) and read directly by the generator; there is no hardcoded component
list. The removed/deprecated lifecycle, detected from the documentation, still overrides the
declared category automatically. Adding a skill without a valid category fails generation and
the discovery guard test.

Published example hierarchies are checked against each component's projection slots. A
component with named slots and no catch-all drops any Canopy child its slots do not select, so
validation fails with `SLOT_MISMATCH` for those. Components that accept any content cannot be
checked this way, so examples must come from the guides and stories rather than being invented.

Low-confidence semantic metadata must be resolved by a maintainer before publication.

## Maintainer Workflow

After changing a relevant public API, template, guide, story, skill, or token source:

```bash
npm run generate:skill-metadata
npm run validate:skill-metadata
npm run test:skill-metadata
```

Conditional composition rules that cannot be derived from a template, currently the card footer
action rules, are authored in `scripts/skill-metadata/extract-template-composition.js`. They cite the
Canopy documentation the skills are generated from rather than the generated `SKILL.md` files, so
regenerating a skill cannot invalidate them. Generation fails if the cited documentation text is removed.
When the underlying guidance changes, update the guide first and then the rule.

Review generated semantic changes rather than manually editing generated JSON. If source,
documentation, and skill guidance disagree, correct the authoritative source or record an
explicit reviewed resolution. Do not allow generation order to choose a winner silently.

The Best Practice Skill Generator must:

1. Discover public exports and read the implementation, templates, tests, and stories.
2. Run deterministic extraction for the target.
3. compare source facts with documentation and fail on conflicts.
4. Preserve reviewed semantic guidance and conditional wording.
5. Regenerate and validate per-skill and aggregate metadata.
6. Run evaluation scenarios and update consumer documentation.

## Troubleshooting

### The orchestration skill is missing

List the version-pinned skill source and reinstall the named skill:

```bash
npx skills add \
  Legal-and-General/canopy/skills/best-practice#vx.x.x \
  --list
```

### A component skill or index appears stale

Confirm that the skill tag exactly matches the resolved Canopy version. Refresh the
version-pinned skills only after receiving permission to change installed agent assets.

### A selector or input cannot be verified

Do not use it. Check the installed package's public declarations and matching tagged
documentation. Report the requirement as unsupported or uncertain if evidence remains
incomplete.

### Sources disagree

Treat public exports and Angular source as authoritative for technical API facts, and reviewed
guides/skills as authoritative for semantic design guidance. Report an actionable mismatch;
do not silently choose the last source read.

## Limitations and Non-Goals

The first delivery does not:

- provide an MCP server or hosted service;
- send consumer code to an external service;
- generate complete application journeys;
- replace detailed component skills or Storybook;
- infer every design decision from TypeScript;
- guarantee visual fidelity without rendering;
- automatically publish unreviewed AI-generated guidance.

## Future MCP Decision Criteria

Consider an MCP only if measured evaluation identifies a remaining need, such as deterministic
template validation, a standard query interface for consumers unable to install skills,
metadata too large to bundle efficiently, or centrally updated knowledge that cannot follow
release tags.

Review discovery accuracy, composition accuracy, context size, installation experience,
supported agent products, maintenance time, and remaining template-validation gaps before
starting MCP implementation.
