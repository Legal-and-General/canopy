import { ChangeDetectorRef, Component, Input } from '@angular/core';

import { boolean, object, select, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import { AlignmentOptions } from './table.interface';
import { LgTableModule } from './table.module';
import { notes } from './table.notes';

interface TableStoryItem {
  author: string;
  title: string;
  published: string;
}

@Component({
  selector: 'story-table-detail',
  template: `
    <table lg-table>
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

  @Input() alignPublishColumn: AlignmentOptions;
  @Input() showAuthorLabel: boolean;

  @Input() expandedRows: Array<number> = [];

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

export default {
  title: 'Components/Table  ',
  excludeStories: ['StoryTableDetailComponent'],
  parameters: {
    decorators: [
      withKnobs,
      moduleMetadata({
        imports: [LgTableModule],
        declarations: [StoryTableDetailComponent],
      }),
    ],
    'in-dsm': {
      id: '5ec5304f07ffe6a6e1c14b31',
    },
    notes: {
      markdown: notes,
    },
  },
};

export const standard = () => ({
  template: `
    <table lg-table>
      <thead lg-table-head>
        <tr lg-table-row>
          <th lg-table-head-cell [showLabel]="showAuthorLabel">Author</th>
          <th lg-table-head-cell [align]="alignTitleColumn">Title</th>
          <th lg-table-head-cell [align]="alignPublishColumn">Published</th>
        </tr>
      </thead>

      <tbody lg-table-body>
        <tr lg-table-row *ngFor="let book of books">
          <td lg-table-cell>{{ book.author }}</td>
          <td lg-table-cell>{{ book.title }}</td>
          <td lg-table-cell>{{ book.published }}</td>
        </tr>
      </tbody>
    </table>
  `,

  props: {
    books: object('Books', getDefaultTableContent(), 'lg-table'),
    alignTitleColumn: select(
      'Align Title column',
      [AlignmentOptions.End, AlignmentOptions.Start],
      AlignmentOptions.Start,
    ),
    alignPublishColumn: select(
      'Align Publish column',
      [AlignmentOptions.End, AlignmentOptions.Start],
      AlignmentOptions.End,
    ),
    showAuthorLabel: boolean('Display author label on mobile', false, 'lg-table'),
  },
});

export const detail = () => ({
  template: `<story-table-detail [books]="books" [alignPublishColumn]="alignPublishColumn" [showAuthorLabel]="showAuthorLabel"></story-table-detail>`,

  props: {
    books: object('Books', getDefaultTableContent(), 'lg-table'),
    alignPublishColumn: select(
      'Published column alignment',
      [AlignmentOptions.Start, AlignmentOptions.End],
      AlignmentOptions.End,
      'lg-table',
    ),
    showAuthorLabel: boolean('Display author label on mobile', false, 'lg-table'),
  },
});

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
