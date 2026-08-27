import { ChangeDetectorRef, Component, inject, Input } from '@angular/core';
import { moduleMetadata } from '@storybook/angular';

import type { TableRowVariant, TableVariant } from '../table.interface';
import { AlignmentOptions, TableColumnLayoutBreakpoints } from '../table.interface';
import { LgTableComponent } from '../table/table.component';
import { LgTableExpandedDetailComponent } from '../table-expanded-detail/table-expanded-detail.component';
import { LgTableCellComponent } from '../table-cell/table-cell.component';
import { LgTableRowComponent } from '../table-row/table-row.component';
import { LgTableRowToggleComponent } from '../table-row-toggle/table-row-toggle.component';
import { LgTableHeadCellComponent } from '../table-head-cell/table-head-cell.component';
import { LgTableHeadComponent } from '../table-head/table-head.component';
import { LgTableFootComponent } from '../table-foot/table-foot.component';
import { LgTableBodyComponent } from '../table-body/table-body.component';
import { LgInputDirective, LgInputFieldComponent } from '../../forms';
import { LgMarginDirective } from '../../spacing';
import { LgSuffixDirective } from '../../suffix';
import {
  LgGridColDirective,
  LgGridContainerDirective,
  LgGridRowDirective,
} from '../../grid';
import { LgButtonComponent } from '../../button';
import { LgIconComponent } from '../../icon';
import type { Colour, ColourTheme } from '../../colour';
import { LgColourDirective } from '../../colour';
import { LgCardComponent, LgCardContentComponent } from '../../card';

interface TableStoryItem {
  author: string;
  title: string;
  published: string;
}

interface TableStoryModeArgs {
  mode: Colour;
  theme: ColourTheme;
}

const colours: Array<Colour> = [ 'blue', 'green', 'red', 'yellow' ];
const themes: Array<ColourTheme> = [ 'neutral', 'neutral-inverse', 'subtle', 'bold' ];

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
    @for (book of books; track $index; let i = $index) {
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
    }
    </tbody>
  </table>
`;

@Component({
  selector: 'lg-story-table-detail',
  template: expandableTableTemplate,
  imports: [
    LgTableComponent,
    LgTableHeadComponent,
    LgTableHeadCellComponent,
    LgTableBodyComponent,
    LgTableRowComponent,
    LgTableCellComponent,
    LgTableRowToggleComponent,
    LgTableExpandedDetailComponent,
  ],
})
export class StoryTableDetailComponent {
  private cd = inject(ChangeDetectorRef);

  @Input() books: Array<TableStoryItem> = [];
  @Input() variant!: TableVariant;
  @Input() alignPublishColumn!: AlignmentOptions;
  @Input() showAuthorLabel!: boolean;
  @Input() columnBreakpoint!: TableColumnLayoutBreakpoints;
  @Input() expandedRows: Array<number> = [];
  @Input() stack!: boolean;

  get colspan() {
    return Object.keys(this.books[0]).length + 1;
  }

  toggleRow(index: number) {
    const matchIndex = this.expandedRows.findIndex(i => i === index);

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
              <h1 class="lg-font-size-1--700" lgMarginVertical="3">
                Item one: Lorem ipsum dolor sit amet
              </h1>
              <p lgMarginBottom="3">
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                <a href="#">labore et dolore magna</a> aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu. Excepteur sint occaecat
                cupidatat non proident.
              </p>
            </td>
            <td lg-table-cell [stack]="stack">
              <p>Sed ut perspiciatis</p>
              <p>
                emo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                fugit, sed quia consequuntur.
              </p>
              <button lg-button type="button" priority="link">
                <lg-icon name="information-filled" />
                More information
              </button>
            </td>
          </tr>
          <tr lg-table-row>
            <td lg-table-cell [stack]="stack">
              <h1 class="lg-font-size-1--700" lgMarginVertical="3">
                Item two: At vero eos et accusamus
              </h1>
              <p>
                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil.
              </p>
              <p lgMarginBottom="3">
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
              <button lg-button type="button" priority="link">
                <lg-icon name="chevron-right-circle" />
                Contact us
              </button>
            </td>
          </tr>
          <tr lg-table-row>
            <td lg-table-cell [stack]="stack">
              <h1 class="lg-font-size-1--700" lgMarginVertical="3">
                Item three: Ut enim ad minima veniam
              </h1>
              <p>Proportionate final payment: Applies</p>
              <p lgMarginBottom="3">
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
  imports: [
    LgTableComponent,
    LgTableHeadComponent,
    LgTableHeadCellComponent,
    LgTableBodyComponent,
    LgTableRowComponent,
    LgTableCellComponent,
    LgMarginDirective,
    LgGridContainerDirective,
    LgGridRowDirective,
    LgGridColDirective,
    LgButtonComponent,
    LgIconComponent,
  ],
})
class StoryTableLongCopyComponent {
  @Input() variant!: TableVariant;
  @Input() stack!: boolean;
}

const responsiveCategory = 'Responsive options';
const alignmentCategory = 'Alignment';
const colourCategory = 'Colour';

const colourArgTypes = {
  mode: {
    options: colours,
    description: 'The colour mode to apply to the card containing the table.',
    table: {
      category: colourCategory,
      type: {
        summary: colours,
      },
      defaultValue: {
        summary: 'blue',
      },
    },
    control: {
      type: 'select',
    },
  },
  theme: {
    options: themes,
    description: 'The theme to apply to the card containing the table.',
    table: {
      category: colourCategory,
      type: {
        summary: themes,
      },
      defaultValue: {
        summary: 'neutral',
      },
    },
    control: {
      type: 'select',
    },
  },
};

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
    options: [ AlignmentOptions.Start, AlignmentOptions.Centre, AlignmentOptions.End ],
    description: 'Align Title column.',
    table: {
      category: alignmentCategory,
      type: {
        summary: [ AlignmentOptions.Start, AlignmentOptions.Centre, AlignmentOptions.End ],
      },
    },
    control: {
      type: 'select',
    },
  },
  alignPublishColumn: {
    options: [ AlignmentOptions.Start, AlignmentOptions.Centre, AlignmentOptions.End ],
    description: 'Align Publish column.',
    table: {
      category: alignmentCategory,
      type: {
        summary: [ AlignmentOptions.Start, AlignmentOptions.Centre, AlignmentOptions.End ],
      },
    },
    control: {
      type: 'select',
    },
  },
  rowVariant: {
    options: [ null, 'error', 'selected' ],
    description: 'Apply a visual variant to the row. Accepts `error`, or `selected`.',
    table: {
      category: 'Variant',
      type: {
        summary: [ 'error', 'selected' ],
      },
      defaultValue: {
        summary: 'null',
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
  title: 'Components/Table/Examples',
  tags: [ 'updated' ],
  component: LgTableComponent,
  excludeStories: [ 'StoryTableDetailComponent' ],
  decorators: [
    moduleMetadata({
      imports: [
        StoryTableDetailComponent,
        StoryTableLongCopyComponent,
        LgTableComponent,
        LgTableHeadComponent,
        LgTableFootComponent,
        LgTableRowComponent,
        LgTableHeadCellComponent,
        LgTableBodyComponent,
        LgTableCellComponent,
        LgInputFieldComponent,
        LgInputDirective,
        LgMarginDirective,
        LgSuffixDirective,
        LgColourDirective,
        LgCardComponent,
        LgCardContentComponent,
      ],
    }),
  ],
  argTypes,
};

const standardTableTemplate = `
<lg-card lgMarginHorizontal="none" [lgColour]="mode" [lgColourTheme]="theme">
  <lg-card-content>
    <table lg-table [showColumnsAt]="columnBreakpoint" [variant]="variant">
      <thead lg-table-head>
        <tr lg-table-row>
          <th lg-table-head-cell [showLabel]="showAuthorLabel">Author</th>
          <th lg-table-head-cell [align]="alignTitleColumn">Title</th>
          <th lg-table-head-cell [align]="alignPublishColumn">Published</th>
        </tr>
      </thead>

      <tbody lg-table-body>
        @for (book of books; track book.title) {
          <tr lg-table-row>
            <td lg-table-cell [stack]="stack">{{ book.author }}</td>
            <td lg-table-cell [stack]="stack">{{ book.title }}</td>
            <td lg-table-cell [stack]="stack">{{ book.published }}</td>
          </tr>
        }
      </tbody>
    </table>
  </lg-card-content>
</lg-card>
`;

const rowVariantsTableTemplate = `
<table lg-table [showColumnsAt]="columnBreakpoint" [variant]="variant">
    <thead lg-table-head>
      <tr lg-table-row>
        <th lg-table-head-cell>Author</th>
        <th lg-table-head-cell [align]="alignTitleColumn">Title</th>
        <th lg-table-head-cell [align]="alignPublishColumn">Published</th>
      </tr>
    </thead>

    <tbody lg-table-body>
      <tr lg-table-row>
        <td lg-table-cell>Orhan Pamuk</td>
        <td lg-table-cell>Strangeness In My Mind</td>
        <td lg-table-cell>2016</td>
      </tr>
      <tr lg-table-row rowVariant="error">
        <td lg-table-cell>George Orwell</td>
        <td lg-table-cell>Animal Farm (error)</td>
        <td lg-table-cell>1945</td>
      </tr>
      <tr lg-table-row rowVariant="selected">
        <td lg-table-cell>Chinua Achebe</td>
        <td lg-table-cell>Things Fall Apart (selected)</td>
        <td lg-table-cell>1958</td>
      </tr>
      <tr lg-table-row>
        <td lg-table-cell>Brian Greene</td>
        <td lg-table-cell>The Elegant Universe</td>
        <td lg-table-cell>1999</td>
      </tr>
    </tbody>

    <tfoot lg-table-foot>
      <tr lg-table-row>
        <td lg-table-cell></td>
        <td lg-table-cell [align]="alignTitleColumn">Total books</td>
        <td lg-table-cell [align]="alignPublishColumn">5</td>
      </tr>
    </tfoot>
  </table>
`;

export const RowVariantsTable = {
  name: 'Row variants',
  render: (args: LgTableComponent & { rowVariant: TableRowVariant }) => ({
    props: args,
    template: rowVariantsTableTemplate,
  }),
  args: {
    variant: 'striped',
    alignTitleColumn: AlignmentOptions.Start,
    alignPublishColumn: AlignmentOptions.End,
    columnBreakpoint: TableColumnLayoutBreakpoints.Medium,
  },
  argTypes: {
    ...argTypes,
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
    rowVariant: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    docs: {
      source: {
        code: rowVariantsTableTemplate,
      },
    },
  },
};

export const StandardTable = {
  name: 'Standard',
  render: (args: LgTableComponent & TableStoryModeArgs) => ({
    props: args,
    template: standardTableTemplate,
  }),
  args: {
    books: getDefaultTableContent(),
    mode: 'blue',
    theme: 'neutral',
    variant: 'striped',
    alignTitleColumn: AlignmentOptions.Start,
    alignPublishColumn: AlignmentOptions.End,
    columnBreakpoint: TableColumnLayoutBreakpoints.Medium,
    showAuthorLabel: true,
    stack: false,
  },
  argTypes: {
    ...argTypes,
    ...colourArgTypes,
  },
  parameters: {
    themes: { disable: true },
    docs: {
      source: {
        code: standardTableTemplate,
      },
    },
  },
};

export const ExpandableTable = {
  name: 'Expandable details',
  render: (args: LgTableComponent) => ({
    props: args,
    template: `
      <lg-story-table-detail [books]="books" [variant]="variant" [alignPublishColumn]="alignPublishColumn" [showAuthorLabel]="showAuthorLabel" [columnBreakpoint]="columnBreakpoint"></lg-story-table-detail>
    `,
  }),
  args: {
    books: getDefaultTableContent(),
    variant: 'striped',
    alignTitleColumn: AlignmentOptions.Start,
    alignPublishColumn: AlignmentOptions.End,
    columnBreakpoint: TableColumnLayoutBreakpoints.Medium,
    showAuthorLabel: true,
    stack: false,
  },
  argTypes: {
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
  },
  parameters: {
    docs: {
      source: {
        code: expandableTableTemplate,
      },
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
      @for (book of books; track book.author) {
        <tr lg-table-row>
          <td lg-table-cell>{{ book.author }}</td>
          <td lg-table-cell>
            <lg-input-field lgMarginBottom="none" showLabel="false">
              <input lgInput size="2" />
              <span lgSuffix>%</span>
            </lg-input-field>
          </td>
        </tr>
      }
    </tbody>
  </table>
`;

export const WithInputTable = {
  name: 'With input',
  render: (args: LgTableComponent) => ({
    props: args,
    template: withInputTableTemplate,
  }),
  args: {
    books: getDefaultTableContent(),
    variant: 'striped',
  },
  argTypes: {
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
  },
  parameters: {
    docs: {
      source: {
        code: withInputTableTemplate,
      },
    },
  },
};

export const WithLongCopyTable = {
  name: 'With long copy',
  render: (args: LgTableComponent) => ({
    props: args,
    template: `
      <lg-story-table-long-copy
        [variant]="variant"
        [stack]="stack">
      </lg-story-table-long-copy>
    `,
  }),
  args: {
    variant: 'striped',
    stack: true,
  },
  argTypes: {
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
  },
  parameters: {
    docs: {
      source: {
        code: withLongCopyTableTemplate,
      },
    },
  },
};
