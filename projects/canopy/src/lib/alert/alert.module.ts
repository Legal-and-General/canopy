import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LgIconModule } from '../icon/icon.module';
import { LgIconRegistry } from '../icon/icon.registry';
import {
  lgIconCheckmarkSpotFill,
  lgIconCrossmarkSpotFill,
  lgIconInformationFill,
  lgIconWarningFill,
} from '../icon/icons.interface';
import { LgVariantModule } from '../variant/variant.module';
import { LgAlertComponent } from './alert.component';

@NgModule({
  imports: [CommonModule, LgIconModule, LgVariantModule],
  declarations: [LgAlertComponent],
  exports: [LgAlertComponent],
})
export class LgAlertModule {
  constructor(private iconRegistry: LgIconRegistry) {
    this.iconRegistry.registerIcons([
      lgIconCrossmarkSpotFill,
      lgIconInformationFill,
      lgIconWarningFill,
      lgIconCheckmarkSpotFill,
    ]);
  }
}
