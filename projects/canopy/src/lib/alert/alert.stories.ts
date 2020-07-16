import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import { LgAlertModule } from '../alert/alert.module';
import { notes } from './alert.notes';

export default {
  title: 'Components/Alert',
  parameters: {
    decorators: [
      withKnobs,
      moduleMetadata({
        imports: [LgAlertModule],
      }),
    ],
    'in-dsm': {
      id: '5ec504bc07ffe609bec12b76',
    },
    notes: {
      markdown: notes,
    },
  },
};

export const standard = () => ({
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
      'generic',
    ),
  },
});
