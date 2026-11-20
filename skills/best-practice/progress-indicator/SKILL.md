---
name: progress-indicator
description: Use the Canopy Progress Indicator for journey progress, standalone progress bars, step counters, percentage displays and colour themes; apply when using lg-progress-indicator, lg-progress-bar, lg-progress-header or lg-progress-journey or their corresponding component imports in Angular.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/progress-indicator/docs/guide.mdx
---

# Canopy Progress Indicator — Best Practices

Use the progress indicator components from `@legal-and-general/canopy` to show the
progress of a journey, from a simple progress bar to a multi-part form journey.
Apply this skill whenever you use `lg-progress-indicator`, `lg-progress-bar`,
`lg-progress-header` or `lg-progress-journey`, or import their corresponding components.

## Import

```ts
import {
  LgProgressBarComponent,
  LgProgressHeaderComponent,
  LgProgressIndicatorComponent,
  LgProgressJourneyComponent,
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
  Application journey
  <lg-progress-header>Your details</lg-progress-header>
</lg-progress-indicator>
```

Keep the journey title and `lg-progress-header` directly inside `lg-progress-indicator`,
as shown in both the guide and `ProgressJourney` story. Let the indicator configure
`lg-progress-journey` internally. When using `LgProgressJourneyComponent` directly,
supply the journey title as projected content.

## Display Modes

- Use `displayAs` with `step` (the default) for a step counter.
- Use `displayAs` with `percentage` for a percentage display.
- Use `showProgressBar` to toggle the progress bar; its default is `true`.
- Use `stepsPrefix` to change the step counter's prefix, such as 'Step' in 'Step 1 of 3'.

## Progress Values and Layout

- Set `max` to a positive total and keep `value` between `0` and `max`. Both inputs
  default to `0`; Angular does not require you to supply them.
- Expect the bar fill to use `(value / max) * 100`, capped at 100%. When `max` is zero
  or negative, the bar is empty.
- Expect percentage text to use the same ratio, clamped to 0-100 and rounded down to
  a whole number. When `max` is zero, it displays `0%`.
- Expect step text to display `value` and `max` without rounding or clamping.
- Allow the journey title and progress text to wrap at narrow widths.
- Expect a gap between the filled and unfilled portions only while progress is
  between 0% and 100%. Empty and completed bars span the full width without a gap.

## Colour Modes and Themes

Use the Storybook pattern to apply colour mode and theme to a containing content
area, with the indicator inside `lg-content-area-content`:

```html
<lg-content-area [lgColour]="colourMode" [lgColourTheme]="colourTheme">
  <lg-content-area-content>
    <lg-progress-indicator [max]="max" [value]="value" [displayAs]="displayAs" [showProgressBar]="showProgressBar" [stepsPrefix]="stepsPrefix">
      {{ journeyTitle }}
      <lg-progress-header>{{ stepHeading }}</lg-progress-header>
    </lg-progress-indicator>
  </lg-content-area-content>
</lg-content-area>
```

For this pattern, also import `LgColourDirective`, `LgContentAreaComponent` and
`LgContentAreaContentComponent` from `@legal-and-general/canopy` and add them to
your component's `imports` array.

Supply the host properties shown in the story. Use `blue`, `green`, `red` or `yellow`
for `colourMode` and `neutral`, `neutral-inverse`, `bold` or `subtle` for `colourTheme`.
The story defaults to `blue` and `neutral`. Treat these as host properties bound to
the colour directive, not inputs on `LgProgressIndicatorComponent`. Let the indicator
inherit its colour tokens from the containing area.

## Animation and Typography

- Use the built-in width transitions for changes to `value` or `max` in either
  display mode. They use `--animation-duration` and `--animation-fn`, which default
  to `0.25s` and `ease-out`.
- Expect the fill to animate from zero on initial display in browsers supporting
  CSS `@starting-style`. Without that support, initial progress appears immediately;
  subsequent width changes still transition.
- Respect the built-in reduced-motion behaviour: with
  `prefers-reduced-motion: reduce`, progress appears immediately without transitions.
- Keep the header's expressive size 4 typography and font weight of
  700. The journey title uses size 1 with weight 700; step and percentage text
  inherit their font size rather than using a fixed font-size utility.

## Dos and Don'ts

### Do

1. **Do** keep the journey title consistent and update the step heading for each step.
2. **Do** use the `displayAs` input to choose step-based or percentage-based progress text.

### Don't

1. **Don't** use the journey title as the active step heading.

## Accessibility

- Keep `value` in the range from `0` to a positive `max`; do not rely on the visual
  percentage cap to correct invalid ARIA values. The bar exposes `role="progressbar"`,
  a minimum of zero, and the supplied `max` and `value` as its ARIA values.
- Let the full indicator label the bar using generated IDs for the journey title
  and progress text.
- Give a standalone bar a descriptive `ariaLabel`, or set `ariaLabelledBy` to an
  existing label's ID. Use space-separated IDs for multiple labels;
  `ariaLabelledBy` takes precedence over `ariaLabel`.
- Set `isAriaLiveRegion` to `true` to enable `aria-live="polite"`. Its default is
  `false`, which uses `aria-live="off"`. Use property binding for this boolean input.

## CSS Custom Properties

| Custom property | Controls |
| --------------- | -------- |
| `--progress-indicator-gap` | Space before the step heading. |
| `--progress-header-colour` | Active step heading colour. |
| `--progress-journey-colour` | Journey title and progress text colour. |
| `--progress-journey-gap` | Space between the journey title and progress text. |
| `--progress-bar-background-colour` | Progress bar track colour. |
| `--progress-bar-colour` | Progress bar fill colour. |
| `--progress-bar-gap` | Space between journey details and the progress bar, and between its filled and unfilled portions. |
| `--progress-bar-border-radius` | Progress bar corner radius. |
| `--progress-bar-height` | Progress bar height. |
| `--animation-duration` | Shared transition duration; defaults to `0.25s`. |
| `--animation-fn` | Shared transition easing; defaults to `ease-out`. |

## Inputs

### LgProgressBarComponent

| Input | Description | Type | Default | Required |
| ----- | ----------- | ---- | ------- | -------- |
| `max` | Total number of steps or units. | `number` | `0` | No |
| `value` | Current number of steps or units. | `number` | `0` | No |
| `ariaLabel` | Accessible name when not labelled by another element. | `string` | `'Progress bar'` | No |
| `ariaLabelledBy` | Space-separated IDs of elements that label the bar; takes precedence over `ariaLabel`. | `string \| null` | `null` | No |
| `isAriaLiveRegion` | Enables polite live-region announcements. | `boolean` | `false` | No |

### LgProgressIndicatorComponent

| Input | Description | Type | Default | Required |
| ----- | ----------- | ---- | ------- | -------- |
| `max` | Total number of steps or units. | `number` | `0` | No |
| `value` | Current number of steps or units. | `number` | `0` | No |
| `displayAs` | Displays a step counter or the percentage calculated from `value / max`, clamped to 0–100 and rounded down. | `'percentage' \| 'step'` | `'step'` | No |
| `showProgressBar` | Controls whether the progress bar is displayed. | `boolean` | `true` | No |
| `stepsPrefix` | Prefix for step text, for example 'Step 1 of 3'. | `string` | `'Step'` | No |

### LgProgressJourneyComponent

| Input | Description | Type | Default | Required |
| ----- | ----------- | ---- | ------- | -------- |
| `max` | Total number of steps or units. | `number` | `0` | No |
| `value` | Current number of steps or units. | `number` | `0` | No |
| `displayAs` | Displays a step counter or percentage text. | `'percentage' \| 'step'` | `'step'` | No |
| `stepsPrefix` | Prefix for step text. | `string` | `'Step'` | No |
| `journeyTitleId` | ID applied to the journey title for accessible labelling. | `string` | `undefined` | No |
| `stepsTextId` | ID applied to the progress text for accessible labelling. | `string` | `undefined` | No |

`LgProgressHeaderComponent` has no inputs; supply the active step heading as projected
content. These components do not emit outputs.
