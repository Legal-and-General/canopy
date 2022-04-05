import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { notes } from './grid.notes';
import { LgAlertComponent } from '../alert';
import { LgGridModule } from './grid.module';
import { LgMarginModule } from '../spacing';
import { LgCardModule } from '../card';

const firstColCategory = 'Column 1';
const secondColCategory = 'Column 2';
const thirdColCategory = 'Column 3';
const defaultBreakpointSubCategory = 'Breakpoint: 0+';
const mdBreakpointSubCategory = 'Breakpoint: md+';
const lgBreakpointSubCategory = 'Breakpoint: lg+';
const name = 'columns';
const offsetName = 'offset columns';
const columns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const offsets = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

export default {
  title: 'Directives/Grid',
  decorators: [
    moduleMetadata({
      imports: [LgGridModule, LgMarginModule, LgCardModule],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: notes,
      },
    },
    backgrounds: {
      default: 'Super Blue',
    },
  },
  argTypes: {
    firstCol: {
      name,
      options: columns,
      table: {
        category: firstColCategory,
        subcategory: defaultBreakpointSubCategory,
      },
      control: {
        type: 'select',
      },
    },
    firstColMd: {
      name,
      options: columns,
      table: {
        category: firstColCategory,
        subcategory: mdBreakpointSubCategory,
      },
      control: {
        type: 'select',
      },
    },
    firstColLg: {
      name,
      options: columns,
      table: {
        category: firstColCategory,
        subcategory: lgBreakpointSubCategory,
      },
    },
    firstColOffset: {
      name: offsetName,
      options: offsets,
      table: {
        category: firstColCategory,
        subcategory: defaultBreakpointSubCategory,
      },
      control: {
        type: 'select',
      },
    },
    firstColMdOffset: {
      name: offsetName,
      options: offsets,
      table: {
        category: firstColCategory,
        subcategory: mdBreakpointSubCategory,
      },
      control: {
        type: 'select',
      },
    },
    firstColLgOffset: {
      name: offsetName,
      options: offsets,
      table: {
        category: firstColCategory,
        subcategory: lgBreakpointSubCategory,
      },
      control: {
        type: 'select',
      },
    },
    secondCol: {
      name,
      options: columns,
      table: {
        category: secondColCategory,
        subcategory: defaultBreakpointSubCategory,
      },
      control: {
        type: 'select',
      },
    },
    secondColMd: {
      name,
      options: columns,
      table: {
        category: secondColCategory,
        subcategory: mdBreakpointSubCategory,
      },
      control: {
        type: 'select',
      },
    },
    secondColLg: {
      name,
      options: columns,
      table: {
        category: secondColCategory,
        subcategory: lgBreakpointSubCategory,
      },
    },
    secondColOffset: {
      name: offsetName,
      options: offsets,
      table: {
        category: secondColCategory,
        subcategory: defaultBreakpointSubCategory,
      },
      control: {
        type: 'select',
      },
    },
    secondColMdOffset: {
      name: offsetName,
      options: offsets,
      table: {
        category: secondColCategory,
        subcategory: mdBreakpointSubCategory,
      },
      control: {
        type: 'select',
      },
    },
    secondColLgOffset: {
      name: offsetName,
      options: offsets,
      table: {
        category: secondColCategory,
        subcategory: lgBreakpointSubCategory,
      },
      control: {
        type: 'select',
      },
    },
    thirdCol: {
      name,
      options: columns,
      table: {
        category: thirdColCategory,
        subcategory: defaultBreakpointSubCategory,
      },
      control: {
        type: 'select',
      },
    },
    thirdColMd: {
      name,
      options: columns,
      table: {
        category: thirdColCategory,
        subcategory: mdBreakpointSubCategory,
      },
      control: {
        type: 'select',
      },
    },
    thirdColLg: {
      name,
      options: columns,
      table: {
        category: thirdColCategory,
        subcategory: lgBreakpointSubCategory,
      },
    },
    thirdColOffset: {
      name: offsetName,
      options: offsets,
      table: {
        category: thirdColCategory,
        subcategory: defaultBreakpointSubCategory,
      },
      control: {
        type: 'select',
      },
    },
    thirdColMdOffset: {
      name: offsetName,
      options: offsets,
      table: {
        category: thirdColCategory,
        subcategory: mdBreakpointSubCategory,
      },
      control: {
        type: 'select',
      },
    },
    thirdColLgOffset: {
      name: offsetName,
      options: offsets,
      table: {
        category: thirdColCategory,
        subcategory: lgBreakpointSubCategory,
      },
      control: {
        type: 'select',
      },
    },
  },
} as Meta;

const template = `
<div lgContainer>
  <div lgRow>
    <div
        [lgCol]="firstCol"
        [lgColMd]="firstColMd"
        [lgColLg]="firstColLg"
        [lgColOffset]="firstColOffset"
        [lgColMdOffset]="firstColMdOffset"
        [lgColLgOffset]="firstColLgOffset"
      >
      <lg-card lgMarginHorizontal="none">
        <lg-card-content>
          ${firstColCategory}
        </lg-card-content>
      </lg-card>
    </div>
    <div
        [lgCol]="secondCol"
        [lgColMd]="secondColMd"
        [lgColLg]="secondColLg"
        [lgColOffset]="secondColOffset"
        [lgColMdOffset]="secondColMdOffset"
        [lgColLgOffset]="secondColLgOffset"
      >
      <lg-card lgMarginHorizontal="none">
        <lg-card-content>
          ${secondColCategory}
        </lg-card-content>
      </lg-card>
    </div>
    <div
        [lgCol]="thirdCol"
        [lgColMd]="thirdColMd"
        [lgColLg]="thirdColLg"
        [lgColOffset]="thirdColOffset"
        [lgColMdOffset]="thirdColMdOffset"
        [lgColLgOffset]="thirdColLgOffset"
      >
      <lg-card lgMarginHorizontal="none">
        <lg-card-content>
          ${thirdColCategory}
        </lg-card-content>
      </lg-card>
    </div>
  </div>
</div>
`;

const gridStory: Story<LgAlertComponent> = (args: LgAlertComponent) => ({
  props: args,
  template,
});

export const grid = gridStory.bind({});
grid.storyName = 'Grid';
grid.args = {
  firstCol: 12,
  firstColMd: 4,
  firstColLg: 3,
  firstColOffset: 0,
  firstColMdOffset: 0,
  firstColLgOffset: 1,

  secondCol: 12,
  secondColMd: 4,
  secondColLg: 3,
  secondColOffset: 0,
  secondColMdOffset: 0,
  secondColLgOffset: 1,

  thirdCol: 12,
  thirdColMd: 4,
  thirdColLg: 3,
  thirdColOffset: 0,
  thirdColMdOffset: 0,
  thirdColLgOffset: 1,
};
grid.parameters = {
  docs: {
    source: {
      code: template,
    },
  },
};
