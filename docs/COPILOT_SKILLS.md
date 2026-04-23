# Canopy Copilot Skills

Canopy publishes installable [Copilot skills](https://docs.github.com/en/copilot/concepts/agents/about-agent-skills) for two purposes:

- **Migration skills** — guide your agent to apply breaking-change migrations after a major version upgrade.
- **Best practice skills** — guide your agent to use Canopy components correctly: imports, inputs, dos and don'ts.

## Installing a skill

Skills are installed via the [`skills` CLI](https://www.npmjs.com/package/skills) and work with GitHub Copilot, Claude Code, Cursor, and [40+ other coding agents](https://www.npmjs.com/package/skills#supported-agents).

```bash
# List all available Canopy skills without installing
npx skills add Legal-and-General/canopy --list

# Install a specific skill (will install the latest)
npx skills add Legal-and-General/canopy --skill best-practice/button

# Install a specific skill and pin to the Canopy version in your package.json
npx skills add Legal-and-General/canopy#v23.0.0 --skill best-practice/button

# Install all available Canopy skills
npx skills add Legal-and-General/canopy --skill '*'
```

> **Important — best practice skills:** Always pin the install to the git tag that matches the version of Canopy installed in your project. This ensures the skill content reflects the API and behaviour of that release rather than the latest code on `main`, which may contain unreleased changes.
>
> ```bash
> # Replace v23.0.0 with the Canopy version in your package.json
> npx skills add Legal-and-General/canopy#v23.0.0 --skill best-practice/button
> npx skills add Legal-and-General/canopy#v23.0.0 --skill '*'
> ```

---

## Migration Skills

These skills guide your AI coding agent to apply breaking changes after a major version upgrade.

Once installed, ask your agent:
> "Apply the Canopy v23 migration to my project."

| Skill | Migrates | Release notes |
|---|---|---|
| `canopy-v23-migration` | v22 → v23 | [v23.0.0](https://github.com/Legal-and-General/canopy/releases/tag/v23.0.0) |
| `canopy-v22-migration` | v21 → v22 | [v22.0.0](https://github.com/Legal-and-General/canopy/releases/tag/v22.0.0) |
| `canopy-v21-migration` | v20 → v21 | [v21.0.0](https://github.com/Legal-and-General/canopy/releases/tag/v21.0.0) |

---

## Best Practice Skills

These skills guide your AI coding agent to use Canopy components and foundations correctly — covering imports, inputs, dos and don'ts, accessibility, and design constraints.

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
| `colour-foundation` | Colour palette, design tokens, modes, tones, accessibility principles | — |
| `colour-directive` | `lgColour` directive, applying colour modes and themes to components | — |
| `typography` | Productive vs expressive type, font sizes, weights, CSS variables | — |
| `design-tokens` | Token tiers, semantic vs component tokens, usage priority | — |
| `layout-grid-and-spacing` | Breakpoints, responsive grid, spacing variables | — |
| `heading` | `LgHeadingComponent`, heading levels, usage restrictions | — |
| `separator` | `LgSeparatorComponent`, variants, `hasRole` input | — |
| `spacing-margin` | `LgMarginDirective`, all margin inputs, breakpoint overrides | — |
| `spacing-padding` | `LgPaddingDirective`, all padding inputs, breakpoint overrides | — |
| `spacing-row-gap` | `LgRowGapDirective`, row-gap with grid containers | — |
| **Principles** | | |
| `accessibility` | lang attribute, skip link, alt text, form a11y, ARIA, landmarks | — |
| `writing` | Tone of voice, content principles, button/link/error message copy | — |
| **Layout** | | |
| `page` | `LgPageComponent`, skip link, slot projection | — |
| `grid` | `lgContainer`, `lgRow`, `lgCol`, responsive columns, offsets | — |
| `content-area` | `LgContentAreaComponent`, variants, heading level, nesting rules | — |
| `header` | `lg-header`, logo, primary nav, account menu, co-branding | — |
| `footer` | `lg-footer`, nav variants, logo, `rel="noopener"` | — |
| `hero` | `LgHeroComponent`, overlap, breadcrumb light variant | — |
| `hero-img` | `LgHeroImgComponent`, imageUrl, overlap, grid requirements | — |
| **Actions** | | |
| `button` | Button variants, priorities, sizes, icon usage, dos and don'ts | — |
| `quick-action` | `LgQuickActionComponent`, icon, label, disabled state | — |
| `filter-container` | `LgFilterContainerComponent`, filter button group pattern | — |
| **Feedback** | | |
| `alert` | `LgAlertComponent`, variants, icon usage, dos and don'ts | — |
| `banner` | `LgBannerComponent`, variants, dismissal, dos and don'ts | — |
| `spinner` | `LgSpinnerComponent`, sizes, accessible usage | — |
| `skeleton` | `LgSkeletonDirective` (`[lgSkeleton]`), animation, screen reader behaviour | — |
| `progress-indicator` | `LgProgressIndicatorComponent`, steps, current step | — |
| `sr-alert-message` | `LgSrAlertMessageDirective`, `[lgSrAlertMessage]`, live region, screen reader only | — |
| `primary-message` | `LgPrimaryMessageComponent`, title, description, icon | — |
| **Data Display** | | |
| `data-point` | `LgDataPointComponent`, label/value/list, heading level | — |
| `accordion` | `LgAccordionComponent`, multi, lazy content, outputs | — |
| `details` | `LgDetailsComponent`, status, role="alert" variants, outputs | — |
| `table` | `lg-table` directives, variants, expandable rows, accessibility | — |
| `list` | `LgListWithIconsComponent`, icon colour, expressive styling | — |
| `card` | `LgCardComponent`, templates, navigation card, card group | — |
| `promo-card` | `LgPromoCardComponent`, content limits, image requirements | — |
| **Navigation** | | |
| `breadcrumb` | `LgBreadcrumbComponent`, current page, ellipsis, variants | — |
| `tabs` | Tabbed content vs tabbed navigation, inputs, outputs | — |
| `pagination` | `LgPaginationComponent`, totalItems, currentPage, PageData | — |
| `link-menu` | `LgLinkMenuComponent`, item text, right icon behaviour | — |
| `side-nav` | Side nav full component set, mobile behaviour, router-outlet | — |
| **Forms** | | |
| `forms-input` | `LgInputFieldComponent`, prefix/suffix, block, showLabel | — |
| `forms-select` | `LgSelectFieldComponent`, when to use vs other controls | — |
| `forms-date` | `LgDateFieldComponent`, ISO 8601 output, validation priority | — |
| `forms-sort-code` | `lgSortCode` directive, auto-format, hint text requirement | — |
| `forms-validation` | `LgValidationComponent`, error state matcher, dynamic rules | — |
| `forms-radio` | `LgRadioGroupComponent`, inline, value, max 5 options | — |
| `forms-segment` | Segment group/button, stack input, 2–5 buttons | — |
| `forms-checkbox` | `LgToggleComponent` (checkbox), group, size, inline | — |
| `forms-switch` | `LgToggleComponent` (switch), immediate effect, fieldset | — |
| `forms-filter-buttons` | Filter radio/checkbox, max 10 options, default deselected | — |
| **Utilities** | | |
| `brand-icon` | `LgBrandIconComponent`, sizes, colour inputs, global branding | — |
| `icon` | `LgIconComponent`, sizing, colour, aria-hidden | — |
| `focus` | `LgFocusDirective`, programmatic focus | — |
| `shadow` | `LgShadowDirective`, hover state | — |
| `show-at` | `LgShowAtDirective`, breakpoint-based visibility | — |
| `hide-at` | `LgHideAtDirective`, breakpoint-based hiding | — |
| `orientation` | `LgOrientationDirective`, responsive vertical/horizontal layout | — |
| `feature-toggle` | `LgFeatureToggleModule`, directive, route guard | — |
| `pipes-camel-case` | `LgCamelCasePipe` | — |
| `pipes-kebab-case` | `LgKebabCasePipe` | — |
| **Deprecated** | | |
| `carousel` | Deprecation notice for `LgCarouselComponent` | Deprecated |
| **Styles** | | |
| `link` | Anchor styles, external links, icons in links, colour modes | — |
| `utils` | `lg-visually-hidden`, `lg-unstyled-link` CSS utility classes | — |
| `mixins` | `lg-breakpoint`, `lg-font-size`, `lg-focus-outline`, `lg-link`, `lg-status`, and other SCSS mixins | — |
