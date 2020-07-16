import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';

import { notes } from './kebab-case.notes';
import { LgKebabCasePipe } from './kebab-case.pipe';

const stories = storiesOf('Pipes', module);
stories.addDecorator(withKnobs);

stories.add(
  'Kebab case',
  () => ({
    moduleMetadata: {
      declarations: [LgKebabCasePipe],
    },
    template: `
      <p>{{text | kebabCase}}</p>
    `,
    props: {
      text: text('text', 'kebab case me'),
    },
  }),
  {
    notes: { markdown: notes },
  },
);
