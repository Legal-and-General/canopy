---
name: canopy-v37-migration
description: Apply the Canopy v36→v37 breaking changes to an Angular project. Trigger when the user asks to migrate to Canopy v37, upgrade @legal-and-general/canopy from v36, or fix errors after upgrading to v37.
license: MIT
metadata:
  version: '37.0.0'
  source: https://github.com/Legal-and-General/canopy/releases/tag/v37.0.0
---

# Canopy v36 → v37 Migration

When asked to apply this migration, work through each section below in order.
After completing all sections, follow the **Verification** steps at the end.

---

## 1. list: replace removed `variant` input on `LgListWithIconsComponent` with `size`

**What changed:** The `variant` input on `<ul lg-list-with-icons>` / `<ol lg-list-with-icons>`
(which accepted `neutral-foreground`, `light-foreground`, or `dark-foreground`) has been removed
as part of the list component redesign for brand modernisation. It is replaced by a new `size`
input (`default` or `large`) that controls typography and spacing. The background-colour
adaptation that `variant` previously handled is now managed through design tokens automatically.

**Search for** (in `*.html` and `*.ts` files):
```
[variant]=
```
```
variant="neutral-foreground"
```
```
variant="light-foreground"
```
```
variant="dark-foreground"
```
Also search for the removed TypeScript type:
```
ListWithIconsVariant
```

**Replace with:**

- Remove the `variant` binding from `<ul lg-list-with-icons>` / `<ol lg-list-with-icons>`.
- If you need to increase list size, add `size="large"` (or `[size]="'large'"`). The default is `size="default"` and can be omitted.
- Remove any import of `ListWithIconsVariant` from `@legal-and-general/canopy`.

**Before:**
```html
<ul lg-list-with-icons variant="neutral-foreground">
  <li lg-list-with-icons-item iconName="checkmark">Item 1</li>
</ul>

<ul lg-list-with-icons [variant]="listVariant">
  <li lg-list-with-icons-item iconName="checkmark">Item 1</li>
</ul>
```
```ts
import { ListWithIconsVariant } from '@legal-and-general/canopy';

listVariant: ListWithIconsVariant = 'light-foreground';
```

**After:**
```html
<!-- Remove the variant binding entirely; the list now adapts via design tokens -->
<ul lg-list-with-icons>
  <li lg-list-with-icons-item iconName="checkmark">Item 1</li>
</ul>

<!-- Use size="large" only if you need larger typography/spacing -->
<ul lg-list-with-icons size="large">
  <li lg-list-with-icons-item iconName="checkmark">Item 1</li>
</ul>
```
```ts
// Remove the ListWithIconsVariant import and any associated property
```

> **Automated?** Partly — removing the `variant` attribute/binding is a mechanical
> find-and-replace, but you should verify the visual output on each affected list because
> the colour adaptation is now handled by design tokens rather than explicit variants.

---

## 2. list: replace removed `iconColour` input on `LgListWithIconsItemComponent` with `variant`

**What changed:** The `iconColour` input on `<li lg-list-with-icons-item>` — which accepted
an arbitrary CSS variable string such as `'--colour-green-600'` — has been removed. Icon/marker
colour is now controlled by a semantic `variant` input: `mono` (default), `positive`, or
`negative`. This aligns marker colours with the design token system and ensures consistent
theming across colour modes.

**Search for** (in `*.html` and `*.ts` files):
```
iconColour
```
```
[iconColour]
```

**Replace with:**

- Remove the `iconColour` attribute or binding from every `<li lg-list-with-icons-item>`.
- Add a `variant` input if you need a semantic marker colour:
  - `variant="positive"` — renders the marker in the positive/success colour (replaces `--colour-green-*` overrides)
  - `variant="negative"` — renders the marker in the negative/error colour (replaces `--colour-red-*` overrides)
  - `variant="mono"` — renders the marker in the default monochrome colour (this is the default; can be omitted)

**Before:**
```html
<ul lg-list-with-icons>
  <li lg-list-with-icons-item iconName="checkmark" iconColour="--colour-green-600">
    Eligible item
  </li>
  <li lg-list-with-icons-item iconName="close" iconColour="--colour-red-600">
    Ineligible item
  </li>
  <li lg-list-with-icons-item iconName="checkmark" [iconColour]="itemColour">
    Dynamic item
  </li>
</ul>
```

**After:**
```html
<ul lg-list-with-icons>
  <li lg-list-with-icons-item iconName="checkmark" variant="positive">
    Eligible item
  </li>
  <li lg-list-with-icons-item iconName="close" variant="negative">
    Ineligible item
  </li>
  <!-- Choose the closest semantic variant; remove the dynamic binding -->
  <li lg-list-with-icons-item iconName="checkmark" variant="mono">
    Dynamic item
  </li>
</ul>
```

> **Automated?** No — the mapping from a raw CSS variable colour to one of `mono`,
> `positive`, or `negative` requires a semantic judgement for each usage. Review each list
> item and select the variant that best matches the original intent.

---

## 3. list: remove deleted `LgListWithExpressiveStylingDirective` and `lgListWithExpressiveStyling` selector

**What changed:** The `LgListWithExpressiveStylingDirective` (selector `lgListWithExpressiveStyling`,
applied to `<ol>` elements) has been removed from the library entirely. This directive styled
ordered list counters with the expressive typeface. The expressive list styling pattern is no
longer part of the Canopy design system following brand modernisation.

**Search for** (in `*.html`, `*.ts`, and `*.scss` files):
```
lgListWithExpressiveStyling
```
```
LgListWithExpressiveStylingDirective
```
```
lg-expressive-list
```

**Replace with:**

- Remove the `lgListWithExpressiveStyling` attribute from all `<ol>` elements.
- Remove any import of `LgListWithExpressiveStylingDirective` from `@legal-and-general/canopy`
  in your `*.ts` files.
- Remove any custom styles that targeted `.lg-expressive-list`.
- If you still need a visually distinct ordered list, use `<ol lg-list-with-icons>`
  with appropriate `iconName` values on each item.

**Before:**
```html
<ol lgListWithExpressiveStyling>
  <li>Step one</li>
  <li>Step two</li>
  <li>Step three</li>
</ol>
```
```ts
import { LgListWithExpressiveStylingDirective } from '@legal-and-general/canopy';

@NgModule({
  imports: [ LgListWithExpressiveStylingDirective ],
})
```
```scss
.lg-expressive-list {
  /* custom overrides */
}
```

**After:**
```html
<!-- Use a standard ordered list with lg-list-with-icons if icon markers are needed -->
<ol lg-list-with-icons>
  <li lg-list-with-icons-item>Step one</li>
  <li lg-list-with-icons-item>Step two</li>
  <li lg-list-with-icons-item>Step three</li>
</ol>
```
```ts
// Remove the LgListWithExpressiveStylingDirective import
```
```scss
/* Remove any .lg-expressive-list rules */
```

> **Automated?** Partly — removing the directive attribute and import is mechanical, but
> you will need to decide whether a plain `<ol>`, a styled `<ol lg-list-with-icons>`, or
> an alternative component best replaces the expressive list in each context.

---

## Verification

1. Read the consumer project's `package.json` `scripts` field to identify the
   build and test commands. Common script names include `build`, `compile`,
   `type-check`, `test`, and `test:ci` — use whichever are present.
2. Ask the user to run their build command and confirm there are no TypeScript
   or compilation errors related to any of the APIs changed above.
3. Ask the user to run their test command and confirm the test suite passes.
4. If errors remain after applying all changes, re-read the relevant section
   above and check whether the pattern matched all occurrences (for example in
   template `.html` files as well as `.ts` files, or across multiple
   components).
