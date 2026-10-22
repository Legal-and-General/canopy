---
name: canopy-accordion
description: Best practices for Canopy lg-accordion, lg-accordion-item and lg-accordion-panel-heading, including header actions, icons, lazy content and content-area composition. Trigger when using these selectors or adding expandable sections, progressive disclosure panels or FAQ layouts in an Angular project using Canopy.
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
  LgAccordionItemContentDirective,
  LgAccordionPanelHeadingComponent,
  LgButtonComponent,
  LgIconComponent,
} from '@legal-and-general/canopy';
```

Add these to your standalone component's `imports` array. Include
`LgAccordionItemContentDirective` for lazy content, `LgIconComponent` for icons and
`LgButtonComponent` for the styled header actions below; omit unused imports.

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

Treat all panels as closed by default. Set `[isActive]="true"` explicitly on any
item you want initially open; the first item is not opened automatically.
Allow multiple open panels by default, or set `[multi]="false"` on the group to
keep only one panel open at a time.

Use HTML or Angular components for panel content, including links, forms, tables
and images. Keep essential information visible outside the accordion.

**Lazy-load panel content** (only initialises when first opened):

```html
<lg-accordion-item (opened)="loadContent()">
  <lg-accordion-panel-heading>Lazy section</lg-accordion-panel-heading>
  <ng-template lgAccordionItemContent>
    <app-lazy-component></app-lazy-component>
  </ng-template>
</lg-accordion-item>
```

Use `lgAccordionItemContent`, not `lgAccordionContent`. Expect initialised content
to be retained when the item closes and reopens; do not rely on closing the panel
to destroy its components or reset their state.

**Panel heading with icon:**

```html
<lg-accordion-panel-heading>
  <lg-icon name="news"></lg-icon>
  Section with icon
</lg-accordion-panel-heading>
```

Use a supported `lg-icon` name. Let Canopy arrange the chevron, optional decorative
icon and label in that order. Allow long labels to wrap; both icons align with
the first line, so do not add manual positioning or spacing overrides.

---

## Header Actions

Place secondary header links or buttons in a container marked with
`lgAccordionHeadingActions`. This is a content-projection marker, not a directive
you need to import. Keep actions outside the heading's toggle button; activating
an action does not expand or collapse the panel.

```html
<lg-accordion-panel-heading>
  <lg-icon name="notes" />
  Saved details
  <div lgAccordionHeadingActions>
    <a lg-button priority="link" [backIcon]="true" href="#favourite">
      <lg-icon name="star-outline" />
      Favourite
    </a>
    <a lg-button priority="link" [backIcon]="true" href="#delete">
      <lg-icon name="trash" />
      Delete
    </a>
  </div>
</lg-accordion-panel-heading>
```

Replace the placeholder destinations with your application's destinations or use
buttons with action handlers for non-navigation operations. Use `[backIcon]="true"`
with link-priority buttons to place the supplied icon before the text.

Let the actions occupy their own row on mobile. From the `md` breakpoint, actions
sit to the right when space permits and can wrap when space is limited.

---

## In a Content Area

Also import `LgContentAreaComponent`, `LgContentAreaHeaderComponent`,
`LgContentAreaTitleComponent`, `LgContentAreaContentComponent` and
`LgColourDirective` from `@legal-and-general/canopy` and add them to your
component's `imports` array.

Place the accordion inside `lg-content-area-content`, and apply the colour mode
and theme to `lg-content-area`. Nest the accordion headings below the content-area
title in the heading hierarchy.

```html
<lg-content-area lgColour="blue" lgColourTheme="neutral-inverse">
  <lg-content-area-header>
    <lg-content-area-title [headingLevel]="2">
      Account information
    </lg-content-area-title>
  </lg-content-area-header>
  <lg-content-area-content>
    <lg-accordion [headingLevel]="3">
      <lg-accordion-item>
        <lg-accordion-panel-heading>Personal details</lg-accordion-panel-heading>
        <p>Your personal details.</p>
      </lg-accordion-item>
      <lg-accordion-item>
        <lg-accordion-panel-heading>Contact details</lg-accordion-panel-heading>
        <p>Your contact details.</p>
      </lg-accordion-item>
      <lg-accordion-item>
        <lg-accordion-panel-heading>Preferences</lg-accordion-panel-heading>
        <p>Your preferences.</p>
      </lg-accordion-item>
    </lg-accordion>
  </lg-content-area-content>
</lg-content-area>
```

Choose a mode of `blue`, `green`, `red` or `yellow` and a theme of `neutral`,
`neutral-inverse`, `subtle` or `bold`. Let the accordion inherit its styling from
the content area rather than adding custom colours.

If you add an application-level Expand all / Collapse all control, use a secondary
button and enable `[multi]="true"` on the group. Track actual item state through
the `opened` and `closed` outputs so the label stays correct after individual
items are toggled. Use the `add` icon for Expand all and `minus` for Collapse all.
Do not assume the accordion group exposes an expand-all method.

---

## LgAccordionComponent Inputs

| Input | Type | Default | Required | Description |
|-------|------|---------|----------|-------------|
| `headingLevel` | `number` | n/a | Yes | Semantic heading level for all panel headings: `1`, `2`, `3`, `4`, `5`, `6`. |
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
3. **Do** set initial open states explicitly with `isActive` when a section should start expanded.

### Don't

1. **Don't** use to hide key information that all users need — display it on the page instead.
2. **Don't** hide required confirmations, terms acceptance or controls needed to
   continue inside an accordion. <!-- from documentation image -->

---

## Interaction and Accessibility

- Let panels show and hide immediately. Only the chevron has an animated rotation;
  do not add panel-height animation or an overflow-clipping wrapper.
- Rely on `display: none` to hide closed panels and exclude their controls from
  keyboard navigation; do not override the closed panel's display styles.
- Expect open panels to have no animation wrapper clipping their content. Other
  ancestor containers can still impose clipping or stacking constraints.
- Preserve the toggle's keyboard operation, link-style focus outline and automatic
  `aria-expanded`, `aria-controls` and panel labelling. Do not replace them with
  click-only heading elements or remove focus indicators.
- Use `headingLevel` to fit the surrounding page hierarchy; do not choose a heading
  level solely for its visual size.

---

## When to Use vs Alternatives

- Use an **Accordion** (over Details) when there are multiple related sections of content.
- Use **Tabs** when there is a large amount of content and switching between sections is a core interaction.
- For a single collapsible section, use the **Details** component instead.
