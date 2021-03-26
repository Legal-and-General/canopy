import { select, text, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import { LgHeadingComponent } from './heading.component';
import { notes } from './heading.notes';

export default {
  title: 'Components/Heading',
  parameters: {
    decorators: [
      withKnobs,
      moduleMetadata({
        declarations: [LgHeadingComponent],
      }),
    ],
    notes: {
      markdown: notes,
    },
  },
};

const groupId = 'lg-heading';

export const standard = () => ({
  template: `
    <lg-heading
      [level]="level">
      {{content}}
    </lg-heading>
  `,
  props: {
    content: text('text', 'Heading', groupId),
    level: select('level', [1, 2, 3, 4, 5, 6], 1, groupId),
  },
});
