import { storiesOf } from '@storybook/angular';

import { notes } from './mixins.notes';

const stories = storiesOf('Mixins', module);

stories.add(
  'Mixins',
  () => ({
    template: ``,
  }),
  {
    notes: { markdown: notes },
  },
);
