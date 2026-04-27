---
name: canopy-accordion
description: Best practices for the Canopy Accordion component. Trigger when adding expandable/collapsible content sections, progressive disclosure panels, or FAQ layouts in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/accordion/docs/guide.mdx
---

# Canopy Accordion — Best Practices

This skill provides usage guidance, dos and don'ts, and input reference for the Canopy `lg-accordion` component from `@legal-and-general/canopy`.

Apply this skill whenever you use `LgAccordionComponent`, `LgAccordionItemComponent`, or `LgAccordionPanelHeadingComponent`.

---

## Import

```ts
import {
  LgAccordionComponent,
  LgAccordionItemComponent,
  LgAccordionPanelHeadingComponent,
} from '@legal-and-general/canopy';
```

---

## Basic Usage

```html
<lg-accordion [headingLevel]="2">
  <lg-accordion-item [isActive]="true">
    <lg-accordion-panel-heading>Section one</lg-accordion-panel-heading>
    <p>Content for section one.</p>
  </lg-accordion-item>
  <lg-accordion-item>
    <lg-accordion-panel-heading>Section two</lg-accordion-panel-heading>
    <p>Content for section two.</p>
  </lg-accordion-item>
</lg-accordion>
```

**Lazy-load panel content** (only initialises when first opened):

```html
<lg-accordion-item (opened)="loadContent()">
  <lg-accordion-panel-heading>Lazy section</lg-accordion-panel-heading>
  <ng-template lgAccordionItemContent>
    <app-lazy-component></app-lazy-component>
  </ng-template>
</lg-accordion-item>
```

**Panel heading with icon:**

```html
<lg-accordion-panel-heading>
  <lg-icon name="news"></lg-icon>
  Section with icon
</lg-accordion-panel-heading>
```

---

## LgAccordionComponent Inputs

| Input | Type | Default | Required | Description |
|-------|------|---------|----------|-------------|
| `headingLevel` | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | n/a | Yes | Semantic heading level for all panel headings. |
| `multi` | `boolean` | `true` | No | When `false`, only one panel may be open at a time. |

---

## LgAccordionItemComponent

### Inputs

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `isActive` | `boolean` | `false` | Whether the panel is open. |

### Outputs

| Output | Type | Description |
|--------|------|-------------|
| `opened` | `EventEmitter<void>` | Emitted when the panel opens. |
| `closed` | `EventEmitter<void>` | Emitted when the panel closes. |

---

## Dos and Don'ts

### Do

1. **Do** use to hide secondary information that not all users need immediately.
2. **Do** keep panel headings as short and descriptive as possible.
3. **Do** open the first accordion panel by default when the content is likely to be relevant to most users.

### Don't

1. **Don't** use to hide key information that all users need — display it on the page instead.

---

## When to Use vs Alternatives

- Use an **Accordion** (over Details) when there are multiple related sections of content.
- Use **Tabs** when there is a large amount of content and switching between sections is a core interaction.
- For a single collapsible section, use the **Details** component instead.
