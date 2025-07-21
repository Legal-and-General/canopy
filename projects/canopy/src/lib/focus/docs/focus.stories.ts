import { Meta, moduleMetadata } from '@storybook/angular';

import { LgFocusDirective } from '../focus.directive';
import { LgButtonComponent } from '../../button';

export default {
  title: 'Helpers/Directives/Focus/Examples',
  component: LgFocusDirective,
  decorators: [
    moduleMetadata({
      imports: [ LgButtonComponent, LgFocusDirective ],
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
          summary: 'true',
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

export const Focus = {
  name: 'Focus',
  render: (args: LgFocusDirective) => ({
    component: LgFocusDirective,
    props: args,
    template,
  }),
  args: {
    lgFocus: false,
  },
  parameters: {
    docs: {
      source: {
        code: template,
      },
    },
  },
};
