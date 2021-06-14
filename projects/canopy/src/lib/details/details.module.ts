import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LgHeadingModule } from '../heading/heading.module';
import { LgIconModule } from '../icon/icon.module';
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
  declarations: [LgDetailsComponent, LgDetailsPanelHeadingComponent],
  exports: [LgDetailsComponent, LgDetailsPanelHeadingComponent],
  imports: [CommonModule, LgIconModule, LgHeadingModule],
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
