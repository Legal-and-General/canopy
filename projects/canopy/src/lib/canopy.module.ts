import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LgAccordionModule } from './accordion/accordion.module';
import { LgAlertModule } from './alert/alert.module';
import { LgBreadcrumbModule } from './breadcrumb/breadcrumb.module';
import { LgButtonModule } from './button/button.module';
import { LgCardModule } from './card/card.module';
import { LgDetailsModule } from './details/details.module';
import { LgFeatureToggleModule } from './feature-toggle/feature-toggle.module';
import { LgFocusDirective } from './focus/focus.directive';
import { LgFooterModule } from './footer/footer.module';
import { LgFormsModule } from './forms/forms.module';
import { LgGridModule } from './grid/grid.module';
import { LgHeaderModule } from './header/header.module';
import { LgHeadingModule } from './heading/heading.module';
import { LgHeroModule } from './hero/hero.module';
import { LgIconModule } from './icon/icon.module';
import { LgMarginModule } from './margin/margin.module';
import { LgPaddingModule } from './padding/padding.module';
import { LgPageModule } from './page/page.module';
import { LgPipesModule } from './pipes/pipes.module';
import { LgSeparatorModule } from './separator/separator.module';
import { LgSpinnerModule } from './spinner/spinner.module';

const directives = [LgFocusDirective];

const modules = [
  LgAccordionModule,
  LgAlertModule,
  LgBreadcrumbModule,
  LgButtonModule,
  LgCardModule,
  LgDetailsModule,
  LgFeatureToggleModule,
  LgFooterModule,
  LgFormsModule,
  LgGridModule,
  LgHeaderModule,
  LgHeadingModule,
  LgHeroModule,
  LgIconModule,
  LgMarginModule,
  LgPaddingModule,
  LgPageModule,
  LgPipesModule,
  LgSeparatorModule,
  LgSpinnerModule
];

@NgModule({
  declarations: [...directives],
  imports: [CommonModule, ...modules],
  exports: [...directives, ...modules]
})
export class CanopyModule {}
