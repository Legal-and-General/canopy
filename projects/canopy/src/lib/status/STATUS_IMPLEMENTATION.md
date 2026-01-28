# LG Status Directive - Implementation Notes & Developer Guide

## Overview

The `lgStatus` directive is a reusable Angular directive that applies one of five common colour variants to Canopy components. It provides consistent status-based styling across the component library.

## Architecture

### Core Components

1. **LgStatusDirective** (`status.directive.ts`)
   - Main directive that manages status and theme application
   - Handles theme inheritance from colour mode containers
   - Validates usage on approved components only (dev mode)
   - Uses MutationObserver for dynamic theme inheritance

2. **StatusClassService** (`status-class.service.ts`)
   - Injectable service for managing CSS class application
   - Provides methods to apply and remove status-related classes
   - Ensures clean class management with proper cleanup

3. **Status Interface** (`status.interface.ts`)
   - Type definitions for Status and Theme

### Status Types

```typescript
type Status = 'generic' | 'info' | 'success' | 'warning' | 'error';
```

### Theme Types

```typescript
type Theme = 'neutral' | 'neutral-inverse' | 'subtle' | 'bold';
```

## Implementation Details

### Directive Lifecycle

1. **ngOnInit**
   - Applies initial classes based on status and theme
   - Sets up MutationObserver if theme inheritance is needed

2. **ngAfterViewInit**
   - Validates that directive is used on approved components (dev mode only)
   - Prevents misuse on unsupported elements

3. **ngOnDestroy**
   - Cleans up MutationObserver if present
   - Prevents memory leaks

### Theme Inheritance Mechanism

The directive implements intelligent theme inheritance from parent colour mode containers:

```typescript
private getInheritedTheme(): Theme | null {
  const element = this.hostElement.nativeElement as HTMLElement;
  const colourModeContainer = this.findColourModeContainer(element);
  
  if (colourModeContainer) {
    const classList = colourModeContainer.classList;
    const themeClass = Array.from(classList).find(className =>
      className.startsWith('lg-theme-'),
    );
    
    if (themeClass) {
      const theme = themeClass.replace('lg-theme-', '') as Theme;
      return theme;
    }
  }
  
  return null;
}
```

**How it works:**

- Walks up the DOM tree to find a parent with `lg-mode-*` class
- Extracts theme from `lg-theme-*` class if present
- Returns null if no colour mode container found
- **Inherited themes take precedence** over explicitly set `lgStatusTheme`

### MutationObserver Setup

The directive observes class changes on parent colour mode containers to ensure inherited themes are always applied:

```typescript
private setupMutationObserver(): void {
  const colourModeContainer = this.findColourModeContainer(element);
  
  if (colourModeContainer) {
    this.mutationObserver = new MutationObserver(() => {
      this.applyClasses();
    });
    
    this.mutationObserver.observe(colourModeContainer, {
      attributes: true,
      attributeFilter: ['class'],
    });
  }
}
```

This ensures that if the parent's theme changes dynamically, the status component automatically updates, regardless of whether `lgStatusTheme` is explicitly set.

### Component Validation

In development mode, the directive validates it's only used on approved components:

```typescript
private validateHostElement(): void {
  if (!isDevMode()) {
    return;
  }
  
  const allowedComponents = ['lg-banner', 'lg-alert', 'lg-details', 'lg-validation'];
  
  const isValidTag = allowedComponents.includes(tagName);
  const isValidClass = allowedComponents.some(className =>
    classList.contains(className),
  );
  
  if (!isValidTag && !isValidClass) {
    throw new Error(
      `lgStatus directive can only be used on: ${allowedComponents.join(', ')}`
    );
  }
}
```

**Approved Components:**

- `lg-banner`
- `lg-alert`
- `lg-details`
- `lg-validation`

## Usage Guide

### Basic Usage

```typescript
import { LgStatusDirective } from '@legal-and-general/canopy';
```

```html
<lg-alert lgStatus="success" lgStatusTheme="neutral">
  Operation completed successfully!
</lg-alert>
```

### With Theme Inheritance

When used within a colour mode container, the directive automatically inherits the theme and this **cannot be overridden**:

```html
<div lgColour="blue" lgColourTheme="bold">
  <lg-alert lgStatus="success">
    <!-- Automatically inherits "bold" theme from parent -->
    <!-- Setting lgStatusTheme here would have no effect -->
    This alert uses bold theme styling
  </lg-alert>
</div>
```

### Status-Only Usage (No Colour Mode Parent)

If only status is specified and there's no colour mode parent, theme defaults to 'neutral':

```html
<lg-alert lgStatus="error">
  <!-- Uses neutral theme as fallback (no colour mode parent) -->
  An error occurred
</lg-alert>
```

If `lgStatusTheme` is explicitly set, it will only be used when there's no colour mode parent:

```html
<lg-alert lgStatus="error" lgStatusTheme="subtle">
  <!-- Uses subtle theme only if no colour mode parent exists -->
  <!-- If inside a colour mode container, inherits that theme instead -->
  An error occurred
</lg-alert>
```

## Input Properties

| Property | Type | Default | Required | Description |
|----------|------|---------|----------|-------------|
| `lgStatus` | `Status` | `'generic'` | No | The status variant to apply |
| `lgStatusTheme` | `Theme` | `'neutral'` | No | The theme variant (only used as fallback when no colour mode parent exists; inherited themes take precedence) |

## CSS Classes Applied

The directive applies two classes:

1. **Status Class**: `lg-status-{status}`
   - Examples: `lg-status-success`, `lg-status-error`

2. **Theme Class**: `lg-theme-{theme}`
   - Examples: `lg-theme-neutral`, `lg-theme-bold`

## Common Use Cases

### 1. Alert Messages

```html
<lg-alert lgStatus="error" lgStatusTheme="neutral">
  Please correct the errors below
</lg-alert>
```

### 2. Banner Notifications

```html
<lg-banner lgStatus="info" lgStatusTheme="subtle">
  System maintenance scheduled for tonight
</lg-banner>
```

### 3. Form Validation

```html
<lg-validation lgStatus="error">
  This field is required
</lg-validation>
```

### 4. Details/Disclosure

```html
<lg-details lgStatus="warning" lgStatusTheme="neutral-inverse">
  <summary>Important information</summary>
  <p>Please read carefully...</p>
</lg-details>
```

## Integration with Existing Components

The status directive is already integrated into several Canopy components:

- **Alert Component**: Uses status for inline messages
- **Banner Component**: Uses status for page-level notifications
- **Details Component**: Uses status for collapsible content
- **Form Validation**: Uses status for error/success states

These components already include the directive, so you don't need to add it manually.

## Development Considerations

### Performance

- **MutationObserver**: Created whenever a colour mode parent container is detected
- **Automatic Cleanup**: Observer disconnected on destroy to prevent memory leaks
- **Always Active**: Observer remains active to ensure inherited themes always take precedence

### Testing

When testing components that use this directive:

```typescript
// Mock the StatusClassService if needed
TestBed.configureTestingModule({
  providers: [
    StatusClassService
  ]
});
```

### Debugging

In development mode, the directive will throw errors if used incorrectly:

- Using on non-approved components
- Invalid status or theme values

### Extending to New Components

To allow the directive on a new component, update the `allowedComponents` array in `validateHostElement()`:

```typescript
const allowedComponents = [
  'lg-banner', 
  'lg-alert', 
  'lg-details', 
  'lg-validation',
  'lg-your-new-component' // Add new component
];
```

## Best Practices

1. **Theme Inheritance is Automatic**: When inside colour mode containers, the directive automatically inherits the theme and this cannot be overridden - this ensures visual consistency

2. **Explicit Themes for Standalone Usage**: Only set `lgStatusTheme` when the component is not inside a colour mode container

3. **Use Semantic Status Values**: Choose status values that match the message intent:
   - `success`: Positive confirmations
   - `error`: Critical issues
   - `warning`: Cautionary messages
   - `info`: Informational notices
   - `generic`: Neutral messages

4. **Validation in Dev Mode**: Always test in development mode to catch usage errors early

5. **Avoid Direct Class Manipulation**: Let the directive manage classes - don't manually add `lg-status-*` or `lg-theme-*` classes

## Migration Notes

If migrating from manual class application:

**Before:**

```html
<lg-alert class="lg-status-success lg-theme-neutral">
  Success message
</lg-alert>
```

**After:**

```html
<lg-alert lgStatus="success" lgStatusTheme="neutral">
  Success message
</lg-alert>
```

## Future Enhancements

Potential improvements for consideration:

1. **Additional Status Types**: Consider adding more status types if needed
2. **Custom Theme Support**: Allow custom themes beyond the predefined set
3. **Status Icons**: Automatic icon injection based on status
4. **Accessibility Improvements**: ARIA attributes based on status
5. **Animation Support**: Transition effects when status changes

---

**Last Updated**: February 2026
