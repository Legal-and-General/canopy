import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { CanopyComponent } from './canopy.component';
import { FeatureToggleDirective } from './feature-toggle/feature-toggle.directive';

@NgModule({
  declarations: [ButtonComponent, CanopyComponent, FeatureToggleDirective],
  imports: [CommonModule],
  exports: [ButtonComponent, CanopyComponent, FeatureToggleDirective]
})
export class CanopyModule {}
