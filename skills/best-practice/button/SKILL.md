---
name: canopy-button
description: Best practices for the Canopy Button component. Trigger when adding buttons, form submissions, navigation actions, icon buttons, loading states, button groups, or toggle buttons in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/button/docs/guide.mdx
---

# Canopy Button — Best Practices

This skill provides usage guidance, dos and don'ts, and input reference for the Canopy `lg-button` directive from `@legal-and-general/canopy`.

Apply this skill whenever you use `lg-button`, `LgButtonComponent`, `LgButtonGroupComponent`, or `LgButtonToggleDirective`.

---

## Import

```ts
import {
  LgButtonComponent,
  LgButtonGroupComponent,
  LgButtonToggleDirective,
} from '@legal-and-general/canopy';
```

---

## Basic Usage

Always use a `<button>` element. Only use `<a lg-button>` when navigating to a new page or route.

```html
<button lg-button type="button" priority="primary">Save changes</button>
```

---

## Priorities

| Priority | When to use |
|----------|-------------|
| `primary` | The single main action on a page. Only one per view. |
| `secondary` | Secondary or supporting actions. Multiple allowed per page. |
| `link` | An action that visually appears as a link. |
| `add-on` | Used as an add-on to another input element. |

Button colours are inherited from the parent colour mode — never set button colours directly.

---

## Anatomy variants

**Back icon button** — navigation back; use `[backIcon]="true"`. For non-link priorities, the arrow-left icon is fixed and you cannot substitute a custom icon. For `priority="link"`, a projected `<lg-icon>` is displayed instead of the fixed arrow-left, allowing a custom icon on the left.
```html
<!-- Non-link: fixed arrow-left icon, no custom icon permitted -->
<button lg-button type="button" [backIcon]="true">Back</button>

<!-- Link priority: custom icon on the left via backIcon -->
<button lg-button priority="link" [backIcon]="true">
  Back
  <lg-icon name="chevron-left" />
</button>
```

**Right icon button** — action with icon to the right:
```html
<button lg-button type="button">
  Next
  <lg-icon name="chevron-right" />
</button>
```

**Icon-only button** — must include visually hidden label text for screen readers:
```html
<button lg-button type="button" [iconButton]="true">
  Add item
  <lg-icon name="add" />
</button>
```

**Loading state** — shows a spinner and disables the button:
```html
<button lg-button [loading]="true">Saving…</button>
```

**Button as link** — a button styled as a link (`priority="link"`). Supports a custom icon on either side:
```html
<!-- Icon on the right (default) -->
<button lg-button priority="link">
  Label
  <lg-icon name="chevron-right" />
</button>

<!-- Icon on the left using backIcon -->
<button lg-button priority="link" [backIcon]="true">
  Label 
  <lg-icon name="chevron-left" />
</button>
```

---

## Button Group

Group two or more related buttons on a single line:

```html
<lg-button-group>
  <button lg-button priority="primary">Submit</button>
  <button lg-button priority="secondary">Cancel</button>
</lg-button-group>
```

---

## Button Toggle

Use `lgButtonToggle` to show/hide content (e.g. a filter panel). Must be on a `<button>` element.

```html
<button lg-button lgButtonToggle type="button" priority="secondary">
  Filters
  <lg-icon name="chevron-down" />
</button>
```

---

## Inputs

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `priority` | `'primary' \| 'secondary' \| 'link' \| 'add-on'` | `'primary'` | Visual priority of the button. |
| `fullWidth` | `boolean` | `false` | Spans full container width. Always full-width on `sm`/`md` screens regardless of this input. |
| `disabled` | `boolean` | `false` | Disables the button. |
| `loading` | `boolean` | `false` | Shows a spinner and disables the button. |
| `backIcon` | `boolean` | `false` | Displays a fixed arrow-left icon to the left of the label. |
| `iconButton` | `boolean` | `false` | Icon-only button mode. |

---

## Dos and Don'ts

### Do

1. **Do** use concise, descriptive labels — for example "Save changes" or "Download report" — so users know what will happen.
2. **Do** use a single `primary` button per page or view.
3. **Do** use `fullWidth` on mobile breakpoints (`sm`/`md`) for easier tapping.
4. **Do** provide visually hidden label text inside icon-only buttons for screen readers.
5. **Do** group related buttons with `LgButtonGroupComponent` for consistent alignment.
6. **Do** use a `<button>` element for actions and an `<a>` element only when navigating to a new page.

### Don't

1. **Don't** place more than one `primary` button in a single view.
2. **Don't** use vague labels like "Click here", "Submit", or "Go".
3. **Don't** let button labels wrap onto multiple lines.
4. **Don't** centre- or right-align buttons unless the layout specifically requires it — left-align by default.
5. **Don't** use `fullWidth` at `lg` breakpoints or wider.
6. **Don't** use a button for navigation when a link is semantically more appropriate.

---

## Accessibility

- Icon-only buttons must contain visually hidden text (placed inside the button alongside the icon) so screen readers announce the action.
- The `lgButtonToggle` directive manages `aria-expanded` and `aria-controls` automatically when used with `LgFilterContainerComponent`. When used standalone, set `id` and `ariaControls` on the directive manually.
