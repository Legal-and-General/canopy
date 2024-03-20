import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';

import { LgFocusDirective } from '../focus.directive';

export default {
  title: 'Helpers/Directives/Focus/Examples',
  component: LgFocusDirective,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
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
  <button lg-button variant="primary-dark" [lgFocus]="lgFocus">Focus directive example</button>
`;

const focusTemplate: StoryFn<LgFocusDirective> = (args: LgFocusDirective) => ({
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
