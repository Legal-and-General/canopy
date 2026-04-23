---
name: breadcrumb
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

## Basic Usage

```html
<lg-breadcrumb>
  <lg-breadcrumb-item>
    <a href="#">
      <lg-icon name="home"></lg-icon>
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

> The **current page** (last item) must be plain text, not a link.

---

## Collapsing Long Trails (Desktop)

When there are more than 3 levels, insert `lg-breadcrumb-item-ellipsis` to represent collapsed middle levels:

```html
<lg-breadcrumb>
  <lg-breadcrumb-item><a href="#">Home</a></lg-breadcrumb-item>
  <lg-breadcrumb-item-ellipsis></lg-breadcrumb-item-ellipsis>
  <lg-breadcrumb-item><a href="#">Category</a></lg-breadcrumb-item>
  <lg-breadcrumb-item>Current page</lg-breadcrumb-item>
</lg-breadcrumb>
```

> This must be added manually — it is not added automatically. Use it sparingly; a sensible site structure should rarely need it.

---

## Inputs

### LgBreadcrumbComponent

| Input | Type | Default | Required | Description |
|-------|------|---------|----------|-------------|
| `variant` | `'light' \| 'dark'` | `'dark'` | No | Colour variant. Use `light` on dark backgrounds. |

---

## Dos and Don'ts

### Do

1. **Do** make the first breadcrumb a link to the homepage.
2. **Do** reflect the user's position in the site's hierarchical structure.
3. **Do** include the current page label in the breadcrumb trail.

### Don't

1. **Don't** reflect the user's session history — breadcrumbs are location-based, not history-based.
2. **Don't** make the current page's breadcrumb a link.
3. **Don't** use on websites with a shallow or flat structure.
4. **Don't** duplicate main menu or secondary navigation options.

---

## Design Constraints

- On mobile, only the one level above the current page is shown — the current page itself is hidden.
- Breadcrumbs are pending brand modernisation.
