import { object, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import { AlignmentOptions } from './table.interface';
import { LgTableModule } from './table.module';
import { notes } from './table.notes';

interface TableStoryItem {
  author: string;
  title: string;
  published: string;
}

export default {
  title: 'Components/Table  ',
  parameters: {
    decorators: [
      withKnobs,
      moduleMetadata({
        imports: [LgTableModule],
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
          <th lg-table-head-cell>Author</th>
          <th lg-table-head-cell>Title</th>
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
    books: object('Books', getDefultTableContent(), 'lg-table'),
    alignPublishColumn: AlignmentOptions.End,
  },
});

function getDefultTableContent(): Array<TableStoryItem> {
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
