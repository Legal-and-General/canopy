import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { tableTestData } from 'projects/canopy/src/lib/table/test.data';
import {
  lgIconHome,
  LgIconRegistry,
  lgIconAdd,
  lgIconArrowDown,
  lgIconClose,
  lgIconSearch,
  lgIconChevronLeft,
} from 'projects/canopy/src/lib/icon';
import { BreadcrumbBreakpoints } from 'projects/canopy/src/lib/breadcrumb/breadcrumb-item/breadcrumb-item.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'canopy-test-app';
  expandedTableRowData = tableTestData;
  expandedTableRow: number;
  form: FormGroup;
  selectedTabIndex = 0;
  tabs: Array<any>;
  breadcrumbBreakpoints = BreadcrumbBreakpoints;

  toggleTableRow(index: number) {
    this.expandedTableRow = this.expandedTableRow === index ? null : index;
  }

  onSubmit(event) {
    console.log(event.value);
  }

  handleTabClick(event: MouseEvent, index: number) {
    event.preventDefault();
    this.selectedTabIndex = index;
  }

  constructor(public fb: FormBuilder, private registry: LgIconRegistry) {
    this.registry.registerIcons([
      lgIconHome,
      lgIconAdd,
      lgIconArrowDown,
      lgIconClose,
      lgIconSearch,
      lgIconChevronLeft,
    ]);
    this.form = this.fb.group({
      text: [''],
      textSearch: [''],
      textPound: [''],
      textPercent: [''],
      select: [''],
      radio: [''],
      filter: [''],
      colors: this.fb.control([]),
      filters: this.fb.control([]),
      checkbox: [''],
      switch: [''],
      segment: [''],
      date: [''],
      sortCode: ['']
    });

    this.tabs = [
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
  }
}
