import { NgModule } from '@angular/core';

import { LgLabelModule } from '../label/label.module';
import { LgRadioButtonComponent } from './radio-button.component';
import { LgRadioGroupComponent } from './radio-group.component';
import { LgMarginModule } from '../../spacing/margin/margin.module';

@NgModule({
  imports: [LgLabelModule, LgMarginModule],
  declarations: [LgRadioGroupComponent, LgRadioButtonComponent],
  exports: [LgRadioGroupComponent, LgRadioButtonComponent],
  entryComponents: [LgRadioGroupComponent, LgRadioButtonComponent],
})
export class LgRadioModule {}
