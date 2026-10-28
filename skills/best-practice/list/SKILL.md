---
name: canopy-list
description: Best practices for Canopy list-with-icons usage. Trigger when using lg-list-with-icons, lg-list-with-icons-item, ordered list markers, or list item variant theming in Angular.
license: MIT
metadata:
  category: data-display
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/list/docs/guide.mdx
---

# Canopy List with Icons - Best Practices

Use this skill whenever you build list UI with `LgListWithIconsComponent` and
`LgListWithIconsItemComponent` from `@legal-and-general/canopy`.

---

## Import

```ts
import {
  LgListWithIconsComponent,
  LgListWithIconsItemComponent,
} from '@legal-and-general/canopy';
```

Add both to a standalone component `imports` array.

---

## Basic Usage

Apply the directives to native list elements:

```html
<ul lg-list-with-icons>
  <li lg-list-with-icons-item iconName="checkmark" variant="mono">List item 1</li>
  <li lg-list-with-icons-item iconName="checkmark-spot-filled" variant="mono">
    List item 2
  </li>
</ul>
```

---

## Ordered Lists

Use an `ol` with `lg-list-with-icons` for ordered lists. Items are numbered automatically via CSS counters:

```html
<ol lg-list-with-icons>
  <li lg-list-with-icons-item iconName="checkmark" variant="mono">Step 1</li>
  <li lg-list-with-icons-item iconName="checkmark" variant="mono">Step 2</li>
  <li lg-list-with-icons-item iconName="checkmark" variant="mono">Step 3</li>
</ol>
```

Markers are shown as `1.`, `2.`, `3.` etc. in DOM order, with colour controlled by `variant`.

---

## Item-Level Theming

Set marker colour per item with `variant`:

- `mono`
- `positive`
- `negative`

`variant` is item-level and can differ between parent and child items.

`variant` set on an item controls marker colour.

```html
<ul lg-list-with-icons>
  <li lg-list-with-icons-item iconName="checkmark" variant="positive">Included</li>
  <li lg-list-with-icons-item iconName="cross" variant="negative">Not included</li>
</ul>
```

---

## Recommended Icons

Prefer the icon names currently used in stories for consistent list semantics:

- `checkmark`
- `checkmark-spot-filled`
- `bullet-point`
- `bullet-square`
- `bullet-feature`
- `bullet-dash`
- `bullet-circle`
- `progress-to-do`
- `cross`
- `crossmark-spot-filled`

---

## Inputs

### LgListWithIconsComponent

| Input | Type | Default | Description |
|---|---|---|---|
| `size` | `'default' \| 'large'` | `'default'` | Controls list typography and marker sizing. |

### LgListWithIconsItemComponent

| Input | Type | Default | Description |
|---|---|---|---|
| `iconName` | `IconName` | — | Icon shown for unordered items. Keep this set for consistency across templates. |
| `variant` | `'mono' \| 'positive' \| 'negative'` | `'mono'` | Item-level marker theme (controls both icon and ordered list number colour). |

---

## Do and Don't

### Do

1. **Do** apply `lg-list-with-icons` to `ul` or `ol`, and `lg-list-with-icons-item` to each `li`.
2. **Do** use `variant` on each item for mixed positive/negative/neutral lists.
3. **Do** keep nested lists to parent and one child level.
4. **Do** use `ol` for naturally ordered sequences; use `ul` for unordered content.

### Don't

1. **Don't** rely on plain `ul` or `ol` expecting Canopy list marker styling.
2. **Don't** use removed APIs such as `iconColour`.

