---
name: canopy-link-menu
description: Best practices for the Canopy Link Menu component. Trigger when building link lists, navigation menus, or card-style link collections in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/link-menu/docs/guide.mdx
---

# Canopy Link Menu — Best Practices

This skill provides usage guidance and input reference for the Canopy `lg-link-menu` component from `@legal-and-general/canopy`.

Apply this skill whenever you use `LgLinkMenuComponent` or `lg-link-menu`.

---

## Import

```ts
import {
  LgLinkMenuComponent,
  LgLinkMenuItemComponent,
  LgLinkMenuItemTextComponent,
} from '@legal-and-general/canopy';
```

For icon support, also import:

```ts
import { LgIconComponent } from '@legal-and-general/canopy';
```

---

## Basic Usage

```html
<lg-link-menu>
  <a href="/overview">
    <lg-link-menu-item>
      <lg-link-menu-item-text>Overview</lg-link-menu-item-text>
    </lg-link-menu-item>
  </a>
  <a href="/details">
    <lg-link-menu-item>
      <lg-link-menu-item-text>Details</lg-link-menu-item-text>
    </lg-link-menu-item>
  </a>
</lg-link-menu>
```

---

## With Secondary Text

Use a second `lg-link-menu-item-text` for a descriptive subtitle. It renders with reduced weight and muted colour automatically.

```html
<lg-link-menu>
  <a href="/personal-details">
    <lg-link-menu-item>
      <lg-link-menu-item-text [isBold]="true">Personal details</lg-link-menu-item-text>
      <lg-link-menu-item-text>Your name, date of birth and address</lg-link-menu-item-text>
    </lg-link-menu-item>
  </a>
</lg-link-menu>
```

---

## With Icons

**Left icon** (projected as content):

```html
<a href="#">
  <lg-link-menu-item>
    <lg-icon name="settings"></lg-icon>
    <lg-link-menu-item-text>Settings</lg-link-menu-item-text>
  </lg-link-menu-item>
</a>
```

**Override or hide right icon:**

```html
<!-- Override with a specific icon -->
<lg-link-menu-item rightIcon="download">...</lg-link-menu-item>

<!-- Hide right icon entirely -->
<lg-link-menu-item [rightIcon]="null">...</lg-link-menu-item>
```

**External links** — set `target="_blank"` on the anchor to automatically show the `link-external` icon with accessible text "opens in a new tab":

```html
<a href="https://example.com" target="_blank">
  <lg-link-menu-item>
    <lg-link-menu-item-text>External resource</lg-link-menu-item-text>
  </lg-link-menu-item>
</a>
```

---

## Dos and Don'ts

### Do

1. **Do** organise links into logical, related groups with clear, descriptive section headings — especially in complex menus like sidebars, navs, or footers.
2. **Do** provide clear, concise labels for each link.
3. **Do** use secondary text for additional context if needed.
4. **Do** ensure icons are meaningful and support the link's purpose.

### Don't

1. **Don't** use link menus for single actions — use a link or button instead.
2. **Don't** include unrelated or miscellaneous links, or present a long, unstructured list — menus must group related links and use clear hierarchy to avoid overwhelming users with "walls of links."
3. **Don't** use link menus as a substitute for contextual links within page content.
4. **Don't** overload menus with too many links or excessive secondary text.

---

## Accessibility

- Always use semantic navigation markup and ARIA roles for grouped navigation (e.g. `<nav role="navigation">`).
- Each link must have a clear, descriptive label.
- If using icons, provide accessible text or `aria-label` for screen readers.
- Keyboard users must be able to tab through all links in the menu in order.

---

## Design Constraints

- Link menus work best when they contain **between 2 and 10 links** — fewer may not justify a menu; more can overwhelm users.
- Use link menus only for grouped navigation, not as a catch-all for every possible destination.
- Link menus are not a replacement for contextual links within page content.

---

## Inputs

### LgLinkMenuItemComponent

| Input | Type | Default | Required | Description |
|-------|------|---------|----------|-------------|
| `rightIcon` | `string \| null \| undefined` | `undefined` | No | Custom icon name for the right icon, or `null` to hide it. |

### LgLinkMenuItemTextComponent

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `isBold` | `boolean` | `false` | Makes the text bold (font weight 500). |
