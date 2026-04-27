---
name: canopy-icon
description: Best practices for the Canopy UI Icon component. Trigger when using lg-icon, LgIconComponent, or adding functional UI icons in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/icon/docs/guide.mdx
---

# Canopy UI Icon — Best Practices

This skill provides usage guidance and input reference for the Canopy `lg-icon` component from `@legal-and-general/canopy`.

Apply this skill whenever you use `lg-icon` or `LgIconComponent`.

> See also: the `brand-icon` skill for brand/illustrative icons.

---

## Import

```ts
import { LgIconComponent } from '@legal-and-general/canopy';
```

---

## Basic Usage

```html
<lg-icon name="email"></lg-icon>
```

---

## Inputs

| Input | Type | Default | Required | Description |
|-------|------|---------|----------|-------------|
| `name` | `string` | `undefined` | Yes | The name of the icon. |

---

## Sizing

Icons size to `1em` (height and width), inheriting the font-size of their parent. Scale icons on the 4px scale.

---

## Colour

By default, icons use `currentColor` for their `fill`, so they inherit the text colour of their parent element.

```html
<span style="color: var(--colour-green-700)">
  <lg-icon name="check"></lg-icon>
</span>
```

**Note:** The `need-help` and `question-mark` icons cannot change colour.

---

## Decorative vs. Informative Icons

- For **decorative** icons (pure visual adornment), add `aria-hidden="true"`:
  ```html
  <lg-icon name="arrow-right" aria-hidden="true"></lg-icon>
  ```
- For **informative** icons with no accompanying visible text, provide screen-reader text:
  ```html
  <lg-icon name="link-external" aria-hidden="true"></lg-icon>
  <span class="lg-visually-hidden">opens in a new tab</span>
  ```

---

## Dos and Don'ts

### Do

1. **Do** scale icons on the 4px scale for crisp outlines.
2. **Do** use charcoal or high-contrast colour icons on white backgrounds.
3. **Do** use tinted colours on light backgrounds — minimum contrast ratio 4.5:1.
4. **Do** use white icons on high-contrast backgrounds.
5. **Do** add `aria-hidden="true"` to decorative icons.

### Don't

1. **Don't** scale icons below 16px.
2. **Don't** scale icons above 64px — use brand icons or illustration for more prominent graphics.
3. **Don't** overlay icons on photographic backgrounds.
4. **Don't** use low-contrast colour combinations.
