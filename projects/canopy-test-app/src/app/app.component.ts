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

  toggleTableRow(index: number) {
    this.expandedTableRow = this.expandedTableRow === index ? null : index;
  }

  onSubmit(event) {
    console.log(event.value);
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
  }
}
