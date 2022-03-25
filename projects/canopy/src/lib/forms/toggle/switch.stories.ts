import { ReactiveFormsModule } from '@angular/forms';

import { moduleMetadata, Story } from '@storybook/angular';

import { LgToggleModule } from './toggle.module';
import { notes } from './toggle.notes';
import {
  createToggleStory,
  ReactiveToggleFormComponent,
  setupToggleStoryValues,
} from './toggle.stories.common';
import { LgToggleComponent } from './toggle.component';

export default {
  title: 'Components/Form/Switch',
  component: LgToggleComponent,
  decorators: [
    moduleMetadata({
      declarations: [ReactiveToggleFormComponent],
      imports: [ReactiveFormsModule, LgToggleModule],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: notes('Switch'),
      },
    },
  },
  argTypes: {
    id: {
      description: 'HTML ID attribute, auto generated if not provided.',
      control: false,
      table: {
        defaultValue: {
          summary: 'lg-toggle-${nextUniqueId++}',
        },
        type: {
          summary: 'string',
        },
      },
    },
    name: {
      description: 'Set the name value for the input, auto-generated if not provided.',
      control: false,
      table: {
        defaultValue: {
          summary: 'lg-toggle-${nextUniqueId++}',
        },
        type: {
          summary: 'string',
        },
      },
    },
    value: {
      description:
        'Set the default value of the input, must match the value of the switch.',
      control: false,
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    focus: {
      description: 'Set the focus on the switch.',
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
      description: 'Set the switch to disabled.',
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
      description: 'Event emitted on blur of a switch.',
      control: {
        disable: true,
      },
    },
  },
};

const switchStory: Story<LgToggleModule> = (args: LgToggleModule) =>
  createToggleStory(args, 'switch');

const code = `
<lg-switch
  formControlName="umbrella"
  [value]="true"
  [checked]="umbrella.value"
  [focus]="focus"
  (blur)="toggleBlur.emit($event)"
>
  {{ label }}
</lg-switch>
`;

export const switchObj = switchStory.bind({});
switchObj.storyName = 'Switch';
setupToggleStoryValues(switchObj, code);
switchObj.args = {
  ...switchObj.args,
  variant: 'switch',
};
