import { LgFeatureToggleModule } from './feature-toggle.module';

export const notes = `
# Feature Toggle Module

## Purpose
This module allows you to enable and disable features by using the \`lgFeatureToggle\` directive and passing an observable of the toggle's configuration to the module.

## Usage

Import the module in your core component, e.g.:

~~~
LgFeatureToggleModule.forRoot({
  deps: [Store],
  useFactory: (store: Store<CoreState>) => store.select(getFeatureToggles)
})
~~~

and also import \`LgFeatureToggleModule\` (without the \`forRoot\`) in the modules that will need it.

\`useFactory\` returns an observable of a config file structured as below:

~~~
{
  "exampleFeature": true,
  "anotherExampleFeature": false
}
~~~

In your component(s) add the structural directive like in the example below:

~~~
<div *lgFeatureToggle="'exampleFeature'">
  <p>The enabled feature</p>
</div>

<div *lgFeatureToggle="'anotherExampleFeature'">
  <p>The disabled feature</p>
</div>
~~~
`;
