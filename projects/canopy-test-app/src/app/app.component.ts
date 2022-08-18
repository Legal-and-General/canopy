import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
})
export class AppComponent {
  title = 'canopy-test-app';
  form: FormGroup;
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

  constructor(public fb: FormBuilder) {
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

  onSubmit(event) {
    // eslint-disable-next-line no-console
    console.log(event.value);
  }

  handleTabClick(event: MouseEvent, index: number) {
    event.preventDefault();
    this.selectedTabIndex = index;
  }

  handleSideNavClick(event: MouseEvent, index: number) {
    event.preventDefault();
    this.selectedSideNavIndex = index;
  }

  onBoxOpen($event): void {
    // eslint-disable-next-line no-console
    console.log('opened', $event);
  }

  onBoxClose($event): void {
    // eslint-disable-next-line no-console
    console.log('closed', $event);
  }
}
