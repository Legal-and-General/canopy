---
name: spacing-padding
description: Best practices for the Canopy Padding directive. Trigger when applying padding to Canopy components or HTML elements using the Canopy spacing scale in an Angular project.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/spacing/padding/docs/guide.mdx
---

# Canopy Padding — Best Practices

This skill provides usage guidance and input reference for the Canopy `lgPadding` directive from `@legal-and-general/canopy`.

Apply this skill whenever you add padding to a Canopy component or HTML element.

> See also: `spacing-margin` and `spacing-row-gap` skills.

---

## Import

```ts
import { LgPaddingDirective } from '@legal-and-general/canopy';
```

---

## Basic Usage

```html
<!-- All sides -->
<lg-card lgPadding="4"></lg-card>

<!-- Bottom only -->
<lg-card lgPaddingBottom="8"></lg-card>

<!-- Horizontal (left and right) -->
<lg-card lgPaddingHorizontal="4"></lg-card>

<!-- Vertical (top and bottom) -->
<lg-card lgPaddingVertical="6"></lg-card>

<!-- Combined: all sides 7, but bottom 9 -->
<lg-card lgPadding="7" lgPaddingBottom="9"></lg-card>
```

---

## Breakpoint Overrides (NoneAt)

Set padding to `none` (zero) at specific breakpoints. Available breakpoints: `sm`, `md`, `lg`, `xl`, `xxl`.

```html
<lg-card lgPadding="4" lgPaddingNoneAt="sm"></lg-card>
<lg-card lgPaddingRight="5" lgPaddingRightNoneAt="md"></lg-card>
<lg-card lgPaddingVertical="6" lgPaddingVerticalNoneAt="lg"></lg-card>
```

---

## Inputs

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `lgPadding` | `SpacingVariant \| SpacingResponsive` | `null` | Padding on all sides. |
| `lgPaddingTop` | `SpacingVariant \| SpacingResponsive` | `null` | Top padding. |
| `lgPaddingRight` | `SpacingVariant \| SpacingResponsive` | `null` | Right padding. |
| `lgPaddingBottom` | `SpacingVariant \| SpacingResponsive` | `null` | Bottom padding. |
| `lgPaddingLeft` | `SpacingVariant \| SpacingResponsive` | `null` | Left padding. |
| `lgPaddingHorizontal` | `SpacingVariant \| SpacingResponsive` | `null` | Left and right padding. |
| `lgPaddingVertical` | `SpacingVariant \| SpacingResponsive` | `null` | Top and bottom padding. |
| `lgPaddingNoneAt` | `Breakpoints \| Breakpoints[]` | `null` | Remove all padding at breakpoint(s). |
| `lgPaddingTopNoneAt` | `Breakpoints \| Breakpoints[]` | `null` | Remove top padding at breakpoint(s). |
| `lgPaddingRightNoneAt` | `Breakpoints \| Breakpoints[]` | `null` | Remove right padding at breakpoint(s). |
| `lgPaddingBottomNoneAt` | `Breakpoints \| Breakpoints[]` | `null` | Remove bottom padding at breakpoint(s). |
| `lgPaddingLeftNoneAt` | `Breakpoints \| Breakpoints[]` | `null` | Remove left padding at breakpoint(s). |
| `lgPaddingHorizontalNoneAt` | `Breakpoints \| Breakpoints[]` | `null` | Remove horizontal padding at breakpoint(s). |
| `lgPaddingVerticalNoneAt` | `Breakpoints \| Breakpoints[]` | `null` | Remove vertical padding at breakpoint(s). |

---

## Design Constraints

- Always use `lgPadding` directives instead of writing custom CSS padding — this ensures spacing adheres to the Canopy spacing scale.
- Spacing variant values (`none`, `1`–`12`) map to CSS custom properties defined in `spacing.scss`.
