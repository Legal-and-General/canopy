import { select, text, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import { LgSpinnerComponent } from './spinner.component';
import { notes } from './spinner.notes';

export default {
  title: 'Components/Spinner',
  parameters: {
    decorators: [
      withKnobs,
      moduleMetadata({
        declarations: [LgSpinnerComponent],
      }),
    ],
    'in-dsm': {
      id: '5ec3e4a143bdfa89c1e8b343',
    },
    notes: {
      markdown: notes,
    },
  },
};

export const standard = () => ({
  template: `
    <lg-spinner [variant]="variant" [text]="text ? text : null"></lg-spinner>
  `,
  props: {
    variant: select('variant', ['dark', 'light', 'color', 'inherit'], 'spinner'),
    text: text('text', ''),
  },
});
