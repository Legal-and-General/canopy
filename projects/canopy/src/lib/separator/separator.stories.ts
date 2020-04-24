import { storiesOf } from '@storybook/angular';

import { LgSeparatorComponent } from '../separator/separator.component';
import { notes } from './separator.notes';

const stories = storiesOf('Components', module);

stories.add(
  'Separator',
  () => ({
    moduleMetadata: {
      declarations: [LgSeparatorComponent]
    },
    template: `
        <lg-separator></lg-separator>
        `
  }),
  {
    notes: {
      markdown: notes
    }
  }
);
