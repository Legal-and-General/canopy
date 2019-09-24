import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LgButtonComponent } from './button/button.component';
import { LgFeatureToggleModule } from './feature-toggle/feature-toggle.module';
import { LgFocusDirective } from './focus/focus.directive';
import { LgFormsModule } from './forms';
import { LgHeadingModule } from './heading/heading.module';
import { LgPipesModule } from './pipes/pipes.module';

@NgModule({
  declarations: [
    LgButtonComponent,
    LgFocusDirective
  ],
  imports: [
    CommonModule,
    LgFeatureToggleModule,
    LgHeadingModule,
    LgPipesModule
  ],
  exports: [
    LgButtonComponent,
    LgFeatureToggleModule,
    LgFocusDirective,
    LgFormsModule,
    LgPipesModule
  ]
})
export class CanopyModule {}
