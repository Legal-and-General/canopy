import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { CanopyComponent } from './canopy.component';

@NgModule({
  declarations: [
    ButtonComponent,
    CanopyComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    CanopyComponent
  ]
})
export class CanopyModule { }
