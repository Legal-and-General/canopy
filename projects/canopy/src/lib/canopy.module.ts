import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LgAccordionModule } from './accordion/accordion.module';
import { LgAlertModule } from './alert/alert.module';
import { LgBrandIconModule } from './brand-icon/brand-icon.module';
import { LgBreadcrumbModule } from './breadcrumb/breadcrumb.module';
import { LgButtonModule } from './button/button.module';
import { LgCardModule } from './card/card.module';
import { LgCarouselModule } from './carousel/carousel.module';
import { LgDataPointModule } from './data-point/data-point.module';
import { LgDetailsModule } from './details/details.module';
import { LgFeatureToggleModule } from './feature-toggle/feature-toggle.module';
import { LgFocusModule } from './focus/focus.module';
import {
  LgCheckboxGroupModule,
  LgDateFieldModule,
  LgHintModule,
  LgInputModule,
  LgLabelModule,
  LgRadioModule,
  LgSelectModule,
  LgSortCodeModule,
  LgToggleModule,
  LgValidationModule,
} from './forms';
import { LgFooterModule } from './footer/footer.module';
import { LgGridModule } from './grid/grid.module';
import { LgHeaderModule } from './header/header.module';
import { LgHeadingModule } from './heading/heading.module';
import { LgHeroImgModule } from './hero-img/hero-img.module';
import { LgHeroModule } from './hero/hero.module';
import { LgHideAtModule } from './hide-at/hide-at.module';
import { LgIconModule } from './icon/icon.module';
import { LgModalModule } from './modal/modal.module';
import { LgPageModule } from './page/page.module';
import { LgPrefixModule } from './prefix/prefix.module';
import { LgPromoCardModule } from './promo-card/promo-card.module';
import { LgQuickActionModule } from './quick-action/quick-action.module';
import { LgSeparatorModule } from './separator/separator.module';
import { LgShowAtModule } from './show-at/show-at.module';
import { LgSideNavModule } from './side-nav/side-nav.module';
import { LgSkeletonModule } from './skeleton/skeleton.module';
import { LgSpacingModule } from './spacing/spacing.module';
import { LgSpinnerModule } from './spinner/spinner.module';
import { LgSuffixModule } from './suffix/suffix.module';
import { LgTableModule } from './table/table.module';
import { LgTabsModule } from './tabs/tabs.module';
import { LgVariantModule } from './variant/variant.module';
import { LgCamelCasePipeModule } from './pipes/camel-case/camel-case.module';
import { LgKebabCasePipeModule } from './pipes/kebab-case/kebab-case.module';
import { LgPrimaryMessageModule } from './primary-message/primary-message.module';
import { LgSrAlertMessageModule } from './sr-alert-message';

const modules = [
  LgAccordionModule,
  LgAlertModule,
  LgBreadcrumbModule,
  LgButtonModule,
  LgBrandIconModule,
  LgCardModule,
  LgDataPointModule,
  LgDetailsModule,
  LgFeatureToggleModule,
  LgFocusModule,
  LgFooterModule,
  LgCheckboxGroupModule,
  LgDateFieldModule,
  LgValidationModule,
  LgHintModule,
  LgInputModule,
  LgLabelModule,
  LgRadioModule,
  LgSelectModule,
  LgSortCodeModule,
  LgToggleModule,
  LgGridModule,
  LgHeaderModule,
  LgHeadingModule,
  LgHeroImgModule,
  LgHeroModule,
  LgHideAtModule,
  LgIconModule,
  LgPageModule,
  LgPrefixModule,
  LgPromoCardModule,
  LgQuickActionModule,
  LgSrAlertMessageModule,
  LgSeparatorModule,
  LgShowAtModule,
  LgSideNavModule,
  LgSkeletonModule,
  LgSpacingModule,
  LgSpinnerModule,
  LgSuffixModule,
  LgTableModule,
  LgTabsModule,
  LgVariantModule,
  LgCarouselModule,
  LgModalModule,
  LgCamelCasePipeModule,
  LgKebabCasePipeModule,
  LgPrimaryMessageModule,
];

@NgModule({
  imports: [CommonModule, ...modules],
  exports: [...modules],
})
export class CanopyModule {}
