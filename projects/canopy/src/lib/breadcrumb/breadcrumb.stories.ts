import { select, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import { LgIconModule } from '../icon/icon.module';
import { BreadcrumbVariant } from './breadcrumb-item/breadcrumb-item.interface';
import { LgBreadcrumbModule } from './breadcrumb.module';
import { notes } from './breadcrumb.notes';

export default {
  title: 'Components/Breadcrumb',
  parameters: {
    decorators: [
      withKnobs,
      moduleMetadata({
        imports: [LgIconModule, LgBreadcrumbModule],
      }),
    ],
    'in-dsm': {
      id: '5ec4dd06b5f14853257d7705',
    },
    notes: {
      markdown: notes,
    },
  },
};

export const twoItems = () => ({
  template: `
    <lg-breadcrumb [variant]="variant">
      <lg-breadcrumb-item>
        <a href="#">
          <lg-icon [name]="'home'"></lg-icon>
          Home
        </a>
      </lg-breadcrumb-item>
      <lg-breadcrumb-item>
        <a href="#" aria-current="page">Your Pension Product</a>
      </lg-breadcrumb-item>
    </lg-breadcrumb>
  `,
  props: {
    variant: select(
      'Variant',
      [BreadcrumbVariant.light, BreadcrumbVariant.dark],
      BreadcrumbVariant.dark,
    ),
  },
});

export const threeItems = () => ({
  template: `
    <lg-breadcrumb [variant]="variant">
      <lg-breadcrumb-item>
        <a href="#">
          <lg-icon [name]="'home'"></lg-icon>
          Home
        </a>
      </lg-breadcrumb-item>
      <lg-breadcrumb-item>
        <a href="#">Home Insurance</a>
      </lg-breadcrumb-item>
      <lg-breadcrumb-item>
        <a href="#" aria-current="page">Change direct debit</a>
      </lg-breadcrumb-item>
    </lg-breadcrumb>
  `,
  props: {
    variant: select(
      'Variant',
      [BreadcrumbVariant.light, BreadcrumbVariant.dark],
      BreadcrumbVariant.dark,
    ),
  },
});
