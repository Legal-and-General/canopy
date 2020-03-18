import { Input, NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';
import { LgHeadingModule } from '../heading';
import { LgIconModule } from '../icon/icon.module';
import { LgIconRegistry } from '../icon/icon.registry';
import * as iconSet from '../icon/icons.interface';
import { LgDetailsModule } from './details.module';
import { notes } from './details.notes';

@Component({
  selector: 'lg-details-story-component',
  template: `
    <lg-details [isActive]="expand">
      <lg-details-panel-heading [headingLevel]="headingLevel">{{
        header
      }}</lg-details-panel-heading>
      Give us a call on 0800 123 4567 and we'll be happy to help you change your
      payment details
    </lg-details>
  `
})
export class LgDetailsStoryComponent {
  @Input() header: string;
  @Input() expand: boolean;
  @Input() headingLevel: string;
}

@NgModule({
  imports: [LgIconModule, LgDetailsModule, LgHeadingModule],
  exports: [LgDetailsStoryComponent],
  declarations: [LgDetailsStoryComponent]
})
export class LgDetailsStoryModule {
  constructor(private registry: LgIconRegistry) {
    this.registry.registerIcons([iconSet.lgIconCreditCard]);
  }
}

const stories = storiesOf('Components', module).addDecorator(withKnobs);

stories.add(
  'Details',
  () => ({
    moduleMetadata: {
      imports: [LgDetailsStoryModule]
    },
    template: `
        <lg-details-story-component [header]="header" [expand]="expand" [headingLevel]="headingLevel">
        </lg-details-story-component>
    `,
    props: {
      header: text('Header', 'How do I change my payment details?'),
      expand: boolean('Default expand', false),
      headingLevel: select('headingLevel', [1, 2, 3, 4, 5, 6], 5)
    }
  }),
  {
    notes: {
      markdown: notes
    }
  }
);
