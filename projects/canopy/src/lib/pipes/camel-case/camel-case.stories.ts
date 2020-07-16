import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';

import { notes } from './camel-case.notes';
import { LgCamelCasePipe } from './camel-case.pipe';

const stories = storiesOf('Pipes', module);
stories.addDecorator(withKnobs);

stories.add(
  'Camel case',
  () => ({
    moduleMetadata: {
      declarations: [LgCamelCasePipe],
    },
    template: `
      <p>{{text | camelCase}}</p>
    `,
    props: {
      text: text('text', 'camel case me'),
    },
  }),
  {
    notes: { markdown: notes },
  },
);
