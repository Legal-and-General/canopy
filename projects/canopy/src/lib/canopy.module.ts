import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LgButtonComponent } from './button/button.component';
import { CanopyComponent } from './canopy.component';
import { LgFeatureToggleModule } from './feature-toggle/feature-toggle.module';
import { LgHeadingModule } from './heading/heading.module';

@NgModule({
  declarations: [LgButtonComponent, CanopyComponent],
  imports: [CommonModule, LgFeatureToggleModule, LgHeadingModule],
  exports: [LgButtonComponent, CanopyComponent, LgFeatureToggleModule]
})
export class CanopyModule {}
