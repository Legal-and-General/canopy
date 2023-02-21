import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { LgTableModule } from '../../table';
import { LgPaginationModule } from '../pagination.module';
import { LgPagionationComponent, PageData } from '../pagination.component';
@Component({
  selector: 'lg-pagination-story',
  styles: [
    `
      .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    `,
  ],
  template: `
    <div class="content">
      <table lg-table [variant]="'striped'">
        <thead lg-table-head>
          <tr lg-table-row>
            <th lg-table-head-cell>Id</th>
            <th lg-table-head-cell>Name</th>
            <th lg-table-head-cell>Email</th>
          </tr>
        </thead>
        <tbody lg-table-body>
          <tr lg-table-row *ngFor="let user of pagedItems">
            <td lg-table-cell>{{ user.id }}</td>
            <td lg-table-cell>{{ user.name }}</td>
            <td lg-table-cell>{{ user.email }}</td>
          </tr>
        </tbody>
      </table>
      <lg-pagination
        [totalItems]="allItems.length"
        [itemsPerPage]="itemsPerPage"
        [currentPage]="currentPage"
        (pageChanged)="onPageChanged($event)"
      ></lg-pagination>
    </div>
  `,
})
class PaginationStoryComponent implements OnInit, OnChanges {
  @Input() totalItems = 25;
  @Input() itemsPerPage = 5;
  @Input() currentPage = 1;

  allItems: Array<unknown> = [];
  pagedItems: Array<unknown> = [];

  ngOnInit(): void {
    this.allItems = this.getData();
    this.pagedItems = this.getPagedData(0, this.itemsPerPage - 1);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['totalItems'] && !changes['totalItems'].firstChange) {
      this.allItems = this.getData();
    }
  }

  getData(): Array<unknown> {
    const result: Array<unknown> = [];

    for (let i = 1; i <= this.totalItems; i++) {
      result.push({
        id: i,
        name: `user ${i}`,
        email: `user${i}@gmail.com`,
      });
    }

    return result;
  }

  getPagedData(startIndex: number, endIndex: number): Array<unknown> {
    return this.allItems.slice(startIndex, endIndex + 1);
  }

  onPageChanged(pageData: PageData): void {
    this.pagedItems = this.getPagedData(pageData.startIndex, pageData.endIndex);
  }
}

export default {
  title: 'Components/Pagination (WIP)/Examples',
  component: LgPagionationComponent,
  decorators: [
    moduleMetadata({
      declarations: [ PaginationStoryComponent ],
      imports: [ LgTableModule, LgPaginationModule ],
    }),
  ],
  parameters: {
    viewMode: 'story',
    previewTabs: { 'storybook/docs/panel': { hidden: true } },
  },
  argTypes: {
    id: {
      description:
        'Optional id for the component. If none is specified then a unique id will be automatically generated',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'lg-pagination-[nextUniqueId]' },
      },
    },
    totalItems: {
      description: 'The total number of items in the array being paged.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 0 },
      },
    },
    itemsPerPage: {
      description: 'The maximum number of items to show in each page.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 10 },
      },
    },
    currentPage: {
      description:
        'The current page. This is usually controlled internally by the componment itself,  but can also be set externally.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 1 },
      },
    },
    pageChanged: {
      table: { disable: true },
    },
    goTo: {
      table: { disable: true },
    },
    next: {
      table: { disable: true },
    },
    previous: {
      table: { disable: true },
    },
    ngOnChanges: {
      table: { disable: true },
    },
    ariaLabel: {
      table: { disable: true },
    },
    class: {
      table: { disable: true },
    },
    role: {
      table: { disable: true },
    },
  },
} as Meta;

const basicPaginationStory: Story<LgPagionationComponent> = (
  args: LgPagionationComponent,
) => ({
  props: args,
  template: `
    <lg-pagination-story
      [totalItems]="totalItems"
      [itemsPerPage]="itemsPerPage"
      [currentPage]="currentPage"
    >
    </lg-pagination-story>
  `,
});

export const basicPagination = basicPaginationStory.bind({});
basicPagination.storyName = 'Basic paginiation';

basicPagination.args = {
  id: 'lg-pagination-1',
  totalItems: 25,
  itemsPerPage: 5,
  currentPage: 1,
};
