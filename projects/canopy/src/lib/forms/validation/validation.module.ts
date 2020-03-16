import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LgIconModule } from '../../icon/icon.module';
import { LgIconRegistry } from '../../icon/icon.registry';
import {
  lgIconCheckmarkSpotFill,
  lgIconCrossmarkSpotFill,
  lgIconInformationFill,
  lgIconWarningFill
} from '../../icon/icons.interface';
import { LgValidationComponent } from './validation.component';

@NgModule({
  imports: [CommonModule, LgIconModule],
  declarations: [LgValidationComponent],
  exports: [LgValidationComponent]
})
export class LgValidationModule {
  constructor(private iconRegistry: LgIconRegistry) {
    this.iconRegistry.registerIcons([
      lgIconCrossmarkSpotFill,
      lgIconInformationFill,
      lgIconWarningFill,
      lgIconCheckmarkSpotFill
    ]);
  }
}
