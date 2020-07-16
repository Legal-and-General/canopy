import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

import { LgHeadingModule } from '../heading';
import { LgDetailsModule } from './details.module';
import { notes } from './details.notes';

export default {
  title: 'Components/Details',
  parameters: {
    decorators: [
      withKnobs,
      moduleMetadata({
        imports: [LgDetailsModule, LgHeadingModule],
      }),
    ],
    'in-dsm': {
      id: '5ec4df6d527162100490bdcc',
    },
    notes: {
      markdown: notes,
    },
  },
};

export const standard = () => ({
  template: `
    <lg-details
      [isActive]="expand"
      (opened)="toggle('Detail opened')"
      (closed)="toggle('Detail closed')">
      <lg-details-panel-heading [headingLevel]="headingLevel">{{ header }}</lg-details-panel-heading>

      Give us a call on 0800 123 4567 and we'll be happy to help you change your
      payment details
    </lg-details>
  `,
  props: {
    header: text('Header', 'How do I change my payment details?'),
    expand: boolean('Default expand', false),
    headingLevel: select('headingLevel', [1, 2, 3, 4, 5, 6], 5),
    toggle: action('Details active state change'),
  },
});
