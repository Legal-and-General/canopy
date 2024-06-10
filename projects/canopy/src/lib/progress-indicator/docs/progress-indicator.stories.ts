import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';

import { LgProgressIndicatorModule } from '../progress-indicator.module';
import { LgProgressIndicatorComponent } from '../progress-indicator.component';

export default {
  title: 'Components/ Progress indicator/Examples/Progress indicator',
  component: LgProgressIndicatorComponent,
  decorators: [
    moduleMetadata({
      imports: [ LgProgressIndicatorModule ],
    }),
  ],
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
    showProgressBar: {
      description: 'Toggle the progress bar.',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: true,
        },
      },
    },
    showAsPercentage: {
      description: 'Toggle the heading.',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: true,
        },
      },
    },
    stepsPrefix: {
      description: 'The prefix for the steps.',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'Step',
        },
      },
    },
  },
} as Meta<LgProgressIndicatorComponent>;

const template = `
<lg-progress-indicator [max]="max" [value]="value" [showAsPercentage]="showAsPercentage" [showProgressBar]="showProgressBar" [stepsPrefix]="stepsPrefix">
  Journey title
  <lg-progress-header>
    Step Heading
  </lg-progress-header>
</lg-progress-indicator>
`;

const progressJourneyStory: StoryFn<LgProgressIndicatorComponent> = (
  args: LgProgressIndicatorComponent,
) => ({
  props: args,
  template,
});

export const progressJourney = progressJourneyStory.bind({});

progressJourney.storyName = 'Progress indicator';

progressJourney.args = {
  max: 5,
  value: 1,
  showAsPercentage: true,
  showProgressBar: true,
  stepsPrefix: 'Step',
};

progressJourney.parameters = {
  docs: {
    source: {
      code: template,
    },
  },
};
