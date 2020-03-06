import { storiesOf } from '@storybook/angular';
import { notes } from './utils.notes';

const stories = storiesOf('Utils', module);

stories.add(
  'Utils',
  () => ({
    template: ``
  }),
  {
    notes: { markdown: notes }
  }
);
