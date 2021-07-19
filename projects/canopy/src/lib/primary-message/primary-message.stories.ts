import { Component, Input } from '@angular/core';

import { boolean, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import { notes } from './primary-message.notes';
import { LgPrimaryMessageModule } from './primary-message.module';
import { LgButtonModule } from '../button';
import {
  lgBrandIconCalendar,
  LgBrandIconModule,
  LgBrandIconRegistry,
} from '../brand-icon';

@Component({
  selector: 'lg-primary-message-story',
  template: `
    <lg-primary-message [hasRole]="hasRole">
      <lg-brand-icon name="calendar"></lg-brand-icon>
      <lg-primary-message-title
        >This is a message with brand icon
      </lg-primary-message-title>
      <lg-primary-message-description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        <a href="#">eiusmod tempor</a> incididunt ut labore et dolore magna aliqua.
      </lg-primary-message-description>
      <lg-primary-message-description>
        <button lg-button variant="solid-primary" lgMarginTop="sm" type="button">
          Call to action
        </button>
      </lg-primary-message-description>
    </lg-primary-message>
  `,
})
class LgPrimaryMessageStoryComponent {
  @Input() hasRole: boolean;

  constructor(private brandIconRegistry: LgBrandIconRegistry) {
    this.brandIconRegistry.registerBrandIcon([lgBrandIconCalendar]);
  }
}

export default {
  title: 'Components/Primary message',
  parameters: {
    decorators: [
      withKnobs,
      moduleMetadata({
        declarations: [LgPrimaryMessageStoryComponent],
        imports: [LgPrimaryMessageModule, LgButtonModule, LgBrandIconModule],
      }),
    ],
    notes: {
      markdown: notes,
    },
  },
};

export const standard = () => ({
  template: `
    <lg-primary-message-story [hasRole]="hasRole"></lg-primary-message-story>
  `,
  props: {
    hasRole: boolean('Set role attribute to alert', true),
  },
});
