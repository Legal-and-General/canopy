import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { moduleMetadata, StoryFn } from '@storybook/angular';

import { LgCheckboxGroupComponent } from '../../checkbox-group';
import { LgToggleComponent } from '../../toggle';
import { LgHintComponent } from '../../hint';
import { lgIconAdd, lgIconCheckmark, LgIconRegistry } from '../../../icon';

const formTemplate = `
<form [formGroup]="form">
  <lg-filter-multiple-group formControlName="colors" [focus]="focus">
    {{ label }}
    <lg-hint>{{ hint }}</lg-hint>
    <lg-filter-checkbox value="red" (blur)="checkboxBlur.emit($event)">Red</lg-filter-checkbox>
    <lg-filter-checkbox value="yellow" (blur)="checkboxBlur.emit($event)">Yellow</lg-filter-checkbox>
    <lg-filter-checkbox value="green" (blur)="checkboxBlur.emit($event)">Green</lg-filter-checkbox>
    <lg-filter-checkbox value="blue" (blur)="checkboxBlur.emit($event)">Blue</lg-filter-checkbox>
  </lg-filter-multiple-group>
</form>
`;

@Component({
  selector: 'lg-reactive-form',
  template: formTemplate,
  standalone: true,
  imports: [
    LgCheckboxGroupComponent,
    LgHintComponent,
    LgToggleComponent,
    ReactiveFormsModule,
  ],
})
class ReactiveFormComponent {
  @Input() label: string;
  @Input() hint: string;
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
  @Output() checkboxBlur: EventEmitter<Event> = new EventEmitter();

  form: UntypedFormGroup;

  constructor(
    public fb: UntypedFormBuilder,
    private registry: LgIconRegistry,
  ) {
    this.form = this.fb.group({ colors: this.fb.control([ 'red' ]) });
    this.form.valueChanges.subscribe(val => this.checkboxChange.emit(val));
    this.registry.registerIcons([ lgIconAdd, lgIconCheckmark ]);
  }
}

export default {
  title: 'Components/Filter buttons/Examples',
  component: LgCheckboxGroupComponent,
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
    checkboxChange: {
      action: 'Checkbox change',
      table: {
        disable: true,
      },
    },
    checkboxBlur: {
      action: 'Checkbox blur',
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

const filterMultiple: StoryFn<LgCheckboxGroupComponent> = (
  args: LgCheckboxGroupComponent,
) => ({
  props: args,
  template: `
  <lg-reactive-form
    [disabled]="disabled"
    [focus]="focus"
    [label]="label"
    [hint]="hint"
    (checkboxChange)="checkboxChange($event)"
    (checkboxBlur)="checkboxBlur($event)">
  </lg-reactive-form>
  `,
});

export const filterMultipleButtons = filterMultiple.bind({});
filterMultipleButtons.storyName = 'Select multiple';

filterMultipleButtons.args = {
  label: 'Select colors',
  hint: 'Please select all colours that apply',
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
