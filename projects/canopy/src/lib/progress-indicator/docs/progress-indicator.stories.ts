import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';

import { LgProgressBarComponent } from '../progress-bar/progress-bar.component';
import { LgProgressIndicatorComponent } from '../progress-indicator.component';
import { LgProgressHeaderComponent } from '../progress-header/progress-header.component';

export default {
  title: 'Components/Progress indicator/Examples',
  component: LgProgressIndicatorComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        LgProgressIndicatorComponent,
        LgProgressHeaderComponent,
        LgProgressBarComponent,
      ],
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
    displayAs: {
      description: 'Either show as percentage or stepper.',
      table: {
        type: {
          summary: 'percentage|step',
        },
        defaultValue: {
          summary: 'step',
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
<lg-progress-indicator [max]="max" [value]="value" [displayAs]="displayAs" [showProgressBar]="showProgressBar" [stepsPrefix]="stepsPrefix">
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
  displayAs: 'step',
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
