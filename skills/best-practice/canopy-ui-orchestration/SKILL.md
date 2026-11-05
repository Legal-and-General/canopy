---
name: canopy-ui-orchestration
description: Version-aware discovery, selection and composition of Canopy components, directives, helpers, tokens, utilities and assets. Use for any Angular UI work that needs to choose, combine or verify Canopy capabilities, including building pages, forms, journeys and feedback states.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/docs/COPILOT_SKILLS.md
---

# Canopy UI Orchestration

Use the complete public surface of the installed `@legal-and-general/canopy` version before
creating custom UI. This skill helps you choose and combine Canopy capabilities. The
`canopy-*` skill for each component remains the authority on how to use that component.

## Boundaries

- Treat the project and its installed Canopy version as the source of truth for available
  selectors, exports, inputs, tokens, assets and supported states.
- Do not upgrade Canopy, copy private component markup or override internal selectors
  without approval.
- Do not create a fully custom substitute until you have assessed the installed Canopy
  components and compositions of public Canopy primitives.
- For a Canopy version upgrade, use the matching `canopy-vN-migration` skill.

## 1. Plan Before Editing

Before editing any file:

1. List every element the request asks for, and the Canopy capability you will use for each.
2. If the request is ambiguous (for example, a new page or an existing one), ask before
   editing.
3. Read the `canopy-*` skill for each capability you selected.

When you finish, say which requested elements you built, which existing ones you reused and
which you did not build.

## 2. Resolve the Version

1. Read the exact `@legal-and-general/canopy` version from `package.json`, and confirm it in
   the lockfile or installed package when available.
2. Check that the installed `canopy-*` skills and their `skills-lock.json` entries are pinned
   to the same version. If they are missing or pinned to a different version, report the
   mismatch and ask before reinstalling them. Do not rely on mismatched guidance.
3. Verify every selected capability's public export, selector, inputs, outputs, variants,
   content slots, tokens and asset names in the installed package. Search the project for
   established usage as additional evidence.
4. If a requested capability exists only in a newer Canopy version, say so and suggest the
   closest equivalent in the installed version.
5. Never silently upgrade Canopy, or use a selector, export, input, output, token or asset
   that the installed version does not provide.

## 3. Discover Capabilities

Search by the purpose of the UI, not only by a guessed component name. Consider the complete
public surface: components, directives, pipes, services, validators, tokens, mixins,
responsive utilities, icons, pictograms and documented composition patterns. Load only the
`canopy-*` skills you need.

Use this non-exhaustive guide, then confirm the installed API:

| UI need                           | Investigate                                                        |
| --------------------------------- | ------------------------------------------------------------------ |
| Page shell and content width      | Page, content area, grid, container, row and column                |
| Page or journey content container | Content area and card                                              |
| Alignment and responsive layout   | Grid, orientation, show-at, hide-at and layout utilities           |
| Space between or within elements  | Margin, padding and row-gap directives, plus spacing tokens        |
| Text hierarchy                    | Heading and typography                                             |
| Actions and navigation            | Button, link, link menu, breadcrumb, tabs, pagination and side nav |
| Forms and validation              | Input, select, checkbox, radio, date, validation and hint          |
| Status and feedback               | Alert, banner, notice, spinner, skeleton and progress indicator    |
| Grouped or disclosed content      | Card, details, accordion, table, list, separator and modal         |
| Visual assets                     | Icon, pictogram, flag icon and hero image                          |

Map common non-Canopy terms to the Canopy capability before searching:

| Requested term                  | Canopy capability                             |
| ------------------------------- | --------------------------------------------- |
| Toast, snackbar, inline message | Alert                                         |
| Panel, tile                     | Card                                          |
| Loader, busy indicator          | Spinner, or skeleton for content placeholders |
| Stepper, wizard progress        | Progress indicator                            |
| Collapsible, expander           | Details or accordion                          |
| Dialog, popup                   | Modal                                         |

If no Canopy capability matches, say so rather than inventing a selector or API.

## 4. Select and Compose

- Prefer a documented Canopy component or directive that already owns the required semantics
  and behaviour.
- Place page and journey content in a content area or card, rather than leaving it loose in a
  grid or container. Choose by purpose:
  - **Content area:** the main content or task of a page, such as forms, tables and detailed
    information. Use the `form-journey` variant for form journeys.
  - **Card:** a discrete, self-contained piece of information or functionality, such as a
    summary, navigation or a call to action. Cards are not for main page structure.
  - Never put a card or another content area inside a content area. Place them as siblings.
  - In short: main page content or interaction → content area; small, independent
    information or action → card.

  Read the `canopy-content-area` and `canopy-card` skills before building either.

- Configure public inputs, outputs, variants and content slots instead of recreating the
  component.
- For composite patterns, follow the documented composition in full: parent and child
  components, projected slots, header, content and footer regions, button groups, icons,
  assets and spacing ownership. A valid top-level selector alone is not enough.
- Preserve conditional guidance such as "one", "two or more", "at most" and "when related".
- Do not override a component's built-in spacing. Use spacing directives only for space
  between components.
- Prefer component tokens, then semantic tokens. Use foundation tokens only when no more
  specific token exists.
- Keep custom wrappers thin and built from public Canopy APIs.
- Import every symbol from `@legal-and-general/canopy`, never from Canopy's internal paths.

## 5. Verify

Before reporting completion:

1. Confirm every import is exported by the installed version, and that every Canopy
   component, directive and pipe used in a template is in the standalone component's
   `imports` array.
2. Check that every element you place inside a Canopy component is accepted by that
   component's content selectors in the installed package (the `ngContentSelectors` in its
   type declarations). Content that does not match is silently dropped and is not a build
   error.
3. Run the project's type-check, tests, lint or build where the user has not asked you not to.
4. Inspect the rendered DOM and computed styles when the result depends on composition or
   layout.
5. Check keyboard use, focus, accessible names and status announcements.
6. Report version gaps, unsupported requirements and anything you did not verify.
