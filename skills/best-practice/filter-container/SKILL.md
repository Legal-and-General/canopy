---
name: filter-container
description: Best practices for the Canopy Filter Container pattern. Trigger when adding an expandable filter panel with a toggle button and filter controls in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/filter-container/docs/guide.mdx
---

# Canopy Filter Container — Best Practices

This skill provides usage guidance for the Canopy filter container pattern from `@legal-and-general/canopy`.

Apply this skill whenever you use `LgFilterContainerComponent` or build an expandable filter panel.

---

## Import

```ts
import {
  LgFilterContainerComponent,
  LgFilterContainerPanelComponent,
  LgFilterContainerPanelBodyComponent,
  LgFilterContainerPanelFooterComponent,
  LgButtonComponent,
  LgButtonToggleDirective,
} from '@legal-and-general/canopy';
```

---

## Basic Usage

The toggle button **must** carry the `lgButtonToggle` directive. The `id` and `ariaControls` attributes are managed automatically by `LgFilterContainerComponent` — do not set them manually.

```html
<lg-filter-container>
  <button lg-button priority="secondary" lgButtonToggle>
    Filters
    <lg-icon name="chevron-down"></lg-icon>
  </button>

  <lg-filter-container-panel>
    <lg-filter-container-panel-body>
      <!-- Place filter form controls here -->
    </lg-filter-container-panel-body>

    <lg-filter-container-panel-footer>
      <lg-button-group>
        <button lg-button priority="primary">Apply</button>
        <button lg-button priority="secondary">Cancel</button>
      </lg-button-group>
    </lg-filter-container-panel-footer>
  </lg-filter-container-panel>
</lg-filter-container>
```

---

## Structure

| Component | Role |
|-----------|------|
| `lg-filter-container` | Root wrapper; positions toggle button to the right. |
| `lg-filter-container-panel` | The collapsible panel. |
| `lg-filter-container-panel-body` | Contains the filter form controls. |
| `lg-filter-container-panel-footer` | Contains Apply / Cancel buttons, wrapped in `lg-button-group`. |

---

## Design Constraints

- The toggle button is always positioned to the right of the containing element.
- Use `priority="secondary"` on the toggle button — it is a supporting action, not the primary page action.
- Place filter controls inside `lg-filter-container-panel-body`, not directly in `lg-filter-container`.

---

## Accessibility

- `lgButtonToggle` on the toggle button manages `aria-expanded` and `aria-controls` automatically when used inside `LgFilterContainerComponent`.
- Do not use any element other than `<button>` for the toggle — using a `<div>` or `<a>` will throw an error.
