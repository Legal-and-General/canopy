import { boolean, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';

import { notes } from './sr-alert-message.notes';
import { LgSrAlertMessageDirective } from './sr-alert-message.directive';

const stories = storiesOf('Directives', module);

stories.addDecorator(withKnobs);

stories.add(
  'Screen reader alert message',
  () => ({
    moduleMetadata: {
      declarations: [LgSrAlertMessageDirective],
    },
    template: `
        <p [lgSrAlertMessage]="read">Loading complete</p>
      `,
    props: {
      read: boolean('read message', false),
    },
  }),
  {
    notes: {
      markdown: notes,
    },
  },
);
