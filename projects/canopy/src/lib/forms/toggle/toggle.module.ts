import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LgIconModule } from '../../icon/icon.module';
import { LgIconRegistry } from '../../icon/icon.registry';
import {
  lgIconCheckboxMark,
  lgIconAdd,
  lgIconCheckmark,
} from '../../icon/icons.interface';

import { LgToggleComponent } from './toggle.component';

@NgModule({
  declarations: [LgToggleComponent],
  exports: [LgToggleComponent],
  imports: [CommonModule, LgIconModule],
  entryComponents: [LgToggleComponent],
})
export class LgToggleModule {
  constructor(private iconRegistry: LgIconRegistry) {
    this.iconRegistry.registerIcons([lgIconCheckboxMark, lgIconAdd, lgIconCheckmark]);
  }
}
