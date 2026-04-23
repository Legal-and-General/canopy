---
name: heading
description: Best practices for the Canopy Heading component. Trigger when setting a dynamic heading level inside a custom component in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/heading/docs/guide.mdx
---

# Canopy Heading — Best Practices

This skill provides usage guidance for the Canopy `LgHeadingComponent` from `@legal-and-general/canopy`.

Apply this skill whenever you need to render a heading at a programmatically-determined level.

---

## Import

```ts
import { LgHeadingComponent } from '@legal-and-general/canopy';
```

---

## Basic Usage

> **`LgHeadingComponent` should only be used inside other components** — for example, inside an accordion panel heading or a card title — where the heading level must be configurable by the consumer. Do not use it directly in application templates for static headings.

```html
<!-- Inside a wrapper component that accepts a headingLevel input -->
<lg-heading [level]="headingLevel">{{ title }}</lg-heading>
```

---

## Inputs

| Input | Type | Default | Required | Description |
|-------|------|---------|----------|-------------|
| `level` | `number` | `undefined` | Yes | The semantic heading level (1–6). |

---

## Design Constraints

- Always pass a `level` value that maintains a logical document outline.
- Consumers of components that wrap `lg-heading` must supply a `headingLevel` input that reflects the correct hierarchy for their page context.
