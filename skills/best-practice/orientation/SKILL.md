---
name: orientation
description: Best practices for the Canopy Orientation directive. Trigger when using lgOrientation or LgOrientationDirective to create responsive vertical/horizontal layouts in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/orientation/docs/guide.mdx
---

# Canopy Orientation — Best Practices

This skill provides usage guidance for the Canopy `lgOrientation` directive from `@legal-and-general/canopy`.

Apply this skill when arranging child elements in responsive vertical or horizontal layouts.

---

## Import

```ts
import { LgOrientationDirective } from '@legal-and-general/canopy';
```

---

## Basic Usage

Pass a responsive orientation object — keys are mobile-first breakpoints, values are orientation modes:

```html
<lg-card [lgOrientation]="{ md: 'horizontal', lg: 'vertical' }"></lg-card>
```

---

## Orientation Options

| Value | Description |
|-------|-------------|
| `vertical` | Children stacked vertically, same order. |
| `horizontal` | Children arranged horizontally, same order. |
| `reverse-vertical` | Children stacked vertically, reversed order. |
| `reverse-horizontal` | Children arranged horizontally, reversed order. |

---

## Responsive Object

```ts
{ sm: 'vertical', md: 'horizontal' }
```

Each key is a mobile-first breakpoint (`sm`, `md`, `lg`, `xl`, `xxl`). At each breakpoint and above, the specified orientation is applied.

---

## Inputs

| Input | Type | Default | Required | Description |
|-------|------|---------|----------|-------------|
| `lgOrientation` | `OrientationResponsive` | `null` | No | Responsive orientation object mapping breakpoints to orientation values. |

---

## Examples

### Vertical on small, horizontal on medium and above

```html
<lg-card [lgOrientation]="{ sm: 'vertical', md: 'horizontal' }">
  <lg-card-hero-img src="image.jpg"></lg-card-hero-img>
  <lg-card-content>
    <h3>Content</h3>
  </lg-card-content>
</lg-card>
```

### Multi-breakpoint configuration

```html
<lg-card [lgOrientation]="{ sm: 'vertical', md: 'reverse-horizontal', lg: 'vertical' }">
  ...
</lg-card>
```
