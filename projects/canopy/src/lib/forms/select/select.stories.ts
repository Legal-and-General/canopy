import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';

import { LgLabelDirective } from '../label/label.directive';
import { LgSelectFieldComponent } from './select-field.component';
import { LgSelectDirective } from './select.directive';
import { notes } from './select.notes';

const stories = storiesOf('Components|Form/Select', module).addDecorator(
  withKnobs
);

@Component({
  selector: 'lg-reactive-form',
  template: `
    <form [formGroup]="form">
      <lg-select-field>
        Color
        <select lgSelect formControlName="color">
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
        </select>
      </lg-select-field>
    </form>
  `
})
class ReactiveFormComponent implements OnInit {
  @Input() disabled: false;

  @Output() selectChange: EventEmitter<void> = new EventEmitter();

  form: FormGroup;

  constructor(public fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      color: { value: '', disabled: this.disabled }
    });
    this.form.valueChanges.subscribe(val => this.selectChange.emit(val));
  }
}

stories.add(
  'Select (reactive)',
  () => ({
    moduleMetadata: {
      declarations: [
        ReactiveFormComponent,
        LgSelectDirective,
        LgSelectFieldComponent,
        LgLabelDirective
      ],
      imports: [ReactiveFormsModule]
    },
    template: `<lg-reactive-form (selectChange)="selectChange($event)"></lg-reactive-form>`,
    props: {
      selectChange: action('selectChange')
    }
  }),
  {
    notes: {
      markdown: `
    > This story demonstrates the component being used in an Angular reactive form
    ${notes}
  `
    }
  }
);

@Component({
  selector: 'lg-template-form',
  template: `
    <form #form="ngForm">
      <lg-select-field>
        Color
        <select lgSelect [(ngModel)]="color">
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
        </select>
      </lg-select-field>
    </form>
  `
})
class TemplateFormComponent {
  color = '';

  @Output() selectChange = new EventEmitter<any>();

  onChange() {
    this.selectChange.emit({ color: this.color });
  }
}

stories.add(
  'Select (template)',
  () => ({
    moduleMetadata: {
      declarations: [
        TemplateFormComponent,
        LgSelectDirective,
        LgSelectFieldComponent,
        LgLabelDirective
      ],
      imports: [FormsModule]
    },
    template: `<lg-template-form (selectChange)="selectChange($event)"></lg-template-form>`,
    props: {
      selectChange: action('selectChange')
    }
  }),
  {
    notes: {
      markdown: `
    > This story demonstrates the component being used in an Angular template form
    ${notes}
  `
    }
  }
);

stories.add(
  'Select (css)',
  () => {
    require('!style-loader!css-loader!sass-loader!../../../styles/form.scss');

    return {
      template: `
        <div class="lg-select">
          <label class="lg-select__label" for="color">
            Color
          </label>

          <div class="lg-select__wrapper">
            <select class="lg-select__field" name="color" id="color">
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
              <option value="yellow">Yellow</option>
            </select>
            <span class="lg-select__icon"></span>
          </div>
        </div>
      `
    };
  },
  {
    notes: {
      markdown: `
    > This story demonstrates the component being used in a JavaScript agnostic HTML and CSS website
    ${notes}
  `
    }
  }
);
