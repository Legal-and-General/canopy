import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LgLabelModule } from '../label/label.module';
import { LgPrefixModule } from '../../prefix';
import { LgSuffixModule } from '../../suffix';

import { LgInputFieldComponent } from './input-field.component';
import { LgInputDirective } from './input.directive';

@NgModule({
  imports: [ LgLabelModule, CommonModule, LgPrefixModule, LgSuffixModule ],
  declarations: [ LgInputDirective, LgInputFieldComponent ],
  exports: [ LgInputDirective, LgInputFieldComponent, LgPrefixModule, LgSuffixModule ],
})
export class LgInputModule {}
