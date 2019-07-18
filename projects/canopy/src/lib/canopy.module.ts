import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { CanopyComponent } from './canopy.component';
import { FeatureToggleModule } from './feature-toggle/feature-toggle.module';

@NgModule({
  declarations: [ButtonComponent, CanopyComponent, FeatureToggleModule],
  imports: [CommonModule],
  exports: [ButtonComponent, CanopyComponent, FeatureToggleModule]
})
export class CanopyModule {}
