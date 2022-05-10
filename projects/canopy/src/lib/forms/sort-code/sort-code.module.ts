import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LgSortCodeDirective } from './sort-code.directive';

@NgModule({
  imports: [ CommonModule, ReactiveFormsModule ],
  declarations: [ LgSortCodeDirective ],
  exports: [ LgSortCodeDirective ],
})
export class LgSortCodeModule {}
