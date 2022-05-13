import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { notes } from './sr-alert-message.notes';
import { LgSrAlertMessageDirective } from './sr-alert-message.directive';
import { LgSrAlertMessageModule } from './sr-alert-message.module';

// This default export determines where your story goes in the story list
export default {
  title: 'Directives/Screen reader alert message',
  component: LgSrAlertMessageDirective,
  decorators: [
    moduleMetadata({
      imports: [ LgSrAlertMessageModule ],
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
    lgSrAlertMessage: {
      description: 'Whether the message should be read or not.',
    },
    timer: {
      description:
        'The time (in ms) that needs to pass before the message become hidden to screen readers.',
      table: {
        type: {
          summary: 'number',
        },
        default: 8000,
      },
    },
    class: {
      table: {
        disable: true,
      },
    },
    ngOnDestroy: {
      table: {
        disable: true,
      },
    },
    ngOnInit: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const template = `
<p [lgSrAlertMessage]="lgSrAlertMessage" [timer]="timer">Loading complete</p>
`;

const srAlertMessageTemplate: Story<LgSrAlertMessageDirective> = (
  args: LgSrAlertMessageDirective,
) => ({
  props: args,
  template: `
  <p>The HTML element the directive is applied on is automatically visually hidden. Turn on the screen reader to listen to the message.</p>
  ${template}
  `,
});

export const srAlertMessageStory = srAlertMessageTemplate.bind({});
srAlertMessageStory.storyName = 'Screen reader alert message';

srAlertMessageStory.args = {
  lgSrAlertMessage: false,
  timer: 8000,
};

srAlertMessageStory.parameters = {
  docs: {
    source: {
      code: template,
    },
  },
};
