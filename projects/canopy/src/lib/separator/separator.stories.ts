import { moduleMetadata } from '@storybook/angular';

import { LgSeparatorComponent } from '../separator/separator.component';
import { notes } from './separator.notes';

export default {
  title: 'Components/Separator',
  parameters: {
    decorators: [
      moduleMetadata({
        declarations: [LgSeparatorComponent],
      }),
    ],
    'in-dsm': {
      id: '5ec502c64b3101d78189aeef',
    },
    notes: {
      markdown: notes,
    },
  },
};

export const standard = () => ({
  template: `
    <lg-separator></lg-separator>

    <lg-separator variant='dotted'></lg-separator>
  `,
});
