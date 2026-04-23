---
name: skeleton
description: Best practices for the Canopy Skeleton Loading directive. Trigger when adding skeleton loading states, placeholder content while data loads, or shimmer effects in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/skeleton/docs/guide.mdx
---

# Canopy Skeleton Loading — Best Practices

This skill provides usage guidance and input reference for the Canopy `lgSkeleton` directive (`LgSkeletonDirective`) from `@legal-and-general/canopy`.

Apply this skill whenever you use `LgSkeletonDirective` or `lgSkeleton`.

---

## Import

```ts
import { LgSkeletonDirective } from '@legal-and-general/canopy';
```

---

## Basic Usage

Apply `lgSkeleton` to any element or component that outputs text or projected content. The directive shows a loading placeholder until data is available.

```html
<lg-data-point>
  <lg-data-point-label [headingLevel]="4">
    <span lgSkeleton lgSkeletonWidth="10">{{ data?.label }}</span>
  </lg-data-point-label>
  <lg-data-point-value lgSkeleton lgSkeletonWidth="8">
    {{ data?.value }}
  </lg-data-point-value>
</lg-data-point>
```

---

## Inputs

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `lgSkeletonWidth` | `string` | `'100%'` | Override the placeholder width in `em` units (e.g. `"10"` = 10em). |
| `lgSkeletonHeight` | `string` | `'auto'` | Override the placeholder height in `em` units. |

---

## Design Constraints

- On composite components made up of child components, apply `lgSkeleton` to the **child** components or to elements wrapping projected content — not to the composite root.
- For components that project content directly (e.g. `lg-data-point-value`), apply `lgSkeleton` to the component itself.
- For components that project into another component (e.g. `lg-data-point-label` → `lg-heading`), wrap the projected content in a `<span lgSkeleton>`.
