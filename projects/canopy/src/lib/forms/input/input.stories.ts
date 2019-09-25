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
import { LgInputFieldComponent } from './input-field.component';
import { LgInputDirective } from './input.directive';
import { notes } from './input.notes';

const stories = storiesOf('Form/Input', module).addDecorator(withKnobs);

@Component({
  selector: 'lg-reactive-form',
  template: `
    <form [formGroup]="form">
      <lg-input-field>
        Name
        <input lgInput formControlName="name" />
      </lg-input-field>
    </form>
  `
})
class ReactiveFormComponent implements OnInit {
  @Input() disabled: false;

  @Output() inputChange: EventEmitter<void> = new EventEmitter();

  form: FormGroup;

  constructor(public fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({ name: { value: '', disabled: this.disabled } });
    this.form.valueChanges.subscribe(val => this.inputChange.emit(val));
  }
}

stories.add(
  'Input Field (reactive)',
  () => ({
    moduleMetadata: {
      declarations: [
        ReactiveFormComponent,
        LgInputDirective,
        LgInputFieldComponent,
        LgLabelDirective
      ],
      imports: [ReactiveFormsModule]
    },
    template: `<lg-reactive-form (inputChange)="inputChange($event)"></lg-reactive-form>`,
    props: {
      inputChange: action('inputChange')
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
      <lg-input-field>
        Name
        <input lgInput [(ngModel)]="name" />
      </lg-input-field>
    </form>
  `
})
class TemplateFormComponent {
  name = '';

  @Output() inputChange = new EventEmitter<any>();

  onChange() {
    this.inputChange.emit({ name: this.name });
  }
}

stories.add(
  'Input (template)',
  () => ({
    moduleMetadata: {
      declarations: [
        TemplateFormComponent,
        LgInputDirective,
        LgInputFieldComponent,
        LgLabelDirective
      ],
      imports: [FormsModule]
    },
    template: `<lg-template-form (inputChange)="inputChange($event)"></lg-template-form>`,
    props: {
      inputChange: action('inputChange')
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
  'Input (css)',
  () => {
    require('!style-loader!css-loader!sass-loader!../../../styles/form.scss');

    return {
      template: `
      <div class="lg-input">
        <label class="lg-input__label" for="name">
          Name
        </label>
        <input class="lg-input__field" name="name" id="name">
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
