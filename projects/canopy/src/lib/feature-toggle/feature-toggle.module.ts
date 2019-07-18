import { NgModule, ModuleWithProviders } from '@angular/core';

import { FeatureToggleService } from './feature-toggle.service';
import { FeatureToggleDirective } from './feature-toggle.directive';
import { togglesInjectable, Toggles } from './feature-toggle.interface';

@NgModule({
  declarations: [FeatureToggleDirective],
  providers: [FeatureToggleService],
})
export class FeatureToggleModule {
  static forRoot(toggles: Toggles): ModuleWithProviders {
    return {
      ngModule: FeatureToggleModule,
      providers: [
        FeatureToggleService,
        {
          provide: togglesInjectable,
          useFactory: toggles.useFactory,
          deps: toggles.deps
        }
      ]
    };
  }
}
