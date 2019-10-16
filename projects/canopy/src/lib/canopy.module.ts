import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LgButtonModule } from './button/button.module';
import { LgFeatureToggleModule } from './feature-toggle/feature-toggle.module';
import { LgFocusDirective } from './focus/focus.directive';
import { LgFooterModule } from './footer/footer.module';
import { LgFormsModule } from './forms/forms.module';
import { LgHeaderModule } from './header/header.module';
import { LgHeadingModule } from './heading/heading.module';
import { LgPageModule } from './page/page.module';
import { LgPipesModule } from './pipes/pipes.module';

const directives = [LgFocusDirective];

const modules = [
  LgButtonModule,
  LgFeatureToggleModule,
  LgFooterModule,
  LgFormsModule,
  LgHeaderModule,
  LgHeadingModule,
  LgPageModule,
  LgPipesModule
];

@NgModule({
  declarations: [...directives],
  imports: [CommonModule, ...modules],
  exports: [...directives, ...modules]
})
export class CanopyModule {}
