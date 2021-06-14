import { Component, OnInit, Input } from '@angular/core';

import { select, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import { LgIconModule } from '../icon/icon.module';
import { BreadcrumbVariant } from './breadcrumb-item/breadcrumb-item.interface';
import { LgBreadcrumbModule } from './breadcrumb.module';
import { notes } from './breadcrumb.notes';

interface Breadcrumb {
  text: string;
}

@Component({
  selector: 'async-breadcrumb-story',
  template: `
    <lg-breadcrumb [variant]="variant">
      <lg-breadcrumb-item *ngFor="let crumb of crumbs; index as i">
        <a href="#" [attr.aria-current]="isCurrentAttribute(i)">
          <lg-icon *ngIf="!i" [name]="'home'"></lg-icon>
          {{ crumb.text }}
        </a>
      </lg-breadcrumb-item>
    </lg-breadcrumb>
  `,
})
export class AsyncBreadcrumbStoryComponent implements OnInit {
  @Input() variant: BreadcrumbVariant;

  crumbs: Array<Breadcrumb> = [];

  currentPageIndex = this.crumbs.length - 1;

  isCurrentAttribute(index: number) {
    return this.currentPageIndex === index ? 'page' : null;
  }

  ngOnInit() {
    const mockAsyncDelay = 500;

    setTimeout(() => {
      this.crumbs = [
        { text: 'Home' },
        { text: 'Home Insurance' },
        { text: 'Change direct debit' },
      ];
    }, mockAsyncDelay);
  }
}

export default {
  title: 'Components/Breadcrumb',
  excludeStories: ['AsyncBreadcrumbStoryComponent'],
  parameters: {
    decorators: [
      withKnobs,
      moduleMetadata({
        declarations: [AsyncBreadcrumbStoryComponent],
        imports: [LgIconModule, LgBreadcrumbModule],
      }),
    ],
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

export const asynchronousLoading = () => ({
  template: `<async-breadcrumb-story [variant]="variant"></async-breadcrumb-story>`,
  props: {
    variant: select(
      'Variant',
      [BreadcrumbVariant.light, BreadcrumbVariant.dark],
      BreadcrumbVariant.dark,
    ),
  },
});
