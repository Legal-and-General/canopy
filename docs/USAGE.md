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

If you are working on a poorly configured corporate proxy you may need to add `strict-ssl=false` in order to overcome cert errors such as `UNABLE_TO_GET_ISSUER_CERT_LOCALLY` .

Authenticating a CI tool against the registry should be very similar to the above. You will have to store the token appropriately in a secret and inject it into the `~/.npmrc` file at build time.

## NPM install

You should now be able to install the module.

`npm install @legal-and-general/canopy`

## Import the Library

In your angular `app.module.ts' file you can choose to import all of the component modules or just the specific ones that you are using in your application.

### Importing specific component modules (recommended)

Importing specific modules is considered best practice as it only includes the code that you need and keeps build size to a minimum. Refer to the [storybook](https://legal-and-general.github.io/canopy/) docs tabs for documentation specific to each module.

```js
import { LgButtonModule, LgCardModule } from '@legal-and-general/canopy';
```

and add it to the imports section of your module.

```js
@NgModule({
  ...
  imports: [
    ...
    LgButtonModule,
    LgCardModule,
  ],
  ...
})
```

## Import the global css

Canopy creates a global css file to provide some global styles and utility classes for spacing, colours etc. This global css is required for the individual components to work.

In your `angular.json` file you will need to incorporate the global styles into the styles arrays of build and test.

```json
  "styles": [
    ...
    "node_modules/@legal-and-general/canopy/canopy.css"
  ],
```

### Canopy classes

The default css file, `canopy.css`, includes styling at an element-level. For the majority of cases, this should be used. However, if you need to tighten the scope of the usage of Canopy, for example if your application is embedded within another HTML page, then instead you can just use the Canopy classes.

In your `angular.json` file instead of importing `canopy.css`, use `canopy-classes.css`.

```json
  "styles": [
    ...
    "node_modules/@legal-and-general/canopy/canopy-classes.css"
  ],
```

Furthermore, by using the `lg-canopy-element-typography` mixin, it is still possible to use the element styles and then easily scope them to where you like. For example:

```scss
@import '~@legal-and-general/canopy/styles/mixins';
        
app-hello-world {
  @include lg-canopy-element-typography();
}
```


## To import the styles in a scss format

An alternative to importing the global canopy.css file is to import only the desired scss files in your project.
To import all the styles in one go, you can do the following in your project's scss entry file:

projects/canopy-test-app/src/styles.scss:

```scss
$fonts-path: 'dist/canopy/fonts';
@import 'dist/canopy/styles/styles';
```

You can find the scss files here:

- dist/styes - containing styles.scss that import all the styles
- dist/styles/variables - containing all the variables for colors, typography, etc
- dist/lib - containing all the components styles

### Canopy Fonts

Canopy consists of two fonts; Nunito Sans and ABC Otto. Both fonts are included in the distributed Canopy package, and will load automatically when you have installed Canopy correctly.

## Using the components

Each components is individually documented on Storybook, refer to the latest version which is available at https://legal-and-general.github.io/canopy/

The `notes` tab explains the usage of each component. The `story` tab displays the code required to render that particular documentation page, and is a useful reference point.

## Updating Versions

Canopy uses [semantic versioning](https://semver.org/) and a new version is deployed automatically on each code merge to the master branch. From time to time there will be breaking changes and like all modules it is recommended that you stay up to date where possible. It may be worth [subscribing to release notifications](https://help.github.com/en/github/receiving-notifications-about-activity-on-github/watching-and-unwatching-releases-for-a-repository) to be keep up to date with changes.

The [releases section](https://github.com/Legal-and-General/canopy/releases) on GitHub documents the changes between releases. Keep an eye out for anything labelled as a `BREAKING CHANGE` as this may require some code changes in your application.

We have provided a [guide which outlines our definition of a breaking change](./BREAKING_CHANGES.md). We avoid making too many breaking changes, and we tend to group them together into a larger release where possible. We keep an issued pinned to the top of the [issues list](https://github.com/Legal-and-General/canopy/issues) which contains upcoming breaking changes. If you notice an unintentional breaking change please do make us aware by raising an issue. 

## Browser support

Supported browsers can be viewed in the [.browserslistrc](../projects/canopy/.browserslistrc) file.

## Logging issues

If you encounter a bug or have any issue with anything to do with Canopy please do not hesitate to raise a [github issue](https://github.com/Legal-and-General/canopy/issues/new).
