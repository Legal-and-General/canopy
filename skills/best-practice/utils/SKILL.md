---
name: canopy-utils
description: Reference for Canopy CSS utility classes. Trigger when using lg-visually-hidden, lg-unstyled-link, or other Canopy utility CSS classes in an Angular project.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/styles/docs/utils.mdx
---

# Canopy CSS Utilities — Reference

This skill provides reference for the Canopy CSS utility classes available globally in applications that import the Canopy styles.

---

## Available Classes

| Class | Description |
|-------|-------------|
| `lg-visually-hidden` | Hides content visually but keeps it accessible to screen readers. |
| `lg-unstyled-link` | Reverts link styles to a more default (unstyled) state. |

---

## Usage

### `lg-visually-hidden`

Use to provide context for screen reader users without showing text visually:

```html
<span class="lg-visually-hidden">opens in a new tab</span>
```

### `lg-unstyled-link`

Apply as a class to revert Canopy link styles on a custom element:

```html
<a href="#" class="lg-unstyled-link">Custom styled link</a>
```

Or use the SCSS mixin in your component styles (see the `mixins` skill).
