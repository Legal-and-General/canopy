import { ModuleWithProviders, NgModule } from '@angular/core';

import { LgFeatureToggleDirective } from './feature-toggle.directive';
import { LgToggles, togglesInjectable } from './feature-toggle.interface';
import { LgFeatureToggleService } from './feature-toggle.service';

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
