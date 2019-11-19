import { select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';

import { LgAlertComponent } from '../alert/alert.component';
import { notes } from './alert.notes';

const stories = storiesOf('Components', module).addDecorator(withKnobs);

stories
  .addParameters({
    backgrounds: [{ name: 'default', value: '#ffffff', default: true }]
  })
  .add(
    'Alert',
    () => ({
      moduleMetadata: {
        declarations: [LgAlertComponent]
      },
      template: `
      <lg-alert
        [variant]="variant">
        {{alertContent}} Here is some <a href="#">link text</a>.
      </lg-alert>
    `,
      props: {
        alertContent: text('content', 'This is an alert.'),
        variant: select(
          'variant',
          ['generic', 'info', 'success', 'warning', 'error'],
          'generic'
        )
      }
    }),
    {
      notes: {
        markdown: notes
      }
    }
  );
