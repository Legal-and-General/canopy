import { Meta, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';

import { LgColourDirective } from '../../colour/colour.directive';
import { LgContentAreaComponent } from '../../content-area/content-area.component';
import { LgContentAreaContentComponent } from '../../content-area/content-area-content/content-area-content.component';
import { LgProgressBarComponent } from '../progress-bar/progress-bar.component';
import { LgProgressIndicatorComponent } from '../progress-indicator.component';
import { LgProgressHeaderComponent } from '../progress-header/progress-header.component';

export default {
  title: 'Components/Progress indicator/Examples',
  tags: [ 'updated' ],
  component: LgProgressIndicatorComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        LgColourDirective,
        LgContentAreaComponent,
        LgContentAreaContentComponent,
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
    showProgressBar: {
      description: 'Toggle the progress bar.',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'true',
        },
      },
    },
    displayAs: {
      description: 'Either show as percentage or stepper.',
      table: {
        type: {
          summary: 'percentage,step',
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
    journeyTitle: {
      control: 'text',
      description: 'Title for the whole journey, independent of the active step.',
    },
    stepHeading: {
      control: 'text',
      description: 'Heading for the currently active step.',
    },
    colourMode: {
      control: 'select',
      options: [ 'blue', 'green', 'red', 'yellow' ],
      description: 'Colour mode inherited by the progress indicator.',
    },
    colourTheme: {
      control: 'select',
      options: [ 'neutral', 'neutral-inverse', 'bold', 'subtle' ],
      description: 'Colour theme inherited by the progress indicator.',
    },
  },
} as Meta<LgProgressIndicatorComponent>;

const template = `
<lg-content-area [lgColour]="colourMode" [lgColourTheme]="colourTheme">
  <lg-content-area-content>
    <lg-progress-indicator [max]="max" [value]="value" [displayAs]="displayAs" [showProgressBar]="showProgressBar" [stepsPrefix]="stepsPrefix">
      {{ journeyTitle }}
      <lg-progress-header>{{ stepHeading }}</lg-progress-header>
    </lg-progress-indicator>
  </lg-content-area-content>
</lg-content-area>
`;

export const ProgressJourney = {
  name: 'Progress indicator',
  render: (args: LgProgressIndicatorComponent) => ({
    props: args,
    template,
  }),
  args: {
    max: 5,
    value: 1,
    displayAs: 'step',
    showProgressBar: true,
    stepsPrefix: 'Step',
    journeyTitle: 'Application journey',
    stepHeading: 'Your details',
    colourMode: 'blue',
    colourTheme: 'neutral',
  },
  parameters: {
    docs: {
      source: {
        code: template,
      },
    },
  },
};
