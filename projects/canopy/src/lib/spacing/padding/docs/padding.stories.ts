import { Meta, moduleMetadata } from '@storybook/angular';

import { LgPaddingDirective } from '../padding.directive';
import { LgCardComponent, LgCardContentComponent } from '../../../card';

const spaces = [ 'undefined', 'none', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10' ];

const standardCategory = 'Standard';

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
    paddingHorizontal: {
      options: spaces,
      table: {
        category: standardCategory,
      },
      control: {
        type: 'select',
      },
    },
    paddingVertical: {
      options: spaces,
      table: {
        category: standardCategory,
      },
      control: {
        type: 'select',
      },
    },
    paddingNoneAt: {
      name: 'paddingNoneAt (all sides)',
      options: [ 'undefined', 'sm', 'md', 'lg', 'xl', 'xxl' ],
      table: {
        category: 'None at breakpoint',
      },
      control: {
        type: 'select',
      },
    },
    paddingHorizontalNoneAt: {
      options: [ 'undefined', 'sm', 'md', 'lg', 'xl', 'xxl' ],
      table: {
        category: 'None at breakpoint',
      },
      control: {
        type: 'select',
      },
    },
    paddingVerticalNoneAt: {
      options: [ 'undefined', 'sm', 'md', 'lg', 'xl', 'xxl' ],
      table: {
        category: 'None at breakpoint',
      },
      control: {
        type: 'select',
      },
    },
    paddingTopNoneAt: {
      options: [ 'undefined', 'sm', 'md', 'lg', 'xl', 'xxl' ],
      table: {
        category: 'None at breakpoint',
      },
      control: {
        type: 'select',
      },
    },
    paddingRightNoneAt: {
      options: [ 'undefined', 'sm', 'md', 'lg', 'xl', 'xxl' ],
      table: {
        category: 'None at breakpoint',
      },
      control: {
        type: 'select',
      },
    },
    paddingBottomNoneAt: {
      options: [ 'undefined', 'sm', 'md', 'lg', 'xl', 'xxl' ],
      table: {
        category: 'None at breakpoint',
      },
      control: {
        type: 'select',
      },
    },
    paddingLeftNoneAt: {
      options: [ 'undefined', 'sm', 'md', 'lg', 'xl', 'xxl' ],
      table: {
        category: 'None at breakpoint',
      },
      control: {
        type: 'select',
      },
    },
    // Hide responsive controls
    paddingResponsive: {
      table: {
        disable: true,
      },
    },
    paddingTopResponsive: {
      table: {
        disable: true,
      },
    },
    paddingRightResponsive: {
      table: {
        disable: true,
      },
    },
    paddingBottomResponsive: {
      table: {
        disable: true,
      },
    },
    paddingLeftResponsive: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

export const Padding = {
  name: 'Padding',
  render: (args: LgPaddingDirective) => ({
    props: args,
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <lg-card
          [lgPadding]="padding"
          [lgPaddingTop]="paddingTop !== 'undefined' ? paddingTop : null"
          [lgPaddingRight]="paddingRight !== 'undefined' ? paddingRight : null"
          [lgPaddingBottom]="paddingBottom !== 'undefined' ? paddingBottom : null"
          [lgPaddingLeft]="paddingLeft !== 'undefined' ? paddingLeft : null"
          [lgPaddingHorizontal]="paddingHorizontal !== 'undefined' ? paddingHorizontal : null"
          [lgPaddingVertical]="paddingVertical !== 'undefined' ? paddingVertical : null">
            <lg-card-content>
              <strong>Spacing variant</strong> applied using directive
              @if (padding) {
                <div><code>lgPadding="{{padding}}"</code></div>
              }
              @if (paddingTop !== 'undefined') {
                <div><code>lgPaddingTop="{{paddingTop}}"</code></div>
              }
              @if (paddingRight !== 'undefined') {
                <div><code>lgPaddingRight="{{paddingRight}}"</code></div>
              }
              @if (paddingBottom !== 'undefined') {
                <div><code>lgPaddingBottom="{{paddingBottom}}"</code></div>
              }
              @if (paddingLeft !== 'undefined') {
                <div><code>lgPaddingLeft="{{paddingLeft}}"</code></div>
              }
              @if (paddingHorizontal !== 'undefined') {
                <div><code>lgPaddingHorizontal="{{paddingHorizontal}}"</code></div>
              }
              @if (paddingVertical !== 'undefined') {
                <div><code>lgPaddingVertical="{{paddingVertical}}"</code></div>
              }
            </lg-card-content>
        </lg-card>

        <lg-card
          [lgPadding]="padding"
          [lgPaddingNoneAt]="paddingNoneAt !== 'undefined' ? paddingNoneAt : null"
          [lgPaddingHorizontal]="paddingHorizontal !== 'undefined' ? paddingHorizontal : null"
          [lgPaddingHorizontalNoneAt]="paddingHorizontalNoneAt !== 'undefined' ? paddingHorizontalNoneAt : null"
          [lgPaddingVertical]="paddingVertical !== 'undefined' ? paddingVertical : null"
          [lgPaddingVerticalNoneAt]="paddingVerticalNoneAt !== 'undefined' ? paddingVerticalNoneAt : null"
          [lgPaddingTop]="paddingTop !== 'undefined' ? paddingTop : null"
          [lgPaddingTopNoneAt]="paddingTopNoneAt !== 'undefined' ? paddingTopNoneAt : null"
          [lgPaddingRight]="paddingRight !== 'undefined' ? paddingRight : null"
          [lgPaddingRightNoneAt]="paddingRightNoneAt !== 'undefined' ? paddingRightNoneAt : null"
          [lgPaddingBottom]="paddingBottom !== 'undefined' ? paddingBottom : null"
          [lgPaddingBottomNoneAt]="paddingBottomNoneAt !== 'undefined' ? paddingBottomNoneAt : null"
          [lgPaddingLeft]="paddingLeft !== 'undefined' ? paddingLeft : null"
          [lgPaddingLeftNoneAt]="paddingLeftNoneAt !== 'undefined' ? paddingLeftNoneAt : null">
            <lg-card-content>
              <strong>None at breakpoint</strong><br />
              Set padding to none (0) at specific breakpoints. Resize your browser to see the effect.
              @if (padding && paddingNoneAt !== 'undefined') {
                <div><code>lgPadding="{{padding}}" lgPaddingNoneAt="{{paddingNoneAt}}"</code> - All sides set to none at {{paddingNoneAt}}</div>
              }
              @if (paddingHorizontal !== 'undefined' && paddingHorizontalNoneAt !== 'undefined') {
                <div><code>lgPaddingHorizontal="{{paddingHorizontal}}" lgPaddingHorizontalNoneAt="{{paddingHorizontalNoneAt}}"</code> - Left & right set to none at {{paddingHorizontalNoneAt}}</div>
              }
              @if (paddingVertical !== 'undefined' && paddingVerticalNoneAt !== 'undefined') {
                <div><code>lgPaddingVertical="{{paddingVertical}}" lgPaddingVerticalNoneAt="{{paddingVerticalNoneAt}}"</code> - Top & bottom set to none at {{paddingVerticalNoneAt}}</div>
              }
              @if (paddingTop !== 'undefined' && paddingTopNoneAt !== 'undefined') {
                <div><code>lgPaddingTop="{{paddingTop}}" lgPaddingTopNoneAt="{{paddingTopNoneAt}}"</code> - Top set to none at {{paddingTopNoneAt}}</div>
              }
              @if (paddingRight !== 'undefined' && paddingRightNoneAt !== 'undefined') {
                <div><code>lgPaddingRight="{{paddingRight}}" lgPaddingRightNoneAt="{{paddingRightNoneAt}}"</code> - Right set to none at {{paddingRightNoneAt}}</div>
              }
              @if (paddingBottom !== 'undefined' && paddingBottomNoneAt !== 'undefined') {
                <div><code>lgPaddingBottom="{{paddingBottom}}" lgPaddingBottomNoneAt="{{paddingBottomNoneAt}}"</code> - Bottom set to none at {{paddingBottomNoneAt}}</div>
              }
              @if (paddingLeft !== 'undefined' && paddingLeftNoneAt !== 'undefined') {
                <div><code>lgPaddingLeft="{{paddingLeft}}" lgPaddingLeftNoneAt="{{paddingLeftNoneAt}}"</code> - Left set to none at {{paddingLeftNoneAt}}</div>
              }
            </lg-card-content>
        </lg-card>

        <lg-card>
          <lg-card-content>
            <strong>Reference card (no padding applied)</strong>
          </lg-card-content>
        </lg-card>
      </div>
    `,
  }),
  args: {
    padding: '5',
    paddingTop: 'undefined',
    paddingRight: 'undefined',
    paddingBottom: 'undefined',
    paddingLeft: 'undefined',
    paddingHorizontal: '6',
    paddingVertical: '7',

    paddingNoneAt: 'lg',
    paddingHorizontalNoneAt: 'undefined',
    paddingVerticalNoneAt: 'undefined',
    paddingTopNoneAt: 'undefined',
    paddingRightNoneAt: 'undefined',
    paddingBottomNoneAt: 'undefined',
    paddingLeftNoneAt: 'undefined',

    paddingResponsive: { sm: '4', md: '8' },
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
