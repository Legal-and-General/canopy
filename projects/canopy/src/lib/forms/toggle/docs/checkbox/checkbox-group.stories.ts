import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { moduleMetadata, Story } from '@storybook/angular';

import { LgHintModule } from '../../../hint';
import { LgToggleModule } from '../../../toggle';
import { LgCheckboxGroupComponent } from '../../../checkbox-group/checkbox-group.component';
import { LgCheckboxGroupModule } from '../../../checkbox-group/checkbox-group.module';

const formTemplate = `
<form [formGroup]="form">
  <lg-checkbox-group [inline]="inline" [focus]="focus" formControlName="colors">
    {{ label }}
    <lg-hint *ngIf="hint">{{ hint }}</lg-hint>
    <lg-toggle value="red" (blur)="checkboxBlur.emit($event)">Red</lg-toggle>
    <lg-toggle value="yellow" (blur)="checkboxBlur.emit($event)">Yellow</lg-toggle>
  </lg-checkbox-group>
</form>
`;

@Component({
  selector: 'lg-reactive-form',
  template: formTemplate,
})
class ReactiveFormComponent {
  @Input() inline = false;
  @Input() focus = false;
  @Input() label: string;
  @Input() hint: string;
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
    this.form.valueChanges.subscribe((val) => this.checkboxChange.emit(val));
  }
}

export default {
  title: 'Components/Forms/Checkbox/Examples',
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
    inline: {
      description: 'If true, displays the buttons inline rather than stacked.',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: false,
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
      description: 'Set the inner inputs to disabled.',
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

const checkboxGroupStory: Story<LgCheckboxGroupComponent> = (
  args: LgCheckboxGroupComponent,
) => ({
  props: args,
  template: `
    <lg-reactive-form
      [disabled]="disabled"
      [hint]="hint"
      [inline]="inline"
      [focus]="focus"
      [label]="label"
      (checkboxChange)="checkboxChange($event)"
      (checkboxBlur)="checkboxBlur($event)">
    </lg-reactive-form>
  `,
});

export const checkboxGroup = checkboxGroupStory.bind({});
checkboxGroup.storyName = 'Checkbox group';

checkboxGroup.args = {
  inline: false,
  disabled: false,
  focus: false,
  label: 'Color',
  hint: 'Please select all colors that apply',
};

checkboxGroup.parameters = {
  docs: {
    source: {
      code: formTemplate,
    },
  },
};
