import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LgIconRegistry } from '../../icon/icon.registry';
import { lgIconChevronDown } from '../../icon/icons.interface';

import { LgSelectFieldComponent } from './select-field.component';
import { LgSelectDirective } from './select.directive';

@NgModule({
  imports: [ CommonModule, LgSelectDirective, LgSelectFieldComponent ],
  exports: [ LgSelectDirective, LgSelectFieldComponent ],
})
export class LgSelectModule {
  constructor(private iconRegistry: LgIconRegistry) {
    this.iconRegistry.registerIcons([ lgIconChevronDown ]);
  }
}
