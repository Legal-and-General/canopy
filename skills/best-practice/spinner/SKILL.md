---
name: spinner
description: Use the Canopy Spinner for page loading and form submission waits; apply when using lg-spinner or importing LgSpinnerComponent in an Angular project.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/spinner/docs/guide.mdx
---

# Canopy Spinner — Best Practices

Use `lg-spinner` from `@legal-and-general/canopy` when an operation is taking time and
there is no meaningful progress to show, such as loading a page or submitting a form.
Apply this skill whenever you use `lg-spinner` or import `LgSpinnerComponent`.

## Import

```ts
import {
  LgSpinnerComponent,
  LgSrAlertMessageDirective,
} from '@legal-and-general/canopy';
```

Add both to your module imports or standalone component's `imports` array.

## Basic Usage

Use the `StandardSpinner` documentation example, with `loaded`, `size`, `variant` and
`text` supplied by your host component. Choose `size` and `variant` from the Inputs table.

```html
@if (!loaded) {
  <lg-spinner [size]="size" [variant]="variant" [text]="text ? text : null"></lg-spinner>
}
<p [lgSrAlertMessage]="loaded">Loading complete</p>
```

Keep the spinner visible until the process completes, then replace it with content or
navigate to the next part of the journey.

> **Source conflicts:** The guide's Usage section uses “no meaningful progress” as its
> criterion, but Don't #1 still says not to use a spinner when the process duration can be
> pre-determined. The guide does not explicitly clarify known or mocked delays. Do not
> infer an exception or an alternative component from these conflicting criteria.
>
> The story's default `variant: 'generic'` and additional snapshot `size: 'lg'` are not
> documented input values. Use only the values below. The copied example also passes
> `null` to `text`, whereas the guide documents `string`; check this discrepancy before
> using the example with strict template null checking.

## Variants

Use the documented variants `dark`, `light`, `color` and `inherit`; `dark` is the default.
Set `variant` to `inherit` to inherit the parent element's font colour, as used by the
loading button.

## Inputs

| Name | Description | Type | Default | Required |
|---|---|---|---|---|
| `variant` | The spinner variant | `SpinnerVariant` (`dark`, `light`, `color`, `inherit`) | `dark` | No |
| `size` | The size of the spinner | `SpinnerSize` (`xs`, `sm`, `md`) | `md` | No |
| `text` | The text to show under the spinner | `string` | `undefined` | No |

## Dos and Don'ts

### Do

1. **Do** use spinners to help manage user expectations against technical limitations.
2. **Do** always accompany a spinner used by itself on a page or card with a supporting
   message briefly explaining the reason for the wait.
3. **Do** always use the spinner together with `LgSrAlertMessageDirective` to notify screen
   reader users when loading finishes.

### Don't

1. **Don't** use a spinner if the duration of the process can be pre-determined, as stated
   in the guide's Don't #1; see the source conflict above.
2. **Don't** use multiple spinners in a single view.
3. **Don't** use a spinner for the illustrated download with measurable progress
   (“Downloading 45 of 127 MB, 8mb/s”). <!-- from documentation image -->

## Accessibility

Use `lgSrAlertMessage` to announce completion, as shown in the example. Keep the supporting
message for a standalone page or card spinner. A spinner inside a component such as a
button or input does not need an accompanying message.
