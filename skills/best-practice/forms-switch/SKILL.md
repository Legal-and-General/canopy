---
name: forms-switch
description: Best practices for the Canopy Switch component. Trigger when adding toggle switches for immediate settings, on/off controls, or binary preferences in a form in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/forms/toggle/docs/switch/guide.mdx
---

# Canopy Switch — Best Practices

This skill provides usage guidance, dos and don'ts, and input reference for the Canopy `lg-switch` component from `@legal-and-general/canopy`.

Apply this skill whenever you use `LgToggleComponent` as `lg-switch`.

---

## Import

```ts
import { LgToggleComponent } from '@legal-and-general/canopy';
```

---

## Basic Usage

```html
<lg-switch formControlName="notifications" value="enabled">
  Enable email notifications
</lg-switch>
```

When multiple switches appear in a form, wrap them with a `<fieldset>` and `<legend>`:

```html
<fieldset>
  <legend>Notification preferences</legend>
  <lg-switch formControlName="email" value="enabled">Email</lg-switch>
  <lg-switch formControlName="sms" value="enabled">SMS</lg-switch>
</fieldset>
```

---

## Inputs

| Input | Type | Default | Required | Description |
|-------|------|---------|----------|-------------|
| `id` | `string` | auto-generated | No | HTML `id` attribute. |
| `name` | `string` | `null` | Yes | HTML `name` attribute. |
| `value` | `string` | `null` | Yes | HTML `value` attribute. |
| `focus` | `boolean` | `null` | No | Sets focus on the switch. |
| `ariaDescribedBy` | `string` | `null` | No | ID of element that describes the switch. |

## Outputs

| Output | Type | Description |
|--------|------|-------------|
| `blur` | `EventEmitter<Event>` | Emitted on blur. |

---

## Dos and Don'ts

### Do

1. **Do** use when users need to turn a setting on or off.
2. **Do** use when changing a setting has an **immediate** effect on the UI.
3. **Do** wrap multiple switches in a `<fieldset>` with a `<legend>`.

### Don't

1. **Don't** use multiple switches when only a single option can be selected — use radio buttons or select instead.
2. **Don't** use when the selection is not intended to trigger an immediate effect — use a checkbox instead.
3. **Don't** use in conjunction with a save or submit action — changes from a switch should happen immediately.
4. **Don't** change the label text when the switch changes state.
