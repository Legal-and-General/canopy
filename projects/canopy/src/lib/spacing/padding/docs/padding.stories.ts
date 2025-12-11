import { Meta, moduleMetadata } from '@storybook/angular';

import { LgPaddingDirective } from '../padding.directive';
import { LgCardComponent, LgCardContentComponent } from '../../../card';

const spaces = [ 'undefined', 'none', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10' ];

const standardCategory = 'Standard';
const responsiveCategory = 'Responsive';

export default {
  title: 'Helpers/Directives/Padding/Examples',
  tags: [ 'pending' ],
  decorators: [
    moduleMetadata({
      imports: [ LgCardComponent, LgCardContentComponent, LgPaddingDirective ],
    }),
  ],
  parameters: {
    a11y: {
      // Remove a11y checks for padding directive as unnecessary
      // and flagging false positives
      disable: true,
    },
  },
  globals: {
    backgrounds: { value: 'breezy-blue' },
  },
  argTypes: {
    padding: {
      options: spaces,
      table: {
        category: standardCategory,
      },
      control: {
        type: 'select',
      },
    },
    paddingTop: {
      options: spaces,
      table: {
        category: standardCategory,
      },
      control: {
        type: 'select',
      },
    },
    paddingRight: {
      options: spaces,
      table: {
        category: standardCategory,
      },
      control: {
        type: 'select',
      },
    },
    paddingBottom: {
      options: spaces,
      table: {
        category: standardCategory,
      },
      control: {
        type: 'select',
      },
    },
    paddingLeft: {
      options: spaces,
      table: {
        category: standardCategory,
      },
      control: {
        type: 'select',
      },
    },
    paddingResponsive: {
      name: 'padding',
      table: {
        category: responsiveCategory,
      },
    },
    paddingTopResponsive: {
      name: 'padding',
      table: {
        category: responsiveCategory,
      },
    },
    paddingRightResponsive: {
      name: 'paddingRight',
      table: {
        category: responsiveCategory,
      },
    },
    paddingBottomResponsive: {
      name: 'paddingBottom',
      table: {
        category: responsiveCategory,
      },
    },
    paddingLeftResponsive: {
      name: 'paddingLeft',
      table: {
        category: responsiveCategory,
      },
    },
  },
} as Meta;

export const Padding = {
  name: 'Padding',
  render: (args: LgPaddingDirective) => ({
    props: args,
    template: `
      <lg-card
        [lgPadding]="padding"
        [lgPaddingTop]="paddingTop !== 'undefined' ? paddingTop : null"
        [lgPaddingRight]="paddingRight !== 'undefined' ? paddingRight : null"
        [lgPaddingBottom]="paddingBottom !== 'undefined' ? paddingBottom : null"
        [lgPaddingLeft]="paddingLeft !== 'undefined' ? paddingLeft : null">
          <lg-card-content>
            <strong>Spacing variant</strong> applied using directive
            @if (padding) {
              <div><code>padding: {{padding | json}}</code></div>
            }
            @if (paddingTop !== 'undefined') {
              <div><code>paddingTop: {{paddingTop | json}}</code></div>
            }
            @if (paddingRight !== 'undefined') {
              <div><code>paddingRight: {{paddingRight | json}}</code></div>
            }
            @if (paddingBottom !== 'undefined') {
              <div><code>paddingBottom: {{paddingBottom | json}}</code></div>
            }
            @if (paddingLeft !== 'undefined') {
              <div><code>paddingLeft: {{paddingLeft | json}}</code></div>
            }
          </lg-card-content>
      </lg-card>
      <lg-card><lg-card-content>Card without directive applied</lg-card-content></lg-card>
    `,
  }),
  args: {
    padding: '5',
    paddingTop: 'undefined',
    paddingRight: 'undefined',
    paddingBottom: 'undefined',
    paddingLeft: 'undefined',

    paddingResponsive: { sm: '5', md: '8' },
    paddingTopResponsive: null,
    paddingRightResponsive: null,
    paddingBottomResponsive: null,
    paddingLeftResponsive: null,
  },
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
  },
};
