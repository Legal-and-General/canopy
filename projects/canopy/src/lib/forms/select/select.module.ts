import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LgIconModule } from '../../icon/icon.module';
import { LgIconRegistry } from '../../icon/icon.registry';
import { lgIconChevronDown } from '../../icon/icons.interface';

import { LgLabelModule } from '../label/label.module';
import { LgSelectFieldComponent } from './select-field.component';
import { LgSelectDirective } from './select.directive';

@NgModule({
  imports: [CommonModule, LgLabelModule, LgIconModule],
  declarations: [LgSelectDirective, LgSelectFieldComponent],
  exports: [LgSelectDirective, LgSelectFieldComponent],
  entryComponents: [LgSelectFieldComponent]
})
export class LgSelectModule {
  constructor(private iconRegistry: LgIconRegistry) {
    this.iconRegistry.registerIcons([lgIconChevronDown]);
  }
}
