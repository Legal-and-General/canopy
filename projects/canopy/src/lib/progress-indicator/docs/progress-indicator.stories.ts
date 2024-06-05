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
  },
} as Meta<LgProgressIndicatorComponent>;

const template = `
<lg-progress-indicator>
  <lg-progress-journey [max]="max" [value]="value" [showAsPercentage]="showAsPercentage" [showProgressBar]="showProgressBar">
    Journey title
  </lg-progress-journey>
  <lg-progress-bar [max]="max" [value]="value"></lg-progress-bar>
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
};

progressJourney.parameters = {
  docs: {
    source: {
      code: template,
    },
  },
};
