import { Meta, moduleMetadata } from '@storybook/angular';

import { LgMarginDirective } from '../margin.directive';
import { LgCardComponent, LgCardContentComponent } from '../../../card';

const spaces = [ 'undefined', 'none', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10' ];

const standardCategory = 'Standard';

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
    marginHorizontal: {
      options: spaces,
      table: {
        category: standardCategory,
      },
      control: {
        type: 'select',
      },
    },
    marginVertical: {
      options: spaces,
      table: {
        category: standardCategory,
      },
      control: {
        type: 'select',
      },
    },
    marginNoneAt: {
      name: 'marginNoneAt (all sides)',
      options: [ 'undefined', 'sm', 'md', 'lg', 'xl', 'xxl' ],
      table: {
        category: 'None at breakpoint',
      },
      control: {
        type: 'select',
      },
    },
    marginHorizontalNoneAt: {
      options: [ 'undefined', 'sm', 'md', 'lg', 'xl', 'xxl' ],
      table: {
        category: 'None at breakpoint',
      },
      control: {
        type: 'select',
      },
    },
    marginVerticalNoneAt: {
      options: [ 'undefined', 'sm', 'md', 'lg', 'xl', 'xxl' ],
      table: {
        category: 'None at breakpoint',
      },
      control: {
        type: 'select',
      },
    },
    marginTopNoneAt: {
      options: [ 'undefined', 'sm', 'md', 'lg', 'xl', 'xxl' ],
      table: {
        category: 'None at breakpoint',
      },
      control: {
        type: 'select',
      },
    },
    marginRightNoneAt: {
      options: [ 'undefined', 'sm', 'md', 'lg', 'xl', 'xxl' ],
      table: {
        category: 'None at breakpoint',
      },
      control: {
        type: 'select',
      },
    },
    marginBottomNoneAt: {
      options: [ 'undefined', 'sm', 'md', 'lg', 'xl', 'xxl' ],
      table: {
        category: 'None at breakpoint',
      },
      control: {
        type: 'select',
      },
    },
    marginLeftNoneAt: {
      options: [ 'undefined', 'sm', 'md', 'lg', 'xl', 'xxl' ],
      table: {
        category: 'None at breakpoint',
      },
      control: {
        type: 'select',
      },
    },
    // Hide responsive controls
    marginResponsive: {
      table: {
        disable: true,
      },
    },
    marginTopResponsive: {
      table: {
        disable: true,
      },
    },
    marginRightResponsive: {
      table: {
        disable: true,
      },
    },
    marginBottomResponsive: {
      table: {
        disable: true,
      },
    },
    marginLeftResponsive: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

export const Margin = {
  name: 'Margin',
  render: (args: LgMarginDirective) => ({
    props: args,
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <lg-card
          [lgMargin]="margin"
          [lgMarginTop]="marginTop !== 'undefined' ? marginTop : null"
          [lgMarginRight]="marginRight !== 'undefined' ? marginRight : null"
          [lgMarginBottom]="marginBottom !== 'undefined' ? marginBottom : null"
          [lgMarginLeft]="marginLeft !== 'undefined' ? marginLeft : null"
          [lgMarginHorizontal]="marginHorizontal !== 'undefined' ? marginHorizontal : null"
          [lgMarginVertical]="marginVertical !== 'undefined' ? marginVertical : null">
            <lg-card-content>
              <strong>Spacing variant</strong> applied using directive
              @if (margin) {
                <div><code>lgMargin="{{margin}}"</code></div>
              }
              @if (marginTop !== 'undefined') {
                <div><code>lgMarginTop="{{marginTop}}"</code></div>
              }
              @if (marginRight !== 'undefined') {
                <div><code>lgMarginRight="{{marginRight}}"</code></div>
              }
              @if (marginBottom !== 'undefined') {
                <div><code>lgMarginBottom="{{marginBottom}}"</code></div>
              }
              @if (marginLeft !== 'undefined') {
                <div><code>lgMarginLeft="{{marginLeft}}"</code></div>
              }
              @if (marginHorizontal !== 'undefined') {
                <div><code>lgMarginHorizontal="{{marginHorizontal}}"</code></div>
              }
              @if (marginVertical !== 'undefined') {
                <div><code>lgMarginVertical="{{marginVertical}}"</code></div>
              }
            </lg-card-content>
        </lg-card>

        <lg-card
          [lgMargin]="margin"
          [lgMarginNoneAt]="marginNoneAt !== 'undefined' ? marginNoneAt : null"
          [lgMarginHorizontal]="marginHorizontal !== 'undefined' ? marginHorizontal : null"
          [lgMarginHorizontalNoneAt]="marginHorizontalNoneAt !== 'undefined' ? marginHorizontalNoneAt : null"
          [lgMarginVertical]="marginVertical !== 'undefined' ? marginVertical : null"
          [lgMarginVerticalNoneAt]="marginVerticalNoneAt !== 'undefined' ? marginVerticalNoneAt : null"
          [lgMarginTop]="marginTop !== 'undefined' ? marginTop : null"
          [lgMarginTopNoneAt]="marginTopNoneAt !== 'undefined' ? marginTopNoneAt : null"
          [lgMarginRight]="marginRight !== 'undefined' ? marginRight : null"
          [lgMarginRightNoneAt]="marginRightNoneAt !== 'undefined' ? marginRightNoneAt : null"
          [lgMarginBottom]="marginBottom !== 'undefined' ? marginBottom : null"
          [lgMarginBottomNoneAt]="marginBottomNoneAt !== 'undefined' ? marginBottomNoneAt : null"
          [lgMarginLeft]="marginLeft !== 'undefined' ? marginLeft : null"
          [lgMarginLeftNoneAt]="marginLeftNoneAt !== 'undefined' ? marginLeftNoneAt : null">
            <lg-card-content>
              <strong>None at breakpoint</strong><br />
              Set margin to none (0) at specific breakpoints. Resize your browser to see the effect.
              @if (margin && marginNoneAt !== 'undefined') {
                <div><code>lgMargin="{{margin}}" lgMarginNoneAt="{{marginNoneAt}}"</code> - All sides set to none at {{marginNoneAt}}</div>
              }
              @if (marginHorizontal !== 'undefined' && marginHorizontalNoneAt !== 'undefined') {
                <div><code>lgMarginHorizontal="{{marginHorizontal}}" lgMarginHorizontalNoneAt="{{marginHorizontalNoneAt}}"</code> - Left & right set to none at {{marginHorizontalNoneAt}}</div>
              }
              @if (marginVertical !== 'undefined' && marginVerticalNoneAt !== 'undefined') {
                <div><code>lgMarginVertical="{{marginVertical}}" lgMarginVerticalNoneAt="{{marginVerticalNoneAt}}"</code> - Top & bottom set to none at {{marginVerticalNoneAt}}</div>
              }
              @if (marginTop !== 'undefined' && marginTopNoneAt !== 'undefined') {
                <div><code>lgMarginTop="{{marginTop}}" lgMarginTopNoneAt="{{marginTopNoneAt}}"</code> - Top set to none at {{marginTopNoneAt}}</div>
              }
              @if (marginRight !== 'undefined' && marginRightNoneAt !== 'undefined') {
                <div><code>lgMarginRight="{{marginRight}}" lgMarginRightNoneAt="{{marginRightNoneAt}}"</code> - Right set to none at {{marginRightNoneAt}}</div>
              }
              @if (marginBottom !== 'undefined' && marginBottomNoneAt !== 'undefined') {
                <div><code>lgMarginBottom="{{marginBottom}}" lgMarginBottomNoneAt="{{marginBottomNoneAt}}"</code> - Bottom set to none at {{marginBottomNoneAt}}</div>
              }
              @if (marginLeft !== 'undefined' && marginLeftNoneAt !== 'undefined') {
                <div><code>lgMarginLeft="{{marginLeft}}" lgMarginLeftNoneAt="{{marginLeftNoneAt}}"</code> - Left set to none at {{marginLeftNoneAt}}</div>
              }
            </lg-card-content>
        </lg-card>

        <lg-card>
          <lg-card-content>
            <strong>Reference card (no margin applied)</strong>
          </lg-card-content>
        </lg-card>
      </div>
    `,
  }),
  args: {
    margin: '5',
    marginTop: 'undefined',
    marginRight: 'undefined',
    marginBottom: 'undefined',
    marginLeft: 'undefined',
    marginHorizontal: '6',
    marginVertical: '7',

    marginNoneAt: 'lg',
    marginHorizontalNoneAt: 'undefined',
    marginVerticalNoneAt: 'undefined',
    marginTopNoneAt: 'undefined',
    marginRightNoneAt: 'undefined',
    marginBottomNoneAt: 'undefined',
    marginLeftNoneAt: 'undefined',

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
