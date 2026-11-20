import { Meta } from '@storybook/angular';

import { LgProgressBarComponent } from '../progress-bar/progress-bar.component';

export default {
  title: 'Components/Progress indicator/Examples',
  tags: [ 'updated' ],
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

export const ProgressBar = {
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

export const Empty = {
  ...ProgressBar,
  name: 'Progress bar - empty',
  args: {
    max: 100,
    value: 0,
  },
};

export const Percentage = {
  ...ProgressBar,
  name: 'Progress bar - percentage',
  args: {
    max: 100,
    value: 50,
  },
};

export const Complete = {
  ...ProgressBar,
  name: 'Progress bar - complete',
  args: {
    max: 100,
    value: 100,
  },
};
