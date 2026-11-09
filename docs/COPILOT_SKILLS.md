# Canopy Copilot Skills

Canopy publishes installable [Copilot skills](https://docs.github.com/en/copilot/concepts/agents/about-agent-skills) for two purposes:

- **Migration skills** — guide your agent to apply breaking-change migrations after a major version upgrade.
- **Best practice skills** — guide your agent to use Canopy components correctly: imports, inputs, dos and don'ts.

## Installing a skill

Skills are installed via the [`skills` CLI](https://www.npmjs.com/package/skills) and work with GitHub Copilot, Claude Code, Cursor, and [40+ other coding agents](https://www.npmjs.com/package/skills#supported-agents).

- [Install migration skills](#installing-migration-skills)
- [Install best practice skills](#installing-best-practice-skills)

---

## Migration Skills

Upgrading Canopy can mean changing more than a version number. Components,
inputs and usage patterns may change, and an AI coding agent needs the
release-specific context to update your application correctly.

A migration skill is a small, installable instruction package based on Canopy's
release notes. It explains the breaking changes for a particular major-version
upgrade and gives your agent guidance on finding affected code, applying the
replacements and checking the result.

Use migration skills when upgrading an existing application. They help make the
upgrade more systematic, but do not replace reviewing the changes, running your
tests and checking the resulting interface. For day-to-day development, use
[best practice skills](./COPILOT_SKILLS.md#best-practice-skills).

### Installing migration skills

Install migration skills using the [`skills` CLI](https://www.npmjs.com/package/skills),
which supports [GitHub Copilot and other coding agents](https://www.npmjs.com/package/skills#supported-agents):

```bash
# List all available skills
npx skills add Legal-and-General/canopy --list

# Install a specific migration skill
npx skills add Legal-and-General/canopy --skill canopy-v43-migration
```

Once installed, ask your agent:
> "Apply the Canopy v43 migration to my project."

Once your application is fully migrated, remove the skill to keep your agent's
context clean:

```bash
npx skills remove Legal-and-General/canopy --skill canopy-v43-migration
```

| Skill | Migrates | Release notes |
|---|---|---|
| `canopy-v43-migration` | v42 → v43 | [v43.0.0](https://github.com/Legal-and-General/canopy/releases/tag/v43.0.0) |
| `canopy-v42-migration` | v41 → v42 | [v42.0.0](https://github.com/Legal-and-General/canopy/releases/tag/v42.0.0) |
| `canopy-v41-migration` | v40 → v41 | [v41.0.0](https://github.com/Legal-and-General/canopy/releases/tag/v41.0.0) |
| `canopy-v40-migration` | v39 → v40 | [v40.0.0](https://github.com/Legal-and-General/canopy/releases/tag/v40.0.0) |
| `canopy-v39-migration` | v38 → v39 | [v39.0.0](https://github.com/Legal-and-General/canopy/releases/tag/v39.0.0) |
| `canopy-v38-migration` | v37 → v38 | [v38.0.0](https://github.com/Legal-and-General/canopy/releases/tag/v38.0.0) |
| `canopy-v37-migration` | v36 → v37 | [v37.0.0](https://github.com/Legal-and-General/canopy/releases/tag/v37.0.0) |
| `canopy-v36-migration` | v35 → v36 | [v36.0.0](https://github.com/Legal-and-General/canopy/releases/tag/v36.0.0) |
| `canopy-v35-migration` | v34 → v35 | [v35.0.0](https://github.com/Legal-and-General/canopy/releases/tag/v35.0.0) |
| `canopy-v34-migration` | v33 → v34 | [v34.0.0](https://github.com/Legal-and-General/canopy/releases/tag/v34.0.0), [v34.2.0](https://github.com/Legal-and-General/canopy/releases/tag/v34.2.0), [v34.3.0](https://github.com/Legal-and-General/canopy/releases/tag/v34.3.0) |
| `canopy-v33-migration` | v32 → v33 | [v33.0.0](https://github.com/Legal-and-General/canopy/releases/tag/v33.0.0) |
| `canopy-v30-migration` | v29 → v30 | [v30.0.0](https://github.com/Legal-and-General/canopy/releases/tag/v30.0.0) |
| `canopy-v29-migration` | v28 → v29 | [v29.0.0](https://github.com/Legal-and-General/canopy/releases/tag/v29.0.0) |
| `canopy-v28-migration` | v27 → v28 | [v28.0.0](https://github.com/Legal-and-General/canopy/releases/tag/v28.0.0) |
| `canopy-v27-migration` | v26 → v27 | [v27.0.0](https://github.com/Legal-and-General/canopy/releases/tag/v27.0.0) |
| `canopy-v26-migration` | v25 → v26 | [v26.0.0](https://github.com/Legal-and-General/canopy/releases/tag/v26.0.0) |
| `canopy-v25-migration` | v24 → v25 | [v25.0.0](https://github.com/Legal-and-General/canopy/releases/tag/v25.0.0) |
| `canopy-v24-migration` | v23 → v24 | [v24.0.0](https://github.com/Legal-and-General/canopy/releases/tag/v24.0.0) |
| `canopy-v23-migration` | v22 → v23 | [v23.0.0](https://github.com/Legal-and-General/canopy/releases/tag/v23.0.0) |
| `canopy-v22-migration` | v21 → v22 | [v22.0.0](https://github.com/Legal-and-General/canopy/releases/tag/v22.0.0) |
| `canopy-v21-migration` | v20 → v21 | [v21.0.0](https://github.com/Legal-and-General/canopy/releases/tag/v21.0.0) |

---

## Best Practice Skills

AI coding agents are only as good as the context they are given. Without it,
they produce code that looks reasonable but does not follow Canopy's guidance,
and reasonable is not the same as correct.

A best practice skill is a small, installable instruction package containing
curated knowledge from Canopy's documentation: imports, inputs, usage patterns,
and dos and don'ts. Once installed, your agent reads the relevant skill
automatically whenever it works with that part of Canopy. Skills are pinned to
the Canopy version you use, so the guidance matches the API in your project.

Skills cover:

- **Foundations** — colour, typography, design tokens, spacing, grid and layout.
- **Principles** — accessibility and writing.
- **Components** — buttons, forms, cards, tables, navigation, feedback and more.
- **Utilities** — mixins, pipes, and directives such as `lgSkeleton`, `lgFocus`
  and `lgShowAt`.

For example, `canopy-forms-date` explains that the date field outputs ISO 8601
values and how validation messages are prioritised, while `canopy-grid` covers
responsive columns, offsets, and how containers and rows relate.

Canopy aims for a one-to-one mapping between design and development; these
skills extend that principle into AI-assisted workflows. They reduce avoidable
corrections and review overhead, but do not replace reviewing and testing
generated code. Use them for day-to-day development; for major-version
upgrades, see [migration skills](./COPILOT_SKILLS.md#migration-skills).

> **Note:** Best practice skills are available from tag `v24.0.0` onwards.

### Installing best practice skills

Install best practice skills using the [`skills` CLI](https://www.npmjs.com/package/skills),
which supports [GitHub Copilot and other coding agents](https://www.npmjs.com/package/skills#supported-agents):

```bash
# List all available best practice skills
npx skills add Legal-and-General/canopy/skills/best-practice#vx.x.x --list

# Install a specific best practice skill
npx skills add Legal-and-General/canopy/skills/best-practice#vx.x.x --skill canopy-button

# Install all best practice skills
npx skills add Legal-and-General/canopy/skills/best-practice#vx.x.x --skill '*'
```

> **Important:** Always pin the install to the git tag that matches the version of Canopy installed in your project. This ensures the skill content reflects the API and behaviour of that release rather than the latest code on `master`, which may contain unreleased changes.
>
> ```bash
> # Replace vx.x.x with the Canopy version in your package.json
> npx skills add Legal-and-General/canopy/skills/best-practice#vx.x.x --skill canopy-button
> npx skills add Legal-and-General/canopy/skills/best-practice#vx.x.x --skill '*'
> ```

Once installed, your agent will automatically apply the best practices whenever it works with the relevant component. For example, after installing `canopy-button` you can ask:
> "Add a primary button that submits the form."

### Generating best practice skills

For contributor guidance on generating these skills, see
[agents and workflows](./AGENTIC_AI.md#agents).

### Available best practice skills

<!-- Best practice skills will appear here as they are generated. -->

The Notes column flags skills whose Storybook guide is still **Pending** brand
modernisation. Their guidance reflects the current implementation and may
change when the component is modernised.

| Skill | Covers | Notes |
|---|---|---|
| **Foundations** | | |
| `canopy-colour-foundation` | Colour palette, design tokens, modes, tones, accessibility principles | — |
| `canopy-colour-directive` | `lgColour` directive, applying colour modes and themes to components | — |
| `canopy-typography` | Productive vs expressive type, font sizes, weights, CSS variables | — |
| `canopy-design-tokens` | Token tiers, semantic vs component tokens, usage priority | — |
| `canopy-layout-grid-and-spacing` | Breakpoints, responsive grid, spacing variables | — |
| `canopy-heading` | `LgHeadingComponent`, heading levels, usage restrictions | — |
| `canopy-separator` | `LgSeparatorComponent`, variants, `hasRole` input | Pending brand modernisation |
| `canopy-spacing-margin` | `LgMarginDirective`, all margin inputs, breakpoint overrides | — |
| `canopy-spacing-padding` | `LgPaddingDirective`, all padding inputs, breakpoint overrides | — |
| `canopy-spacing-row-gap` | `LgRowGapDirective`, row-gap with grid containers | — |
| **Principles** | | |
| `canopy-accessibility` | lang attribute, skip link, alt text, form a11y, ARIA, landmarks | — |
| `canopy-writing` | Tone of voice, content principles, button/link/error message copy | — |
| **Layout** | | |
| `canopy-page` | `LgPageComponent`, skip link, slot projection | — |
| `canopy-grid` | `lgContainer`, `lgRow`, `lgCol`, responsive columns, offsets | — |
| `canopy-content-area` | `LgContentAreaComponent`, form journey stages, progress, success confirmation, heading level | — |
| `canopy-header` | `lg-header`, logo, primary nav, account menu, co-branding | — |
| `canopy-footer` | `lg-footer`, nav variants, logo, `rel="noopener"` | — |
| `canopy-hero` | `LgHeroComponent`, overlap, breadcrumb light variant | — |
| **Actions** | | |
| `canopy-button` | Button variants, priorities, sizes, icon usage, dos and don'ts | — |
| `canopy-filter-container` | `LgFilterContainerComponent`, filter button group pattern | Pending brand modernisation |
| **Feedback** | | |
| `canopy-alert` | `LgAlertComponent`, variants, icon usage, dos and don'ts | — |
| `canopy-banner` | `LgBannerComponent`, variants, dismissal, dos and don'ts | — |
| `canopy-spinner` | `LgSpinnerComponent`, sizes, accessible usage | Pending brand modernisation |
| `canopy-skeleton` | `LgSkeletonDirective` (`[lgSkeleton]`), animation, screen reader behaviour | Pending brand modernisation |
| `canopy-progress-indicator` | `LgProgressIndicatorComponent`, steps, current step | Pending brand modernisation |
| `canopy-sr-alert-message` | `LgSrAlertMessageDirective`, `[lgSrAlertMessage]`, live region, screen reader only | Pending brand modernisation |
| `canopy-notice` | `LgNoticeComponent`, title, description, icon | — |
| `canopy-modal` | `LgModalComponent`, `LgModalService`, `lgModalTrigger`, overlay closing | Pending brand modernisation |
| **Data Display** | | |
| `canopy-data-point` | `LgDataPointComponent`, label/value/list, heading level | — |
| `canopy-accordion` | `LgAccordionComponent`, multi, lazy content, outputs | Pending brand modernisation |
| `canopy-details` | `LgDetailsComponent`, status, role="alert" variants, outputs | — |
| `canopy-table` | `lg-table` directives, variants, expandable rows, accessibility | — |
| `canopy-list` | `LgListWithIconsComponent`, icon colour, expressive styling | — |
| `canopy-card` | `LgCardComponent`, templates, navigation card, card group | — |
| `canopy-promotions` | Promotions pattern using `LgCardComponent`, grid layouts, image/pictogram templates | — |
| **Navigation** | | |
| `canopy-breadcrumb` | `LgBreadcrumbComponent`, current page, ellipsis, variants | — |
| `canopy-tabs` | Tabbed content vs tabbed navigation, inputs, outputs | Pending brand modernisation |
| `canopy-pagination` | `LgPaginationComponent`, totalItems, currentPage, PageData | — |
| `canopy-link-menu` | `LgLinkMenuComponent`, item text, right icon behaviour | — |
| `canopy-side-nav` | Side nav full component set, mobile behaviour, router-outlet | Pending brand modernisation |
| **Forms** | | |
| `canopy-forms-input` | `LgInputFieldComponent`, prefix/suffix, block, showLabel | — |
| `canopy-forms-select` | `LgSelectFieldComponent`, when to use vs other controls | — |
| `canopy-forms-date` | `LgDateFieldComponent`, ISO 8601 output, validation priority | Pending brand modernisation |
| `canopy-forms-sort-code` | `lgSortCode` directive, auto-format, hint text requirement | Pending brand modernisation |
| `canopy-forms-validation` | `LgValidationComponent`, error state matcher, dynamic rules | — |
| `canopy-forms-design` | Single-page and multi-page journeys, field layout, validation, and actions | Pending brand modernisation |
| `canopy-forms-radio` | `LgRadioGroupComponent`, inline, value, max 5 options | — |
| `canopy-forms-segment` | Segment group/button, stack input, 2–5 buttons | — |
| `canopy-forms-checkbox` | `LgToggleComponent` (checkbox), group, size, inline | — |
| `canopy-forms-filter-buttons` | Filter radio/checkbox, max 10 options, default deselected | Pending brand modernisation |
| **Utilities** | | |
| `canopy-pictogram` | `LgPictogramComponent`, sizes, colour inputs, global branding | — |
| `canopy-flag-icon` | `LgFlagIconComponent`, country flags, usage with country names | — |
| `canopy-icon` | `LgIconComponent`, sizing, colour, aria-hidden | — |
| `canopy-focus` | `LgFocusDirective`, programmatic focus | Pending brand modernisation |
| `canopy-show-at` | `LgShowAtDirective`, breakpoint-based visibility | Pending brand modernisation |
| `canopy-hide-at` | `LgHideAtDirective`, breakpoint-based hiding | Pending brand modernisation |
| `canopy-orientation` | `LgOrientationDirective`, responsive vertical/horizontal layout | Pending brand modernisation |
| `canopy-feature-toggle` | `LgFeatureToggleModule`, directive, route guard | — |
| `canopy-pipes-camel-case` | `LgCamelCasePipe` | — |
| `canopy-pipes-kebab-case` | `LgKebabCasePipe` | — |
| **Deprecated/Removed** | | |
| `canopy-brand-icon` | Removal notice for `LgBrandIconComponent` | Removed |
| `canopy-shadow` | Removal notice for `LgShadowDirective` (removed in v30) and migration guidance | Removed |
| `canopy-forms-switch` | Removal notice for `lg-switch` and `variant="switch"` migration paths | Removed |
| `canopy-quick-action` | Removal notice for `lg-quick-action` and replacements using button/link patterns | Removed |
| **Styles** | | |
| `canopy-link` | Anchor styles, external links, icons in links, colour modes | — |
| `canopy-utils` | `lg-visually-hidden`, `lg-unstyled-link` CSS utility classes | Pending brand modernisation |
| `canopy-mixins` | `lg-breakpoint`, `lg-font-size`, `lg-focus-outline`, `lg-link`, `lg-status`, and other SCSS mixins | Pending brand modernisation |
