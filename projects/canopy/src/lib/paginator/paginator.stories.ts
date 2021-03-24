import { CommonModule } from '@angular/common';

import { action } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { array, boolean, number, select, withKnobs } from '@storybook/addon-knobs';

import { LgPaginatorModule } from './paginator.module';
import { notes } from './paginator.notes';

export default {
  title: 'Components/Paginator',
  parameters: {
    decorators: [
      withKnobs,
      moduleMetadata({
        imports: [CommonModule, LgPaginatorModule],
      }),
    ],
    notes: {
      markdown: notes
    }
  }
};

function props(p = {}) {
  const pageSizes = {
    '10': 10,
    '20': 20,
    '25': 25,
    '50': 50,
    '100': 100,
  };

  return {
    pageSizes: array('pageSizes', Object.keys(pageSizes)),
    length: number('length', 125),
    pageSize: select('pageSize', pageSizes, 25),
    pageIndex: number('pageIndex', 0),
    page: action('page'),
    ...p,
  };
}

export const standard = () => ({
  template: `
    <lg-paginator
      [length]="length"
      [pageSize]="pageSize"
      [pageSizes]="pageSizes"
      [pageIndex]="pageIndex"
      (page)="page($event)">
    </lg-paginator>
  `,
  props: props(),
});

export const firstLastButtons = () => ({
  template: `
    <lg-paginator
      [length]="length"
      [pageSize]="pageSize"
      [pageSizes]="pageSizes"
      [pageIndex]="pageIndex"
      [showFirstLastButtons]="showFirstLastButtons"
      (page)="page($event)">
    </lg-paginator>
  `,
  props: props({
    showFirstLastButtons: boolean('showFirstLastButtons', true),
  }),
});

export const noPageSelection = () => ({
  template: `
    <lg-paginator
      [length]="length"
      [pageSize]="pageSize"
      [pageSizes]="pageSizes"
      [pageIndex]="pageIndex"
      [hidePageSize]="hidePageSize"
      (page)="page($event)">
    </lg-paginator>
  `,
  props: props({
    hidePageSize: boolean('hidePageSize', true),
  }),
});
