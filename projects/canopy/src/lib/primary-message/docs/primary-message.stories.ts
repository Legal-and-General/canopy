import { Component, Input } from '@angular/core';
import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';

import { lgBrandIconCalendar, LgBrandIconRegistry } from '../../brand-icon';
import { LgPrimaryMessageModule } from '../primary-message.module';
import { LgPrimaryMessageComponent } from '../primary-message.component';

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
        <button lg-button variant="primary-dark" lgMarginTop="sm" type="button">
          Call to action
        </button>
      </lg-primary-message-description>
    </lg-primary-message>
  `,
})
class LgPrimaryMessageStoryComponent {
  @Input() hasRole: boolean;

  constructor(private brandIconRegistry: LgBrandIconRegistry) {
    this.brandIconRegistry.registerBrandIcon([ lgBrandIconCalendar ]);
  }
}

export default {
  title: 'Components/Primary message/Examples',
  component: LgPrimaryMessageStoryComponent,
  decorators: [
    moduleMetadata({
      imports: [ LgPrimaryMessageModule ],
    }),
  ],
  argTypes: {
    hasRole: {
      description: 'If false, removes the role ``alert`` from the component.',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: true,
        },
      },
    },
    class: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const template = `
  <lg-primary-message-story [hasRole]="hasRole"></lg-primary-message-story>
`;

const exampleTemplate = `
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
    <button lg-button variant="primary-dark" lgMarginTop="sm" type="button">
      Call to action
    </button>
  </lg-primary-message-description>
</lg-primary-message>
`;

const detailsTemplate: StoryFn<LgPrimaryMessageComponent> = (
  args: LgPrimaryMessageComponent,
) => ({
  props: args,
  template,
});

export const standardPrimaryMessage = detailsTemplate.bind({});
standardPrimaryMessage.storyName = 'Primary message';

standardPrimaryMessage.args = {
  hasRole: true,
};

standardPrimaryMessage.parameters = {
  docs: {
    source: {
      code: exampleTemplate,
    },
  },
};
