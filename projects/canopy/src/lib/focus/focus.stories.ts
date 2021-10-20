import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { LgFocusDirective } from './focus.directive';
import { notes } from './focus.notes';
import { LgFocusModule } from './focus.module';
import { LgButtonModule } from '../button';

export default {
  title: 'Directives/Focus',
  component: LgFocusDirective,
  decorators: [
    moduleMetadata({
      imports: [LgFocusModule, LgButtonModule],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: notes,
      },
    },
  },
  argTypes: {
    lgFocus: {
      description: 'Whether the the element should have focus.',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: true,
        },
      },
    },
    ngOnChanges: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const template = `
  <button lg-button variant="solid-primary" [lgFocus]="lgFocus">Focus directive example</button>
`;

const focusTemplate: Story<LgFocusDirective> = (args: LgFocusDirective) => ({
  component: LgFocusDirective,
  props: args,
  template,
});

export const focus = focusTemplate.bind({});
focus.storyName = 'Focus';
focus.args = {
  lgFocus: false,
};
focus.parameters = {
  docs: {
    source: {
      code: template,
    },
  },
};
