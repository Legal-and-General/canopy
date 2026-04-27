---
name: canopy-spinner
description: Best practices for the Canopy Spinner component. Trigger when adding loading spinners, indeterminate loading states, or loading buttons in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/spinner/docs/guide.mdx
---

# Canopy Spinner — Best Practices

This skill provides usage guidance, dos and don'ts, and input reference for the Canopy `lg-spinner` component (`LgSpinnerComponent`) from `@legal-and-general/canopy`.

Apply this skill whenever you use `LgSpinnerComponent` or `lg-spinner`.

---

## Import

```ts
import { LgSpinnerComponent } from '@legal-and-general/canopy';
```

---

## Basic Usage

Use a spinner when the duration of a process cannot be determined.

```html
<lg-spinner text="Loading your details…"></lg-spinner>
```

Always pair a page- or card-level spinner with the `lgSrAlertMessage` directive so screen reader users are notified when loading completes:

```html
@if (!loaded) {
  <lg-spinner text="Loading your details…"></lg-spinner>
}
<p [lgSrAlertMessage]="loaded">Loading complete</p>
```

---

## Variants

| Variant | When to use |
|---------|-------------|
| `dark` | Default. On light backgrounds. |
| `light` | On dark backgrounds. |
| `color` | Branded colour spinner. |
| `inherit` | Inherits the font colour of its parent — used inside loading buttons. |

---

## Inputs

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `variant` | `'dark' \| 'light' \| 'color' \| 'inherit'` | `'dark'` | Visual variant. |
| `size` | `'xs' \| 'sm' \| 'md'` | `'md'` | Size of the spinner. |
| `text` | `string` | `undefined` | Supporting text shown below the spinner. |

---

## Dos and Don'ts

### Do

1. **Do** use spinners to help manage user expectations against technical limitations.
2. **Do** always accompany a page- or card-level spinner with a supporting message explaining the reason for the wait.
3. **Do** pair the spinner with `lgSrAlertMessage` so screen reader users are notified when loading finishes.

### Don't

1. **Don't** use a spinner if the duration of the process can be pre-determined — use a progress indicator instead.
2. **Don't** use multiple spinners in a single view.
3. **Don't** use a spinner inside a button or input without the `inherit` variant.

---

## Accessibility

- A spinner used alone on a page or card must always be accompanied by supporting text (`text` input or adjacent copy) explaining the wait.
- Always use `lgSrAlertMessage` to notify screen reader users when loading has completed — the spinner's disappearance is not detectable by assistive technologies alone.
