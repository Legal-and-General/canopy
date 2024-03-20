import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LgIconRegistry } from '../icon/icon.registry';
import {
  lgIconChevronDown,
  lgIconCheckmarkSpotFill,
  lgIconCrossmarkSpotFill,
  lgIconInformationFill,
  lgIconWarningFill,
} from '../icon/icons.interface';

import { LgDetailsPanelHeadingComponent } from './details-panel-heading/details-panel-heading.component';
import { LgDetailsComponent } from './details.component';

@NgModule({
  exports: [ LgDetailsComponent, LgDetailsPanelHeadingComponent ],
  imports: [ CommonModule, LgDetailsComponent, LgDetailsPanelHeadingComponent ],
})
export class LgDetailsModule {
  constructor(private registry: LgIconRegistry) {
    this.registry.registerIcons([
      lgIconChevronDown,
      lgIconCrossmarkSpotFill,
      lgIconInformationFill,
      lgIconWarningFill,
      lgIconCheckmarkSpotFill,
    ]);
  }
}
