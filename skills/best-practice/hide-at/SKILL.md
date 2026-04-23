---
name: hide-at
description: Best practices for the Canopy Hide At directive. Trigger when using lgHideAt or LgHideAtDirective to hide elements at specific breakpoints in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/hide-at/docs/guide.mdx
---

# Canopy Hide At — Best Practices

This skill provides usage guidance for the Canopy `lgHideAt` directive from `@legal-and-general/canopy`.

Apply this skill when you need to hide an element at certain breakpoints.

> See also: the `show-at` skill for showing elements at breakpoints.

---

## Import

```ts
import { LgHideAtDirective } from '@legal-and-general/canopy';
```

---

## Basic Usage

```html
<!-- Hide at the lg breakpoint and above -->
<p lgHideAt="lg">Hidden on large screens and above</p>
```

---

## Inputs

Available breakpoints: `sm`, `md`, `lg`, `xl`, `xxl`.

| Input | Type | Default | Required | Description |
|-------|------|---------|----------|-------------|
| `lgHideAt` | `Breakpoints` | `null` | No | The breakpoint at which the element is hidden. |
