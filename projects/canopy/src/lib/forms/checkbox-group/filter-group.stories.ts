import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { moduleMetadata, Story } from '@storybook/angular';

import { notes } from './checkbox-group.notes';
import { LgCheckboxGroupComponent } from './checkbox-group.component';
import { LgCheckboxGroupModule } from './checkbox-group.module';
import { LgHintModule } from '../hint';

const formTemplate = `
<form [formGroup]="form">
  <lg-filter-multiple-group formControlName="colors" [focus]="focus">
    Select colours
    <lg-hint>Please select all colours that apply</lg-hint>
    <lg-filter-checkbox value="red">Red</lg-filter-checkbox>
    <lg-filter-checkbox value="yellow">Yellow</lg-filter-checkbox>
    <lg-filter-checkbox value="green">Green</lg-filter-checkbox>
    <lg-filter-checkbox value="blue">Blue</lg-filter-checkbox>
  </lg-filter-multiple-group>
</form>
`;

@Component({
  selector: 'lg-reactive-form',
  template: formTemplate,
})
class ReactiveFormComponent {
  @Input() focus: boolean;
  @Input()
  set disabled(isDisabled: boolean) {
    if (isDisabled === true) {
      this.form.controls.colors.disable();
    } else {
      this.form.controls.colors.enable();
    }
  }
  get disabled(): boolean {
    return this.form.controls.colors.disabled;
  }

  @Output() checkboxChange: EventEmitter<void> = new EventEmitter();

  form: FormGroup;

  constructor(public fb: FormBuilder) {
    this.form = this.fb.group({ colors: this.fb.control(['red']) });
    this.form.valueChanges.subscribe((val) => this.checkboxChange.emit(val));
  }
}

export default {
  title: 'Components/Filter multiple buttons',
  component: LgCheckboxGroupComponent,
  decorators: [
    moduleMetadata({
      declarations: [ReactiveFormComponent],
      imports: [ReactiveFormsModule, LgCheckboxGroupModule, LgHintModule],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: notes('Filter'),
      },
    },
  },
  argTypes: {
    id: {
      description: 'HTML ID attribute, auto generated if not provided.',
      control: false,
      table: {
        defaultValue: {
          summary: 'lg-checkbox-group-id-${++nextUniqueId}',
        },
        type: {
          summary: 'string',
        },
      },
    },
    name: {
      description:
        'Set the name value for all inputs in the group, auto-generated if not provided.',
      control: false,
      table: {
        defaultValue: {
          summary: 'lg-checkbox-group-${++nextUniqueId}',
        },
        type: {
          summary: 'string',
        },
      },
    },
    value: {
      description:
        'HTML value attribute. Sets the default checked filter buttons, must match the values of the filter buttons.',
      control: false,
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    focus: {
      description: 'Set the focus on the fieldset.',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    disabled: {
      description: 'Set the inner filters to disabled.',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    ariaDescribedBy: {
      description:
        'HTML ID for the corresponding element that describes the filters, if not provided it will use the hint field where appropriate.',
      control: false,
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    checkboxChange: {
      action: 'Checkbox change',
      table: {
        disable: true,
      },
    },
    inline: {
      table: {
        disable: true,
      },
    },
    _checkboxes: {
      table: {
        disable: true,
      },
    },
    _hintElement: {
      table: {
        disable: true,
      },
    },
    _validationElement: {
      table: {
        disable: true,
      },
    },
    _variant: {
      table: {
        disable: true,
      },
    },
    nextUniqueId: {
      table: {
        disable: true,
      },
    },
    onChange: {
      table: {
        disable: true,
      },
    },
    onTouched: {
      table: {
        disable: true,
      },
    },
    registerOnChange: {
      table: {
        disable: true,
      },
    },
    registerOnTouched: {
      table: {
        disable: true,
      },
    },
    setDisabledState: {
      table: {
        disable: true,
      },
    },
    writeValue: {
      table: {
        disable: true,
      },
    },
  },
};

const filterMultiple: Story<LgCheckboxGroupComponent> = (
  args: LgCheckboxGroupComponent,
) => ({
  props: args,
  template: `
    <lg-reactive-form (checkboxChange)="checkboxChange($event)" [disabled]="disabled" [focus]="focus"></lg-reactive-form>
  `,
});

export const filterMultipleButtons = filterMultiple.bind({});
filterMultipleButtons.storyName = 'Standard';
filterMultipleButtons.args = {
  disabled: false,
  focus: false,
};
filterMultipleButtons.parameters = {
  docs: {
    source: {
      code: formTemplate,
    },
  },
};
