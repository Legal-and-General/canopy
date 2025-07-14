import { Meta, moduleMetadata } from '@storybook/angular';

import { LgSrAlertMessageDirective } from '../sr-alert-message.directive';

// This default export determines where your story goes in the story list
export default {
  title: 'Helpers/Directives/Screen reader alert message/Examples',
  component: LgSrAlertMessageDirective,
  decorators: [
    moduleMetadata({
      imports: [ LgSrAlertMessageDirective ],
    }),
  ],
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

export const srAlertMessageStory = {
  name: 'Screen reader alert message',
  render: (args: LgSrAlertMessageDirective) => ({
    props: args,
    template: `
      <p>The HTML element the directive is applied on is automatically visually hidden. Turn on the screen reader to listen to the message.</p>
      ${template}
    `,
  }),
  args: {
    lgSrAlertMessage: false,
    timer: 8000,
  },
  parameters: {
    docs: {
      source: {
        code: template,
      },
    },
  },
};
