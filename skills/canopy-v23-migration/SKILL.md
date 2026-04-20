---
name: canopy-v23-migration
description: Apply the Canopy v22→v23 breaking changes to an Angular project. Trigger when the user asks to migrate to Canopy v23, upgrade @legal-and-general/canopy from v22, or fix errors after upgrading to v23.
license: MIT
metadata:
  version: '23.0.0'
  source: https://github.com/Legal-and-General/canopy/releases/tag/v23.0.0
---

# Canopy v22 → v23 Migration

When asked to apply this migration, work through each section below in order.
After completing all sections, follow the **Verification** steps at the end.

---

## 1. Link menu: remove deleted CSS custom properties

**What changed:** As part of L&G's brand-modernisation programme, the link-menu colour and border tokens have been replaced by design tokens supplied by `@legal-and-general/canopy-design-tokens`. Six CSS custom properties previously declared in `:root` by `variables/components/_link-menu.scss` have been removed; the file itself has been deleted from the distributed package.

**Search for** (in `*.css` and `*.scss` files), one at a time:
```
--link-menu-link-border-width-md
```
```
--link-menu-link-border-width-lg
```
```
--link-menu-link-color
```
```
--link-menu-link-active-color
```
```
--link-menu-link-hover-color
```
```
--link-menu-link-border-color
```

Remove or replace any overrides of these properties. If you were using them to customise link-menu colours, use the corresponding new design tokens instead:

| Removed property | New design token to use instead |
|---|---|
| `--link-menu-link-color` | `--link-menu-item-rest-colour` |
| `--link-menu-link-hover-color` | `--link-menu-item-hover-colour` |
| `--link-menu-link-active-color` | `--link-menu-item-active-colour` |
| `--link-menu-link-border-color` | *(no direct replacement — driven by design tokens automatically)* |
| `--link-menu-link-border-width-md` | *(no direct replacement — driven by design tokens automatically)* |
| `--link-menu-link-border-width-lg` | *(no direct replacement — driven by design tokens automatically)* |

Also search for any direct stylesheet imports of the deleted partial file:
```
@legal-and-general/canopy/styles/variables/components/link-menu
```

Remove that `@use` or `@import` statement entirely — the file no longer exists in the distributed package.

**Before:**
```scss
:root {
  --link-menu-link-color: hotpink;
  --link-menu-link-hover-color: deeppink;
}

@use '@legal-and-general/canopy/styles/variables/components/link-menu';
```

**After:**
```scss
:root {
  --link-menu-item-rest-colour: hotpink;
  --link-menu-item-hover-colour: deeppink;
}

/* @use line removed — file no longer exists */
```

> **Automated?** No — you will need to remove or replace each reference manually, consulting the mapping table above.

---

## 2. Link menu: update usages affected by the new default right icon and `rightIcon` input

**What changed:** The default right-hand icon in `LgLinkMenuItemComponent` has changed from `chevron-right` to `arrow-right`. On hover the icon now animates 0.25 rem to the right. For links that open in a new tab (`target="_blank"`), the icon remains `link-external` — this behaviour is unchanged.

A new optional `rightIcon` input (`string | null | undefined`) has been introduced:

| `rightIcon` value | Behaviour |
|---|---|
| `undefined` *(default)* | Shows `arrow-right` (or `link-external` for `target="_blank"`) |
| A named icon string | Shows that icon |
| `null` | Hides the right icon entirely |

**Action required only if** your application relied on the previous `chevron-right` default or needs to suppress the right icon.

**Search for** (in `*.html` files):
```
lg-link-menu-item
```

Inspect each result and decide whether to:
- **Do nothing** — the new `arrow-right` default is acceptable.
- **Restore `chevron-right`** — add `rightIcon="chevron-right"` to the `<lg-link-menu-item>` element.
- **Hide the icon** — add `[rightIcon]="null"` to the `<lg-link-menu-item>` element.

**Before** *(implicit `chevron-right`; no input existed)*:
```html
<a href="#">
  <lg-link-menu-item>
    <lg-link-menu-item-text>My link</lg-link-menu-item-text>
  </lg-link-menu-item>
</a>
```

**After** — accept new default (`arrow-right`), no change needed:
```html
<a href="#">
  <lg-link-menu-item>
    <lg-link-menu-item-text>My link</lg-link-menu-item-text>
  </lg-link-menu-item>
</a>
```

**After** — restore `chevron-right`:
```html
<a href="#">
  <lg-link-menu-item rightIcon="chevron-right">
    <lg-link-menu-item-text>My link</lg-link-menu-item-text>
  </lg-link-menu-item>
</a>
```

**After** — hide the right icon:
```html
<a href="#">
  <lg-link-menu-item [rightIcon]="null">
    <lg-link-menu-item-text>My link</lg-link-menu-item-text>
  </lg-link-menu-item>
</a>
```

> **Automated?** No — you will need to review each usage and apply the appropriate change manually.

---

## 3. Link menu: remove `isBold` from the secondary `lg-link-menu-item-text`

**What changed:** The second `lg-link-menu-item-text` within a `lg-link-menu-item` now **always** renders at font weight 400 (regular) with muted colour tokens, regardless of any `isBold` attribute. Any `isBold` on the second text element will be silently ignored. The first text element's `isBold` input continues to work as before.

**Search for** (in `*.html` files — look for patterns where two `lg-link-menu-item-text` elements appear inside a single `lg-link-menu-item`):
```
lg-link-menu-item-text
```

For each `lg-link-menu-item` that contains **two** `lg-link-menu-item-text` elements, check whether the second one carries `isBold`. If it does, remove that attribute.

**Before:**
```html
<lg-link-menu-item>
  <lg-link-menu-item-text [isBold]="true">Primary label</lg-link-menu-item-text>
  <lg-link-menu-item-text [isBold]="true">Secondary label (was bold)</lg-link-menu-item-text>
</lg-link-menu-item>
```

**After:**
```html
<lg-link-menu-item>
  <lg-link-menu-item-text [isBold]="true">Primary label</lg-link-menu-item-text>
  <lg-link-menu-item-text>Secondary label (always regular)</lg-link-menu-item-text>
</lg-link-menu-item>
```

> **Automated?** No — you will need to remove each occurrence of `isBold` on the second `lg-link-menu-item-text` manually.

---

## Verification

1. Read the consumer project's `package.json` `scripts` field to identify the build and test commands. Common script names include `build`, `compile`, `type-check`, `test`, and `test:ci` — use whichever are present.
2. Ask the user to run their build command and confirm there are no TypeScript or compilation errors related to any of the APIs changed above.
3. Ask the user to run their test command and confirm the test suite passes.
4. If errors remain after applying all changes, re-read the relevant section above and check whether the pattern matched all occurrences (e.g. in template `.html` files as well as `.ts` files, or across multiple components).
