---
name: canopy-flag-icon
description: Best practices for the Canopy Flag Icon component. Trigger whenever lg-flag-icon, LgFlagIconComponent, or flag icon imports appear in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/flag-icon/docs/guide.mdx
---

# Canopy Flag Icon — Best Practices

This skill provides usage guidance, dos and don'ts, and input reference for the Canopy `lg-flag-icon` component from `@legal-and-general/canopy`.

Apply this skill whenever you use `lg-flag-icon` or import `LgFlagIconComponent` in an Angular project.

---

## Import

```ts
import { LgFlagIconComponent } from '@legal-and-general/canopy';
```

Add to your standalone component's `imports` array or Angular module.

---

## Basic Usage

```html
<lg-flag-icon name="gb"></lg-flag-icon>
```

---

## Inputs

| Name   | Description               | Type     | Default     | Required |
| ------ | ------------------------- | -------- | ----------- | -------- |
| `name` | The name of the flag icon | `string` | `undefined` | Yes      |

---

## Dos and Don'ts

### Do

1. **Do** use the `global` flag for regions where a single country flag is ambiguous, e.g. "Middle East".
2. **Do** always pair the flag icon with the country or region name as visible text.
3. **Do** ensure sufficient contrast between the flag and its surrounding background.

### Don't

1. **Don't** use flag icons as a replacement for language labels where ambiguity is possible — a flag represents a country, not necessarily a language.

---

## Related

- Use `lg-icon` for UI icons — see the UI icon skill.
- Use `lg-brand-icon` for illustrative brand icons.
