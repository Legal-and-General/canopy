import { select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';

import { LgSpinnerComponent } from './spinner.component';
import { notes } from './spinner.notes';

const stories = storiesOf('Components', module);

stories.addDecorator(withKnobs);

const groupId = 'spinner';

stories
  .addParameters({
    backgrounds: [{ name: 'dark', value: '#333' }]
  })
  .add(
    'Spinner',
    () => ({
      moduleMetadata: {
        declarations: [LgSpinnerComponent]
      },
      template: `
      <lg-spinner [variant]="variant">
      </lg-spinner>
    `,
      props: {
        variant: select(
          'variant',
          ['dark', 'light', 'color', 'inherit'],
          groupId
        )
      }
    }),
    {
      notes: {
        markdown: notes
      }
    }
  );
