---
name: canopy-feature-toggle
description: Best practices for the Canopy Feature Toggle module. Trigger when using LgFeatureToggleModule, the lgFeatureToggle directive, or FeatureToggleGuard in an Angular project using Canopy.
license: MIT
metadata:
  source: https://github.com/Legal-and-General/canopy/tree/master/projects/canopy/src/lib/feature-toggle/docs/guide.mdx
---

# Canopy Feature Toggle — Best Practices

This skill provides usage guidance for the Canopy `LgFeatureToggleModule` from `@legal-and-general/canopy`.

Apply this skill when enabling or disabling features using observable configuration flags.

---

## Setup

Register the module with `forRoot` once in your root module, providing an observable of feature flag config:

```ts
import { LgFeatureToggleModule } from '@legal-and-general/canopy';
import { Store } from '@ngrx/store';

@NgModule({
  imports: [
    LgFeatureToggleModule.forRoot({
      deps: [Store],
      useFactory: (store: Store) => store.select(getFeatureToggles),
    }),
  ],
})
export class AppModule {}
```

The factory must return an `Observable` of a config object:

```json
{
  "exampleFeature": true,
  "anotherFeature": false
}
```

### Default hide behaviour

By default, features are **shown** if the flag is `undefined`. To hide features that are not explicitly configured:

```ts
LgFeatureToggleModule.forRoot(
  { deps: [Store], useFactory: (store) => store.select(getFeatureToggles) },
  { defaultHide: true }
)
```

---

## Using in Feature Modules

Import `LgFeatureToggleModule` (without `forRoot`) in each feature module:

```ts
@NgModule({
  imports: [LgFeatureToggleModule],
})
export class FeatureModule {}
```

---

## Template Usage

Use the `*lgFeatureToggle` structural directive to conditionally render content:

```html
<div *lgFeatureToggle="'exampleFeature'">
  <p>This content is only shown when exampleFeature is true.</p>
</div>
```

---

## Route Guard

Protect routes with `FeatureToggleGuard`:

```ts
import { FeatureToggleGuard } from '@legal-and-general/canopy';

const routes: Routes = [
  {
    path: 'my-feature',
    component: MyFeatureComponent,
    canActivate: [FeatureToggleGuard],
    data: { featureToggle: 'myFeature' },
  },
];
```

For lazy-loaded routes with child guards:

```ts
{
  path: 'parent',
  loadChildren: () => import('./parent/parent.module').then(m => m.ParentModule),
  canActivate: [FeatureToggleGuard],
  canActivateChild: [FeatureToggleGuard],
  canLoad: [FeatureToggleGuard],
  data: { featureToggle: 'parentToggle' },
}
```

Child routes can define their own `featureToggle` in `data`. The path is only accessible when **all** toggle flags in the route chain are `true`.
