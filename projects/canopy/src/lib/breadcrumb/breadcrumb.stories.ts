import { Input, NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';
import { LgIconModule } from '../icon/icon.module';
import { LgIconRegistry } from '../icon/icon.registry';
import * as iconSet from '../icon/icons.interface';
import { BreadcrumbVariant } from './breadcrumb-item/breadcrumb-item.interface';
import { LgBreadcrumbModule } from './breadcrumb.module';
import { notes } from './breadcrumb.notes';

@Component({
  selector: 'lg-breadcrumb-story-component',
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
  `
})
export class LgBreadcrumbStoryComponent {
  @Input() variant: BreadcrumbVariant;
}

@Component({
  selector: 'lg-breadcrumb-story-two-items-component',
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
  `
})
export class LgBreadcrumbTwoItemsStoryComponent {
  @Input() variant: BreadcrumbVariant;
}

@NgModule({
  imports: [LgIconModule, LgBreadcrumbModule],
  exports: [LgBreadcrumbStoryComponent, LgBreadcrumbTwoItemsStoryComponent],
  declarations: [LgBreadcrumbStoryComponent, LgBreadcrumbTwoItemsStoryComponent]
})
export class LgBreadcrumbStoryModule {
  constructor(private registry: LgIconRegistry) {
    this.registry.registerIcons([iconSet.lgIconHome]);
  }
}

const stories = storiesOf('Components/Breadcrumb', module).addDecorator(
  withKnobs
);

stories
  .addParameters({
    backgrounds: [
      { name: 'Default', value: 'transparent', default: true },
      { name: 'Midnight Blue', value: '#005380' }
    ]
  })
  .add(
    'Two items',
    () => ({
      moduleMetadata: {
        imports: [LgBreadcrumbStoryModule]
      },
      template: `
        <lg-breadcrumb-story-two-items-component [variant]="variant">
        </lg-breadcrumb-story-two-items-component>
      `,
      props: {
        variant: select(
          'Variant',
          [BreadcrumbVariant.light, BreadcrumbVariant.dark],
          BreadcrumbVariant.dark
        )
      }
    }),
    {
      notes: {
        markdown: notes
      }
    }
  );

stories
  .addParameters({
    backgrounds: [
      { name: 'Default', value: 'transparent', default: true },
      { name: 'Midnight Blue', value: '#005380' }
    ]
  })
  .add(
    'Three items',
    () => ({
      moduleMetadata: {
        imports: [LgBreadcrumbStoryModule]
      },
      template: `<lg-breadcrumb-story-component [variant]="variant"></lg-breadcrumb-story-component>`,
      props: {
        variant: select(
          'Variant',
          [BreadcrumbVariant.light, BreadcrumbVariant.dark],
          BreadcrumbVariant.dark
        )
      }
    }),
    {
      notes: {
        markdown: notes
      }
    }
  );
