---
name: forms-filter-buttons
description: Best practices for Canopy Filter Buttons. Trigger when adding filter button controls for narrowing data sets, with single or multiple selection, in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/forms/docs/filter-buttons/guide.mdx
---

# Canopy Filter Buttons — Best Practices

This skill provides usage guidance and dos and don'ts for Canopy filter buttons from `@legal-and-general/canopy`.

Apply this skill when building filter controls for data sets. Filter buttons are typically used inside a `lg-filter-container` — see also the `filter-container` skill.

---

## Import

For **single selection** (select one):

```ts
import { LgRadioGroupComponent, LgRadioButtonComponent } from '@legal-and-general/canopy';
```

For **multiple selection** (select multiple):

```ts
import { LgCheckboxGroupComponent, LgToggleComponent } from '@legal-and-general/canopy';
```

---

## Select One (Single Selection)

Style radio buttons as filter buttons to allow a single selection:

```html
<lg-radio-group formControlName="status">
  Status
  <lg-radio-button value="all">All</lg-radio-button>
  <lg-radio-button value="active">Active</lg-radio-button>
  <lg-radio-button value="closed">Closed</lg-radio-button>
</lg-radio-group>
```

---

## Select Multiple

Use checkbox group to allow multiple simultaneous selections:

```html
<lg-checkbox-group formControlName="types">
  Document type
  <lg-toggle value="statements">Statements</lg-toggle>
  <lg-toggle value="letters">Letters</lg-toggle>
  <lg-toggle value="reports">Reports</lg-toggle>
</lg-checkbox-group>
```

---

## Dos and Don'ts

### Do

1. **Do** use the deselected state as the default for all filter buttons.
2. **Do** keep filter labels succinct.
3. **Do** choose the correct button type — Select One when only one filter can be active, Select Multiple when several can.
4. **Do** maintain 12 px horizontal space between buttons.

### Don't

1. **Don't** use filter buttons for more than 10 filter options — use radio buttons or checkboxes in a filter panel instead.
