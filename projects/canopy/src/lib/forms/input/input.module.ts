import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LgLabelModule } from '../label/label.module';
import { LgInputFieldComponent } from './input-field.component';
import { LgInputDirective } from './input.directive';
import { LgPrefixModule } from '../../prefix';
import { LgSuffixModule } from '../../suffix';

@NgModule({
  imports: [LgLabelModule, CommonModule, LgPrefixModule, LgSuffixModule],
  declarations: [LgInputDirective, LgInputFieldComponent],
  exports: [LgInputDirective, LgInputFieldComponent],
  entryComponents: [LgInputFieldComponent],
})
export class LgInputModule {}
