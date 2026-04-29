# Canopy Copilot Skills

Canopy publishes installable [Copilot skills](https://docs.github.com/en/copilot/concepts/agents/about-agent-skills) for two purposes:

- **Migration skills** — guide your agent to apply breaking-change migrations after a major version upgrade.
- **Best practice skills** — guide your agent to use Canopy components correctly: imports, inputs, dos and don'ts.

## Installing a skill

Skills are installed via the [`skills` CLI](https://www.npmjs.com/package/skills) and work with GitHub Copilot, Claude Code, Cursor, and [40+ other coding agents](https://www.npmjs.com/package/skills#supported-agents).

```bash
# List all available migration skills
npx skills add Legal-and-General/canopy --list

# Install a specific migration skill
npx skills add Legal-and-General/canopy --skill canopy-v25-migration

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

## Migration Skills

These skills guide your AI coding agent to apply breaking changes after a major version upgrade.

Once installed, ask your agent:
> "Apply the Canopy v25 migration to my project."

| Skill | Migrates | Release notes |
|---|---|---|
| `canopy-v25-migration` | v24 → v25 | [v25.0.0](https://github.com/Legal-and-General/canopy/releases/tag/v25.0.0) |
| `canopy-v24-migration` | v23 → v24 | [v24.0.0](https://github.com/Legal-and-General/canopy/releases/tag/v24.0.0) |
| `canopy-v23-migration` | v22 → v23 | [v23.0.0](https://github.com/Legal-and-General/canopy/releases/tag/v23.0.0) |
| `canopy-v22-migration` | v21 → v22 | [v22.0.0](https://github.com/Legal-and-General/canopy/releases/tag/v22.0.0) |
| `canopy-v21-migration` | v20 → v21 | [v21.0.0](https://github.com/Legal-and-General/canopy/releases/tag/v21.0.0) |

---

## Best Practice Skills

These skills guide your AI coding agent to use Canopy components and foundations correctly — covering imports, inputs, dos and don'ts, accessibility, and design constraints.

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

### Available best practice skills

<!-- Best practice skills will appear here as they are generated. -->

| Skill | Covers | Notes |
|---|---|---|
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
| `canopy-content-area` | `LgContentAreaComponent`, variants, heading level, nesting rules | — |
| `canopy-header` | `lg-header`, logo, primary nav, account menu, co-branding | — |
| `canopy-footer` | `lg-footer`, nav variants, logo, `rel="noopener"` | — |
| `canopy-hero` | `LgHeroComponent`, overlap, breadcrumb light variant | — |
| `canopy-hero-img` | `LgHeroImgComponent`, imageUrl, overlap, grid requirements | — |
| **Actions** | | |
| `canopy-button` | Button variants, priorities, sizes, icon usage, dos and don'ts | — |
| `canopy-quick-action` | `LgQuickActionComponent`, icon, label, disabled state | — |
| `canopy-filter-container` | `LgFilterContainerComponent`, filter button group pattern | — |
| **Feedback** | | |
| `canopy-alert` | `LgAlertComponent`, variants, icon usage, dos and don'ts | — |
| `canopy-banner` | `LgBannerComponent`, variants, dismissal, dos and don'ts | — |
| `canopy-spinner` | `LgSpinnerComponent`, sizes, accessible usage | — |
| `canopy-skeleton` | `LgSkeletonDirective` (`[lgSkeleton]`), animation, screen reader behaviour | — |
| `canopy-progress-indicator` | `LgProgressIndicatorComponent`, steps, current step | — |
| `canopy-sr-alert-message` | `LgSrAlertMessageDirective`, `[lgSrAlertMessage]`, live region, screen reader only | — |
| `canopy-primary-message` | `LgPrimaryMessageComponent`, title, description, icon | — |
| **Data Display** | | |
| `canopy-data-point` | `LgDataPointComponent`, label/value/list, heading level | — |
| `canopy-accordion` | `LgAccordionComponent`, multi, lazy content, outputs | — |
| `canopy-details` | `LgDetailsComponent`, status, role="alert" variants, outputs | — |
| `canopy-table` | `lg-table` directives, variants, expandable rows, accessibility | — |
| `canopy-list` | `LgListWithIconsComponent`, icon colour, expressive styling | — |
| `canopy-card` | `LgCardComponent`, templates, navigation card, card group | — |
| `canopy-promo-card` | `LgPromoCardComponent`, content limits, image requirements | — |
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
| `canopy-forms-radio` | `LgRadioGroupComponent`, inline, value, max 5 options | — |
| `canopy-forms-segment` | Segment group/button, stack input, 2–5 buttons | — |
| `canopy-forms-checkbox` | `LgToggleComponent` (checkbox), group, size, inline | — |
| `canopy-forms-switch` | `LgToggleComponent` (switch), immediate effect, fieldset | — |
| `canopy-forms-filter-buttons` | Filter radio/checkbox, max 10 options, default deselected | — |
| **Utilities** | | |
| `canopy-brand-icon` | `LgBrandIconComponent`, sizes, colour inputs, global branding | — |
| `canopy-flag-icon` | `LgFlagIconComponent`, country flags, usage with country names | — |
| `canopy-icon` | `LgIconComponent`, sizing, colour, aria-hidden | — |
| `canopy-focus` | `LgFocusDirective`, programmatic focus | — |
| `canopy-shadow` | `LgShadowDirective`, hover state | — |
| `canopy-show-at` | `LgShowAtDirective`, breakpoint-based visibility | — |
| `canopy-hide-at` | `LgHideAtDirective`, breakpoint-based hiding | — |
| `canopy-orientation` | `LgOrientationDirective`, responsive vertical/horizontal layout | — |
| `canopy-feature-toggle` | `LgFeatureToggleModule`, directive, route guard | — |
| `canopy-pipes-camel-case` | `LgCamelCasePipe` | — |
| `canopy-pipes-kebab-case` | `LgKebabCasePipe` | — |
| **Deprecated** | | |
| `canopy-carousel` | Deprecation notice for `LgCarouselComponent` | Deprecated |
| **Styles** | | |
| `canopy-link` | Anchor styles, external links, icons in links, colour modes | — |
| `canopy-utils` | `lg-visually-hidden`, `lg-unstyled-link` CSS utility classes | — |
| `canopy-mixins` | `lg-breakpoint`, `lg-font-size`, `lg-focus-outline`, `lg-link`, `lg-status`, and other SCSS mixins | — |
