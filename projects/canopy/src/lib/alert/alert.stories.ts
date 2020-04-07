import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';

import { LgAlertModule } from '../alert/alert.module';
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
        imports: [LgAlertModule]
      },
      template: `
      <lg-alert
        [showIcon]="showIcon"
        [variant]="variant">
        {{alertContent}} Here is some <a href="#"> link text</a>.
      </lg-alert>
    `,
      props: {
        alertContent: text('content', 'This is an alert.'),
        showIcon: boolean('show icon', true),
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
