---
name: canopy-forms-design
description: Best practices for designing Canopy forms and form journeys. Trigger when choosing a single-page or multi-page flow, arranging fields, or planning form actions and validation in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/forms/docs/forms-design.mdx
---

# Canopy Forms Design — Best Practices

Use this skill when designing a form or form journey in an Angular project using Canopy. Apply it alongside the relevant Canopy field and validation component skills.

> See also: [Canopy Content Area](../content-area/SKILL.md) for form-journey page structure, progress placement, and confirmation notices. Use [Canopy Card](../card/SKILL.md) for the single-page form card pattern.

## Choose a Journey Pattern

### Multi-page journey

Split a long form into focused steps so users can concentrate on a manageable amount of information at a time. Use the `form-journey` content-area variant for each page.

- Give each page a semantic level-2 title using `lg-content-area-title`.
- Keep the back link in the content-area header.
- Place the page title, instructions, progress indicator where appropriate, and fields in the content section.
- Put the current page's actions in the content-area footer.
- Keep the journey title distinct from the page title.

### Introductory page

Use an introductory page when users need context or preparation before entering data. Place the `Before you begin` level-2 title and introductory text in the content section. Use the same back-link header as the intermediate step, and put Continue and Cancel together in a footer button group. Do not show the intermediate step's progress indicator or journey title on this page.

### Intermediate page

Show the progress indicator in the content section, above the page title and fields, so the bar has the available content width. Keep the journey title in the indicator and the current step heading in `lg-progress-header`; these are separate from the page's level-2 title.

### Confirmation page

Treat confirmation as a completed state and do not show an active progress indicator. Use a success notice with a filled confirmation pictogram, a concise success title and completion message, and a Return to product action with a right-arrow icon inside `lg-notice-action`.

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

### Single-page form

Use the form-journey card for a shorter form that does not need multiple steps. Place the `<form>` element outside the card so it wraps both the card content and its footer actions.

## Layout and Fields

- Arrange fields in one column and group related information together.
- Put fields in a logical order, such as personal details before contact details.
- Top-align labels; place hints below labels and above their controls.
- Use input masks where they help users enter a known format.
- Avoid splitting a field such as a person's name unless the task requires it.
- Mark optional fields in the label, for example `Mobile number (optional)`, instead of marking every required field.
- Stack radio buttons and checkboxes vertically, one option per line.
- Prefer radio buttons or a segment control over a select when the options are suitable; use select inputs as a last resort.
- Size fields to the expected answer: do not make known-length fields wider than their expected value, and choose a reasonable width for variable-length answers.

## Actions

- Align form buttons with the left edge of the fields.
- Use a back link at the top of a multi-page form when users need to return to the previous step.
- Use Continue for forward navigation and a clearly labelled secondary action for cancellation where appropriate.
- Do not disable form buttons to prevent errors; keep them available so users can receive feedback and correct their input.

## Validation and Accessibility

- Use Canopy validation components to explain how to correct an invalid field.
- Keep labels programmatically associated with their controls, and provide hints when users need formatting guidance.
- Make error messages specific and actionable; do not expose technical validation details.
- Use semantic heading levels consistently. Each journey page uses a level-2 page title; the progress indicator's journey title and current-step heading do not replace it.
