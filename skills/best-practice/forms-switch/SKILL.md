---
name: canopy-forms-switch
description: Removal notice for the Canopy Switch selector. Trigger whenever lg-switch, switch variant usage, or related imports appear in an Angular project using Canopy.
license: MIT
metadata:
  category: removed
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/forms/toggle/docs/switch/guide.mdx
---

# Canopy Forms Switch - REMOVED

> **The `lg-switch` selector has been removed from Canopy's public API.**
> Existing switch usage should be migrated to supported components based on the interaction intent.

---

## What to Remove

Remove switch imports/usages and selector-based switch templates:

```html
<!-- Remove: -->
<lg-switch formControlName="notifications" value="enabled">
  Enable notifications
</lg-switch>

<!-- Remove: -->
<lg-toggle variant="switch">Enable notifications</lg-toggle>
```

---

## What to Replace It With

Choose the replacement based on behaviour:

1. Immediate on/off choice where users compare options: use `lg-segment` or inline radios.
2. Selection that is reviewed and submitted later: use checkbox (`lg-checkbox` / `LgToggleComponent`).
3. Single-choice form options from a defined set: use `LgRadioGroupComponent`.

```html
<!-- Example replacement with checkbox -->
<lg-checkbox formControlName="notifications" value="enabled">
  Enable notifications
</lg-checkbox>
```

> See also: [forms-checkbox](../forms-checkbox/SKILL.md), [forms-radio](../forms-radio/SKILL.md), [forms-segment](../forms-segment/SKILL.md).

---

## Don't

1. **Don't** use `<lg-switch>` in new templates.
2. **Don't** use `variant="switch"` on `LgToggleComponent`.
3. **Don't** add switch-specific guidance to new design documentation.
