import { moduleMetadata } from '@storybook/angular';

import {
  LgDataPointComponent,
  LgDataPointLabelComponent,
  LgDataPointGroupComponent,
  LgDataPointSecondaryLabelComponent,
  LgDataPointAddOnComponent,
  LgDataPointValueComponent,
} from '..';
import { LgHeaderComponent } from '../../header';
import {
  LgGridColDirective,
  LgGridContainerDirective,
  LgGridRowDirective,
} from '../../grid';
import { LgCardContentInnerDataPointsComponent } from '../../card';

const sizeOptions = [ 'sm', 'md', 'lg' ];
const orientationOptions = [ 'horizontal', 'vertical' ];

export default {
  title: 'Components/Data point/Examples',
  tags: [ 'updated' ],
  decorators: [
    moduleMetadata({
      imports: [
        LgHeaderComponent,
        LgDataPointComponent,
        LgDataPointLabelComponent,
        LgDataPointValueComponent,
        LgDataPointSecondaryLabelComponent,
        LgDataPointAddOnComponent,
        LgDataPointGroupComponent,
        LgGridContainerDirective,
        LgGridRowDirective,
        LgGridColDirective,
        LgCardContentInnerDataPointsComponent,
      ],
    }),
  ],
  argTypes: {
    headingLevel: {
      options: [ '1', '2', '3', '4', '5', '6' ],
      description: 'The heading level set on the `<lg-data-point-label>` component',
      table: {
        type: {
          summary: [ '1', '2', '3', '4', '5', '6' ],
        },
      },
      control: {
        type: 'select',
      },
    },
    size: {
      options: sizeOptions,
      description: 'The size variant applied to the `<lg-data-point-value>` component',
      table: {
        type: { summary: sizeOptions },
        defaultValue: { summary: 'sm' },
      },
      control: { type: 'select' },
    },
    orientation: {
      options: orientationOptions,
      description: 'The orientation applied to the `<lg-data-point-group>` component',
      table: {
        type: { summary: orientationOptions },
        defaultValue: { summary: 'horizontal' },
      },
      control: { type: 'inline-radio' },
    },
    secondaryLabel: {
      description: 'Optional secondary label content displayed below the value',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
      control: { type: 'text' },
    },
    addOn: {
      description:
        'Optional add-on link content displayed below the secondary label (or value if no secondary label is present). Accepts any inline HTML — typically an anchor element.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
      control: { type: 'text' },
    },
  },
};

const cardDataPointsTemplate = `
  <lg-data-point variant="card">
    <lg-data-point-label [headingLevel]="headingLevel">
      Annual increase
    </lg-data-point-label>
    <lg-data-point-value [size]="size">
      Retail price index (RPI)
    </lg-data-point-value>
    @if (secondaryLabel) {
      <lg-data-point-secondary-label>{{secondaryLabel}}</lg-data-point-secondary-label>
    }
    @if (addOn) {
      <lg-data-point-add-on><a href="#">{{addOn}}</a></lg-data-point-add-on>
    }
  </lg-data-point>
`;

export const CardDataPoints = {
  name: 'Cards — Single data point',
  render: (args: LgDataPointComponent) => ({
    props: args,
    template: cardDataPointsTemplate,
  }),
  argTypes: {
    orientation: { table: { disable: true } },
  },
  args: {
    headingLevel: 3,
    size: 'sm',
    secondaryLabel: '',
    addOn: '',
  },
  parameters: {
    docs: {
      source: {
        code: cardDataPointsTemplate,
      },
    },
  },
};

const singleTemplate = `
<lg-data-point>
  <lg-data-point-label [headingLevel]="headingLevel" [isBold]="true">
    Annual increase
  </lg-data-point-label>
  <lg-data-point-value [size]="size">
    Retail price index (RPI)
  </lg-data-point-value>
  @if (secondaryLabel) {
    <lg-data-point-secondary-label>{{secondaryLabel}}</lg-data-point-secondary-label>
  }
  @if (addOn) {
    <lg-data-point-add-on><a href="#">{{addOn}}</a></lg-data-point-add-on>
  }
</lg-data-point>
`;

export const SingleDataPoint = {
  name: 'Forms — Single data point',
  render: (args: LgDataPointComponent) => ({
    props: args,
    template: singleTemplate,
  }),
  argTypes: {
    orientation: { table: { disable: true } },
  },
  args: {
    headingLevel: 3,
    size: 'sm',
    secondaryLabel: '',
    addOn: '',
  },
  parameters: {
    docs: {
      source: {
        code: singleTemplate,
      },
    },
  },
};

const listTemplate = `
<lg-data-point-group [orientation]="orientation">
  <lg-data-point>
    <lg-data-point-label [headingLevel]="headingLevel" [isBold]="true">
      Name on account
    </lg-data-point-label>
    <lg-data-point-value [size]="size">
      Joe Bloggs
    </lg-data-point-value>
    @if (addOn) {
      <lg-data-point-add-on><a href="#">{{addOn}}</a></lg-data-point-add-on>
    }
  </lg-data-point>
  <lg-data-point>
    <lg-data-point-label [headingLevel]="headingLevel" [isBold]="true">
      Account number
    </lg-data-point-label>
    <lg-data-point-value [size]="size">
      ***5678
    </lg-data-point-value>
  </lg-data-point>
  <lg-data-point>
    <lg-data-point-label [headingLevel]="headingLevel" [isBold]="true">
      Bank sort code
    </lg-data-point-label>
    <lg-data-point-value [size]="size">
      00 - 00 - **
    </lg-data-point-value>
  </lg-data-point>
  <lg-data-point>
    <lg-data-point-label [headingLevel]="headingLevel" [isBold]="true">
      Payment frequency
    </lg-data-point-label>
    <lg-data-point-value [size]="size">
      Monthly
    </lg-data-point-value>
  </lg-data-point>
</lg-data-point-group>
`;

export const DataPointsGroupStory = {
  name: 'Forms — Data point group',
  render: (args: LgDataPointGroupComponent) => ({
    props: args,
    template: listTemplate,
  }),
  argTypes: {
    secondaryLabel: { table: { disable: true } },
  },
  args: {
    headingLevel: 3,
    size: 'sm',
    orientation: 'horizontal',
    addOn: '',
  },
  parameters: {
    docs: {
      source: {
        code: listTemplate,
      },
    },
  },
};
