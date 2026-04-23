---
name: shadow
description: Best practices for the Canopy Shadow directive. Trigger when using lgShadow or LgShadowDirective to apply box shadows in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/shadow/docs/guide.mdx
---

# Canopy Shadow — Best Practices

This skill provides usage guidance for the Canopy `lgShadow` directive from `@legal-and-general/canopy`.

Apply this skill when adding box shadows to elements.

---

## Import

```ts
import { LgShadowDirective } from '@legal-and-general/canopy';
```

---

## Basic Usage

```html
<!-- Apply shadow -->
<lg-card [lgShadow]="true"></lg-card>

<!-- Apply shadow with hover state (deeper shadow on hover) -->
<lg-card [lgShadow]="true" [hasHoverState]="true"></lg-card>
```

---

## Inputs

| Input | Type | Default | Required | Description |
|-------|------|---------|----------|-------------|
| `lgShadow` | `boolean` | `null` | Yes | Whether to apply a box shadow. |
| `hasHoverState` | `boolean` | `false` | No | Whether to apply a deeper shadow on hover. |
