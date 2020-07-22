import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  title = 'canopy-test-app';

  form: FormGroup;

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
