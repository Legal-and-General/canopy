import { Meta, moduleMetadata } from '@storybook/angular';

import { LgMarginDirective } from '../margin.directive';
import { LgCardComponent, LgCardContentComponent } from '../../../card';

const spaces = [ 'undefined', 'none', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10' ];

const standardCategory = 'Standard';
const responsiveCategory = 'Responsive';

export default {
  title: 'Helpers/Directives/Margin/Examples',
  tags: [ 'pending' ],
  decorators: [
    moduleMetadata({
      imports: [ LgCardComponent, LgCardContentComponent, LgMarginDirective ],
    }),
  ],
  parameters: {
    a11y: {
      // Remove a11y checks for margin directive as unnecessary
      // and flagging false positives
      disable: true,
    },
  },
  globals: {
    backgrounds: { value: 'breezy-blue' },
  },
  argTypes: {
    margin: {
      options: spaces,
      table: {
        category: standardCategory,
      },
      control: {
        type: 'select',
      },
    },
    marginTop: {
      options: spaces,
      table: {
        category: standardCategory,
      },
      control: {
        type: 'select',
      },
    },
    marginRight: {
      options: spaces,
      table: {
        category: standardCategory,
      },
      control: {
        type: 'select',
      },
    },
    marginBottom: {
      options: spaces,
      table: {
        category: standardCategory,
      },
      control: {
        type: 'select',
      },
    },
    marginLeft: {
      options: spaces,
      table: {
        category: standardCategory,
      },
      control: {
        type: 'select',
      },
    },
    marginResponsive: {
      name: 'margin',
      table: {
        category: responsiveCategory,
      },
    },
    marginTopResponsive: {
      name: 'marginTop',
      table: {
        category: responsiveCategory,
      },
    },
    marginRightResponsive: {
      name: 'marginRight',
      table: {
        category: responsiveCategory,
      },
    },
    marginBottomResponsive: {
      name: 'marginBottom',
      table: {
        category: responsiveCategory,
      },
    },
    marginLeftResponsive: {
      name: 'marginLeft',
      table: {
        category: responsiveCategory,
      },
    },
  },
} as Meta;

export const Margin = {
  name: 'Margin',
  render: (args: LgMarginDirective) => ({
    props: args,
    template: `
      <lg-card
        [lgMargin]="margin"
        [lgMarginTop]="marginTop !== 'undefined' ? marginTop : null"
        [lgMarginRight]="marginRight !== 'undefined' ? marginRight : null"
        [lgMarginBottom]="marginBottom !== 'undefined' ? marginBottom : null"
        [lgMarginLeft]="marginLeft !== 'undefined' ? marginLeft : null">
          <lg-card-content>
            <strong>Spacing variant</strong> applied using directive
            @if (margin) {
              <div><code>margin: {{margin | json}}</code></div>
            }
            @if (marginTop !== 'undefined') {
              <div><code>marginTop: {{marginTop | json}}</code></div>
            }
            @if (marginRight !== 'undefined') {
              <div><code>marginRight: {{marginRight | json}}</code></div>
            }
            @if (marginBottom !== 'undefined') {
              <div><code>marginBottom: {{marginBottom | json}}</code></div>
            }
            @if (marginLeft !== 'undefined') {
              <div><code>marginLeft: {{marginLeft | json}}</code></div>
            }
          </lg-card-content>
      </lg-card>
      <lg-card><lg-card-content>Card without directive applied</lg-card-content></lg-card>
    `,
  }),
  args: {
    margin: '5',
    marginTop: 'undefined',
    marginRight: 'undefined',
    marginBottom: 'undefined',
    marginLeft: 'undefined',

    marginResponsive: { sm: '4', md: '8' },
    marginTopResponsive: null,
    marginRightResponsive: null,
    marginBottomResponsive: null,
    marginLeftResponsive: null,
  },
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
  },
};
