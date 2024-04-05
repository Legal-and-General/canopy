import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LgIconRegistry } from '../icon/icon.registry';
import {
  lgIconCheckmarkSpotFill,
  lgIconCrossmarkSpotFill,
  lgIconInformationFill,
  lgIconWarningFill,
} from '../icon/icons.interface';

import { LgAlertComponent } from './alert.component';

@NgModule({
  imports: [ CommonModule, LgAlertComponent ],
  exports: [ LgAlertComponent ],
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
