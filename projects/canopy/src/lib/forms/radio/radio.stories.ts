import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { moduleMetadata, Story } from '@storybook/angular';

import { notes } from './radio.notes';
import { LgRadioModule } from './radio.module';
import { LgHintModule } from '../hint/hint.module';
import { LgRadioGroupComponent } from './radio-group.component';

const formTemplate = `
<form [formGroup]="form">
  <lg-radio-group [inline]="inline" [focus]="focus" formControlName="color">
    {{ label }}
    <lg-hint *ngIf="hint">{{ hint }}</lg-hint>
    <lg-radio-button value="red">Red</lg-radio-button>
    <lg-radio-button value="yellow">Yellow</lg-radio-button>
  </lg-radio-group>
</form>
`;

@Component({
  selector: 'lg-reactive-form-radio',
  template: formTemplate,
})
class ReactiveFormRadioComponent {
  @Input() inline = false;
  @Input() focus = false;
  @Input() label: string;
  @Input() hint: string;
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

  @Output() radioChange: EventEmitter<void> = new EventEmitter();

  form: FormGroup;

  constructor(public fb: FormBuilder) {
    this.form = this.fb.group({ color: 'red' });
    this.form.valueChanges.subscribe((val) => this.radioChange.emit(val));
  }
}

export default {
  title: 'Components/Form/Radio',
  component: LgRadioGroupComponent,
  decorators: [
    moduleMetadata({
      declarations: [ReactiveFormRadioComponent],
      imports: [ReactiveFormsModule, LgRadioModule, LgHintModule],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: notes('Radio'),
      },
    },
  },
  argTypes: {
    id: {
      description: 'HTML ID attribute, auto generated if not provided.',
      control: false,
      table: {
        defaultValue: {
          summary: 'lg-radio-group-id-${nextUniqueId++}',
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
          summary: 'lg-radio-group-${nextUniqueId++}',
        },
        type: {
          summary: 'string',
        },
      },
    },
    value: {
      description:
        'Set the default checked radio button, must match the value of the radio button.',
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
    inline: {
      description: 'Position the radio buttons inline.',
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
    radioChange: {
      action: 'Radio change',
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

const radioStory: Story<LgRadioModule> = (args: LgRadioModule) => ({
  props: args,
  template: `
    <lg-reactive-form-radio
      [disabled]="disabled"
      [hint]="hint"
      [inline]="inline"
      [label]="label"
      [focus]="focus"
      (radioChange)="radioChange($event)">
    </lg-reactive-form-radio>
  `,
});

export const radioButtons = radioStory.bind({});
radioButtons.storyName = 'Radio';
radioButtons.args = {
  disabled: false,
  inline: false,
  focus: false,
  label: 'Color',
  hint: 'Please select a color',
};
radioButtons.parameters = {
  docs: {
    source: {
      code: formTemplate,
    },
  },
};
