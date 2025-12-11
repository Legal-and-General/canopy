import { Meta, moduleMetadata } from '@storybook/angular';

import { LgSpinnerComponent } from '../spinner.component';

const variantTypes = [ 'dark', 'light', 'color', 'inherit' ];
const sizes = [ 'xs', 'sm', 'md' ];

// This default export determines where your story goes in the story list
export default {
  title: 'Components/Spinner/Examples',
  tags: [ 'pending' ],
  component: LgSpinnerComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
  argTypes: {
    text: {
      description: 'The text to show under the spinner.',
    },
    variant: {
      options: variantTypes,
      description: 'The colour variant of the spinner.',
      table: {
        type: {
          summary: 'dark | light | color | inherit',
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
          summary: 'xs | sm | md',
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

export const StandardSpinner = {
  render: (args: LgSpinnerComponent) => ({
    props: args,
    template,
  }),
  args: {
    text: 'Please wait while we load your data.',
    variant: 'generic',
    size: 'md',
  },
  parameters: {
    docs: {
      source: {
        code: `
          # Display a spinner while loading
          @if (!loaded) {
            <lg-spinner [size]="size" [variant]="variant" [text]="text ? text : null"></lg-spinner>
          }

          # Tell screen reader to read a message when loading is finished
          <p [lgSrAlertMessage]="loaded">Loading complete</p>
        `,
      },
    },
    percy: {
      additionalSnapshots: [
        {
          suffix: ' [light]',
          args: { variant: 'light' },
          globals: {
            backgrounds: { value: 'dark' },
          },
        },
        { suffix: ' [colour]', args: { variant: 'color' } },
        { suffix: ' [sm]', args: { size: 'sm' } },
        { suffix: ' [lg]', args: { size: 'lg' } },
      ],
    },
  },
};
