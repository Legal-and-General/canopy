import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Component, Input, EventEmitter, Output } from '@angular/core';

import { moduleMetadata, Story } from '@storybook/angular';

import { notes } from './radio.notes';
import { LgRadioModule } from './radio.module';
import { LgRadioButtonComponent } from './radio-button.component';

const formTemplate = `
<form [formGroup]="form">
  <lg-filter-group formControlName="color">
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
  title: 'Components/Filter buttons',
  component: LgRadioButtonComponent,
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
    filterChange: {
      action: 'Filter change',
      table: {
        disable: true,
      },
    },
    ngOnInit: {
      table: {
        disable: true,
      },
    },
    onCheck: {
      table: {
        disable: true,
      },
    },
    control: {
      table: {
        disable: true,
      },
    },
    class: {
      table: {
        disable: true,
      },
    },
    checked: {
      table: {
        disable: true,
      },
    },
    _disabled: {
      table: {
        disable: true,
      },
    },
    _variant: {
      table: {
        disable: true,
      },
    },
    _stacked: {
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
    (filterChange)="filterChange($event)"
    (filterBlur)="filterBlur($event)">
  </lg-reactive-form-filter>
  `,
});

export const filterButtons = filterButtonsStory.bind({});
filterButtons.storyName = 'Standard';
filterButtons.args = {
  label: 'Select a color',
  disabled: false
};
filterButtons.parameters = {
  docs: {
    source: {
      code: formTemplate,
    },
  },
};
