import {
  UntypedFormBuilder,
  UntypedFormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { moduleMetadata, StoryFn } from '@storybook/angular';

import { LgRadioModule } from '../../radio/radio.module';
import { LgRadioButtonComponent } from '../../radio/radio-button.component';
import { LgRadioGroupComponent } from '../../radio/radio-group.component';

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

  form: UntypedFormGroup;

  constructor(public fb: UntypedFormBuilder) {
    this.form = this.fb.group({ color: '' });
    this.form.valueChanges.subscribe(val => this.filterChange.emit(val));
  }
}

export default {
  title: 'Components/Filter buttons/Examples',
  component: LgRadioGroupComponent,
  decorators: [
    moduleMetadata({
      declarations: [ ReactiveFormFilterComponent ],
      imports: [ ReactiveFormsModule, LgRadioModule ],
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
    filterChange: {
      action: 'Filter change',
      table: {
        disable: true,
      },
    },
    filterBlur: {
      action: 'Filter blur',
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
    ngAfterContentInit: {
      table: {
        disable: true,
      },
    },
  },
};

const filterButtonsStory: StoryFn<LgRadioButtonComponent> = (
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
filterButtons.storyName = 'Select one';

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
