import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { NgFor, NgIf } from '@angular/common';

import { LgSelectFieldComponent } from '../select-field.component';
import { LgHintComponent } from '../../hint';
import { LgSelectDirective } from '../select.directive';
import { lgIconChevronDown, LgIconRegistry } from '../../../icon';

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
  standalone: true,
  imports: [
    ReactiveFormsModule,
    LgSelectFieldComponent,
    LgHintComponent,
    LgSelectDirective,
    NgIf,
    NgFor,
  ],
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

  @Output() selectChange: EventEmitter<void> = new EventEmitter<void>();

  form: UntypedFormGroup;

  constructor(
    public fb: UntypedFormBuilder,
    private registry: LgIconRegistry,
  ) {
    this.form = this.fb.group({
      color: { value: '', disabled: false },
    });

    this.form.valueChanges.subscribe(val => this.selectChange.emit(val));
    this.registry.registerIcons([ lgIconChevronDown ]);
  }
}

export default {
  title: 'Components/Forms/Select/Examples',
  component: LgSelectFieldComponent,
  decorators: [
    moduleMetadata({
      imports: [ ReactiveFormComponent ],
    }),
  ],
  argTypes: {
    id: {
      table: {
        disable: true,
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

const selectTemplate: StoryFn<LgSelectFieldComponent> = (
  args: LgSelectFieldComponent,
) => ({
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
  options: [ 'Red', 'Blue', 'Green', 'Yellow' ],
  disabled: false,
};

select.parameters = {
  docs: {
    source: {
      code: template,
    },
  },
};
