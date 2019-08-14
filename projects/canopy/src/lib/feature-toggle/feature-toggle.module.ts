import { NgModule, ModuleWithProviders } from '@angular/core';

import { LgFeatureToggleService } from './feature-toggle.service';
import { LgFeatureToggleDirective } from './feature-toggle.directive';
import { togglesInjectable, LgToggles } from './feature-toggle.interface';

@NgModule({
  declarations: [LgFeatureToggleDirective],
  providers: [LgFeatureToggleService],
  exports: [LgFeatureToggleDirective]
})
export class LgFeatureToggleModule {
  static forRoot(toggles: LgToggles): ModuleWithProviders {
    return {
      ngModule: LgFeatureToggleModule,
      providers: [
        LgFeatureToggleService,
        {
          provide: togglesInjectable,
          useFactory: toggles.useFactory,
          deps: toggles.deps
        }
      ]
    };
  }
}
