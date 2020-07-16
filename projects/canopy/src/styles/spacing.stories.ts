import { storiesOf } from '@storybook/angular';

import { notes } from './spacing.notes';

const stories = storiesOf('Spacing', module);

stories.add(
  'Spacing',
  () => ({
    template: ``,
  }),
  {
    notes: { markdown: notes },
  },
);
