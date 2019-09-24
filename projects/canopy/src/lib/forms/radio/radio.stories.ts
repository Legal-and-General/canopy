import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
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
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';

import { LgLabelDirective } from '../label';
import { LgRadioButtonComponent } from './radio-button.component';
import { LgRadioGroupComponent } from './radio-group.component';

const stories = storiesOf('Form/Radio', module).addDecorator(withKnobs);

@Component({
  selector: 'lg-reactive-form',
  template: `
    <form [formGroup]="form">
      <lg-radio-group [inline]="inline" formControlName="color">
        <label lgLabel>Color</label>
        <lg-radio-button value="red">Red</lg-radio-button>
        <lg-radio-button value="yellow">Yellow</lg-radio-button>
      </lg-radio-group>
    </form>
  `
})
class ReactiveFormComponent implements OnInit {
  @Input() inline: false;

  @Output() radioChange: EventEmitter<void> = new EventEmitter();

  form: FormGroup;

  constructor(public fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({ color: 'red' });
    this.form.valueChanges.subscribe(val => this.radioChange.emit(val));
  }
}

const groupId = 'lg-radio';

stories.add('Radio (reactive)', () => ({
  moduleMetadata: {
    declarations: [
      ReactiveFormComponent,
      LgRadioGroupComponent,
      LgLabelDirective,
      LgRadioButtonComponent
    ],
    imports: [ReactiveFormsModule]
  },
  template: `<lg-reactive-form [inline]="inline" (radioChange)="radioChange($event)"></lg-reactive-form>`,
  props: {
    inline: boolean('inline', false, groupId),
    radioChange: action('radioChange')
  }
}));

@Component({
  selector: 'lg-template-form',
  template: `
    <form #form="ngForm">
      <lg-radio-group
        [(ngModel)]="color"
        [inline]="inline"
        name="color"
        (change)="onChange()"
      >
        <label lgLabel>Color</label>
        <lg-radio-button value="red">Red</lg-radio-button>
        <lg-radio-button value="yellow">Yellow</lg-radio-button>
      </lg-radio-group>
    </form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
class TemplateFormComponent {
  color = 'red';

  @Input() inline: false;

  @Output() radioChange = new EventEmitter<any>();

  onChange() {
    this.radioChange.emit({ color: this.color });
  }
}

stories.add('Radio (template)', () => ({
  moduleMetadata: {
    declarations: [
      TemplateFormComponent,
      LgLabelDirective,
      LgRadioGroupComponent,
      LgRadioButtonComponent
    ],
    imports: [FormsModule]
  },
  template: `<lg-template-form  [inline]="inline" (radioChange)="radioChange($event)"></lg-template-form>`,
  props: {
    inline: boolean('inline', false, groupId),
    radioChange: action('radioChange')
  }
}));

stories.add('Radio (css)', () => {
  require('!style-loader!css-loader!sass-loader!../../../styles/form.scss');

  return {
    template: `
      <fieldset class="lg-radio-group {{inline && 'lg-radio-group--inline' }}">
        <legend id="color-label" class="lg-radio-group__label">Color</legend>
        <div class="lg-radio-button">
          <input id="red" class="lg-radio-button__input" type="radio" name="color" checked />
          <label for="red" class="lg-radio-button__label">Red</label>
        </div>
        <div class="lg-radio-button">
          <input id="yellow" class="lg-radio-button__input" type="radio" name="color" />
          <label for="yellow" class="lg-radio-button__label">Yellow</label>
        </div>
      </fieldset>
    `,
    props: {
      inline: boolean('inline', false, groupId)
    }
  };
});
