import { InjectionToken } from '@angular/core';

import { Observable } from 'rxjs';

// Defines the shape of the optional configuration data passed to the forRoot() method.
export interface FeatureToggleConfig {
  [type: string]: boolean
};

export interface Toggles {
  // The function to invoke to create a value for the token. This is invoked with
  // resolved values of tokens in the deps field.
  useFactory: (...args: any[]) => Observable<FeatureToggleConfig>;

  // A list of tokens which need to be resolved by the injector. The list of values is then
  // used as arguments to the `useFactory` function.
  deps?: any[];
}

// The token that makes the raw options available to the following factory function.
// --
// NOTE: This value has to be exported otherwise the AoT compiler won't see it.
export const togglesInjectable = new InjectionToken<FeatureToggleConfig>('Toggles configuration');
