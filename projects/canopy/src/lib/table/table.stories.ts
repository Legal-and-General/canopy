import { object, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

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
        imports: [LgTableModule]
      })
    ],
    'in-dsm': {
      id: '5ec5304f07ffe6a6e1c14b31'
    },
    notes: {
      markdown: notes
    }
  }
};

export const standard = () => ({
  template: `
    <lg-table>
      <lg-table-row>
        <lg-table-head>Author</lg-table-head>
        <lg-table-head>Book</lg-table-head>
        <lg-table-head>Published</lg-table-head>
      </lg-table-row>

      <lg-table-row *ngFor="let book of books">
        <lg-table-cell>{{ book.author }}</lg-table-cell>
        <lg-table-cell>{{ book.title }}</lg-table-cell>
        <lg-table-cell>{{ book.published }}</lg-table-cell>
      </lg-table-row>
    </lg-table>
  `,
  props: {
    books: object('Books', getDefultTableContent())
  }
});

function getDefultTableContent(): TableStoryItem[] {
  return [
    {
      author: 'Orhan Pamuk',
      title: 'Strangeness In My Mind',
      published: '2016'
    },
    {
      author: 'Albert Camus',
      title: 'The Plague',
      published: '1947'
    },
    {
      author: 'George Orwell',
      title: 'Animal Farm',
      published: '1945'
    },
    {
      author: 'George Orwell',
      title: 'Things Fall Apart',
      published: '1958'
    }
  ];
}
