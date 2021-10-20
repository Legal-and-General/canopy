import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { notes } from '../spacing.notes';
import { LgMarginModule } from './margin.module';
import { LgMarginDirective } from './margin.directive';
import { LgCardModule } from '../../card';

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
  title: 'Directives/Margin',
  decorators: [
    moduleMetadata({
      imports: [LgMarginModule, LgCardModule],
    }),
  ],
  parameters: {
    a11y: {
      // Remove a11y checks for margin directive as unnecessary
      // and flagging false positives
      disable: true,
    },
    docs: {
      description: {
        component: notes('Margin'),
      },
    },
    backgrounds: {
      default: 'Super Blue',
    },
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

const marginStory: Story<LgMarginDirective> = (args: LgMarginDirective) => ({
  props: args,
  template: `
<lg-card
  [lgMargin]="margin"
  [lgMarginTop]="marginTop !== 'undefined' ? marginTop : null"
  [lgMarginRight]="marginRight !== 'undefined' ? marginRight : null"
  [lgMarginBottom]="marginBottom !== 'undefined' ? marginBottom : null"
  [lgMarginLeft]="marginLeft !== 'undefined' ? marginLeft : null">
    <lg-card-content>
      <strong>Standard Spacing Variant</strong>
      <div *ngIf="margin"><code>margin: {{margin | json}}</code></div>
      <div *ngIf="marginTop !== 'undefined'"><code>marginTop: {{marginTop | json}}</code></div>
      <div *ngIf="marginRight !== 'undefined'"><code>marginRight: {{marginRight | json}}</code></div>
      <div *ngIf="marginBottom !== 'undefined'"><code>marginBottom: {{marginBottom | json}}</code></div>
      <div *ngIf="marginLeft !== 'undefined'"><code>marginLeft: {{marginLeft | json}}</code></div>
    </lg-card-content>
</lg-card>
<lg-card
  [lgMargin]="marginResponsive"
  [lgMarginTop]="marginTopResponsive !== 'undefined' ? marginTopResponsive : null"
  [lgMarginRight]="marginRightResponsive !== 'undefined' ? marginRightResponsive : null"
  [lgMarginBottom]="marginBottomResponsive !== 'undefined' ? marginBottomResponsive : null"
  [lgMarginLeft]="marginLeftResponsive !== 'undefined' ? marginLeftResponsive : null">
    <lg-card-content>
      <strong>Responsive Spacing Object</strong>
      <div *ngIf="marginResponsive"><code>marginResponsive: {{marginResponsive | json}}</code></div>
      <div *ngIf="marginTopResponsive"><code>marginTopResponsive: {{marginTopResponsive | json}}</code></div>
      <div *ngIf="marginRightResponsive"><code>marginRightResponsive: {{marginRightResponsive | json}}</code></div>
      <div *ngIf="marginBottomResponsive"><code>marginBottomResponsive: {{marginBottomResponsive | json}}</code></div>
      <div *ngIf="marginLeftResponsive"><code>marginLeftResponsive: {{marginLeftResponsive | json}}</code></div>
    </lg-card-content>
</lg-card>
<lg-card><lg-card-content>Card without directive applied</lg-card-content></lg-card>
  `,
});

export const margin = marginStory.bind({});
margin.storyName = 'Margin';
margin.args = {
  margin: 'md',
  marginTop: 'undefined',
  marginRight: 'undefined',
  marginBottom: 'undefined',
  marginLeft: 'undefined',

  marginResponsive: { xs: 'sm', sm: 'md', md: 'xxl' },
  marginTopResponsive: null,
  marginRightResponsive: null,
  marginBottomResponsive: null,
  marginLeftResponsive: null,
};
margin.parameters = {
  docs: {
    source: {
      code: null,
    },
  },
};
