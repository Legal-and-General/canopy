---
name: canopy-content-area
description: Best practices for the Canopy Content Area component. Trigger when structuring main page content sections, form journeys, or sub-pages in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/content-area/docs/guide.mdx
---

# Canopy Content Area — Best Practices

This skill provides usage guidance, dos and don'ts, and input reference for the Canopy `lg-content-area` component from `@legal-and-general/canopy`.

Apply this skill whenever you use `LgContentAreaComponent`.

---

## Import

```ts
import {
  LgContentAreaComponent,
  LgContentAreaHeaderComponent,
  LgContentAreaContentComponent,
  LgContentAreaFooterComponent,
  LgContentAreaTitleComponent,
  LgButtonComponent,
  LgButtonGroupComponent,
  LgIconComponent,
  LgProgressIndicatorComponent,
  LgProgressHeaderComponent,
  LgNoticeComponent,
  LgNoticeTitleComponent,
  LgNoticeDescriptionComponent,
  LgNoticeActionComponent,
  LgPictogramComponent,
} from '@legal-and-general/canopy';
```

---

## Variants

### Default

A flexible container for any page content.

```html
<lg-content-area>
  <lg-content-area-content>
    <p>Main content here.</p>
  </lg-content-area-content>
</lg-content-area>
```

### Child variant

For sub-pages or self-service product child pages, includes a header section for titles.

```html
<lg-content-area>
  <lg-content-area-header>
    <lg-content-area-title [headingLevel]="2">Section title</lg-content-area-title>
  </lg-content-area-header>
  <lg-content-area-content>
    <p>Content here.</p>
  </lg-content-area-content>
</lg-content-area>
```

Add expressive typography to the title:

```html
<lg-content-area-title [headingLevel]="2" class="lg-font--expressive">
  Section title
</lg-content-area-title>
```

### Form journey variant

Use this variant for multi-page form journeys. Keep the back link in the header, the page content in the content section, and the current step's actions in the footer. Give each page a semantic level-2 title.

```html
<lg-content-area variant="form-journey">
  <lg-content-area-header>
    <a href="/previous-page">Back</a>
  </lg-content-area-header>
  <lg-content-area-content>
    <lg-content-area-title [headingLevel]="2">Your details</lg-content-area-title>
    <p>Enter the details requested for this step.</p>
  </lg-content-area-content>
  <lg-content-area-footer>
    <lg-button-group>
      <button lg-button type="button" priority="primary">Continue</button>
      <button lg-button type="button" priority="secondary">Cancel</button>
    </lg-button-group>
  </lg-content-area-footer>
</lg-content-area>
```

#### Introductory page

Use the same back-link header as the later steps. Put the level-2 `Before you begin` title and introductory copy in the content section. Place Continue and Cancel together in a footer button group.

#### Intermediate page

Place `lg-progress-indicator` in the content section before the step copy and fields so its bar can use the available content width. Keep the journey title inside the indicator, separate from the page's level-2 title. Include a `lg-progress-header` for the current step.

```html
<lg-content-area-content>
  <lg-progress-indicator [max]="3" [value]="2">
    Update your details
    <lg-progress-header>Your details</lg-progress-header>
  </lg-progress-indicator>
  <lg-content-area-title [headingLevel]="2">Your details</lg-content-area-title>
  <!-- step instructions and fields -->
</lg-content-area-content>
```

#### Confirmation page

Treat confirmation as a completed state; do not show an active progress indicator. Use a success notice with a filled confirmation pictogram and put the next action in `lg-notice-action`.

```html
<lg-notice status="success">
  <lg-pictogram name="confirm" [hasFill]="true"></lg-pictogram>
  <lg-notice-title>Success</lg-notice-title>
  <lg-notice-description>Form completed</lg-notice-description>
  <lg-notice-action type="button">
    <button lg-button type="button" priority="primary">
      Return to product
      <lg-icon name="arrow-right"></lg-icon>
    </button>
  </lg-notice-action>
</lg-notice>
```

> See also: [Canopy Forms Design](../forms-design/SKILL.md) for choosing between multi-page and single-page forms and for field, validation, and action guidance.

---

## LgContentAreaComponent Inputs

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `variant` | `'default' \| 'form-journey'` | `'default'` | Layout variant. |

## LgContentAreaTitleComponent Inputs

| Input | Type | Default | Required | Description |
|-------|------|---------|----------|-------------|
| `headingLevel` | `HeadingLevel` | — | Yes | Semantic heading level. |

---

## Dos and Don'ts

### Do

1. **Do** use content areas as parent-level containers for all main page content.
2. **Do** align content areas to the 12-column grid, spanning at least 4 columns on MD layouts and above.
3. **Do** use the form journey variant for all form-based flows.
4. **Do** place the progress indicator in the content section, above the current step's title and fields.
5. **Do** use the content-area footer for step actions, grouped with `lg-button-group`.

### Don't

1. **Don't** nest content areas inside other content areas.
2. **Don't** place Cards inside a content area.
3. **Don't** use the default variant for form journeys — always use `variant="form-journey"`.
4. **Don't** use fewer than 4 columns for a content area on MD layouts and above.
5. **Don't** show an active progress indicator on the confirmation page.

