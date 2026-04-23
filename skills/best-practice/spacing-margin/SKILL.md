---
name: spacing-margin
description: Best practices for the Canopy Margin directive. Trigger when applying margin spacing to Canopy components or HTML elements using the Canopy spacing scale in an Angular project.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/spacing/margin/docs/guide.mdx
---

# Canopy Margin — Best Practices

This skill provides usage guidance and input reference for the Canopy `lgMargin` directive from `@legal-and-general/canopy`.

Apply this skill whenever you add margin to a Canopy component or HTML element.

> See also: `spacing-padding` and `spacing-row-gap` skills.

---

## Import

```ts
import { LgMarginDirective } from '@legal-and-general/canopy';
```

---

## Basic Usage

Apply the directive to any element. Pass a spacing variant number as the value.

```html
<!-- All sides -->
<lg-card lgMargin="4"></lg-card>

<!-- Bottom only -->
<lg-card lgMarginBottom="8"></lg-card>

<!-- Horizontal (left and right) -->
<lg-card lgMarginHorizontal="4"></lg-card>

<!-- Vertical (top and bottom) -->
<lg-card lgMarginVertical="6"></lg-card>

<!-- Combined: all sides 7, but bottom 9 -->
<lg-card lgMargin="7" lgMarginBottom="9"></lg-card>
```

---

## Breakpoint Overrides (NoneAt)

Set margin to `none` (zero) at specific breakpoints. Available breakpoints: `sm`, `md`, `lg`, `xl`, `xxl`.

```html
<!-- Remove all margin at sm breakpoint -->
<lg-card lgMargin="4" lgMarginNoneAt="sm"></lg-card>

<!-- Remove right margin at md breakpoint -->
<lg-card lgMarginRight="5" lgMarginRightNoneAt="md"></lg-card>

<!-- Remove margin at multiple breakpoints -->
<lg-card lgMargin="7" [lgMarginNoneAt]="['sm', 'lg']"></lg-card>
```

---

## Inputs

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `lgMargin` | `SpacingVariant \| SpacingResponsive` | `null` | Margin on all sides. |
| `lgMarginTop` | `SpacingVariant \| SpacingResponsive` | `null` | Top margin. |
| `lgMarginRight` | `SpacingVariant \| SpacingResponsive` | `null` | Right margin. |
| `lgMarginBottom` | `SpacingVariant \| SpacingResponsive` | `null` | Bottom margin. |
| `lgMarginLeft` | `SpacingVariant \| SpacingResponsive` | `null` | Left margin. |
| `lgMarginHorizontal` | `SpacingVariant \| SpacingResponsive` | `null` | Left and right margin. |
| `lgMarginVertical` | `SpacingVariant \| SpacingResponsive` | `null` | Top and bottom margin. |
| `lgMarginNoneAt` | `Breakpoints \| Breakpoints[]` | `null` | Remove all margin at breakpoint(s). |
| `lgMarginTopNoneAt` | `Breakpoints \| Breakpoints[]` | `null` | Remove top margin at breakpoint(s). |
| `lgMarginRightNoneAt` | `Breakpoints \| Breakpoints[]` | `null` | Remove right margin at breakpoint(s). |
| `lgMarginBottomNoneAt` | `Breakpoints \| Breakpoints[]` | `null` | Remove bottom margin at breakpoint(s). |
| `lgMarginLeftNoneAt` | `Breakpoints \| Breakpoints[]` | `null` | Remove left margin at breakpoint(s). |
| `lgMarginHorizontalNoneAt` | `Breakpoints \| Breakpoints[]` | `null` | Remove horizontal margin at breakpoint(s). |
| `lgMarginVerticalNoneAt` | `Breakpoints \| Breakpoints[]` | `null` | Remove vertical margin at breakpoint(s). |

---

## Design Constraints

- Always use `lgMargin` directives instead of writing custom CSS margin — this ensures spacing adheres to the Canopy spacing scale.
- Spacing variant values (`none`, `1`–`12`) map to CSS custom properties defined in `spacing.scss`.
