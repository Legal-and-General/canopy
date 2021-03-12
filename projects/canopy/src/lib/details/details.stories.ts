import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

import { LgHeadingModule } from '../heading';
import { LgDetailsModule } from './details.module';
import { notes } from './details.notes';
import { LgIconModule } from '../icon';

export default {
  title: 'Components/Details',
  parameters: {
    decorators: [
      withKnobs,
      moduleMetadata({
        imports: [LgDetailsModule, LgHeadingModule, LgIconModule],
      }),
    ],
    notes: {
      markdown: notes,
    },
  },
};

export const standard = () => ({
  template: `
    <lg-details
      [isActive]="expand"
      [variant]="variant"
      [showIcon]="showIcon"
      (opened)="toggle('Detail opened')"
      (closed)="toggle('Detail closed')">
      <lg-details-panel-heading [headingLevel]="headingLevel">{{ header }}</lg-details-panel-heading>
      Give us a call on <a href="tel:08001234567">0800 123 4567</a> and we'll be happy to help you change your
      payment details
    </lg-details>
  `,
  props: {
    header: text('Header', 'How do I change my payment details?'),
    expand: boolean('Default expand', false),
    headingLevel: select('headingLevel', [1, 2, 3, 4, 5, 6], 5),
    toggle: action('Details active state change'),
    variant: select(
      'variant',
      ['generic', 'info', 'success', 'warning', 'error'],
      'generic',
    ),
    showIcon: boolean('Show icon (warning, success & error variants only)', true),
  },
});
