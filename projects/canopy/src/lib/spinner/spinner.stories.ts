import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { LgSpinnerComponent } from './spinner.component';
import { notes } from './spinner.notes';
import { LgSpinnerModule } from './spinner.module';

const variantTypes = ['dark', 'light', 'color', 'inherit'];
const sizes = ['sm', 'md'];

// This default export determines where your story goes in the story list
export default {
  title: 'Components/Spinner',
  component: LgSpinnerComponent,
  decorators: [
    moduleMetadata({
      imports: [LgSpinnerModule],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: notes,
      },
    },
  },
  argTypes: {
    text: {
      description: 'The text to show under the spinner.',
    },
    variant: {
      options: variantTypes,
      description:
        "Applies colour treatment and ARIA role if applicable. If the ``variant`` is set to  ``'inherit'``, then it will inherit the font colour of its parent element. This is used on the loading button, where the spinner inherits the font colour of the button.",
      table: {
        type: {
          summary: variantTypes,
        },
        defaultValue: {
          summary: 'dark',
        },
      },
      control: {
        type: 'select',
      },
    },
    size: {
      options: sizes,
      description: 'The size of the spinner.',
      table: {
        type: {
          summary: sizes,
        },
        defaultValue: {
          summary: 'md',
        },
      },
      control: {
        type: 'select',
      },
    },
    class: {
      table: {
        disable: true,
      },
    },
    readScreenReaderAlert: {
      table: {
        disable: true,
      },
    },
    ngOnInit: {
      table: {
        disable: true,
      },
    },
    ngOnDestroy: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const template = `
<lg-spinner [size]="size" [variant]="variant" [text]="text ? text : null"></lg-spinner>
`;

const alertTemplate: Story<LgSpinnerComponent> = (args: LgSpinnerComponent) => ({
  props: args,
  template,
});

export const standardAlert = alertTemplate.bind({});
standardAlert.storyName = 'Standard';
standardAlert.args = {
  text: 'Please wait while we load your data.',
  variant: 'generic',
  size: 'md',
};
standardAlert.parameters = {
  docs: {
    source: {
      code: `
# Display a spinner while loading
<lg-spinner *ngIf="!loaded" [size]="size" [variant]="variant" [text]="text ? text : null"></lg-spinner>

# Tell screen reader to read a message when loading is finished
<p [lgSrAlertMessage]="loaded">Loading complete</p>
      `,
    },
  },
};
