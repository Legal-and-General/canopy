import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { LgHeadingModule } from '../heading';

import { LgHeadingComponent } from './heading.component';
import { notes } from './heading.notes';

export default {
  title: 'Components/Heading',
  component: LgHeadingComponent,
  decorators: [
    moduleMetadata({
      imports: [ LgHeadingModule ],
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
    content: {
      description: 'The projected content.',
    },
    level: {
      options: [ '1', '2', '3', '4', '5', '6' ],
      description: 'The level of the details heading.',
      table: {
        type: {
          summary: [ '1', '2', '3', '4', '5', '6' ],
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

const detailsTemplate: Story<LgHeadingComponent> = (args: LgHeadingComponent) => ({
  props: args,
  template,
});

export const standardHeading = detailsTemplate.bind({});
standardHeading.storyName = 'Heading';

standardHeading.args = {
  content: 'Heading',
  level: 1,
};

standardHeading.parameters = {
  docs: {
    source: {
      code: template,
    },
  },
};
