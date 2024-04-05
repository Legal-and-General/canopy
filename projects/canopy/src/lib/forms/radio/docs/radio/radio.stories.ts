import {
  UntypedFormBuilder,
  UntypedFormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { moduleMetadata, StoryFn } from '@storybook/angular';
import { NgIf } from '@angular/common';

import { LgRadioGroupComponent } from '../../radio-group.component';
import { LgRadioButtonComponent } from '../../radio-button.component';
import { LgHintComponent } from '../../../hint';

const formTemplate = `
<form [formGroup]="form">
  <lg-radio-group [inline]="inline" [focus]="focus" formControlName="color">
    {{ label }}
    <lg-hint *ngIf="hint">{{ hint }}</lg-hint>
    <lg-radio-button value="red" [size]="size" (blur)="radioBlur.emit($event)">Red</lg-radio-button>
    <lg-radio-button value="yellow" [size]="size" (blur)="radioBlur.emit($event)"
      >Yellow
      <lg-hint>Internal custom text</lg-hint>
    </lg-radio-button>
  </lg-radio-group>
</form>
`;

@Component({
  selector: 'lg-reactive-form-radio',
  template: formTemplate,
  standalone: true,
  imports: [
    ReactiveFormsModule,
    LgRadioGroupComponent,
    LgHintComponent,
    LgRadioButtonComponent,
    NgIf,
  ],
})
class ReactiveFormRadioComponent {
  @Input() inline = false;
  @Input() size = 'sm';
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
  @Output() radioBlur: EventEmitter<Event> = new EventEmitter();

  form: UntypedFormGroup;

  constructor(public fb: UntypedFormBuilder) {
    this.form = this.fb.group({ color: 'red' });
    this.form.valueChanges.subscribe(val => this.radioChange.emit(val));
  }
}

export default {
  title: 'Components/Forms/Radio/Examples',
  component: LgRadioGroupComponent,
  decorators: [
    moduleMetadata({
      imports: [ ReactiveFormRadioComponent ],
    }),
  ],
  argTypes: {
    id: {
      table: {
        disable: true,
      },
    },
    name: {
      table: {
        disable: true,
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
    ngAfterContentInit: {
      table: {
        disable: true,
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
    size: {
      options: [ 'sm', 'lg' ],
      description: 'The size of the radio button.',
      table: {
        type: {
          summary: [ 'sm', 'lg' ],
        },
        defaultValue: {
          summary: 'sm',
        },
      },
      control: {
        type: 'select',
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
      table: {
        disable: true,
      },
    },
    radioChange: {
      action: 'Radio change',
      table: {
        disable: true,
      },
    },
    radioBlur: {
      action: 'Radio blur',
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

const radioStory: StoryFn<LgRadioButtonComponent> = (args: LgRadioButtonComponent) => ({
  props: args,
  template: `
  <lg-reactive-form-radio
    [disabled]="disabled"
    [hint]="hint"
    [inline]="inline"
    [size]="size"
    [label]="label"
    [focus]="focus"
    (radioChange)="radioChange($event)"
    (radioBlur)="radioBlur($event)">
  </lg-reactive-form-radio>
  `,
});

export const radio = radioStory.bind({});
radio.storyName = 'Radio';

radio.args = {
  disabled: false,
  inline: false,
  size: 'sm',
  focus: false,
  label: 'Color',
  hint: 'Please select a color',
};

radio.parameters = {
  docs: {
    source: {
      code: formTemplate,
    },
  },
};
