import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { tableTestData } from 'projects/canopy/src/lib/table/test.data';

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

  constructor(public fb: FormBuilder) {
    this.form = this.fb.group({
      text: [''],
      select: [''],
      radio: [''],
      checkbox: [''],
      switch: [''],
      date: [''],
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
