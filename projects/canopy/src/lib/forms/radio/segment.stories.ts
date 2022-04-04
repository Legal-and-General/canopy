import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { moduleMetadata, Story } from '@storybook/angular';

import { notes } from './radio.notes';
import { LgRadioModule } from './radio.module';
import { LgHintModule } from '../hint/hint.module';
import { LgRadioGroupComponent } from './radio-group.component';
import { RadioStackBreakpoint } from './radio.interface';

const segmentTemplate = `
<lg-segment-group [inline]="inline" [focus]="focus" [stack]="stack" formControlName="color">
  {{ label }}
  <lg-hint *ngIf="hint">{{ hint }}</lg-hint>
  <lg-segment-button value="red" (blur)="segmentBlur.emit($event)">Red</lg-segment-button>
  <lg-segment-button value="yellow" (blur)="segmentBlur.emit($event)">Yellow</lg-segment-button>
  <lg-segment-button value="green" (blur)="segmentBlur.emit($event)">Green</lg-segment-button>
  <lg-segment-button value="blue" (blur)="segmentBlur.emit($event)">Blue</lg-segment-button>
</lg-segment-group>
`;

@Component({
  selector: 'lg-reactive-form-segment',
  template: ` <form [formGroup]="form">${segmentTemplate}</form> `,
})
class ReactiveFormSegmentComponent {
  @Input() label: string;
  @Input() hint: string;
  @Input() secondButtonLabel: string;
  @Input() stack: RadioStackBreakpoint;
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

  @Output() segmentChange: EventEmitter<void> = new EventEmitter();
  @Output() segmentBlur: EventEmitter<Event> = new EventEmitter();

  form: FormGroup;

  constructor(public fb: FormBuilder) {
    this.form = this.fb.group({ color: null });
    this.form.valueChanges.subscribe((val) => this.segmentChange.emit(val));
  }
}

export default {
  title: 'Components/Form/Segment',
  component: LgRadioGroupComponent,
  decorators: [
    moduleMetadata({
      declarations: [ReactiveFormSegmentComponent],
      imports: [ReactiveFormsModule, LgRadioModule, LgHintModule],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: notes('Segment'),
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
        'Set the default checked segment button, must match the value of the segment button.',
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
    stack: {
      options: ['sm', 'md', 'lg'],
      description: 'Stack the segment buttons at a given breakpoint.',
      table: {
        type: {
          summary: ['sm', 'md', 'lg'],
        },
      },
      control: {
        type: 'select',
      },
    },
    inline: {
      table: {
        disable: true,
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
    segmentChange: {
      action: 'Segment change',
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

const segmentStory: Story<LgRadioModule> = (args: LgRadioModule) => ({
  props: args,
  template: `
  <lg-reactive-form-segment
    [stack]="stack"
    [disabled]="disabled"
    [focus]="focus"
    [label]="label"
    [hint]="hint"
    [secondButtonLabel]="secondButtonLabel"
    (segmentChange)="segmentChange($event)"
    (segmentBlur)="segmentBlur($event)">
  </lg-reactive-form-segment>
  `,
});

export const segmentButtons = segmentStory.bind({});
segmentButtons.storyName = 'Segment';
segmentButtons.args = {
  disabled: false,
  stack: false,
  focus: false,
  label: 'Color',
  hint: 'Please select a color',
};
segmentButtons.parameters = {
  docs: {
    source: {
      code: segmentTemplate,
    },
  },
};
