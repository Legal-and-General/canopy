import { Meta, moduleMetadata } from '@storybook/angular';

import { LgHeadingComponent } from '../heading.component';

export default {
  title: 'Helpers/Components/Heading/Examples',
  component: LgHeadingComponent,
  decorators: [
    moduleMetadata({
      imports: [ LgHeadingComponent ],
    }),
  ],
  argTypes: {
    content: {
      description: 'The projected content.',
    },
    level: {
      options: [ '1', '2', '3', '4', '5', '6' ],
      description: 'The level of the details heading.',
      table: {
        type: {
          summary: '1,2,3,4,5,6',
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
  },
} as Meta;

const template = `
  <lg-heading [level]="level">{{content}}</lg-heading>
`;

export const StandardHeading = {
  name: 'Heading',
  render: (args: LgHeadingComponent) => ({
    props: args,
    template,
  }),
  args: {
    content: 'Heading',
    level: 1,
  },
  parameters: {
    docs: {
      source: {
        code: template,
      },
    },
  },
};
