# Usage

Before using Canopy in a project it is worth familiarising yourself with the [best practice](./BEST_PRACTICE.md) guidelines.

The Canopy library is currently deployed to the [GitHub package registry](https://github.com/features/package-registry). Some [simple setup](https://help.github.com/en/articles/configuring-npm-for-use-with-github-package-registry#installing-a-package) is required to be able to use the GitHub registry alongside any existing registry you may have.

## Setting up the GitHub registry

Add the following to the `.npmrc` file within your project. This tells npm to look in the GitHub registry for any modules with the `legal-and-general` namespace.

```
@legal-and-general:registry=https://npm.pkg.github.com/
```

## Authenticating against the GitHub registry

To be able to [authenticate against the GitHub registry](https://help.github.com/en/articles/configuring-npm-for-use-with-github-package-registry#authenticating-to-github-package-registry) you will need to create a [personal access token](https://help.github.com/en/packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages) with `read:packages` repository permissions.

You will need to add the following to your [users `.npmrc` file](https://docs.npmjs.com/configuring-npm/npmrc.html). (This is different from your projects npmrc file, do not check in your token).

```
//npm.pkg.github.com/:_authToken=PERSONAL-ACCESS-TOKEN
```

Authenticating a CI tool against the registry should be very similar to the above. You will have to store the token appropriately in a secret and inject it into the `~/.npmrc` file at build time.

## NPM install

You should now be able to install the module.

`npm install @legal-and-general/canopy`

### Requirements

Your project should already have `@angular/common` and `@angular/core`
installed. Canopy is built and tested against the Angular version in the
[repository's `package.json`](../package.json). Check that file at the
[Git tag](https://github.com/Legal-and-General/canopy/tags) corresponding to
your installed Canopy release when choosing a compatible Angular version.

## Import the Library

Canopy exports standalone Angular components, directives and pipes. Import the ones
you need into the component that uses them.

<a id="importing-specific-component-modules-recommended"></a>

### Importing standalone components

For example, import the button component into an application component:

```ts
import { Component } from '@angular/core';
import { LgButtonComponent } from '@legal-and-general/canopy';

@Component({
  selector: 'app-example',
  imports: [LgButtonComponent],
  template: '<button lg-button type="button">Continue</button>',
})
export class ExampleComponent {}
```

Standalone Canopy components can also be added to an NgModule's `imports` array.
Refer to the component guides in [Storybook](https://legal-and-general.github.io/canopy/)
for the imports and usage of each component.

## Import the global css

Canopy creates a global css file to provide some global styles and utility classes for spacing, colours etc. This global css is required for the individual components to work.

In your `angular.json` file you will need to incorporate the global styles into the styles arrays of build and test.

```json
  "styles": [
    "node_modules/@legal-and-general/canopy/canopy.css"
  ],
```

### Canopy classes

The default css file, `canopy.css`, includes styling at an element-level. For the majority of cases, this should be used. However, if you need to tighten the scope of the usage of Canopy, for example if your application is embedded within another HTML page, then instead you can just use the Canopy classes.

In your `angular.json` file, replace `canopy.css` with the packaged design
token files and `canopy-classes.css`. The classes-only stylesheet does not
include the token definitions.

```json
  "styles": [
    "node_modules/@legal-and-general/canopy/styles/tokens/variables.css",
    "node_modules/@legal-and-general/canopy/styles/tokens/component-themes.css",
    "node_modules/@legal-and-general/canopy/styles/tokens/layout.css",
    "node_modules/@legal-and-general/canopy/styles/tokens/status.css",
    "node_modules/@legal-and-general/canopy/styles/tokens/typography.css",
    "node_modules/@legal-and-general/canopy/canopy-classes.css"
  ],
```

Furthermore, by using the `lg-canopy-element-typography` mixin, it is still possible to use the element styles and then easily scope them to where you like. For example:

```scss
@use '@legal-and-general/canopy/styles/mixins' as canopy;

app-hello-world {
  @include canopy.lg-canopy-element-typography();
}
```


## To import the styles in a scss format

An alternative to importing the global `canopy.css` file is to use the SCSS
files in your project's SCSS entry file. Configure the font paths before
loading the other styles so the Angular builder can find the packaged fonts:

These SCSS entry points import design-token CSS from the separate
`@legal-and-general/canopy-design-tokens` package. Add that package as a direct
dependency before using this option; it is not installed automatically with
Canopy. Use the version listed in Canopy's [`package.json`](../package.json) at
the Git tag matching your installed Canopy release. This extra dependency is
not required when using the prebuilt `canopy.css` or the bundled token CSS with
`canopy-classes.css`.

```scss
@use '@legal-and-general/canopy/styles/typography-fonts' with (
  $fonts-path-otto: '../fonts/otto',
  $fonts-path-nunito-sans: '../fonts/nunito-sans'
);
@use '@legal-and-general/canopy/styles/styles';
@use '@legal-and-general/canopy/styles/form';
```

The installed package contains:

- `styles/` - global styles, mixins and variables
- `styles/tokens/` - design token CSS
- `lib/` - component SCSS

### Canopy Fonts

Canopy consists of two fonts; Nunito Sans and ABC Otto. Both fonts are included in the distributed Canopy package, and will load automatically when you have installed Canopy correctly.

## Using the components

Each component is documented in [Storybook](https://legal-and-general.github.io/canopy/).
Its guide describes the design and usage, and the examples show the component in use.

## Updating Versions

Canopy uses [semantic versioning](https://semver.org/), and qualifying changes merged to the master branch can trigger a release. From time to time there will be breaking changes and like all modules it is recommended that you stay up to date where possible. It may be worth [subscribing to release notifications](https://help.github.com/en/github/receiving-notifications-about-activity-on-github/watching-and-unwatching-releases-for-a-repository) to be kept up to date with changes.

The [releases section](https://github.com/Legal-and-General/canopy/releases) on GitHub documents the changes between releases. Keep an eye out for anything labelled as a `BREAKING CHANGE` as this may require some code changes in your application.

We have provided a [guide which outlines our definition of a breaking change](./BREAKING_CHANGES.md). We avoid making too many breaking changes, and we tend to group them together into a larger release where possible. We keep an issued pinned to the top of the [issues list](https://github.com/Legal-and-General/canopy/issues) which contains upcoming breaking changes. If you notice an unintentional breaking change please do make us aware by raising an issue. 

## Browser support

Supported browsers can be viewed in the [.browserslistrc](../projects/canopy/.browserslistrc) file.

## Logging issues

If you encounter a bug or have any issue with anything to do with Canopy please do not hesitate to raise a [github issue](https://github.com/Legal-and-General/canopy/issues/new).
