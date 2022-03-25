import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { notes } from './select.notes';
import { LgSelectModule } from './select.module';
import { LgSelectFieldComponent } from './select-field.component';
import { LgHintModule } from '../hint';

const template = `
<lg-select-field [block]="block">
  {{ label }}
  <lg-hint *ngIf="hint">{{ hint }}</lg-hint>
  <select lgSelect formControlName="color">
    <option *ngFor="let option of options" [value]="option">{{ option }}</option>
  </select>
</lg-select-field>
`;

@Component({
  selector: 'lg-reactive-form',
  template: ` <form [formGroup]="form">${template}</form> `,
})
class ReactiveFormComponent {
  @Input() block: boolean;
  @Input() hint: string;
  @Input() label: string;
  @Input() options: Array<string>;

  @Input()
  set disabled(disabled: boolean) {
    if (disabled === true) {
      this.form.controls.color.disable();
    } else {
      this.form.controls.color.enable();
    }
  }
  get disabled(): boolean {
    return this.form.controls.color.disabled;
  }

  @Output() selectChange: EventEmitter<void> = new EventEmitter();

  form: FormGroup;

  constructor(public fb: FormBuilder) {
    this.form = this.fb.group({
      color: { value: '', disabled: false },
    });
    this.form.valueChanges.subscribe((val) => this.selectChange.emit(val));
  }
}

export default {
  title: 'Components/Form/Select',
  component: LgSelectFieldComponent,
  decorators: [
    moduleMetadata({
      declarations: [ReactiveFormComponent],
      imports: [ReactiveFormsModule, LgSelectModule, LgHintModule],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: notes,
      },
    },
  },
  argTypes: {
    id: {
      description:
        "HTML ID attribute, auto generated if not provided. This will also propagate to the input 'id' and form 'for' attribute.",
      control: false,
      table: {
        defaultValue: {
          summary: 'lg-select-${nextUniqueId++}',
        },
        type: {
          summary: 'string',
        },
      },
    },
    block: {
      description:
        'Property to make the select field full width (for small screens only).',
    },
    selectChange: {
      action: 'Select change',
      table: {
        disable: true,
      },
    },
    _block: {
      table: {
        disable: true,
      },
    },
    _hintElement: {
      table: {
        disable: true,
      },
    },
    _labelElement: {
      table: {
        disable: true,
      },
    },
    _selectElement: {
      table: {
        disable: true,
      },
    },
    _validationElement: {
      table: {
        disable: true,
      },
    },
    class: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const selectTemplate: Story<LgSelectModule> = (args: LgSelectModule) => ({
  props: args,
  template: `
  <lg-reactive-form
    (selectChange)="selectChange($event)"
    [block]="block"
    [disabled]="disabled"
    [hint]="hint"
    [label]="label"
    [options]="options"
  ></lg-reactive-form>
  `,
});

export const select = selectTemplate.bind({});
select.storyName = 'Select';
select.args = {
  label: 'Color',
  hint: 'Please select a color',
  block: false,
  options: ['Red', 'Blue', 'Green', 'Yellow'],
  disabled: false,
};
select.parameters = {
  docs: {
    source: {
      code: template,
    },
  },
};
