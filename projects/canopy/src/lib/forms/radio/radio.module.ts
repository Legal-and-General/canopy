import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LgLabelModule } from '../label/label.module';
import { LgRadioButtonComponent } from './radio-button.component';
import { LgRadioGroupComponent } from './radio-group.component';
import { LgMarginModule } from '../../spacing/margin/margin.module';
import { LgFocusModule } from '../../focus/focus.module';

@NgModule({
  imports: [LgLabelModule, LgMarginModule, CommonModule, LgFocusModule],
  declarations: [LgRadioGroupComponent, LgRadioButtonComponent],
  exports: [LgRadioGroupComponent, LgRadioButtonComponent],
  entryComponents: [LgRadioGroupComponent, LgRadioButtonComponent],
})
export class LgRadioModule {}
