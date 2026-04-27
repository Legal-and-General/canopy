---
name: canopy-focus
description: Best practices for the Canopy Focus directive. Trigger when using lgFocus or LgFocusDirective to programmatically control keyboard focus in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/focus/docs/guide.mdx
---

# Canopy Focus — Best Practices

This skill provides usage guidance for the Canopy `lgFocus` directive from `@legal-and-general/canopy`.

Apply this skill when you need to programmatically set focus on a focusable element.

---

## Import

```ts
import { LgFocusDirective } from '@legal-and-general/canopy';
```

---

## Basic Usage

```html
<button [lgFocus]="shouldFocus">Click me</button>
```

Bind `lgFocus` to a boolean expression. When the value becomes `true`, the element receives focus.

---

## Inputs

| Input | Type | Default | Required | Description |
|-------|------|---------|----------|-------------|
| `lgFocus` | `boolean` | `null` | Yes | When `true`, focus is applied to the element. |
