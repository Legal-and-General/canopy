# LG Status Directive - Implementation Notes & Developer Guide

## Overview

The `lgStatus` directive applies status and theme classes to supported Canopy
components. These notes describe its implementation for contributors; see the
Alert, Banner, Details and Validation component guides for consumer usage.

## Architecture

### Core Components

- `LgStatusDirective` manages the status and theme, inherits a theme from a
  colour-mode ancestor and checks the host element in development mode.
- `StatusClassService` applies the `lg-status-{status}` and `lg-theme-{theme}`
  classes and removes previously applied classes.
- `status.interface.ts` defines the `Status` and `Theme` types.

### Status Types

```ts
type Status = 'generic' | 'info' | 'success' | 'warning' | 'error';
```

### Theme Types

```ts
type Theme = 'neutral' | 'neutral-inverse' | 'subtle' | 'bold';
```

## Implementation Details

### Directive Lifecycle

On initialisation the directive applies its classes and sets up theme
observation. After view initialisation it validates its host in development
mode. On destruction it disconnects the observer.

### Theme Inheritance Mechanism

The directive looks for the nearest ancestor with an `lg-mode-*` class. If that
ancestor also has an `lg-theme-*` class, the inherited theme takes precedence
over an explicitly supplied theme. Otherwise the directive uses the explicit
theme, falling back to `neutral`.

### MutationObserver Setup

The directive observes class changes on the colour-mode ancestor it found on
initialisation and reapplies its classes when that ancestor changes. It does
not automatically observe a new ancestor if the host is moved to another
container.

### Component Validation

In development mode, the directive accepts hosts whose tag or class matches
`lg-banner`, `lg-alert`, `lg-details`, `lg-notice` or `lg-validation`; it throws
for other hosts. Status and theme values are TypeScript types, not runtime
validation.

## Usage Guide

Consumers use the inputs exposed by each component, not a second instance of
the directive.

### Basic Usage

Import `LgAlertComponent` and use its `status` and `statusTheme` inputs:

```html
<lg-alert status="success" statusTheme="neutral">
  Operation completed successfully.
</lg-alert>
```

### With Theme Inheritance

Import `LgColourDirective` when using a colour-mode container:

```html
<div lgColour="blue" lgColourTheme="bold">
  <lg-alert status="error">
    This alert inherits the bold theme.
  </lg-alert>
</div>
```

### Status-Only Usage (No Colour Mode Parent)

Without an inherited theme, the component's `statusTheme` input is used; if it
is not supplied, the directive defaults to `neutral`. The directive's default
status is `generic`, but individual components may choose different defaults.
For example, Validation defaults to `error`.

## Input Properties

| Directive input | Type | Default | Component input |
|---|---|---|---|
| `lgStatus` | `Status` | `generic` | `status` |
| `lgStatusTheme` | `Theme` | Inherited theme, or `neutral` | `statusTheme` |

Check each component guide for its supported inputs and defaults.

## CSS Classes Applied

The service applies `lg-status-{status}` and `lg-theme-{theme}` to the host and
removes the previously applied classes when the values change.

## Common Use Cases

### 1. Alert Messages

See [Basic Usage](#basic-usage).

### 2. Banner Notifications

```html
<lg-banner status="info" statusTheme="subtle">
  System maintenance is scheduled for tonight.
</lg-banner>
```

### 3. Form Validation

```html
<lg-validation status="error">This field is required.</lg-validation>
```

### 4. Details/Disclosure

```html
<lg-details status="warning" statusTheme="neutral-inverse">
  <lg-details-panel-heading [headingLevel]="2">Important information</lg-details-panel-heading>
  Please read carefully.
</lg-details>
```

## Integration with Existing Components

Alert, Banner and Details expose the directive's inputs as `status` and
`statusTheme` through Angular's host-directives API. Validation also uses the
directive, but manages its `status` input itself. Notice uses
`StatusClassService` directly on its projected pictogram rather than applying
the directive to its host.

## Development Considerations

### Performance

The observer watches only the initial colour-mode ancestor's class attribute
and is disconnected when the directive is destroyed.

### Testing

The implementation is covered by `status.directive.spec.ts` and
`status-class.service.spec.ts`. Test any integration with the affected
component, including theme inheritance and changes to the parent colour mode.

### Debugging

In development mode, an unsupported host causes an error. Verify status and
theme values using the exported TypeScript types; they are not checked at
runtime.

### Extending to New Components

Update the allowed hosts in `validateHostElement()` and integrate the directive
with the component. For components that expose both inputs directly, the
host-directives configuration follows this pattern:

```ts
hostDirectives: [{
  directive: LgStatusDirective,
  inputs: [ 'lgStatus:status', 'lgStatusTheme:statusTheme' ],
}],
```

Consider the component's default status, role, icons and theme behaviour, and
document its public inputs in its component guide.

## Best Practices

Use semantic status values, prefer the component inputs to manually applying
status classes, and account for inherited themes. Test in development mode to
catch unsupported hosts.

## Migration Notes

When replacing manually applied status classes, remove conflicting classes and
configure the component's `status` and `statusTheme` inputs instead.

## Future Enhancements

Propose changes to status behaviour through an issue and consider accessibility
and breaking-change implications.
