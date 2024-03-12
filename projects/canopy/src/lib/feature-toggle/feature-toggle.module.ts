import { ModuleWithProviders, NgModule } from '@angular/core';

import { LgFeatureToggleDirective } from './feature-toggle.directive';
import type { LgFeatureToggleOptions } from './feature-toggle.interface';
import {
  LgToggles,
  togglesInjectable,
  togglesOptionsInjectable,
} from './feature-toggle.interface';
import { LgFeatureToggleService } from './feature-toggle.service';

@NgModule({
  imports: [ LgFeatureToggleDirective ],
  providers: [ LgFeatureToggleService ],
  exports: [ LgFeatureToggleDirective ],
})
export class LgFeatureToggleModule {
  static forRoot(
    toggles: LgToggles,
    optionsInjectable?: LgFeatureToggleOptions,
  ): ModuleWithProviders<LgFeatureToggleModule> {
    return {
      ngModule: LgFeatureToggleModule,
      providers: [
        LgFeatureToggleService,
        {
          provide: togglesInjectable,
          useFactory: toggles.useFactory,
          deps: toggles.deps,
        },
        {
          provide: togglesOptionsInjectable,
          useValue: optionsInjectable,
        },
      ],
    };
  }
}
