import { NgModule } from '@angular/core';

import { LgLabelModule } from '../label/label.module';
import { LgInputFieldComponent } from './input-field.component';
import { LgInputDirective } from './input.directive';

@NgModule({
  imports: [LgLabelModule],
  declarations: [LgInputDirective, LgInputFieldComponent],
  exports: [LgInputDirective, LgInputFieldComponent],
  entryComponents: [LgInputFieldComponent]
})
export class LgInputModule {}
