import { select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';
import { LgHeadingComponent } from './heading.component';
import { notes } from './heading.notes';

const stories = storiesOf('Components', module);

stories.addDecorator(withKnobs);

const groupId = 'lg-heading';

stories.add('Heading', () => ({
  moduleMetadata: {
    declarations: [LgHeadingComponent]
  },
  template: `
    <lg-heading
      [level]="level"
      [class]="class">
      {{content}}
    </lg-heading>
  `,
  props: {
    content: text('text', 'Heading', groupId),
    level: select(
      'level',
      [1, 2, 3, 4, 5, 6],
      1,
      groupId
    )
  }
}),{
  notes: { markdown: notes }
});
