# Canopy Copilot Skills

Canopy publishes installable [Copilot skills](https://docs.github.com/en/copilot/concepts/agents/about-agent-skills) for two purposes:

- **Migration skills** — guide your agent to apply breaking-change migrations after a major version upgrade.
- **Best practice skills** — guide your agent to use Canopy components correctly: imports, inputs, dos and don'ts.

## Installing a skill

Skills are installed via the [`skills` CLI](https://www.npmjs.com/package/skills) and work with GitHub Copilot, Claude Code, Cursor, and [40+ other coding agents](https://www.npmjs.com/package/skills#supported-agents).

```bash
# List all available skills
npx skills add Legal-and-General/canopy --list

# Install a specific migration skill
npx skills add Legal-and-General/canopy --skill canopy-v43-migration

# List all available best practice skills
npx skills add Legal-and-General/canopy/skills/best-practice#vx.x.x --list

# Install a specific best practice skill
npx skills add Legal-and-General/canopy/skills/best-practice#vx.x.x --skill canopy-button

# Install all best practice skills
npx skills add Legal-and-General/canopy/skills/best-practice#vx.x.x --skill '*'
```

> **Important — best practice skills:** Always pin the install to the git tag that matches the version of Canopy installed in your project. This ensures the skill content reflects the API and behaviour of that release rather than the latest code on `main`, which may contain unreleased changes.
>
> ```bash
> # Replace vx.x.x with the Canopy version in your package.json
> npx skills add Legal-and-General/canopy/skills/best-practice#vx.x.x --skill canopy-button
> npx skills add Legal-and-General/canopy/skills/best-practice#vx.x.x --skill '*'
> ```

---

## Setting up skills in your project

This section explains how to set up the skills so that your agent uses them reliably.

### 1. Install every best practice skill at your Canopy version

Find the Canopy version in your `package.json`, then install all best practice skills,
including the orchestration skill, from the matching tag:

```bash
# Replace vx.x.x with the Canopy version in your package.json
npx skills add Legal-and-General/canopy/skills/best-practice#vx.x.x --skill '*'
```

The CLI asks which agent you use and copies the skills into that agent's skills folder (for
example, `.agents/skills/` for GitHub Copilot or `.claude/skills/` for Claude Code). It also
records the source and tag in `skills-lock.json`. Commit both so everyone working on the
project uses the same skills.

Installing every skill is recommended. The orchestration skill coordinates the component
skills, so it works best when they are all installed.

### 2. Tell your agent to use the skills

Agents choose which installed skills to load by comparing your request with each skill's
description. This usually works, but it is not guaranteed. A request that does not mention
Canopy (for example, "add a toast notification") may not load any Canopy skill, and a request
naming one component may load only that component's skill.

**Recommended:** add this to your repository's agent instructions file, such as
`.github/copilot-instructions.md` or `AGENTS.md`. It makes the skills load consistently and
makes the agent plan every requested element before editing. In testing, it made the biggest
difference to results.

```markdown
## Canopy UI

This project uses Canopy (`@legal-and-general/canopy`) at the version in `package.json`.

Before editing any UI:

1. Read the `canopy-ui-orchestration` skill and the `canopy-*` skill for each component you plan to use.
2. List every element the request asks for and the Canopy component you will use for each.
   If the request is ambiguous (for example, a new page or an existing one), ask before editing.
3. Use only Canopy components, directives, pipes, inputs, outputs, tokens and assets that the installed Canopy version provides.

When you finish, say which requested elements you built, which existing ones you reused and which you did not build.
```

### 3. Describe what you need, not just the component

Describe the intent, content, actions and constraints, and let the agent choose the
components. For example, "Add Continue and Cancel actions to the form card" gives the agent
more to work with than "add a button group". Other examples:

- "Show a prominent success message with an illustration and a link."
- "Build a responsive content area containing radio choices and validation."
- "Review this icon-only action for Canopy and accessibility compliance."
- "Find the supported replacement for this deprecated Canopy component."

### 4. Reinstall the skills when you upgrade Canopy

Skills describe the API of the version they were installed from. After upgrading Canopy,
reinstall them at the new tag so your agent does not use outdated guidance:

```bash
npx skills add Legal-and-General/canopy/skills/best-practice#vy.y.y --skill '*'
```

For a major version upgrade, apply the matching [migration skill](#migration-skills) first.

### 5. Check that the skills are being used

- Ask the agent which skills it used for a change. If it did not use any Canopy skill for
  UI work, check the instruction from step 2.
- Review generated markup against the component skill or the Storybook documentation for
  your version.
- If the agent uses a selector or input you cannot find in the installed package, treat it
  as invented. Remove it and ask the agent to check the installed Canopy version.

---

## Migration Skills

These skills guide your AI coding agent to apply breaking changes after a major version upgrade.

Once installed, ask your agent:

> "Apply the Canopy v43 migration to my project."

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

These skills guide your AI coding agent to use Canopy components and foundations correctly — covering imports, inputs, dos and don'ts, accessibility, and design constraints.

The set includes `canopy-ui-orchestration`, which helps the agent plan every requested element,
choose between Canopy components and check the installed version, then loads the relevant
component skills. It does not replace them, or Storybook, testing and design review, and an
agent may not follow every rule it reads.

> **Note:** Best practice skills are available from tag `v24.0.0` onwards.

Once installed, your agent will automatically apply the best practices whenever it works with the relevant component. For example, after installing `canopy-button` you can ask:

> "Add a primary button that submits the form."

Best practice skills are generated from the Canopy Storybook documentation using the [Best Practice Skill Generator](.github/agents/best-practice-skill-generator.agent.md) agent.

### Generating best practice skills

To generate or regenerate skills, use the **Best Practice Skill Generator** agent in your IDE:

> "Generate best practice skills for the button component."
> "Generate best practice skills for all forms components."
> "Generate best practice skills for all components."

The agent reads the `guide.mdx` documentation, stories, and documentation images (including dos and don'ts screenshots) for each component, then writes a `SKILL.md` to `skills/best-practice/<name>/`.

### Maintaining the orchestration skill

The `canopy-ui-orchestration` skill is not generated. Edit
`skills/best-practice/canopy-ui-orchestration/SKILL.md` by hand when a change affects how
components are chosen or combined, for example:

- a new component, or a removed or renamed one;
- a new or changed composition rule in a component guide;
- a new common term that should map to a Canopy component.

Keep it short: component-specific guidance belongs in that component's guide and skill. Test
changes in a consumer project, with and without the skill installed.

### Available best practice skills

<!-- Best practice skills will appear here as they are generated. -->

| Skill | Covers | Notes |
|---|---|---|
| `canopy-ui-orchestration` | Version-aware discovery and composition across Canopy capabilities | Install alongside detailed skills |
| **Foundations** | | |
| `canopy-colour-foundation` | Colour palette, design tokens, modes, tones, accessibility principles | — |
| `canopy-colour-directive` | `lgColour` directive, applying colour modes and themes to components | — |
| `canopy-typography` | Productive vs expressive type, font sizes, weights, CSS variables | — |
| `canopy-design-tokens` | Token tiers, semantic vs component tokens, usage priority | — |
| `canopy-layout-grid-and-spacing` | Breakpoints, responsive grid, spacing variables | — |
| `canopy-heading` | `LgHeadingComponent`, heading levels, usage restrictions | — |
| `canopy-separator` | `LgSeparatorComponent`, variants, `hasRole` input | — |
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
| `canopy-hero-img` | `LgHeroImgComponent`, imageUrl, overlap, grid requirements | — |
| **Actions** | | |
| `canopy-button` | Button variants, priorities, sizes, icon usage, dos and don'ts | — |
| `canopy-filter-container` | `LgFilterContainerComponent`, filter button group pattern | — |
| **Feedback** | | |
| `canopy-alert` | `LgAlertComponent`, variants, icon usage, dos and don'ts | — |
| `canopy-banner` | `LgBannerComponent`, variants, dismissal, dos and don'ts | — |
| `canopy-spinner` | `LgSpinnerComponent`, sizes, accessible usage | — |
| `canopy-skeleton` | `LgSkeletonDirective` (`[lgSkeleton]`), animation, screen reader behaviour | — |
| `canopy-progress-indicator` | `LgProgressIndicatorComponent`, steps, current step | — |
| `canopy-sr-alert-message` | `LgSrAlertMessageDirective`, `[lgSrAlertMessage]`, live region, screen reader only | — |
| `canopy-notice` | `LgNoticeComponent`, title, description, icon | — |
| **Data Display** | | |
| `canopy-data-point` | `LgDataPointComponent`, label/value/list, heading level | — |
| `canopy-accordion` | `LgAccordionComponent`, multi, lazy content, outputs | — |
| `canopy-details` | `LgDetailsComponent`, status, role="alert" variants, outputs | — |
| `canopy-table` | `lg-table` directives, variants, expandable rows, accessibility | — |
| `canopy-list` | `LgListWithIconsComponent`, icon colour, expressive styling | — |
| `canopy-card` | `LgCardComponent`, templates, navigation card, card group | — |
| `canopy-promotions` | Promotions pattern using `LgCardComponent`, grid layouts, image/pictogram templates | Pending (due for brand modernisation) |
| **Navigation** | | |
| `canopy-breadcrumb` | `LgBreadcrumbComponent`, current page, ellipsis, variants | — |
| `canopy-tabs` | Tabbed content vs tabbed navigation, inputs, outputs | — |
| `canopy-pagination` | `LgPaginationComponent`, totalItems, currentPage, PageData | — |
| `canopy-link-menu` | `LgLinkMenuComponent`, item text, right icon behaviour | — |
| `canopy-side-nav` | Side nav full component set, mobile behaviour, router-outlet | — |
| **Forms** | | |
| `canopy-forms-input` | `LgInputFieldComponent`, prefix/suffix, block, showLabel | — |
| `canopy-forms-select` | `LgSelectFieldComponent`, when to use vs other controls | — |
| `canopy-forms-date` | `LgDateFieldComponent`, ISO 8601 output, validation priority | — |
| `canopy-forms-sort-code` | `lgSortCode` directive, auto-format, hint text requirement | — |
| `canopy-forms-validation` | `LgValidationComponent`, error state matcher, dynamic rules | — |
| `canopy-forms-design` | Single-page and multi-page journeys, field layout, validation, and actions | — |
| `canopy-forms-radio` | `LgRadioGroupComponent`, inline, value, max 5 options | — |
| `canopy-forms-segment` | Segment group/button, stack input, 2–5 buttons | — |
| `canopy-forms-checkbox` | `LgToggleComponent` (checkbox), group, size, inline | — |
| `canopy-forms-switch` | `LgToggleComponent` (switch), deprecation/removal migration guidance | Deprecated/Removed |
| `canopy-forms-filter-buttons` | Filter radio/checkbox, max 10 options, default deselected | — |
| **Utilities** | | |
| `canopy-pictogram` | `LgPictogramComponent`, sizes, colour inputs, global branding | — |
| `canopy-flag-icon` | `LgFlagIconComponent`, country flags, usage with country names | — |
| `canopy-icon` | `LgIconComponent`, sizing, colour, aria-hidden | — |
| `canopy-focus` | `LgFocusDirective`, programmatic focus | — |
| `canopy-shadow` | `LgShadowDirective` — removed in v30, migration guidance | Removed |
| `canopy-show-at` | `LgShowAtDirective`, breakpoint-based visibility | — |
| `canopy-hide-at` | `LgHideAtDirective`, breakpoint-based hiding | — |
| `canopy-orientation` | `LgOrientationDirective`, responsive vertical/horizontal layout | — |
| `canopy-feature-toggle` | `LgFeatureToggleModule`, directive, route guard | — |
| `canopy-pipes-camel-case` | `LgCamelCasePipe` | — |
| `canopy-pipes-kebab-case` | `LgKebabCasePipe` | — |
| **Deprecated/Removed** | | |
| `canopy-carousel` | Deprecation notice for `LgCarouselComponent` | Deprecated |
| `canopy-brand-icon` | Removal notice for `LgBrandIconComponent` | Removed |
| `canopy-forms-switch` | Removal notice for `lg-switch` and `variant="switch"` migration paths | Removed |
| `canopy-quick-action` | Removal notice for `lg-quick-action` and replacements using button/link patterns | Removed |
| **Styles** | | |
| `canopy-link` | Anchor styles, external links, icons in links, colour modes | — |
| `canopy-utils` | `lg-visually-hidden`, `lg-unstyled-link` CSS utility classes | — |
| `canopy-mixins` | `lg-breakpoint`, `lg-font-size`, `lg-focus-outline`, `lg-link`, `lg-status`, and other SCSS mixins | — |
