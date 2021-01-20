import { CommonModule } from '@angular/common';

import { action } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { withKnobs } from '@storybook/addon-knobs';

import { LgPaginatorModule } from './paginator.module';
import { notes } from './paginator.notes';

const pageSizes = [10, 20, 25, 50, 100];

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

export const standard = () => ({
  template: `
    <lg-paginator
      [length]="length"
      [pageSize]="pageSize"
      [pageSizes]="pageSizes"
      (page)="page($event)">
    </lg-paginator>
  `,
  props: {
    pageSizes,
    length: 125,
    pageSize: 25,
    page: action('page'),
  },
});

export const firstLastButtons = () => ({
  template: `
    <lg-paginator
      [length]="length"
      [pageSize]="pageSize"
      [pageSizes]="pageSizes"
      [showFirstLastButtons]="showFirstLastButtons"
      (page)="page($event)">
    </lg-paginator>
  `,
  props: {
    pageSizes,
    length: 125,
    pageSize: 25,
    showFirstLastButtons: true,
    page: action('page'),
 },
});

export const noPageSelection = () => ({
  template: `
    <lg-paginator
      [length]="length"
      [pageSize]="pageSize"
      [pageSizes]="pageSizes"
      [hidePageSize]="hidePageSize"
      (page)="page($event)">
    </lg-paginator>
  `,
  props: {
    pageSizes,
    length: 125,
    pageSize: 25,
    hidePageSize: true,
    page: action('page'),
  },
});
