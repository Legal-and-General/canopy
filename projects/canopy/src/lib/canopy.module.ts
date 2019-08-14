import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { CanopyComponent } from './canopy.component';
import { FeatureToggleModule } from './feature-toggle/feature-toggle.module';
import { LgHeadingModule } from './heading/heading.module';

@NgModule({
  declarations: [ButtonComponent, CanopyComponent],
  imports: [CommonModule, FeatureToggleModule, LgHeadingModule],
  exports: [ButtonComponent, CanopyComponent, FeatureToggleModule]
})
export class CanopyModule {}
