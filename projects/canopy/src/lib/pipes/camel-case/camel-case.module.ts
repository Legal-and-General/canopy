import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LgCamelCasePipe } from './camel-case.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [LgCamelCasePipe],
  exports: [LgCamelCasePipe],
})
export class LgCamelCasePipeModule {}
