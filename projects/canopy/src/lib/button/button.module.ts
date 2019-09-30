import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LgButtonComponent } from './button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LgButtonComponent],
  exports: [LgButtonComponent]
})
export class LgButtonModule {}
