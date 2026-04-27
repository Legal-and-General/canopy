---
name: canopy-layout-grid-and-spacing
description: Foundation guidance for Canopy layout, responsive grid, and spacing. Trigger when setting up responsive layouts, choosing breakpoints, or understanding the grid and spacing system in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/docs/foundation/layout-grid-and-spacing.mdx
---

# Canopy Layout, Grid and Spacing — Foundation

This skill provides guidance on the Canopy responsive layout grid and spacing system.

Apply this skill when setting up page layouts, choosing breakpoints, or applying spacing variables.

> See also: the `grid` skill for Angular grid directives (`lgContainer`, `lgRow`, `lgCol`), and `spacing-margin`, `spacing-padding`, and `spacing-row-gap` for directive-based spacing.

---

## Breakpoints

Five mobile-first breakpoints are available:

| Breakpoint | Min-width | Max-width | Margin | Gutter |
|------------|-----------|-----------|--------|--------|
| SM | 0 | 767px | 16px | 28px |
| MD | 768px | 1023px | 28px | 28px |
| LG | 1024px | 1279px | 32px | 32px |
| XL | 1280px | 1439px | 72px | 32px |
| XXL | 1440px | No max | 104px | 32px |

**Always design mobile-first.** Start with the smallest size (360px, ensure reflow at 320px).

---

## Grid

The grid is based on flexbox. Import the Canopy global CSS to use it.

```html
<div lgContainer>
  <div lgRow>
    <div [lgCol]="12" [lgColMd]="6">Left</div>
    <div [lgCol]="12" [lgColMd]="6">Right</div>
  </div>
</div>
```

Use the grid sparingly. For many layouts, plain flexbox is sufficient.

---

## Spacing Variables

The spacing system uses CSS custom properties. Variables are responsive — they change between SM-MD and LG+ breakpoints.

Key spacing variables used in components:

| Variable | SM–MD | LG+ |
|----------|-------|-----|
| `--component-padding` | `var(--space-1)` | `var(--space-6)` |
| `--component-margin` | `var(--space-5)` | `var(--space-6)` |

Use liberal vertical spacing — whitespace aids comprehension and visual rhythm.

---

## Related Directives

- **`lgContainer` / `lgRow` / `lgCol`** — see the `grid` skill
- **`lgMargin` / `lgPadding`** — see `spacing-margin` and `spacing-padding` skills
- **`lgRowGap`** — see `spacing-row-gap` skill
- **`lgShowAt` / `lgHideAt`** — see `show-at` and `hide-at` skills
