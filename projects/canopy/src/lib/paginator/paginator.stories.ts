import { CommonModule } from '@angular/common';

import { action } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';

import { LgPaginatorComponent } from './paginator.component';
import { LgPaginatorModule } from './paginator.module';

const pageSizes = [10, 20, 25, 50, 100];

export default {
  title: '@lgim/canopy/Paginator',
  component: LgPaginatorComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, LgPaginatorModule],
    }),
  ],
  argTypes: {
    pageSize: {
      control: {
        type: 'select',
        options: pageSizes,
      },
    },
  },
};

export const standard = (args => ({
  component: LgPaginatorComponent,
  props: { ...args },
})).bind({});

standard.args = {
  pageSizes,
  length: 125,
  pageSize: 25,
  page: action('page'),
};

export const firstLastButtons = (args => ({
  component: LgPaginatorComponent,
  props: { ...args },
})).bind({});

firstLastButtons.args = {
  pageSizes,
  length: 125,
  pageSize: 25,
  showFirstLastButtons: true,
  page: action('page'),
};

export const noPageSelection = (args => ({
  component: LgPaginatorComponent,
  props: { ...args },
})).bind({});

noPageSelection.args = {
  pageSizes,
  length: 125,
  pageSize: 25,
  hidePageSize: true,
  page: action('page'),
};
