import { moduleMetadata } from '@storybook/angular';
import { select, withKnobs } from '@storybook/addon-knobs';

import { LgSeparatorComponent } from '../separator/separator.component';
import { notes } from './separator.notes';

export default {
  title: 'Components/Separator',
  parameters: {
    decorators: [
      withKnobs,
      moduleMetadata({
        declarations: [LgSeparatorComponent],
      }),
    ],
    notes: {
      markdown: notes,
    },
  },
};

export const standard = () => ({
  template: `
    <lg-separator [variant]="variant"></lg-separator>
  `,
  props: {
    variant: select('variant', ['solid', 'dotted'], 'solid', ''),
  },
});
