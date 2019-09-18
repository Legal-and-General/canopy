import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';

import { LgCheckboxComponent } from './checkbox.component';
import { notes } from './checkbox.notes';

const stories = storiesOf('Form/Checkbox', module).addDecorator(withKnobs);

@Component({
  selector: 'lg-reactive-form',
  template: `
    <form [formGroup]="form">
      <lg-checkbox formControlName="umbrella" value="yes">
        I will bring my Umbrella if it is raining
      </lg-checkbox>
    </form>
  `
})
class ReactiveFormComponent implements OnInit {
  constructor(public fb: FormBuilder) {}

  @Output() checkboxChange: EventEmitter<void> = new EventEmitter();

  form: FormGroup;

  ngOnInit() {
    this.form = this.fb.group({ umbrella: null });
    this.form.valueChanges.subscribe(val => this.checkboxChange.emit(val));
  }
}

stories.add(
  'Checkbox (reactive)',
  () => ({
    moduleMetadata: {
      declarations: [ReactiveFormComponent, LgCheckboxComponent],
      imports: [ReactiveFormsModule]
    },
    template: `<lg-reactive-form (checkboxChange)="checkboxChange($event)"></lg-reactive-form>`,
    props: {
      checkboxChange: action('checkboxChange')
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
      <lg-checkbox
        [(ngModel)]="umbrella"
        name="umbrella"
        value="yes"
        (change)="onChange()"
      >
        I will bring my Umbrella if it is raining
      </lg-checkbox>
    </form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
class TemplateFormComponent {
  umbrella = null;

  @Output() checkboxChange = new EventEmitter<any>();

  onChange() {
    this.checkboxChange.emit({ umbrella: this.umbrella });
  }
}

stories.add(
  'Checkbox (template)',
  () => ({
    moduleMetadata: {
      declarations: [TemplateFormComponent, LgCheckboxComponent],
      imports: [FormsModule]
    },
    template: `<lg-template-form (checkboxChange)="checkboxChange($event)"></lg-template-form>`,
    props: {
      checkboxChange: action('checkboxChange')
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
  'Checkbox (css)',
  () => {
    require('!style-loader!css-loader!sass-loader!../../../styles/form.scss');

    return {
      template: `
      <div class="lg-checkbox">
        <input id="umbrella-check" class="lg-checkbox__input" type="checkbox" />
        <label for="umbrella-check" class="lg-checkbox__label">
          I will bring my Umbrella if it is raining
        </label>
      </div>
    `
    };
  },
  {
    notes: {
      markdown: `
      > This story demonstrates the component being used in a JavaScript agnostic HTML and CSS web page
      ${notes}
    `
    }
  }
);
