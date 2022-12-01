import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { moduleMetadata, Story } from '@storybook/angular';

import { LgToggleModule } from '../../toggle/toggle.module';
import { LgHintModule } from '../../hint';
import { LgCheckboxGroupComponent } from '../../checkbox-group/checkbox-group.component';
import { LgCheckboxGroupModule } from '../../checkbox-group/checkbox-group.module';

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

  constructor(public fb: UntypedFormBuilder) {
    this.form = this.fb.group({ colors: this.fb.control([ 'red' ]) });
    this.form.valueChanges.subscribe(val => this.checkboxChange.emit(val));
  }
}

export default {
  title: 'Components/Filter buttons/Examples',
  component: LgCheckboxGroupComponent,
  decorators: [
    moduleMetadata({
      declarations: [ ReactiveFormComponent ],
      imports: [ ReactiveFormsModule, LgCheckboxGroupModule, LgToggleModule, LgHintModule ],
    }),
  ],
  parameters: {
    viewMode: 'story',
    previewTabs: { 'storybook/docs/panel': { hidden: true } },
  },
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

const filterMultiple: Story<LgCheckboxGroupComponent> = (
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
