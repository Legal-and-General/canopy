import { ChangeDetectorRef, Component, Input } from '@angular/core';

import { boolean, object, select, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import {
  AlignmentOptions,
  TableColumnLayoutBreakpoints,
  TableVariant,
} from './table.interface';
import { LgInputModule } from '../forms';
import { LgMarginModule } from '../spacing';
import { LgSuffixModule } from '../suffix';
import { LgTableModule } from './table.module';
import { notes } from './table.notes';
import { LgGridModule } from '../grid';
import { LgQuickActionModule } from '../quick-action';
import {
  lgIconChevronRightCircle,
  lgIconInformationFill,
  LgIconModule,
  LgIconRegistry,
} from '../icon';

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

@Component({
  selector: 'story-table-detail',
  template: `
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
  `,
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

@Component({
  selector: 'story-table-long-copy',
  template: `
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
  `,
})
class StoryTableLongCopyComponent {
  @Input() variant: TableVariant;
  @Input() stack: boolean;
  constructor(private registry: LgIconRegistry) {
    this.registry.registerIcons([lgIconChevronRightCircle, lgIconInformationFill]);
  }
}

export default {
  title: 'Components/Table',
  excludeStories: ['StoryTableDetailComponent'],
  parameters: {
    decorators: [
      withKnobs,
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
        declarations: [StoryTableDetailComponent, StoryTableLongCopyComponent],
      }),
    ],
    notes: {
      markdown: notes,
    },
  },
};

export const standard = () => ({
  template: `
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
  `,

  props: {
    books: object('Books', getDefaultTableContent(), 'Table data'),
    variant: select('Variant', ['striped', 'bordered'], 'striped', 'Variant'),
    alignTitleColumn: select(
      'Align Title column',
      [AlignmentOptions.End, AlignmentOptions.Start],
      AlignmentOptions.Start,
      'Alignment',
    ),
    alignPublishColumn: select(
      'Align Publish column',
      [AlignmentOptions.End, AlignmentOptions.Start],
      AlignmentOptions.End,
      'Alignment',
    ),
    columnBreakpoint: select(
      'Minimum breakpoint where column layout is used',
      [
        TableColumnLayoutBreakpoints.Small,
        TableColumnLayoutBreakpoints.Medium,
        TableColumnLayoutBreakpoints.Large,
      ],
      TableColumnLayoutBreakpoints.Medium,
      'Responsive options',
    ),
    showAuthorLabel: boolean(
      'Display author label in non-columns view (showLabel)',
      false,
      'Responsive options',
    ),
    stack: boolean(
      'Stack label and content in non-columns view (stack)',
      false,
      'Responsive options',
    ),
  },
});

export const expandableDetail = () => ({
  template: `<story-table-detail [books]="books" [variant]="variant" [alignPublishColumn]="alignPublishColumn" [showAuthorLabel]="showAuthorLabel" [columnBreakpoint]="columnBreakpoint"></story-table-detail>`,

  props: {
    books: object('Books', getDefaultTableContent(), 'Table data'),
    variant: select('Variant', ['striped', 'bordered'], 'striped', 'Variant'),
    alignPublishColumn: select(
      'Align Publish column',
      [AlignmentOptions.Start, AlignmentOptions.End],
      AlignmentOptions.End,
      'Alignment',
    ),
    columnBreakpoint: select(
      'Minimum breakpoint where column layout is used',
      [
        TableColumnLayoutBreakpoints.Small,
        TableColumnLayoutBreakpoints.Medium,
        TableColumnLayoutBreakpoints.Large,
      ],
      TableColumnLayoutBreakpoints.Medium,
      'Responsive options',
    ),
    showAuthorLabel: boolean(
      'Display author label in non-columns view',
      false,
      'Responsive options',
    ),
  },
});

export const withInput = () => ({
  template: `
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
            <lg-input-field lgMarginBottom="none" [showLabel]="false">
              <input lgInput size="2" />
              <span lgSuffix>%</span>
            </lg-input-field>
          </td>
        </tr>
      </tbody>
    </table>
  `,

  props: {
    books: object('Books', getDefaultTableContent(), 'Table data'),
    variant: select('Variant', ['striped', 'bordered'], 'striped', 'Variant'),
  },
});

export const withLongCopy = () => ({
  template: `
    <story-table-long-copy
      [variant]="variant"
      [stack]="stack">
    </story-table-long-copy>
  `,
  props: {
    variant: select('Variant', ['striped', 'bordered'], 'striped', 'Variant'),
    stack: boolean(
      'Stack label and content in non-columns view',
      true,
      'Responsive options',
    ),
  },
});
