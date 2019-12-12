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

The default behaviour is to show a feature if it's undefined, but we can override it by passing an optional object with disableIfUndefined set to true like this:

~~~
LgFeatureToggleModule.forRoot({
  deps: [Store],
  useFactory: (store: Store<CoreState>) => store.select(getFeatureToggles)
  },
  {
    disableIfUndefined: true
  }
)
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

## FeatureToggleGuard configuration 

To use the FeatureToggleGuard you need to add it to your routes configuration in the usual canActive, canActivateChild, canLoad, and then add in the data property like

~~~
data: {
  featureToggle: 'myToggle',
},
~~~

if you use canActivateChild, child route definitions can add its own featureToggle in their data, and the path is only valid when all the featureToggle flags of each route segment are true

Example with a lazy loading route

~~~
{
  path: 'parent',
  loadChildren: () => import('./parent/parent.module').then(m => m.ParentnModule),
  canActivate: [ FeatureToggleGuard ],
  canActivateChild: [ FeatureToggleGuard ],
  canLoad: [ FeatureToggleGuard ],
  data: {
    featureToggle: 'parentToggle',
  },
},
~~~

Example of inner routes (route definition inside ParentModule)

~~~
{
  path: 'child',
  component: ChildContainerComponent,
  data: {
    featureToggle: 'childToggle',
  },
},
~~~
`;
