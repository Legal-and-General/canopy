import { NgModule } from '@angular/core';

import { LgLabelModule } from '../label/label.module';
import { LgRadioButtonComponent } from './radio-button.component';
import { LgRadioGroupComponent } from './radio-group.component';

@NgModule({
  imports: [LgLabelModule],
  declarations: [LgRadioGroupComponent, LgRadioButtonComponent],
  exports: [LgRadioGroupComponent, LgRadioButtonComponent],
  entryComponents: [LgRadioGroupComponent, LgRadioButtonComponent],
})
export class LgRadioModule {}
