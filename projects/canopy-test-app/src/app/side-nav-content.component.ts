import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {
  LgInputDirective,
  LgInputFieldComponent,
  LgSelectDirective,
  LgSelectFieldComponent,
} from '../../../canopy/src/lib/forms';

@Component({
  selector: 'lg-test-side-nav-content',
  template: `
    @if ((route.data | async)?.isPersonalDetails) {
      <form>
        <h2>Personal details</h2>
        <lg-input-field [block]="true">
          Name
          <input lgInput autocomplete="name" />
        </lg-input-field>
        <lg-input-field [block]="true">
          Date of birth
          <input lgInput type="date" autocomplete="bday" />
        </lg-input-field>
        <lg-select-field [block]="true">
          Marital status
          <select lgSelect>
            <option value="" disabled selected>Select marital status</option>
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="civil-partnership">Civil partnership</option>
            <option value="divorced">Divorced</option>
            <option value="widowed">Widowed</option>
          </select>
        </lg-select-field>
      </form>
    } @else {
      <h4>{{ (route.data | async)?.title }}</h4>
      <p>{{ (route.data | async)?.description }}</p>
    }
  `,
  imports: [
    AsyncPipe,
    LgInputDirective,
    LgInputFieldComponent,
    LgSelectDirective,
    LgSelectFieldComponent,
  ],
})
export class SideNavContentComponent {
  route = inject(ActivatedRoute);
}
