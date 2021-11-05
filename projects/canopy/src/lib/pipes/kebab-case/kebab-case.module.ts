import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LgKebabCasePipe } from './kebab-case.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [LgKebabCasePipe],
  exports: [LgKebabCasePipe],
})
export class LgKebabCasePipeModule {}
