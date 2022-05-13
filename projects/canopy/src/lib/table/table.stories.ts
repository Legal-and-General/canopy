import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { moduleMetadata, Story } from '@storybook/angular';

import { LgInputModule } from '../forms';
import { LgMarginModule } from '../spacing';
import { LgSuffixModule } from '../suffix';
import { LgGridModule } from '../grid';
import { LgQuickActionModule } from '../quick-action';
import {
  lgIconChevronRightCircle,
  lgIconInformationFill,
  LgIconModule,
  LgIconRegistry,
} from '../icon';

import { notes } from './table.notes';
import { LgTableModule } from './table.module';
import { AlignmentOptions, TableColumnLayoutBreakpoints } from './table.interface';
import type { TableVariant } from './table.interface';
import { LgTableComponent } from './table/table.component';

interface TableStoryItem {
  author: string;
  title: string;
  published: string;
}

function getDefaultTableContent(): Array<TableStoryItem> {
  return [
    {
      author: 'Orhan Pamuk',
      title: 'Strangeness In My Mind',
      published: '2016',
    },
    {
      author: 'Albert Camus',
      title: 'The Plague',
      published: '1947',
    },
    {
      author: 'George Orwell',
      title: 'Animal Farm',
      published: '1945',
    },
    {
      author: 'Chinua Achebe',
      title: 'Things Fall Apart',
      published: '1958',
    },
    {
      author: 'Brian Greene',
      title: 'The Elegant Universe',
      published: '1999',
    },
    {
      author: 'Julia Donaldson',
      title: 'The Gruffalo',
      published: '1999',
    },
    {
      author: 'Dan Brown',
      title: 'The Da Vinci Code',
      published: '2003',
    },
    {
      author: 'Charles Dickens',
      title: 'Oliver Twist',
      published: '1838',
    },
    {
      author: 'Doug McGuff and John Little',
      title: 'Body by Science',
      published: '2008',
    },
    {
      author: 'Douglas Crockford',
      title: 'JavaScript: The Good Parts',
      published: '2008',
    },
  ];
}

const expandableTableTemplate = `
<table lg-table [showColumnsAt]="columnBreakpoint" [variant]="variant">
  <thead lg-table-head>
    <tr lg-table-row>
      <th scope="col" lg-table-head-cell>
        <span class="lg-visually-hidden">Toggle</span>
      </th>
      <th lg-table-head-cell [showLabel]="showAuthorLabel">Author</th>
      <th lg-table-head-cell>Book</th>
      <th lg-table-head-cell [align]="alignPublishColumn">Published</th>
    </tr>
  </thead>

  <tbody lg-table-body>
    <ng-container *ngFor="let book of books; index as i">
      <tr lg-table-row>
        <td lg-table-cell>
          <lg-table-row-toggle
            (click)="toggleRow(i)"
            [isActive]="expandedRows.indexOf(i) > -1"
          >
          </lg-table-row-toggle>
        </td>
        <td lg-table-cell>{{ book.author }}</td>
        <td lg-table-cell>{{ book.title }}</td>
        <td lg-table-cell>{{ book.published }}</td>
      </tr>
      <tr lg-table-row [isHidden]="expandedRows.indexOf(i) < 0">
        <td lg-table-cell [colspan]="colspan">
          <lg-table-expanded-detail>
            {{ book.title }} was published in {{ book.published }} by
            {{ book.author }}
          </lg-table-expanded-detail>
        </td>
      </tr>
    </ng-container>
  </tbody>
</table>
`;

@Component({
  selector: 'lg-story-table-detail',
  template: expandableTableTemplate,
})
export class StoryTableDetailComponent {
  @Input() books: Array<TableStoryItem> = [];
  @Input() variant: TableVariant;
  @Input() alignPublishColumn: AlignmentOptions;
  @Input() showAuthorLabel: boolean;
  @Input() columnBreakpoint: TableColumnLayoutBreakpoints;
  @Input() expandedRows: Array<number> = [];
  @Input() stack: boolean;

  get colspan() {
    return Object.keys(this.books[0]).length + 1;
  }

  constructor(private cd: ChangeDetectorRef) {}

  toggleRow(index: number) {
    const matchIndex = this.expandedRows.findIndex((i) => i === index);

    if (matchIndex < 0) {
      this.expandedRows.push(index);
    } else {
      this.expandedRows.splice(matchIndex, 1);
    }

    // Force story to respond to toggle events after data input changes
    // https://github.com/storybookjs/storybook/issues/7242
    this.cd.detectChanges();
  }
}

const withLongCopyTableTemplate = `
<div lgContainer>
  <div lgRow>
    <div lgCol="12">
      <table lg-table [variant]="variant">
        <colgroup>
          <col span="1" style="width: 65%;" />
          <col span="1" style="width: 35%;" />
        </colgroup>
        <thead lg-table-head>
          <tr lg-table-row>
            <th lg-table-head-cell [showLabel]="false">Item</th>
            <th lg-table-head-cell>More information</th>
          </tr>
        </thead>

        <tbody lg-table-body>
          <tr lg-table-row>
            <td lg-table-cell [stack]="stack">
              <h1 class="lg-font-size-1--strong" lgMarginVertical="xs">
                Item one: Lorem ipsum dolor sit amet
              </h1>
              <p lgMarginBottom="xs">
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                <a href="#">labore et dolore magna</a> aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu. Excepteur sint occaecat
                cupidatat non proident.
              </p>
            </td>
            <td lg-table-cell [showLabel]="false" [stack]="stack">
              <p>Sed ut perspiciatis</p>
              <p>
                emo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                fugit, sed quia consequuntur.
              </p>
              <button lg-quick-action>
                <lg-icon name="information-fill"></lg-icon>
                More information
              </button>
            </td>
          </tr>
          <tr lg-table-row>
            <td lg-table-cell [stack]="stack">
              <h1 class="lg-font-size-1--strong" lgMarginVertical="xs">
                Item two: At vero eos et accusamus
              </h1>
              <p>
                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil.
              </p>
              <p lgMarginBottom="xs">
                Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates repudiandae sint et
                molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente
                delectus, ut aut reiciendis voluptatibus maiores alias consequatur.
              </p>
            </td>
            <td lg-table-cell [stack]="stack">
              <p>
                Et harum quidem rerum facilis est et expedita distinctio. Nam libero
                tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus id quod.
              </p>
              <button lg-quick-action>
                <lg-icon name="chevron-right-circle"></lg-icon>
                Contact us
              </button>
            </td>
          </tr>
          <tr lg-table-row>
            <td lg-table-cell [stack]="stack">
              <h1 class="lg-font-size-1--strong" lgMarginVertical="xs">
                Item three: Ut enim ad minima veniam
              </h1>
              <p>Proportionate final payment: Applies</p>
              <p lgMarginBottom="xs">
                Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
                quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
                voluptas nulla pariatur. Tempora incidunt ut labore et dolore magnam
                aliquam quaerat voluptatem.
              </p>
            </td>
            <td lg-table-cell [stack]="stack">
              Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
              voluptatibus maiores.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
`;

@Component({
  selector: 'lg-story-table-long-copy',
  template: withLongCopyTableTemplate,
})
class StoryTableLongCopyComponent {
  @Input() variant: TableVariant;
  @Input() stack: boolean;
  constructor(private registry: LgIconRegistry) {
    this.registry.registerIcons([ lgIconChevronRightCircle, lgIconInformationFill ]);
  }
}

const responsiveCategory = 'Responsive options';
const alignmentCategory = 'Alignment';

const argTypes = {
  variant: {
    options: [ 'striped', 'bordered' ],
    description: 'The variant of table. Accepts `striped` or `bordered`.',
    table: {
      category: 'Variant',
      type: {
        summary: [ 'striped', 'bordered' ],
      },
      defaultValue: {
        summary: 'striped',
      },
    },
    control: {
      type: 'select',
    },
  },
  showColumnsAt: {
    options: [ 'sm', 'md', 'lg' ],
    description:
      'Sets the minimum screen width from which the column layout is displayed..',
    table: {
      category: responsiveCategory,
      type: {
        summary: [ 'sm', 'md', 'lg' ],
      },
      defaultValue: {
        summary: 'md',
      },
    },
    control: {
      type: 'select',
    },
  },
  alignTitleColumn: {
    options: [ AlignmentOptions.End, AlignmentOptions.Start ],
    description: 'Align Title column.',
    table: {
      category: alignmentCategory,
      type: {
        summary: [ AlignmentOptions.End, AlignmentOptions.Start ],
      },
    },
    control: {
      type: 'select',
    },
  },
  alignPublishColumn: {
    options: [ AlignmentOptions.End, AlignmentOptions.Start ],
    description: 'Align Publish column.',
    table: {
      category: alignmentCategory,
      type: {
        summary: [ AlignmentOptions.End, AlignmentOptions.Start ],
      },
    },
    control: {
      type: 'select',
    },
  },
  columnBreakpoint: {
    options: [
      TableColumnLayoutBreakpoints.Small,
      TableColumnLayoutBreakpoints.Medium,
      TableColumnLayoutBreakpoints.Large,
    ],
    description: 'Minimum breakpoint where column layout is used.',
    table: {
      category: responsiveCategory,
      type: {
        summary: [ AlignmentOptions.End, AlignmentOptions.Start ],
      },
    },
    control: {
      type: 'select',
    },
  },
  showAuthorLabel: {
    description: 'Display author label in non-columns view (showLabel).',
    table: {
      category: responsiveCategory,
      type: {
        summary: 'boolean',
      },
    },
  },
  stack: {
    description: 'Stack label and content in non-columns view.',
    table: {
      category: responsiveCategory,
      type: {
        summary: 'boolean',
      },
    },
  },
  _variant: {
    table: {
      disable: true,
    },
  },
  class: {
    table: {
      disable: true,
    },
  },
  columns: {
    table: {
      disable: true,
    },
  },
  id: {
    table: {
      disable: true,
    },
  },
  isExpandable: {
    table: {
      disable: true,
    },
  },
  ngAfterContentChecked: {
    table: {
      disable: true,
    },
  },
  tableHead: {
    table: {
      disable: true,
    },
  },
  tableBody: {
    table: {
      disable: true,
    },
  },
};

export default {
  title: 'Components/Table',
  component: LgTableComponent,
  excludeStories: [ 'StoryTableDetailComponent' ],
  decorators: [
    moduleMetadata({
      imports: [
        LgTableModule,
        LgInputModule,
        LgSuffixModule,
        LgMarginModule,
        LgGridModule,
        LgQuickActionModule,
        LgIconModule,
      ],
      declarations: [ StoryTableDetailComponent, StoryTableLongCopyComponent ],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: notes,
      },
    },
  },
  argTypes,
};

const standardTableTemplate = `
<table lg-table [showColumnsAt]="columnBreakpoint" [variant]="variant">
  <thead lg-table-head>
    <tr lg-table-row>
      <th lg-table-head-cell [showLabel]="showAuthorLabel">Author</th>
      <th lg-table-head-cell [align]="alignTitleColumn">Title</th>
      <th lg-table-head-cell [align]="alignPublishColumn">Published</th>
    </tr>
  </thead>

  <tbody lg-table-body>
    <tr lg-table-row *ngFor="let book of books">
      <td lg-table-cell [stack]="stack">{{ book.author }}</td>
      <td lg-table-cell [stack]="stack">{{ book.title }}</td>
      <td lg-table-cell [stack]="stack">{{ book.published }}</td>
    </tr>
  </tbody>
</table>
`;

const standardTableStory: Story<LgTableModule> = (args: LgTableModule) => ({
  props: args,
  template: standardTableTemplate,
});

export const standardTable = standardTableStory.bind({});
standardTable.storyName = 'Standard';

standardTable.args = {
  books: getDefaultTableContent(),
  variant: 'striped',
  alignTitleColumn: AlignmentOptions.Start,
  alignPublishColumn: AlignmentOptions.End,
  columnBreakpoint: TableColumnLayoutBreakpoints.Medium,
  showAuthorLabel: false,
  stack: false,
};

standardTable.parameters = {
  docs: {
    source: {
      code: standardTableTemplate,
    },
  },
};

const expandableTableStory: Story<LgTableModule> = (args: LgTableModule) => ({
  props: args,
  template: `
    <lg-story-table-detail [books]="books" [variant]="variant" [alignPublishColumn]="alignPublishColumn" [showAuthorLabel]="showAuthorLabel" [columnBreakpoint]="columnBreakpoint"></lg-story-table-detail>
  `,
});

export const expandableTable = expandableTableStory.bind({});
expandableTable.storyName = 'Expandable details';

expandableTable.argTypes = {
  ...argTypes,
  showColumnsAt: {
    table: {
      disable: true,
    },
  },
  alignTitleColumn: {
    table: {
      disable: true,
    },
  },
};

expandableTable.args = {
  books: getDefaultTableContent(),
  variant: 'striped',
  alignTitleColumn: AlignmentOptions.Start,
  alignPublishColumn: AlignmentOptions.End,
  columnBreakpoint: TableColumnLayoutBreakpoints.Medium,
  showAuthorLabel: false,
  stack: false,
};

expandableTable.parameters = {
  docs: {
    source: {
      code: expandableTableTemplate,
    },
  },
};

const withInputTableTemplate = `
<table lg-table [variant]="variant">
  <thead lg-table-head>
    <tr lg-table-row>
      <th lg-table-head-cell>Author</th>
      <th lg-table-head-cell>Rating</th>
    </tr>
  </thead>

  <tbody lg-table-body>
    <tr lg-table-row *ngFor="let book of books">
      <td lg-table-cell>{{ book.author }}</td>
      <td lg-table-cell>
        <lg-input-field lgMarginBottom="none" showLabel="false">
          <input lgInput size="2" />
          <span lgSuffix>%</span>
        </lg-input-field>
      </td>
    </tr>
  </tbody>
</table>
`;

const withInputTableStory: Story<LgTableModule> = (args: LgTableModule) => ({
  props: args,
  template: withInputTableTemplate,
});

export const withInputTable = withInputTableStory.bind({});
withInputTable.storyName = 'With input';

withInputTable.argTypes = {
  ...argTypes,
  showColumnsAt: {
    table: {
      disable: true,
    },
  },
  alignTitleColumn: {
    table: {
      disable: true,
    },
  },
  alignPublishColumn: {
    table: {
      disable: true,
    },
  },
  columnBreakpoint: {
    table: {
      disable: true,
    },
  },
  showAuthorLabel: {
    table: {
      disable: true,
    },
  },
  stack: {
    table: {
      disable: true,
    },
  },
};

withInputTable.args = {
  books: getDefaultTableContent(),
  variant: 'striped',
};

withInputTable.parameters = {
  docs: {
    source: {
      code: withInputTableTemplate,
    },
  },
};

const withLongCopyTableStory: Story<LgTableModule> = (args: LgTableModule) => ({
  props: args,
  template: `
    <lg-story-table-long-copy
      [variant]="variant"
      [stack]="stack">
    </lg-story-table-long-copy>
  `,
});

export const withLongCopyTable = withLongCopyTableStory.bind({});
withLongCopyTable.storyName = 'With long copy';

withLongCopyTable.argTypes = {
  ...argTypes,
  showColumnsAt: {
    table: {
      disable: true,
    },
  },
  alignTitleColumn: {
    table: {
      disable: true,
    },
  },
  alignPublishColumn: {
    table: {
      disable: true,
    },
  },
  columnBreakpoint: {
    table: {
      disable: true,
    },
  },
  showAuthorLabel: {
    table: {
      disable: true,
    },
  },
};

withLongCopyTable.args = {
  variant: 'striped',
  stack: true,
};

withLongCopyTable.parameters = {
  docs: {
    source: {
      code: withLongCopyTableTemplate,
    },
  },
};
