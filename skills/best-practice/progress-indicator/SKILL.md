---
name: canopy-progress-indicator
description: Best practices for the Canopy Progress Indicator component. Trigger when adding progress bars, multi-step form journey progress, step counters, or percentage indicators in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/progress-indicator/docs/guide.mdx
---

# Canopy Progress Indicator — Best Practices

This skill provides usage guidance and input reference for the Canopy progress indicator components from `@legal-and-general/canopy`.

Apply this skill whenever you use `LgProgressIndicatorComponent`, `LgProgressBarComponent`, or `LgProgressHeaderComponent`.

---

## Import

```ts
import {
  LgProgressIndicatorComponent,
  LgProgressBarComponent,
  LgProgressHeaderComponent,
} from '@legal-and-general/canopy';
```

---

## Basic Usage

**Simple progress bar only:**

```html
<lg-progress-bar [max]="totalSteps" [value]="currentStep"></lg-progress-bar>
```

**Full progress indicator for a multi-step journey:**

```html
<lg-progress-indicator
  [max]="totalSteps"
  [value]="currentStep"
  displayAs="step"
  [showProgressBar]="true"
>
  Journey title
  <lg-progress-header>Step Heading</lg-progress-header>
</lg-progress-indicator>
```

---

## LgProgressBarComponent Inputs

| Input | Type | Default | Required | Description |
|-------|------|---------|----------|-------------|
| `max` | `number` | `0` | Yes | Total number of steps. |
| `value` | `number` | `0` | Yes | Current step. |

---

## LgProgressIndicatorComponent Inputs

| Input | Type | Default | Required | Description |
|-------|------|---------|----------|-------------|
| `max` | `number` | `0` | Yes | Total number of steps. |
| `value` | `number` | `0` | Yes | Current step. |
| `displayAs` | `'step' \| 'percentage'` | `'step'` | No | Display mode. |
| `showProgressBar` | `boolean` | `true` | No | Whether to render the progress bar. |
| `stepsPrefix` | `string` | `'Step'` | No | Text prefix for step counter display (e.g. "Step 1 of 3"). |

---

## When to Use

Use the progress indicator to show progress through a multi-step form journey. Use it when the total number of steps is known in advance. For indeterminate loading states, use the Spinner component instead.
