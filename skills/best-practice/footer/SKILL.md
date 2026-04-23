---
name: footer
description: Best practices for the Canopy Footer component. Trigger when adding a site footer, footer navigation, or footer logos in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/footer/docs/guide.mdx
---

# Canopy Footer — Best Practices

This skill provides usage guidance and input reference for the Canopy footer components from `@legal-and-general/canopy`.

Apply this skill whenever you use the `lg-footer` attribute selector or `LgFooterComponent`.

---

## Import

```ts
import {
  LgFooterComponent,
  LgFooterNavComponent,
  LgFooterNavItemComponent,
  LgFooterLogoComponent,
} from '@legal-and-general/canopy';
```

---

## Basic Usage

The footer uses an **attribute selector** — apply `lg-footer` to a native `<footer>` element.

```html
<footer lg-footer>
  <lg-footer-logo src="/assets/logo.svg" alt="Company name"></lg-footer-logo>
  <lg-footer-nav variant="primary">
    <lg-footer-nav-item><a href="/about">About</a></lg-footer-nav-item>
    <lg-footer-nav-item><a href="/contact">Contact</a></lg-footer-nav-item>
  </lg-footer-nav>
  <lg-footer-nav variant="secondary">
    <lg-footer-nav-item><a href="/privacy">Privacy</a></lg-footer-nav-item>
    <lg-footer-nav-item><a href="/terms">Terms</a></lg-footer-nav-item>
  </lg-footer-nav>
</footer>
```

---

## LgFooterNavComponent Inputs

| Input | Type | Required | Description |
|-------|------|----------|-------------|
| `variant` | `'primary' \| 'secondary'` | Yes | Navigation style variant. |

## LgFooterLogoComponent Inputs

| Input | Type | Default | Required | Description |
|-------|------|---------|----------|-------------|
| `src` | `string` | — | Yes | Logo image URL. |
| `alt` | `string` | `''` | Yes | Alt text for the logo. |

---

## Design Constraints

- Anchor tags projected into `lg-footer-nav` automatically receive `rel="noopener"`.
- Button tags projected into `lg-footer-nav` automatically receive `type="button"`.
- Logo height is set internally and cannot be modified. Override logo widths with CSS custom properties:

```css
--footer-logo-width: 120px;
--footer-logo-width-lg: 160px;
--footer-second-logo-width: 80px;
--footer-second-logo-width-lg: 100px;
```
