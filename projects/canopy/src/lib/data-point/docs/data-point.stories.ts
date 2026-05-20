import { moduleMetadata } from '@storybook/angular';

import {
  LgDataPointComponent,
  LgDataPointLabelComponent,
  LgDataPointListComponent,
  LgDataPointSecondaryLabelComponent,
  LgDataPointValueComponent,
} from '..';
import { LgHeaderComponent } from '../../header';

const sizeOptions = [ 'sm', 'md', 'lg' ];
const orientationOptions = [ 'horizontal', 'vertical' ];

export default {
  title: 'Components/Data point/Examples',
  decorators: [
    moduleMetadata({
      imports: [
        LgHeaderComponent,
        LgDataPointComponent,
        LgDataPointLabelComponent,
        LgDataPointValueComponent,
        LgDataPointSecondaryLabelComponent,
        LgDataPointListComponent,
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
      description: 'The orientation applied to the `<lg-data-point-list>` component',
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
  },
};

const singleTemplate = `
<lg-data-point>
  <lg-data-point-label [headingLevel]="headingLevel">
    Annual increase
  </lg-data-point-label>
  <lg-data-point-value [size]="size" [isBold]="true">
    Retail price index (RPI)
  </lg-data-point-value>
  @if (secondaryLabel) {
    <lg-data-point-secondary-label>{{secondaryLabel}}</lg-data-point-secondary-label>
  }
</lg-data-point>
`;

export const SingleDataPoint = {
  name: 'Single Data Point',
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
<lg-data-point-list [orientation]="orientation">
  <lg-data-point>
    <lg-data-point-label [headingLevel]="headingLevel">
      Name on account
    </lg-data-point-label>
    <lg-data-point-value [size]="size" [isBold]="true">
      Joe Bloggs
    </lg-data-point-value>
  </lg-data-point>
  <lg-data-point>
    <lg-data-point-label [headingLevel]="headingLevel">
      Account number
    </lg-data-point-label>
    <lg-data-point-value [size]="size" [isBold]="true">
      ***5678
    </lg-data-point-value>
  </lg-data-point>
  <lg-data-point>
    <lg-data-point-label [headingLevel]="headingLevel">
      Bank sort code
    </lg-data-point-label>
    <lg-data-point-value [size]="size" [isBold]="true">
      00 - 00 - **
    </lg-data-point-value>
  </lg-data-point>
  <lg-data-point>
    <lg-data-point-label [headingLevel]="headingLevel">
      Payment frequency
    </lg-data-point-label>
    <lg-data-point-value [size]="size" [isBold]="true">
      Monthly
    </lg-data-point-value>
  </lg-data-point>
</lg-data-point-list>
`;

export const DataPointsListStory = {
  name: 'Data point list',
  render: (args: LgDataPointListComponent) => ({
    props: args,
    template: listTemplate,
  }),
  args: {
    headingLevel: 3,
    size: 'sm',
    orientation: 'horizontal',
  },
  parameters: {
    docs: {
      source: {
        code: listTemplate,
      },
    },
  },
};
