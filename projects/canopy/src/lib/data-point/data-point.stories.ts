import { moduleMetadata, Story } from '@storybook/angular';

import { LgDataPointComponent, LgDataPointListComponent, LgDataPointModule } from '.';
import { LgHeaderModule } from '../header';
import { notes } from './data-point.notes';

export default {
  title: 'Components/Data Point',
  decorators: [
    moduleMetadata({
      imports: [LgDataPointModule, LgHeaderModule],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: notes,
      },
    },
  },
  argTypes: {
    headingLevel: {
      options: ['1', '2', '3', '4', '5', '6'],
      description: 'The heading level set on the `<lg-data-point-label>` component',
      table: {
        type: {
          summary: ['1', '2', '3', '4', '5', '6'],
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

const singleStory: Story<LgDataPointComponent> = (args: LgDataPointComponent) => ({
  props: args,
  template: singleTemplate,
});

export const singleDataPoint = singleStory.bind({});
singleDataPoint.storyName = 'Single Data Point';
singleDataPoint.args = {
  headingLevel: 1,
};
singleDataPoint.parameters = {
  docs: {
    source: {
      code: singleTemplate,
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

const listStory: Story<LgDataPointListComponent> = (args: LgDataPointListComponent) => ({
  props: args,
  template: listTemplate,
});

export const dataPointsListStory = listStory.bind({});
dataPointsListStory.storyName = 'Data point list';
dataPointsListStory.args = {
  headingLevel: 1,
};
dataPointsListStory.parameters = {
  docs: {
    source: {
      code: listTemplate,
    },
  },
};
