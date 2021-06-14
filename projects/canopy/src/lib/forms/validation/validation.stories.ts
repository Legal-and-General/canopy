import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import { LgValidationModule } from './validation.module';
import { notes } from './validation.notes';

export default {
  title: 'Components/Form/Validation',
  parameters: {
    decorators: [
      withKnobs,
      moduleMetadata({
        imports: [LgValidationModule],
      }),
    ],
    notes: {
      markdown: notes,
    },
  },
};

export const standard = () => ({
  template: `
    <lg-validation
      [showIcon]="showIcon"
      [variant]="variant">
      {{errorContent}}
    </lg-validation>
  `,
  props: {
    errorContent: text('content', 'Please enter a valid date of birth'),
    showIcon: boolean('show icon', true),
    variant: select(
      'variant',
      ['generic', 'info', 'success', 'warning', 'error'],
      'error',
    ),
  },
});
