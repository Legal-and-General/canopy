import { moduleMetadata } from '@storybook/angular';

import { LgCardModule } from '../card';
import { LgShadowModule } from './shadow.module';
import { notes } from './shadow.notes';

export default {
  title: 'Directives',
  parameters: {
    decorators: [
      moduleMetadata({
        imports: [LgShadowModule, LgCardModule],
      }),
    ],
    backgrounds: [{ name: 'default', value: '#FAF5F7', default: true }],
    notes: {
      markdown: notes,
    },
  },
};

export const shadow = () => ({
  template: `
    <lg-card lgShadow>
      <lg-card-content>
        Look, I have a shadow
      </lg-card-content>
    </lg-card>
  `,
});
