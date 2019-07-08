export const notes = `
# Feature Toggle Module

## Purpose
This module allows you to enable and disable features by using the \`featureToggle\` directive and passing an observable of the toggle's configuration to the module.

## Usage

Import the module, e.g.:

~~~
FeatureToggleModule.forRoot({
  deps: [Store],
  useFactory: (store: Store<CoreState>) => store.select(getFeatureToggles)
})
~~~

\`useFactory\` returns an observable of a config file structured as below:

~~~
{
  "exampleFeature": true,
  "anotherExampleFeature": false
}
~~~

In your component(s) add the structural directive like in the example below:

~~~
<div *featureToggle="'exampleFeature'">
  <p>The enabled feature</p>
</div>

<div *featureToggle="'anotherExampleFeature'">
  <p>The disabled feature</p>
</div>
~~~
`
