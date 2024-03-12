import { Component } from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { NgForOf, NgIf } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

import { LgPageComponent } from '../../../canopy/src/lib/page';
import { LgHeaderComponent, LgHeaderLogoComponent } from '../../../canopy/src/lib/header';
import {
  LgHeroCardComponent,
  LgHeroCardContentComponent,
  LgHeroCardDataPointComponent,
  LgHeroCardDataPointLabelComponent,
  LgHeroCardDataPointValueComponent,
  LgHeroCardFooterComponent,
  LgHeroCardHeaderComponent,
  LgHeroCardPrincipleDataPointComponent,
  LgHeroCardPrincipleDataPointLabelComponent,
  LgHeroCardPrincipleDataPointValueComponent,
  LgHeroCardSubtitleComponent,
  LgHeroCardTitleComponent,
  LgHeroComponent,
  LgHeroContentComponent,
  LgHeroHeaderComponent,
} from '../../../canopy/src/lib/hero';
import {
  LgGridColDirective,
  LgGridContainerDirective,
  LgGridRowDirective,
} from '../../../canopy/src/lib/grid';
import {
  LgBreadcrumbComponent,
  LgBreadcrumbItemComponent,
} from '../../../canopy/src/lib/breadcrumb';
import {
  lgIconAdd,
  lgIconArrowDown,
  lgIconArrowRight,
  lgIconCheckboxMark,
  lgIconCheckmark,
  lgIconChevronLeft,
  lgIconChevronRight,
  lgIconClose,
  LgIconComponent,
  lgIconFilter,
  lgIconLinkExternal,
  LgIconRegistry,
  lgIconRepeat,
  lgIconSearch,
  lgIconSecureMessaging,
} from '../../../canopy/src/lib/icon';
import { LgMarginDirective, LgPaddingDirective } from '../../../canopy/src/lib/spacing';
import {
  LgCardComponent,
  LgCardContentComponent,
  LgCardFooterComponent,
  LgCardGroupComponent,
  LgCardHeaderComponent,
  LgCardNavigationTitleComponent,
  LgCardPrincipleDataPointComponent,
  LgCardPrincipleDataPointDateComponent,
  LgCardPrincipleDataPointLabelComponent,
  LgCardPrincipleDataPointValueComponent,
  LgCardSubheadingComponent,
  LgCardSubtitleComponent,
  LgCardTitleComponent,
} from '../../../canopy/src/lib/card';
import {
  LgLinkMenuComponent,
  LgLinkMenuItemComponent,
  LgLinkMenuItemTextComponent,
} from '../../../canopy/src/lib/link-menu';
import { LgHeadingComponent } from '../../../canopy/src/lib/heading';
import {
  LgAccordionComponent,
  LgAccordionItemComponent,
  LgAccordionPanelHeadingComponent,
} from '../../../canopy/src/lib/accordion';
import {
  LgButtonComponent,
  LgButtonGroupComponent,
  LgButtonToggleDirective,
} from '../../../canopy/src/lib/button';
import { LgSeparatorComponent } from '../../../canopy/src/lib/separator';
import { LgAlertComponent } from '../../../canopy/src/lib/alert';
import {
  LgCarouselComponent,
  LgCarouselItemComponent,
} from '../../../canopy/src/lib/carousel';
import {
  LgDataPointComponent,
  LgDataPointLabelComponent,
  LgDataPointValueComponent,
} from '../../../canopy/src/lib/data-point';
import {
  LgDetailsComponent,
  LgDetailsPanelHeadingComponent,
} from '../../../canopy/src/lib/details';
import {
  LgFilterContainerComponent,
  LgFilterContainerPanelBodyComponent,
  LgFilterContainerPanelComponent,
  LgFilterContainerPanelFooterComponent,
} from '../../../canopy/src/lib/filter-container';
import {
  LgCheckboxGroupComponent,
  LgDateFieldComponent,
  LgHintComponent,
  LgInputDirective,
  LgInputFieldComponent,
  LgRadioButtonComponent,
  LgRadioGroupComponent,
  LgSelectDirective,
  LgSelectFieldComponent,
  LgToggleComponent,
} from '../../../canopy/src/lib/forms';
import {
  LgListWithIconsComponent,
  LgListWithIconsItemComponent,
} from '../../../canopy/src/lib/list-with-icons';
import {
  LgPrimaryMessageComponent,
  LgPrimaryMessageDescriptionComponent,
  LgPrimaryMessageTitleComponent,
} from '../../../canopy/src/lib/primary-message';
import {
  lgBrandIconCalendar,
  LgBrandIconComponent,
  LgBrandIconRegistry,
} from '../../../canopy/src/lib/brand-icon';
import {
  LgPromoCardComponent,
  LgPromoCardContentComponent,
  LgPromoCardFooterComponent,
  LgPromoCardImageComponent,
  LgPromoCardListComponent,
  LgPromoCardListTitleComponent,
  LgPromoCardTitleComponent,
} from '../../../canopy/src/lib/promo-card';
import { LgQuickActionComponent } from '../../../canopy/src/lib/quick-action';
import { LgSpinnerComponent } from '../../../canopy/src/lib/spinner';
import {
  LgTabItemComponent,
  LgTabItemContentComponent,
  LgTabItemHeadingComponent,
  LgTabNavBarComponent,
  LgTabNavBarLinkDirective,
  LgTabNavContentComponent,
  LgTabsComponent,
} from '../../../canopy/src/lib/tabs';
import {
  LgSideNavBarComponent,
  LgSideNavBarFooterComponent,
  LgSideNavBarItemComponent,
  LgSideNavBarItemContentComponent,
  LgSideNavBarItemHeadingComponent,
  LgSideNavBarLinkDirective,
  LgSideNavComponent,
  LgSideNavContentComponent,
} from '../../../canopy/src/lib/side-nav';
import { LgPaginationComponent } from '../../../canopy/src/lib/pagination';
import { LgFooterComponent, LgFooterLogoComponent } from '../../../canopy/src/lib/footer';

@Component({
  selector: 'lg-app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    LgPageComponent,
    LgHeaderComponent,
    LgHeaderLogoComponent,
    LgHeroComponent,
    LgHeroHeaderComponent,
    LgGridContainerDirective,
    LgGridRowDirective,
    LgGridColDirective,
    LgBreadcrumbComponent,
    LgBreadcrumbItemComponent,
    LgIconComponent,
    LgHeroCardComponent,
    LgHeroCardHeaderComponent,
    LgHeroCardTitleComponent,
    LgHeroCardSubtitleComponent,
    LgHeroCardPrincipleDataPointLabelComponent,
    LgHeroCardPrincipleDataPointValueComponent,
    LgHeroCardContentComponent,
    LgHeroCardDataPointComponent,
    LgHeroCardDataPointLabelComponent,
    LgHeroCardDataPointValueComponent,
    LgHeroCardFooterComponent,
    LgMarginDirective,
    LgCardGroupComponent,
    LgCardHeaderComponent,
    LgCardNavigationTitleComponent,
    LgCardContentComponent,
    LgCardFooterComponent,
    LgLinkMenuComponent,
    LgLinkMenuItemComponent,
    LgLinkMenuItemTextComponent,
    LgPaddingDirective,
    LgCardComponent,
    LgHeadingComponent,
    LgAccordionComponent,
    LgAccordionItemComponent,
    LgButtonComponent,
    LgSeparatorComponent,
    LgAlertComponent,
    LgButtonGroupComponent,
    LgCarouselComponent,
    LgCarouselItemComponent,
    LgDataPointComponent,
    LgDataPointLabelComponent,
    LgDataPointValueComponent,
    LgDetailsComponent,
    LgDetailsPanelHeadingComponent,
    LgFilterContainerComponent,
    LgFilterContainerPanelBodyComponent,
    LgDateFieldComponent,
    LgHintComponent,
    LgCheckboxGroupComponent,
    LgToggleComponent,
    LgFilterContainerPanelFooterComponent,
    LgInputFieldComponent,
    LgInputDirective,
    LgSelectFieldComponent,
    LgSelectDirective,
    LgRadioGroupComponent,
    LgRadioButtonComponent,
    LgListWithIconsComponent,
    LgListWithIconsItemComponent,
    LgPrimaryMessageComponent,
    LgBrandIconComponent,
    LgPrimaryMessageTitleComponent,
    LgPrimaryMessageDescriptionComponent,
    LgPromoCardListComponent,
    LgPromoCardListTitleComponent,
    LgPromoCardComponent,
    LgPromoCardImageComponent,
    LgPromoCardTitleComponent,
    LgPromoCardFooterComponent,
    LgQuickActionComponent,
    LgSpinnerComponent,
    LgTabsComponent,
    LgTabItemComponent,
    LgTabItemHeadingComponent,
    LgTabItemContentComponent,
    LgTabNavBarComponent,
    LgTabNavBarLinkDirective,
    LgTabNavContentComponent,
    LgSideNavComponent,
    LgSideNavBarComponent,
    LgSideNavBarLinkDirective,
    LgSideNavBarItemComponent,
    LgSideNavBarItemHeadingComponent,
    LgSideNavBarItemContentComponent,
    LgSideNavBarFooterComponent,
    LgSideNavContentComponent,
    LgPaginationComponent,
    LgCardTitleComponent,
    LgCardSubheadingComponent,
    LgCardSubtitleComponent,
    LgCardPrincipleDataPointComponent,
    LgCardPrincipleDataPointLabelComponent,
    LgCardPrincipleDataPointValueComponent,
    LgCardPrincipleDataPointDateComponent,
    LgFooterComponent,
    LgFooterLogoComponent,
    LgPromoCardContentComponent,
    LgFilterContainerPanelComponent,
    LgAccordionPanelHeadingComponent,
    LgHeroCardPrincipleDataPointComponent,
    LgHeroContentComponent,
    LgButtonToggleDirective,
    RouterLink,
    RouterOutlet,
    NgForOf,
    NgIf,
  ],
})
export class AppComponent {
  title = 'canopy-test-app';
  form: UntypedFormGroup;
  selectedTabIndex = 0;
  selectedSideNavIndex = 1;
  tabs: Array<unknown> = [
    {
      path: './tab-1',
      label: 'Nav tab 1',
    },
    {
      path: './tab-2',
      label: 'Nav tab 2',
    },
    {
      path: './tab-3',
      label: 'Nav tab 3',
    },
  ];
  sideNav: Array<unknown> = [
    {
      title: 'Overview',
      path: 'side-nav-1',
    },
    {
      title: 'Contact',
      description: 'User contact information.',
      path: 'side-nav-2',
    },
    {
      title: 'Account security',
      description: 'Account protection tools.',
      path: 'side-nav-3',
    },
    {
      title: 'Settings',
      description: 'App-related settings.',
      path: 'side-nav-4',
    },
  ];

  constructor(
    public fb: UntypedFormBuilder,
    private iconRegistry: LgIconRegistry,
    private brandIconRegistry: LgBrandIconRegistry,
  ) {
    this.form = this.fb.group({
      text: [ '' ],
      textSearch: [ '' ],
      textPound: [ '' ],
      textPercent: [ '' ],
      select: [ '' ],
      radio: [ '' ],
      filter: [ '' ],
      colors: this.fb.control([]),
      filters: this.fb.control([]),
      checkbox: [ '' ],
      switch: [ '' ],
      segment: [ '' ],
      date: [ '' ],
      sortCode: [ '' ],
    });

    this.iconRegistry.registerIcons([
      lgIconAdd,
      lgIconArrowDown,
      lgIconClose,
      lgIconSearch,
      lgIconRepeat,
      lgIconSecureMessaging,
      lgIconFilter,
      lgIconCheckmark,
      lgIconChevronLeft,
      lgIconChevronRight,
      lgIconArrowRight,
      lgIconLinkExternal,
      lgIconCheckboxMark,
    ]);

    this.brandIconRegistry.registerBrandIcon([ lgBrandIconCalendar ]);
  }

  onSubmit(event): void {
    // eslint-disable-next-line no-console
    console.log(event.value);
  }

  handleTabClick(event: MouseEvent, index: number): void {
    event.preventDefault();
    this.selectedTabIndex = index;
  }

  handleSideNavClick(event: MouseEvent, index: number): void {
    event.preventDefault();
    this.selectedSideNavIndex = index;
  }
}
