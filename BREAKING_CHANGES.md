# Breaking Changes

This project uses [semantic versioning](https://semver.org/) via the [semantic release](https://www.npmjs.com/package/semantic-release) node module. 

Where possible we try and avoid breaking changes, however there will be some scenarios where this is unavoidable.

The [release notes](https://github.com/Legal-and-General/canopy/releases) for the package will document any breaking changes. You should always try and keep on the most up to date version of the package, this will reduce the impact of having to handle multiple breaking changes in one go.

## What is supported
The following patterns are supported and fall within the breaking change process.

### API of a component
If modifications happen to a component which force some kind of change on to a consuming application, then this is a breaking change. Consider the following example.

```html
<lg-alert variant="error">This is an error</lg-alert>
```
If we were to modify the above component and rename the variant property to `type`, this would be classed as a breaking change.  
e.g.
```html
<lg-alert type="error">This is an error</lg-alert>
```
It would be a breaking change because a consuming application pulling in this change would break.

If instead we were to add a new property, this would not be a breaking change because pre-existing functionality would be unaffected.

e.g.
```html
<lg-alert variant="error" [dismissible]="'true'">This is an error</lg-alert>
```

### CSS variables, mixins and utility classes
There [may be scenarios where you need to implement custom patterns in your application](./IDEOLOGIES.md#the-pattern-is-not-meant–for–the–design–system). If this is the case we recommend that you familiarise yourself with the css variables, mixins and utility classes provided by Canopy.

> Utility classes are CSS class names that serve one particular purpose, and are named as such.

Canopy predominantly uses [BEM](http://getbem.com/introduction/) styles which are scoped to specific components. However we do have utility classes for some common use cases e.g. `.lg-font-size-7, .lg-visually-hidden`. On the whole these classes are backed up with corresponding mixins.

If a CSS variable, mixin or utility class is removed or renamed this could cause a consuming application to stop working and would therefore be considered a breaking change. This is also the case if they are moved to a different file location.

e.g. removal of this line of code.
```css
--border-radius-sm: 0.125rem;
```

If we were to modify a variable, mixin or utility class in such a way that it altered the visual look and feel but did not break functionality then it would not be considered a breaking change.

e.g. modification of this line.
```css
--border-radius-sm: 0.25rem;
```

## What is not supported
The following patterns are not supported and do not fall within the breaking change process.

### class name and html changes
One of the primary benefits of using a JavaScript based component library is to provide a simple interface for complex components. It does this by encapsulating the complexity inside the component itself.

A good example of this is the date component, in it's simplest form the component can be used like below.

```html
<lg-date-field formControlName="date">
  Date of birth
<lg-date-field>
```

The markup rendered to the browser is of course much more complex and consists of multiple input fields and other DOM elements. Theoretically we could change the encapsulated markup without causing a breaking change as the component API remains unchanged.

This does however mean that the DOM and associated CSS classes can not be considered stable.

We recommend that you **do not override css styles in your application**, if you do this you are likely to be impacted by changes which were not considered to be a breaking change.
