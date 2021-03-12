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
    notes: {
      markdown: notes,
    },
  },
};

export const standard = () => ({
  template: `
    <lg-spinner [size]="size" [variant]="variant" [text]="text ? text : null"></lg-spinner>
  `,
  props: {
    variant: select('variant', ['dark', 'light', 'color', 'inherit'], 'dark'),
    size: select('size', ['sm', 'md'], 'md'),
    text: text('text', ''),
  },
});
