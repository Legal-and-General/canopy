import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LgIconRegistry } from '../../icon/icon.registry';
import {
  lgIconAdd,
  lgIconCheckboxMark,
  lgIconCheckmark,
} from '../../icon/icons.interface';

import { LgToggleComponent } from './toggle.component';

@NgModule({
  imports: [ CommonModule, LgToggleComponent ],
  exports: [ LgToggleComponent ],
})
export class LgToggleModule {
  constructor(private iconRegistry: LgIconRegistry) {
    this.iconRegistry.registerIcons([ lgIconCheckboxMark, lgIconAdd, lgIconCheckmark ]);
  }
}
