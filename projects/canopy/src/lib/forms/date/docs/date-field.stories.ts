import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { moduleMetadata, StoryFn } from '@storybook/angular';

import { LgDateFieldComponent } from '../date-field.component';
import { LgDateFieldModule } from '../date-field.module';

const template = `
<lg-date-field [focus]="focus" formControlName="date">
  {{ label }}
  <lg-hint *ngIf="hint">{{ hint }}</lg-hint>
</lg-date-field>
`;

@Component({
  selector: 'lg-reactive-form',
  template: ` <form [formGroup]="form">${template}</form> `,
})
class ReactiveFormComponent {
  @Input() hint: string;
  @Input() label: string;
  @Input() focus: boolean;

  @Input()
  set disabled(disabled: boolean) {
    if (disabled === true) {
      this.form.controls.date.disable();
    } else {
      this.form.controls.date.enable();
    }
  }
  get disabled(): boolean {
    return this.form.controls.date.disabled;
  }

  @Output() inputChange: EventEmitter<void> = new EventEmitter();

  form: UntypedFormGroup;

  constructor(public fb: UntypedFormBuilder) {
    this.form = this.fb.group({
      date: { value: '1970-01-01', disabled: false },
    });

    this.form.valueChanges.subscribe(val => this.inputChange.emit(val));
  }
}

export default {
  title: 'Patterns/Date input/Examples',
  component: LgDateFieldComponent,
  decorators: [
    moduleMetadata({
      declarations: [ ReactiveFormComponent ],
      imports: [ ReactiveFormsModule, LgDateFieldModule ],
    }),
  ],
  argTypes: {
    inputChange: {
      action: 'Input change',
      table: {
        disable: true,
      },
    },
    dateId: {
      table: {
        disable: true,
      },
    },
    monthId: {
      table: {
        disable: true,
      },
    },
    yearId: {
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
    disabled: {
      description: 'Set the inputs to disabled.',
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
    value: {
      table: {
        disable: true,
      },
    },
    _hintElement: {
      table: {
        disable: true,
      },
    },
    class: {
      table: {
        disable: true,
      },
    },
    date: {
      table: {
        disable: true,
      },
    },
    _validationElement: {
      table: {
        disable: true,
      },
    },
    isControlInvalid: {
      table: {
        disable: true,
      },
    },
    onChange: {
      table: {
        disable: true,
      },
    },
    ngOnDestroy: {
      table: {
        disable: true,
      },
    },
    ngOnInit: {
      table: {
        disable: true,
      },
    },
    onBlur: {
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
    formGroupDirective: {
      table: {
        disable: true,
      },
    },
    validate: {
      table: {
        disable: true,
      },
    },
    dateFormGroup: {
      table: {
        disable: true,
      },
    },
    month: {
      table: {
        disable: true,
      },
    },
    subscriptions: {
      table: {
        disable: true,
      },
    },
    year: {
      table: {
        disable: true,
      },
    },
  },
};

const dateInputStory: StoryFn<LgDateFieldModule> = (args: LgDateFieldModule) => ({
  props: args,
  template: `
  <lg-reactive-form
    (inputChange)="inputChange($event)"
    [disabled]="disabled"
    [hint]="hint"
    [label]="label"
    [focus]="focus"
  ></lg-reactive-form>
  `,
});

export const dateInput = dateInputStory.bind({});
dateInput.storyName = 'Date input';

dateInput.args = {
  disabled: false,
  label: 'Date of birth',
  hint: 'For example, 12 06 1983',
  focus: false,
};

dateInput.parameters = {
  docs: {
    source: {
      code: template,
    },
  },
};
