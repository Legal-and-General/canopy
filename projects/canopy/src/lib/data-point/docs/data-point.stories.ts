import { moduleMetadata } from '@storybook/angular';

import {
  LgDataPointComponent,
  LgDataPointLabelComponent,
  LgDataPointListComponent,
  LgDataPointValueComponent,
} from '..';
import { LgHeaderComponent } from '../../header';

export default {
  title: 'Components/Data point/Examples',
  tags: [ 'pending' ],
  decorators: [
    moduleMetadata({
      imports: [
        LgHeaderComponent,
        LgDataPointComponent,
        LgDataPointLabelComponent,
        LgDataPointValueComponent,
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
  },
};

const singleTemplate = `
<lg-data-point>
  <lg-data-point-label [headingLevel]="headingLevel">
    Annual increase
  </lg-data-point-label>
  <lg-data-point-value>
    Retail price index (RPI)
  </lg-data-point-value>
</lg-data-point>
`;

export const SingleDataPoint = {
  name: 'Single Data Point',
  render: (args: LgDataPointComponent) => ({
    props: args,
    template: singleTemplate,
  }),
  args: {
    headingLevel: 3,
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
<lg-data-point-list>
  <lg-data-point>
    <lg-data-point-label [headingLevel]="headingLevel">
      Name on account
    </lg-data-point-label>
    <lg-data-point-value>
      Joe Bloggs
    </lg-data-point-value>
  </lg-data-point>
  <lg-data-point>
    <lg-data-point-label [headingLevel]="headingLevel">
      Account number
    </lg-data-point-label>
    <lg-data-point-value>
      ***5678
    </lg-data-point-value>
  </lg-data-point>
  <lg-data-point>
    <lg-data-point-label [headingLevel]="headingLevel">
      Bank sort code
    </lg-data-point-label>
    <lg-data-point-value>
      00 - 00 - **
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
  },
  parameters: {
    docs: {
      source: {
        code: listTemplate,
      },
    },
  },
};
