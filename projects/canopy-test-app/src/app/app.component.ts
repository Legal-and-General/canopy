import { Component } from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import {
  LgPageModule,
  LgHeaderModule,
  LgHeroModule,
  LgGridModule,
  LgBreadcrumbModule,
  LgMarginModule,
  LgIconModule,
  LgCardModule,
  LgPaddingModule,
  LgLinkMenuModule,
  LgHeadingModule,
  LgAccordionModule,
  LgButtonModule,
  LgSeparatorModule,
  LgAlertModule,
  LgCarouselModule,
  LgDataPointModule,
  LgDetailsModule,
  LgFilterContainerModule,
  LgDateFieldModule,
  LgHintModule,
  LgCheckboxGroupModule,
  LgToggleModule,
  LgInputModule,
  LgSuffixModule,
  LgPrefixModule,
  LgSelectModule,
  LgRadioModule,
  LgSortCodeModule,
  LgListWithIconsModule,
  LgPrimaryMessageModule,
  LgBrandIconModule,
  LgPromoCardModule,
  LgQuickActionModule,
  LgSpinnerModule,
  LgTabsModule,
  LgSideNavModule,
  LgPaginationModule,
  LgFooterModule,
} from 'canopy';

@Component({
  selector: 'lg-app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
  standalone: true,
  imports: [
    LgPageModule,
    LgHeaderModule,
    LgHeroModule,
    LgGridModule,
    LgBreadcrumbModule,
    LgMarginModule,
    LgIconModule,
    LgCardModule,
    LgPaddingModule,
    LgLinkMenuModule,
    LgHeadingModule,
    LgAccordionModule,
    LgButtonModule,
    LgSeparatorModule,
    LgAlertModule,
    LgCarouselModule,
    LgDataPointModule,
    LgDetailsModule,
    LgFilterContainerModule,
    LgDateFieldModule,
    LgHintModule,
    LgCheckboxGroupModule,
    LgToggleModule,
    ReactiveFormsModule,
    LgInputModule,
    LgSuffixModule,
    LgPrefixModule,
    LgSelectModule,
    LgRadioModule,
    LgSortCodeModule,
    LgListWithIconsModule,
    LgPrimaryMessageModule,
    LgBrandIconModule,
    LgPromoCardModule,
    LgQuickActionModule,
    LgSpinnerModule,
    LgTabsModule,
    NgFor,
    RouterLink,
    RouterOutlet,
    LgSideNavModule,
    NgIf,
    LgPaginationModule,
    LgFooterModule,
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

  constructor(public fb: UntypedFormBuilder) {
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
