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
    name: {
      description: 'Journey title.',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'journey title',
        },
      },
    },
  },
} as Meta<LgProgressIndicatorComponent>;

const template = `
<lg-progress-indicator [max]="max" [value]="value" [name]="name" [showAsPercentage]="showAsPercentage" [showProgressBar]="showProgressBar">
  Step heading
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
  name: 'Journey Title',
};

progressJourney.parameters = {
  docs: {
    source: {
      code: template,
    },
  },
};
