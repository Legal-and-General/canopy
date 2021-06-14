import { select, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import { LgCardModule } from '../card';
import { LgSeparatorModule } from '../separator';
import { LgShowAtModule } from './show-at.module';
import { notes } from './show-at.notes';

export default {
  title: 'Directives',
  parameters: {
    decorators: [
      withKnobs,
      moduleMetadata({
        imports: [LgShowAtModule, LgCardModule, LgSeparatorModule],
      }),
    ],
    notes: {
      markdown: notes,
    },
  },
};

export const showAt = () => ({
  template: `
    <p><strong>Change viewport width to see the card appear at specified breakpoint</strong></p>
    <pre>lgShowAt="{{breakpoint}}"</pre>
    <lg-separator></lg-separator>
    <lg-card [lgShowAt]="breakpoint">
      <lg-card-content>
        Now you see me...
      </lg-card-content>
    </lg-card>
  `,
  props: {
    breakpoint: select('breakpoints', ['sm', 'md', 'lg', 'xl', 'xxl'], 'md'),
  },
});
