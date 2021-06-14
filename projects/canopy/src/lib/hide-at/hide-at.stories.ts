import { select, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import { LgCardModule } from '../card';
import { LgSeparatorModule } from '../separator';
import { LgHideAtModule } from './hide-at.module';
import { notes } from './hide-at.notes';

export default {
  title: 'Directives',
  parameters: {
    decorators: [
      withKnobs,
      moduleMetadata({
        imports: [LgHideAtModule, LgCardModule, LgSeparatorModule],
      }),
    ],
    notes: {
      markdown: notes,
    },
  },
};

export const hideAt = () => ({
  template: `
    <p><strong>Change viewport width to see the card appear at specified breakpoint</strong></p>
    <pre>lgHideAt="{{breakpoint}}"</pre>
    <lg-separator></lg-separator>
    <lg-card [lgHideAt]="breakpoint">
      <lg-card-content>
        Now you see me...
      </lg-card-content>
    </lg-card>
  `,
  props: {
    breakpoint: select('breakpoints', ['sm', 'md', 'lg', 'xl', 'xxl'], 'md'),
  },
});
