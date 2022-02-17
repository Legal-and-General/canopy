import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Component, Input, EventEmitter, Output } from '@angular/core';

import { moduleMetadata, Story } from '@storybook/angular';

import { notes } from './radio.notes';
import { LgRadioModule } from './radio.module';
import { LgRadioButtonComponent } from './radio-button.component';
import { LgRadioGroupComponent } from './radio-group.component';

const formTemplate = `
<form [formGroup]="form">
  <lg-filter-group formControlName="color" [focus]=focus>
    {{ label }}
    <lg-filter-button value="red" (blur)="filterBlur.emit($event)"
      >Red</lg-filter-button
    >
    <lg-filter-button value="yellow" (blur)="filterBlur.emit($event)"
      >Yellow</lg-filter-button
    >
    <lg-filter-button value="green" (blur)="filterBlur.emit($event)"
      >Green</lg-filter-button
    >
    <lg-filter-button value="blue" (blur)="filterBlur.emit($event)"
      >Blue</lg-filter-button
    >
  </lg-filter-group>
</form>
`;

@Component({
  selector: 'lg-reactive-form-filter',
  template: formTemplate,
})
class ReactiveFormFilterComponent {
  @Input() label: string;
  @Input() focus: boolean;
  @Input()
  set disabled(isDisabled: boolean) {
    if (isDisabled === true) {
      this.form.controls.color.disable();
    } else {
      this.form.controls.color.enable();
    }
  }
  get disabled(): boolean {
    return this.form.controls.color.disabled;
  }

  @Output() filterChange: EventEmitter<void> = new EventEmitter();
  @Output() filterBlur: EventEmitter<Event> = new EventEmitter();

  form: FormGroup;

  constructor(public fb: FormBuilder) {
    this.form = this.fb.group({ color: '' });
    this.form.valueChanges.subscribe((val) => this.filterChange.emit(val));
  }
}

export default {
  title: 'Components/Filter Buttons',
  component: LgRadioGroupComponent,
  decorators: [
    moduleMetadata({
      declarations: [ReactiveFormFilterComponent],
      imports: [ReactiveFormsModule, LgRadioModule],
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
      description: 'HTML ID attribute, auto generated if not provided',
      control: false,
      table: {
        defaultValue: {
          summary: 'lg-radio-button-${++nextUniqueId}',
        },
        type: {
          summary: 'string',
        },
      },
    },
    name: {
      description: 'HTML name attribute',
      control: false,
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    value: {
      description: 'HTML value attribute',
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
    filterChange: {
      action: 'Filter change',
      table: {
        disable: true,
      },
    },
    inline: {
      table: {
        disable: true,
      },
    },
    stack: {
      table: {
        disable: true,
      },
    },
    _hintElement: {
      table: {
        disable: true,
      },
    },
    _radios: {
      table: {
        disable: true,
      },
    },
    _stack: {
      table: {
        disable: true,
      },
    },
    _validationElement: {
      table: {
        disable: true,
      },
    },
    _value: {
      table: {
        disable: true,
      },
    },
    class: {
      table: {
        disable: true,
      },
    },
    nextUniqueId: {
      table: {
        disable: true,
      },
    },
    variant: {
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

const filterButtonsStory: Story<LgRadioButtonComponent> = (
  args: LgRadioButtonComponent,
) => ({
  props: args,
  template: `
  <lg-reactive-form-filter
    [disabled]="disabled"
    [label]="label"
    [focus]="focus"
    (filterChange)="filterChange($event)"
    (filterBlur)="filterBlur($event)">
  </lg-reactive-form-filter>
  `,
});

export const filterButtons = filterButtonsStory.bind({});
filterButtons.storyName = 'Filter Buttons';
filterButtons.args = {
  label: 'Select a color',
  disabled: false,
  focus: false,
};
filterButtons.parameters = {
  docs: {
    source: {
      code: formTemplate,
    },
  },
};
