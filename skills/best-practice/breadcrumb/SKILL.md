---
name: canopy-breadcrumb
description: Best practices for the Canopy Breadcrumb component. Trigger when adding site hierarchy navigation, breadcrumb trails, or location-based navigation to an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/breadcrumb/docs/guide.mdx
---

# Canopy Breadcrumb — Best Practices

This skill provides usage guidance, dos and don'ts, and input reference for the Canopy `lg-breadcrumb` component from `@legal-and-general/canopy`.

Apply this skill whenever you use `LgBreadcrumbComponent` or `lg-breadcrumb`.

---

## Import

```ts
import {
  LgBreadcrumbComponent,
  LgBreadcrumbItemComponent,
  LgBreadcrumbItemEllipsisComponent,
} from '@legal-and-general/canopy';
```

---

## Variants

### `page` (default)

Use for top-level, full-page contexts. The `page` variant applies container alignment directly to the host element via CSS (`max-width`, `margin: auto`, container padding), aligning it consistently with the page grid. No DOM grid wrapper is added — `<ng-content />` is rendered directly.

```html
<lg-breadcrumb variant="page">
  <lg-breadcrumb-item>
    <a href="#">
      <lg-icon name="home-outline"></lg-icon>
      Home
    </a>
  </lg-breadcrumb-item>
  <lg-breadcrumb-item>
    <a href="#">Products</a>
  </lg-breadcrumb-item>
  <lg-breadcrumb-item>
    Pension
  </lg-breadcrumb-item>
</lg-breadcrumb>
```

### `embedded`

Use when the breadcrumb is placed within another component that already provides grid structure. No container wrapper is added.

```html
<lg-breadcrumb variant="embedded">
  <lg-breadcrumb-item>
    <a href="#">Home</a>
  </lg-breadcrumb-item>
  <lg-breadcrumb-item>
    Current page
  </lg-breadcrumb-item>
</lg-breadcrumb>
```

---

## Collapsing Long Trails

When there are more than 3 levels, insert `lg-breadcrumb-item-ellipsis` manually between items:

```html
<lg-breadcrumb>
  <lg-breadcrumb-item><a href="#">Home</a></lg-breadcrumb-item>
  <lg-breadcrumb-item-ellipsis></lg-breadcrumb-item-ellipsis>
  <lg-breadcrumb-item><a href="#">Category</a></lg-breadcrumb-item>
  <lg-breadcrumb-item>Current page</lg-breadcrumb-item>
</lg-breadcrumb>
```

> This must be added manually — it is not added automatically. Use it sparingly.

---

## Inputs

### `LgBreadcrumbComponent`

| Input | Type | Default | Required | Description |
|-------|------|---------|----------|-----------|
| `variant` | `'page' \| 'embedded'` | `'page'` | No | Layout variant. `page` applies container alignment via CSS on the host; `embedded` renders without any container alignment for use inside other components. |

---

## Layout Tokens

| Token | Description |
|-------|-------------|
| `--breadcrumb-gap` | Gap between breadcrumb items |
| `--breadcrumb-min-width` | Minimum width of the breadcrumb list |
| `--breadcrumb-padding-x` | Horizontal padding on the breadcrumb list |
| `--breadcrumb-padding-y` | Vertical padding on the breadcrumb list |

These are defined by Canopy design tokens and applied automatically.

## Link Colour Tokens

Breadcrumb links use the `link-mono` token set:

| Token | State |
|-------|-------|
| `--link-mono-rest-colour` | Default/rest state |
| `--link-mono-hover-colour` | Hover state |
| `--link-mono-focus-colour` | Focus-visible state |
| `--link-mono-active-colour` | Active/pressed state |
| `--link-mono-visited-colour` | Visited state |

---

## Dos and Don'ts

### Do

1. **Do** make the first breadcrumb a link to the homepage.
2. **Do** reflect the user's position in the site's hierarchical structure.
3. **Do** include the current page label in the breadcrumb trail.
4. **Do** use `embedded` when placing the breadcrumb inside a component that already has grid structure.

### Don't

1. **Don't** reflect the user's session history — breadcrumbs are location-based, not history-based.
2. **Don't** make the current page's breadcrumb a link.
3. **Don't** use on websites with a shallow or flat structure.
4. **Don't** duplicate main menu or secondary navigation options.

---

## Design Constraints

- On mobile, only the one level above the current page is shown — the current page itself is hidden.
- Breadcrumbs are pending brand modernisation.

