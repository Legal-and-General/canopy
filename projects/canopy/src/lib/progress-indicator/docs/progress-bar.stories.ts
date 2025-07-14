import { Meta } from '@storybook/angular';

import { LgProgressBarComponent } from '../progress-bar/progress-bar.component';

export default {
  title: 'Components/Progress indicator/Examples',
  component: LgProgressBarComponent,
  argTypes: {
    max: {
      description: 'The total count of steps in the progress bar.',
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: {
          summary: '4',
        },
      },
    },
    value: {
      description: 'The current count of steps in the progress bar.',
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: {
          summary: '1',
        },
      },
    },
  },
} as Meta<LgProgressBarComponent>;

const template = `
  <lg-progress-bar [max]="max" [value]="value"></lg-progress-bar>
`;

export const progressBar = {
  name: 'Progress bar',
  render: (args: LgProgressBarComponent) => ({
    props: args,
    template,
  }),
  args: {
    max: 4,
    value: 1,
  },
  parameters: {
    docs: {
      source: {
        code: template,
      },
    },
  },
};
