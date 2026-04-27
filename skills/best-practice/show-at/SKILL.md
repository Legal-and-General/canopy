---
name: canopy-show-at
description: Best practices for the Canopy Show At directive. Trigger when using lgShowAt or LgShowAtDirective to show elements at specific breakpoints in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/show-at/docs/guide.mdx
---

# Canopy Show At — Best Practices

This skill provides usage guidance for the Canopy `lgShowAt` directive from `@legal-and-general/canopy`.

Apply this skill when you need to show an element only at certain breakpoints.

> See also: the `hide-at` skill for hiding elements at breakpoints.

---

## Import

```ts
import { LgShowAtDirective } from '@legal-and-general/canopy';
```

---

## Basic Usage

```html
<!-- Show only at the md breakpoint and above -->
<p lgShowAt="md">Visible on medium screens and above</p>
```

---

## Inputs

Available breakpoints: `sm`, `md`, `lg`, `xl`, `xxl`.

| Input | Type | Default | Required | Description |
|-------|------|---------|----------|-------------|
| `lgShowAt` | `Breakpoints` | `null` | No | The breakpoint at which the element becomes visible. Uses mobile-first (min-width) media queries. |
