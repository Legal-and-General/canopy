import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';

import { LgValidationModule } from './validation.module';
import { notes } from './validation.notes';

const stories = storiesOf('Components/Form', module).addDecorator(withKnobs);

stories.add(
  'Validation',
  () => ({
    moduleMetadata: {
      imports: [LgValidationModule]
    },
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
        'error'
      )
    }
  }),
  {
    notes: {
      markdown: notes
    }
  }
);
