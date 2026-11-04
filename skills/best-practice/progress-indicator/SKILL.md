---
name: progress-indicator
description: Use the Canopy Progress Indicator for journey progress, standalone progress bars, step counters and percentage displays; apply when using lg-progress-indicator, lg-progress-bar or lg-progress-header in Angular.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/progress-indicator/docs/guide.mdx
---

# Canopy Progress Indicator — Best Practices

Use the progress indicator components from `@legal-and-general/canopy` to show the
progress of a journey, from a simple progress bar to a multi-part form journey.
Apply this skill whenever you use `lg-progress-indicator`, `lg-progress-bar` or
`lg-progress-header`, or import their corresponding components.

## Import

```ts
import {
  LgProgressBarComponent,
  LgProgressHeaderComponent,
  LgProgressIndicatorComponent,
} from '@legal-and-general/canopy';
```

Add the components you use to your module imports or standalone component's `imports`
array.

## Basic Usage

### Single progress bar

Use the guide's standalone progress bar example, with `max` and `value` supplied by
your host component:

```html
<lg-progress-bar [max]="max" [value]="value"></lg-progress-bar>
```

### Form journey

Use the guide's form journey example, with `max`, `value`, `displayAs` and
`showProgressBar` supplied by your host component:

```html
<lg-progress-indicator
  [max]="max"
  [value]="value"
  [displayAs]="displayAs"
  [showProgressBar]="showProgressBar"
>
  Journey title
  <lg-progress-header> Step Heading </lg-progress-header>
</lg-progress-indicator>
```

Keep the journey title and `lg-progress-header` directly inside `lg-progress-indicator`,
as shown in both the guide and `ProgressJourney` story.

## Display Modes

- Use `displayAs` with `step` (the default) for a step counter.
- Use `displayAs` with `percentage` for a percentage display.
- Use `showProgressBar` to toggle the progress bar; its default is `true`.
- Use `stepsPrefix` to change the step counter's prefix, such as “Step” in “Step 1 of 3”.

## Inputs

### LgProgressBarComponent

| Name | Description | Type | Default | Required |
|---|---|---|---|---|
| `max` | The number of the maximum steps | `number` | `0` | Yes |
| `value` | The current step in the process | `number` | `0` | Yes |

### LgProgressIndicatorComponent

| Name | Description | Type | Default | Required |
|---|---|---|---|---|
| `max` | The number of the maximum steps | `number` | `0` | Yes |
| `value` | The current step in the process | `number` | `0` | Yes |
| `displayAs` | Display as a step counter or percentage. The percentage is calculated based on the `max` and `min` values. | `'percentage' \| 'step'` | `step` | No |
| `showProgressBar` | Toggle display the progress bar | `boolean` | `true` | No |
| `stepsPrefix` | For a step counter, this changes the text content which describes the steps (e.g. Step 1 of 3). | `string` | `Step` | No |

> **Source conflicts:** The guide's `displayAs` description references `min`, but no `min`
> input is documented or exposed. Do not bind a `min` input. The story argTypes list
> `max`/`value` defaults as `4`/`1`, while both guide tables and component declarations
> specify `0`/`0`; the tables above preserve the guide.
>
> The guide describes three child components, including `lg-progress-journey`, but its
> consumer example and story project only the title and `lg-progress-header`. Follow
> the documented nesting above; the guide does not explain this composition distinction.

## Usage Rules

- Supply `max` as the number of maximum steps and `value` as the current step, as required
  by both documented APIs.
- Use a single `lg-progress-bar` when you only need the progress bar.
- Use the full indicator with a journey title and step heading for the documented
  multi-part form journey pattern.
