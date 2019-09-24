import { boolean, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';
import { LgFocusDirective } from './focus.directive';
import { notes } from './focus.notes';

const stories = storiesOf('Directives', module);
stories.addDecorator(withKnobs);

stories.add(
  'Focus directive',
  () => ({
    moduleMetadata: {
      declarations: [LgFocusDirective]
    },
    template: `
      <button [lgFocus]="focus">Focus directive example</button>
    `,
    props: {
      focus: boolean('focus', false, 'lg-focus')
    }
  }),
  {
    notes: { markdown: notes }
  }
);
