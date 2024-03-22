import { ReactiveFormsModule } from '@angular/forms';
import { moduleMetadata, StoryFn } from '@storybook/angular';

import { LgToggleComponent } from '../../toggle.component';
import {
  createToggleStory,
  ReactiveToggleFormComponent,
  setupToggleStoryValues,
} from '../toggle.stories.common';

export default {
  title: 'Components/Forms/Checkbox/Examples',
  component: LgToggleComponent,
  decorators: [
    moduleMetadata({
      imports: [ ReactiveFormsModule, ReactiveToggleFormComponent ],
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
      description: 'Set the focus on the checkbox.',
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
      description: 'Set the checkbox to disabled.',
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
    variant: {
      description:
        'If using the `lg-toggle` selector use the `variant` input as per example above.',
      control: {
        disable: true,
      },
    },
    class: {
      table: {
        disable: true,
      },
    },
    toggleBlur: {
      action: 'blur',
      table: {
        disable: true,
      },
    },
    toggleChange: {
      action: 'change',
      table: {
        disable: true,
      },
    },
    hint: {
      table: {
        disable: true,
      },
    },
    control: {
      table: {
        disable: true,
      },
    },
    inline: {
      table: {
        disable: true,
      },
    },
    selectorVariant: {
      table: {
        disable: true,
      },
    },
    uniqueId: {
      table: {
        disable: true,
      },
    },
    _disabled: {
      table: {
        disable: true,
      },
    },
    _validationElement: {
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
    onChange: {
      table: {
        disable: true,
      },
    },
    onCheck: {
      table: {
        disable: true,
      },
    },
    onTouched: {
      table: {
        disable: true,
      },
    },
    inputRef: {
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
    blur: {
      table: {
        disable: true,
      },
    },
  },
};

const checkboxStory: StoryFn<LgToggleComponent> = (args: LgToggleComponent) =>
  createToggleStory(args, 'checkbox');

const code = `
<lg-checkbox
  formControlName="umbrella"
  [value]="true"
  [size]="sm"
  [checked]="umbrella.value"
  [focus]="focus"
  (blur)="toggleBlur.emit($event)"
>
  {{ label }}
</lg-checkbox>
`;

export const checkbox = checkboxStory.bind({});
checkbox.storyName = 'Checkbox';
setupToggleStoryValues(checkbox, code);

checkbox.args = {
  ...checkbox.args,
  variant: 'checkbox',
};
