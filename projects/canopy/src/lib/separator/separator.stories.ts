import { moduleMetadata } from '@storybook/angular';

import { LgSeparatorComponent } from '../separator/separator.component';
import { notes } from './separator.notes';

export default {
  title: 'Components/Seperator',
  parameters: {
    decorators: [
      moduleMetadata({
        declarations: [LgSeparatorComponent]
      })
    ],
    'in-dsm': {
      id: '5ec4f36b45894b0873022460'
    },
    notes: {
      markdown: notes
    }
  }
};

export const standard = () => ({
  template: `
    <lg-separator></lg-separator>
  `
});
