---
name: list
description: Best practices for Canopy list styles. Trigger when rendering styled lists, ordered or unordered lists, or icon lists in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/list/docs/guide.mdx
---

# Canopy List — Best Practices

This skill provides usage guidance, dos and don'ts, and input reference for Canopy list styles from `@legal-and-general/canopy`.

Apply this skill whenever you render `<ul>`, `<ol>`, or `LgListWithIconsComponent` in a Canopy application.

---

## Import

For icon lists only:

```ts
import {
  LgListWithIconsComponent,
  LgListWithIconsItemComponent,
} from '@legal-and-general/canopy';
```

For expressive ordered list styles (directive only — no component import needed beyond the `canopy` stylesheet being loaded):

```ts
import { LgListWithExpressiveStylingDirective } from '@legal-and-general/canopy';
```

---

## Unordered and Ordered Lists

Standard `<ul>` and `<ol>` elements automatically receive Canopy styles when the global stylesheet is loaded. No additional component import is needed.

```html
<ul>
  <li>Item one</li>
  <li>Item two</li>
</ul>

<ol>
  <li>Step one</li>
  <li>Step two</li>
</ol>
```

**Expressive ordered list** (large numbered steps):

```html
<ol lgListWithExpressiveStyling>
  <li>Complete your details</li>
  <li>Review and confirm</li>
</ol>
```

---

## Icon List

Use `lg-list-with-icons` to display a list where each item has a Canopy icon.

```html
<lg-list-with-icons>
  <lg-list-with-icons-item iconName="sun">Sunshine guaranteed</lg-list-with-icons-item>
  <lg-list-with-icons-item iconName="tick">Cover included</lg-list-with-icons-item>
</lg-list-with-icons>
```

### LgListWithIconsComponent Inputs

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `variant` | `'neutral-foreground' \| 'light-foreground' \| 'dark-foreground'` | `'neutral-foreground'` | Sets the icon and text colour context. |

### LgListWithIconsItemComponent Inputs

| Input | Type | Default | Required | Description |
|-------|------|---------|----------|-------------|
| `iconName` | `string` | n/a | Yes | The Canopy icon to display. |
| `iconColour` | `string` | `undefined` | No | Optional CSS custom property to tint the icon. |

---

## Dos and Don'ts

### Do

1. **Do** use the expressive ordered list style for step-by-step instructions or numbered journeys.
2. **Do** choose `iconColour` using a Canopy colour token CSS variable (e.g. `--colour-green-600`).

### Don't

1. **Don't** use coloured icons (`iconColour`) on dark backgrounds — only use on neutral or light backgrounds.
