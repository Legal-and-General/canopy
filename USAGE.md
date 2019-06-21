# Usage

The built library is currently deployed to the [GitHub package registry](https://github.com/features/package-registry). Some [simple setup](https://help.github.com/en/articles/configuring-npm-for-use-with-github-package-registry#installing-a-package) is required to be able to use multiple npm registries.

## Setting up the GitHub registry

Add the following to the `.npmrc` file within your project. This tells npm to look in the GitHub registry for any modules with the `canopy-collective` namespace.

```
@canopy-collective:registry=https://npm.pkg.github.com/
```

## Authenticating against the GitHub registry

Currently the project is hosted on a private GitHub repository, to be able to [authenticate against the GitHub registry](https://help.github.com/en/articles/configuring-npm-for-use-with-github-package-registry#authenticating-to-github-package-registry) you will need to add the following to your users `~/.npmrc` file.

```
//npm.pkg.github.com/:_authToken=PERSONAL-ACCESS-TOKEN
```

⚠️Be sure to modify your user `~/.npmrc` file and not the one in the project, please avoid checking the token in.

Contact one of the project administrators to get hold of a token.

Authenticating a CI tool against the registry should be very similar to the above. You will have to store the token appropriately in a secret and inject it into the `~/.npmrc` file at build time.

## NPM install

If all of that worked you should now be able to run.

`npm install @canopy-collective/canopy`

## Import the Library

In your angular `app.module.ts' file, include the dependency.

```js
import { CanopyModule } from '@canopy-collective/canopy';
```

and add it to the imports section of your module.

```js
@NgModule({
  ...
  imports: [
    ...
    CanopyModule
  ],
  ...
})
```

## Import the global css

Canopy creates a global css file to provide some global styles and utility classes for spacing, colours etc. This global css is required for the individual components to work.

In your `angular.json` file you will need to incorporate the global styles in the correct location.

```json
  "styles": [
    ...
    "node_modules/@canopy-collective/canopy/canopy.css"
  ],
```
