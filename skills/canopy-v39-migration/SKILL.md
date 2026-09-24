---
name: canopy-v39-migration
description: Apply the Canopy v38→v39 breaking changes to an Angular project. Trigger when the user asks to migrate to Canopy v39, upgrade @legal-and-general/canopy from v38, or fix errors after upgrading to v39.
license: MIT
metadata:
  version: '39.0.0'
  source: https://github.com/Legal-and-General/canopy/releases/tag/v39.0.0
---

# Canopy v38 → v39 Migration

When asked to apply this migration, work through each section below in order.
After completing all sections, follow the **Verification** steps at the end.

---

## 1. details: replace `--details-bg-color` with `--details-status-background-colour` and remove `--details-chevron-top-positon`

**What changed:** The CSS custom properties `--details-bg-color` and
`--details-chevron-top-positon` (note the original typo in the old name) have been
removed from `LgDetailsComponent`. Applications that override the details component's
background colour must switch to the replacement token
`--details-status-background-colour`.

**Search for** (in `*.scss`, `*.css`, and `*.html` files):
```
--details-bg-color
```
```
--details-chevron-top-positon
```

**Replace with:**

- Replace every occurrence of `--details-bg-color` with
  `--details-status-background-colour`.
- Remove any overrides of `--details-chevron-top-positon` entirely — there is no
  replacement for this property; the chevron position is no longer customisable via a
  CSS custom property.

**Before:**
```scss
lg-details {
  --details-bg-color: #f0f4f8;
  --details-chevron-top-positon: 1.25rem;
}
```

**After:**
```scss
lg-details {
  --details-status-background-colour: #f0f4f8;
  /* --details-chevron-top-positon (note: original name had a typo) has been removed; delete this line */
}
```

> **Automated?** No — search and replace is straightforward for
> `--details-bg-color` → `--details-status-background-colour`, but overrides of
> `--details-chevron-top-positon` must be removed manually.

---

## 2. details: add `[showIcon]="false"` where `status="generic"` is used without an icon

**What changed:** Previously, `LgDetailsComponent` never rendered an icon when
`status="generic"`, regardless of the `showIcon` input. The component now honours
`showIcon` for all statuses including `generic`. If you use `status="generic"` and do
not want an icon to appear (the previous default behaviour), you must now explicitly set
`[showIcon]="false"`.

**Search for** (in `*.html` files):
```
status="generic"
```
```
[status]="'generic'"
```

**For each match:** check whether a `showIcon` input is already present. If `showIcon`
is absent (or set to `true`) and you do not want the icon displayed, add
`[showIcon]="false"`.

**Before:**
```html
<lg-details status="generic" headingText="More information">
  <p>Supplementary content here.</p>
</lg-details>
```

**After:**
```html
<lg-details status="generic" [showIcon]="false" headingText="More information">
  <p>Supplementary content here.</p>
</lg-details>
```

If you do want the icon to appear for `generic` status (the new capability), no change
is needed — `showIcon` defaults to `true`.

> **Automated?** No — each usage must be assessed to decide whether the new default
> icon display is desired. Add `[showIcon]="false"` only where the icon should remain
> hidden.

---

## 3. details: be aware of new default icons for `generic` and `info` statuses

**What changed:** `LgDetailsComponent` now ships default icons for two statuses that
previously had none:

| Status    | New default icon     |
|-----------|----------------------|
| `generic` | `globe`              |
| `info`    | `information-filled` |

A custom icon can be supplied via the new `icon` input on `lg-details` if the defaults
are not appropriate for your use case.

**Search for** (in `*.html` files):
```
status="generic"
```
```
status="info"
```
```
[status]="'generic'"
```
```
[status]="'info'"
```

**For each match:** verify visually (or via a snapshot test) that the newly rendered
icon is appropriate in context. To override with a custom icon, use the `icon` input:

**Before:**
```html
<lg-details status="info" headingText="Did you know?">
  <p>Some informational content.</p>
</lg-details>
```

**After (custom icon override, if needed):**
```html
<lg-details status="info" icon="info-outline" headingText="Did you know?">
  <p>Some informational content.</p>
</lg-details>
```

If the default icon (`information-filled` for `info`, `globe` for `generic`) is
acceptable, no code change is required.

> **Automated?** No — whether to accept the default icon or provide a custom one is a
> design decision. Review each usage in your application.

---

## 4. details: update tests that assert on the `role` attribute for `info` and `generic` statuses

**What changed:** For `status="info"` and `status="generic"`, the host element does not
set a `role` attribute. In the DOM, `getAttribute('role')` returns `null` when an
attribute is absent, so unit tests that assert `getAttribute('role')` for these statuses
should now expect `null` (not `undefined`).

**Search for** (in `*.spec.ts` and `*.test.ts` files):
```
getAttribute('role')
```

**For each match in a test involving `LgDetailsComponent` with `status="info"` or
`status="generic"`:** update the assertion to expect `null`.

**Before:**
```ts
it('should not set a role for generic status', () => {
  component.status = 'generic';
  fixture.detectChanges();
  expect(el.getAttribute('role')).toBeUndefined();
});
```

**After:**
```ts
it('should not set a role for generic status', () => {
  component.status = 'generic';
  fixture.detectChanges();
  expect(el.getAttribute('role')).toBeNull();
});
```

> **Automated?** No — search for `getAttribute('role')` in your test files and update
> the expected value from `undefined` to `null` where the test covers the `info` or
> `generic` status of `LgDetailsComponent`.

---

## Verification

1. Read the consumer project's `package.json` `scripts` field to identify the build and
   test commands. Common script names include `build`, `compile`, `type-check`, `test`,
   and `test:ci` — use whichever are present.
2. Ask the user to run their build command and confirm there are no TypeScript or
   compilation errors related to any of the APIs changed above.
3. Ask the user to run their test command and confirm the test suite passes.
4. If errors remain after applying all changes, re-read the relevant section above and
   check whether the pattern matched all occurrences (for example in template `.html`
   files as well as `.ts` files, or across multiple components).
