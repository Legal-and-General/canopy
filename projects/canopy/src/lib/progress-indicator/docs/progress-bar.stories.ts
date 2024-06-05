import { Meta, StoryFn } from '@storybook/angular';

import { LgProgressBarComponent } from '../progress-bar/progress-bar.component';

const meta: Meta<LgProgressBarComponent> = {
  title: 'Components/ Progress indicator/Examples',
  component: LgProgressBarComponent,
  argTypes: {
    max: {
      description: 'The total count of steps in the progress bar.',
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: {
          summary: 4,
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
          summary: 1,
        },
      },
    },
  },
};

export default meta;

const template = `
  <lg-progress-bar [max]="max" [value]="value"></lg-progress-bar>
`;

const detailsTemplate: StoryFn<LgProgressBarComponent> = (
  args: LgProgressBarComponent,
) => ({
  props: args,
  template,
});

export const progressBar = detailsTemplate.bind({});

progressBar.storyName = 'Progress bar';

progressBar.args = {
  max: 4,
  value: 1,
};

progressBar.parameters = {
  docs: {
    source: {
      code: template,
    },
  },
};
