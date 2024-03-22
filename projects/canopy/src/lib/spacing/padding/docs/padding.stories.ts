import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { NgIf } from '@angular/common';

import { LgPaddingDirective } from '../padding.directive';
import { LgCardComponent, LgCardContentComponent } from '../../../card';

const spaces = [
  'undefined',
  'none',
  'xxxs',
  'xxs',
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  'xxl',
  'xxxl',
  'xxxxl',
];

const standardCategory = 'Standard';
const responsiveCategory = 'Responsive';

export default {
  title: 'Helpers/Directives/Padding/Examples',
  decorators: [
    moduleMetadata({
      imports: [ LgCardComponent, LgCardContentComponent, LgPaddingDirective, NgIf ],
    }),
  ],
  parameters: {
    a11y: {
      // Remove a11y checks for padding directive as unnecessary
      // and flagging false positives
      disable: true,
    },
    backgrounds: {
      default: 'Super Blue',
    },
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

const paddingStory: StoryFn<LgPaddingDirective> = (args: LgPaddingDirective) => ({
  props: args,
  template: `
<lg-card
  [lgPadding]="padding"
  [lgPaddingTop]="paddingTop !== 'undefined' ? paddingTop : null"
  [lgPaddingRight]="paddingRight !== 'undefined' ? paddingRight : null"
  [lgPaddingBottom]="paddingBottom !== 'undefined' ? paddingBottom : null"
  [lgPaddingLeft]="paddingLeft !== 'undefined' ? paddingLeft : null">
    <lg-card-content>
      <strong>Standard spacing variant</strong> applied using directive
    </lg-card-content>
</lg-card>
<lg-card
  [lgPadding]="paddingResponsive"
  [lgPaddingTop]="paddingTopResponsive !== 'undefined' ? paddingTopResponsive : null"
  [lgPaddingRight]="paddingRightResponsive !== 'undefined' ? paddingRightResponsive : null"
  [lgPaddingBottom]="paddingBottomResponsive !== 'undefined' ? paddingBottomResponsive : null"
  [lgPaddingLeft]="paddingLeftResponsive !== 'undefined' ? paddingLeftResponsive : null">
    <lg-card-content>
      <strong>Responsive Spacing Object</strong> applied using directive
      <div *ngIf="paddingResponsive"><code>paddingResponsive: {{paddingResponsive | json}}</code></div>
      <div *ngIf="paddingTopResponsive"><code>paddingTopResponsive: {{paddingTopResponsive | json}}</code></div>
      <div *ngIf="paddingRightResponsive"><code>paddingRightResponsive: {{paddingRightResponsive | json}}</code></div>
      <div *ngIf="paddingBottomResponsive"><code>paddingBottomResponsive: {{paddingBottomResponsive | json}}</code></div>
      <div *ngIf="paddingLeftResponsive"><code>paddingLeftResponsive: {{paddingLeftResponsive | json}}</code></div>
    </lg-card-content>
</lg-card>
<lg-card><lg-card-content>Card without directive applied</lg-card-content></lg-card>
  `,
});

export const padding = paddingStory.bind({});
padding.storyName = 'Padding';

padding.args = {
  padding: 'md',
  paddingTop: 'undefined',
  paddingRight: 'undefined',
  paddingBottom: 'undefined',
  paddingLeft: 'undefined',

  paddingResponsive: { xs: 'sm', sm: 'md', md: 'xxl' },
  paddingTopResponsive: null,
  paddingRightResponsive: null,
  paddingBottomResponsive: null,
  paddingLeftResponsive: null,
};

padding.parameters = {
  docs: {
    source: {
      code: null,
    },
  },
};
