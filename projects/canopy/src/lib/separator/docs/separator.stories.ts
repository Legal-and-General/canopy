import { Meta, moduleMetadata } from '@storybook/angular';

import { LgSeparatorComponent } from '../separator.component';

export default {
  title: 'Components/Separator/Examples',
  component: LgSeparatorComponent,
  decorators: [
    moduleMetadata({
      imports: [ LgSeparatorComponent ],
    }),
  ],
  argTypes: {
    variant: {
      options: [ 'solid', 'dotted' ],
      description: 'The variant of separator.',
      table: {
        type: {
          summary: 'solid | dotted',
        },
        defaultValue: {
          summary: 'solid',
        },
      },
      control: {
        type: 'select',
      },
    },
    hasRole: {
      description: 'If true, adds a role of ``separator`` to the component.',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'false',
        },
      },
    },
    class: {
      table: {
        disable: true,
      },
    },
    hostElement: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const template = `
  <lg-separator [variant]="variant" [hasRole]="hasRole"></lg-separator>
`;

export const StandardSeparator = {
  name: 'Standard',
  render: (args: LgSeparatorComponent) => ({
    props: args,
    template,
  }),
  args: {
    variant: 'solid',
    hasRole: false,
  },
  parameters: {
    docs: {
      source: {
        code: template,
      },
    },
  },
};
