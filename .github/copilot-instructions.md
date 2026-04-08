# Canopy Copilot Instructions

## Overview

Canopy is Legal & General's Angular component library and design system. It is an opinionated design system with a 1-to-1 mapping between design and development implementation. Applications using Canopy should require no custom styles. See `docs/BEST_PRACTICE.md` for the design philosophy.

## Language

Always use **British English (en-GB)** in all code comments, documentation, commit messages, PR descriptions, and any other written content. For example: use "colour" not "color", "initialise" not "initialize", "behaviour" not "behavior".

## Tech Stack

Check `package.json` for current versions of all dependencies. The library uses Angular (standalone components), RxJS, TypeScript, Storybook, Jest, and Percy.

- **Angular guidance**: Follow `.agents/skills/angular-developer/SKILL.md` for Angular-specific code generation and best practices.

## Project Structure

```
projects/canopy/src/lib/    # All component source code (47+ components)
projects/canopy/src/styles/ # Global SCSS styles
projects/canopy/src/public-api.ts  # Public API barrel — update when adding new exports
.storybook/                 # Storybook global configuration
.github/                    # Workflows, PR templates, issue templates
commitlint.config.js        # Commit linting (extends @commitlint/config-angular)
jest.config.js              # Jest test configuration
.percy.yml                  # Percy visual test configuration
eslint-configs/             # ESLint rules (JS, TS, template)
.stylelintrc                # StyleLint rules (BEM, SCSS, postcss-scss)
.prettierrc                 # Prettier configuration
```

Each component lives in `projects/canopy/src/lib/<component>/` and follows this structure:

```
<component>.component.ts        # Component class (standalone)
<component>.component.html      # Template
<component>.component.scss      # Styles (BEM naming)
<component>.component.spec.ts   # Unit tests
<component>.interface.ts        # TypeScript interfaces and types
index.ts                        # Barrel export
docs/
  <component>.stories.ts        # Storybook stories
  guide.mdx                     # Component documentation
```

## Development Commands

| Task                        | Command                    |
|-----------------------------|----------------------------|
| Start Storybook (local dev) | `npm start`                |
| Build library               | `npm run build`            |
| Run unit tests              | `npm test`                 |
| Run unit tests (CI mode)    | `npm run test:ci`          |
| Run visual tests (Percy)    | `npm run test:visual`      |
| Lint (ESLint + StyleLint)   | `npm run lint`             |
| Interactive commit          | `npm run commit`           |
| Generate icons              | `npm run generate:icons`   |
| Build Storybook             | `npm run build:storybook`  |

Always run `npm run build` after changes to verify there are no build errors. Also run `npm test` to ensure no unit tests are broken. To run a single spec file: `npm test -- <path-to-spec-file>`.

## Code Style

- **Component prefix**: `lg` (e.g. `LgButtonComponent`, selector `lg-button`)
- All Angular components are **standalone**
- **SCSS**: BEM naming convention; allowed units: `rem`, `em`, `%`, `ms`, `s`, `deg`, `vh`, `vw`, `fr`
- **Prettier**: 90-character line width, single quotes, trailing commas (see `.prettierrc`)
- **Linting**: ESLint rules in `eslint-configs/`; StyleLint rules in `.stylelintrc`
- Pre-commit hooks (lint-staged) auto-format and lint staged files

## Unit Tests

- Framework: Jest with `jest-preset-angular`, test environment `jsdom`
- Test files are co-located: `<component>.component.spec.ts`
- Use `ng-mocks` for mocking Angular components, directives, and pipes
- Coverage output: `coverage/` folder (json-summary, html, text-summary reporters)
- Run locally: `npm test`; in CI: `npm run test:ci`

Since components are standalone, configure `TestBed` using `imports`:

```typescript
TestBed.configureTestingModule({
  imports: [ LgMyComponent, MockComponent(LgDependencyComponent) ],
}).compileComponents();
```

## Storybook

- Run locally: `npm start`; build: `npm run build:storybook`
- Stories live in each component's `docs/` subfolder: `docs/<component>.stories.ts`
- Global configuration: `.storybook/`
- Every component must have at least one Storybook story
- Stories tagged `[Hidden]` or `DEPRECATED` are excluded from Percy snapshots

## Percy Visual Tests

Percy takes snapshots of Storybook stories for visual regression testing.

- Config: `.percy.yml` — snapshots at widths 1024px and 1280px
- Run locally: `npm run test:visual` (requires a Percy token)
- Stories with `[Hidden]` or `DEPRECATED` in their name are automatically excluded
- Percy runs automatically in CI on every pull request

## Documentation

Every component must have a `docs/guide.mdx` file documenting usage, variants, dos/don'ts, and all inputs/outputs. See `.github/instructions/component-docs.instructions.md` for the full template and structure to follow.

## Commit Linting

Follow the **Angular Conventional Commits** format, enforced by `commitlint` (`commitlint.config.js` extends `@commitlint/config-angular`):

```
<type>(<optional scope>): <short description>
```

Valid types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `revert`, `build`, `ci`

- Use `npm run commit` for the interactive Commitizen prompt rather than committing manually
- All commits must be **GPG signed**
- Breaking changes: append `!` after the type (e.g. `feat!:`) or include a `BREAKING CHANGE:` footer

## Branch Naming

Branches must use **kebab-case** (e.g. `feat/add-spinner`, `fix/card-padding`). This is enforced by a pre-push git hook. Do not push branches that do not comply with this convention.

Protected/release branches: `master`, `next`, `legacy`, and version patterns such as `1.x` and `1.2.x`.

## Pull Request Checklist

Before raising a PR, verify:

1. All commit messages follow the Angular conventional commits convention
2. Adequate test coverage is provided
3. A Storybook story is added or updated in the component's `docs/` folder
4. The `docs/guide.mdx` documentation is added or updated
5. New public features are added to `projects/canopy/src/public-api.ts`
6. Any changes to visible behaviour are validated against the test app where appropriate
