---
name: canopy-mixins
description: Reference for Canopy SCSS mixins. Trigger when using lg-breakpoint, lg-font-size, lg-focus-outline, lg-inner-focus-outline, lg-link, lg-unstyled-link, lg-visually-hidden, lg-status, or lg-content-area mixins in SCSS in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/styles/docs/mixins.mdx
---

# Canopy SCSS Mixins — Reference

This skill provides reference for the Canopy SCSS mixins available for use in custom component styles.

---

## lg-breakpoint

Adds responsive media queries. Supports min-width (default), max-width, and range queries.

```scss
// Min-width (default) — applies from md breakpoint onwards
.my-class {
  @include lg-breakpoint('md') {
    color: red;
  }
}

// Max-width — applies up to lg breakpoint
.my-class {
  @include lg-breakpoint('lg', 'max-width') {
    color: blue;
  }
}

// Range — applies only between md and lg breakpoints
.my-class {
  @include lg-breakpoint('md', 'range', 'lg') {
    color: yellow;
  }
}
```

**Arguments:**

| Name | Default | Required | Description |
|------|---------|----------|-------------|
| `$breakpoint` | n/a | Yes | Breakpoint name: `'sm'`, `'md'`, `'lg'`, `'xl'`, `'xxl'`. |
| `$range` | `'min-width'` | No | Query type: `'min-width'`, `'max-width'`, or `'range'`. |
| `$max-breakpoint` | `null` | No | Maximum breakpoint name when `$range: 'range'`. |

---

## lg-font-size

Applies a predefined font size with optional weight and type family.

```scss
.my-heading {
  @include lg-font-size(4);
}

.my-expressive-heading {
  @include lg-font-size(5, 700, 'expressive');
}
```

**Arguments:**

| Name | Default | Required | Description |
|------|---------|----------|-------------|
| `$size` | n/a | Yes | Font size level: `7`, `6`, `5`, `4`, `3`, `2`, `1`, `0-8`, `0-6`. |
| `$modifier` | `400` (Nunito Sans), `500` (ABC Otto) | No | Font weight. |
| `$type` | `null` | No | Font family type, e.g. `'expressive'`. |

---

## lg-focus-outline

Adds an external focus outline using box-shadow (used on buttons).

```scss
.my-button:focus {
  @include lg-focus-outline;
}
```

**Arguments:** `$bg-color` (default: `--default-focus-color`), `$inner-bg-color` (default: `--default-inner-focus-color`).

---

## lg-inner-focus-outline

Sets the focus outline inside the element.

```scss
.my-input:focus {
  @include lg-inner-focus-outline(#fff);
}
```

**Arguments:** `$bg-color` (required), `$color` (default: `var(--colour-greyscale-0)`).

---

## lg-link

Styles an element with Canopy link styles.

```scss
.my-custom-link {
  @include lg-link;
}
```

All arguments are optional and default to the Canopy link CSS variables.

---

## lg-unstyled-link

Reverts Canopy link styles.

```scss
.my-custom-link {
  @include lg-unstyled-link;
}
```

---

## lg-visually-hidden

Hides content visually but keeps it accessible to screen readers.

```scss
.sr-only {
  @include lg-visually-hidden;
}
```

---

## lg-status

Styles a component and its native children to a given status.

```scss
.my-alert {
  @include lg-status('error');
}
```

**Argument:** `$status` — `generic` (default), `info`, `success`, `warning`, `error`.

---

## lg-content-area

Applies Canopy content area styling with responsive border radius and background colour.

```scss
.my-panel {
  @include lg-content-area;
}
```
