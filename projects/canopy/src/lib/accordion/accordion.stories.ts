import { Component, Input, NgModule } from '@angular/core';
import { select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';
import { BreadcrumbVariant, LgBreadcrumbModule } from '../breadcrumb';
import { LgButtonModule } from '../button';
import { LgIconModule, LgIconRegistry } from '../icon';
import * as iconSet from '../icon/icons.interface';
import { LgMarginDirective } from '../margin';
import { LgAccordionModule } from './accordion.module';
import { notes } from './accordion.notes';

@Component({
  selector: 'lg-accordion-story-component',
  template: `
    <lg-accordion [headingLevel]="headingLevel">
      <lg-accordion-item>
        <lg-accordion-panel-heading [headingLevel]="headingLevel">
          <lg-icon name="news" class="lg-margin__right--sm"></lg-icon>
          Item 1
        </lg-accordion-panel-heading>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </lg-accordion-item>
    </lg-accordion>
  `
})
export class LgAccordionStoryComponent {
  @Input() headingLevel: 3;
}

@NgModule({
  imports: [LgIconModule, LgAccordionModule],
  exports: [LgAccordionStoryComponent],
  declarations: [LgAccordionStoryComponent],
  providers: []
})
export class LgAccordionStoryModule {
  constructor(private registry: LgIconRegistry) {
    this.registry.registerIcons([iconSet.lgIconNews]);
  }
}

const stories = storiesOf('Components', module).addDecorator(withKnobs);

stories
  .addParameters({
    backgrounds: [{ name: 'default', value: '#ffffff', default: true }]
  })
  .add(
    'Accordion',
    () => ({
      moduleMetadata: {
        imports: [LgAccordionStoryModule]
      },
      template: `
        <lg-accordion-story-component [headingLevel]="3"></lg-accordion-story-component>
      `
    }),
    {
      notes: {
        markdown: notes
      }
    }
  );
