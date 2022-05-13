import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { LgButtonModule } from '../button.module';

import { LgButtonGroupComponent } from './button-group.component';
import { notes } from './button-group.notes';

export default {
  title: 'Components/Button Group',
  component: LgButtonGroupComponent,
  decorators: [
    moduleMetadata({
      imports: [ LgButtonModule ],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: notes,
      },
    },
  },
  argTypes: {
    class: {
      table: { disable: true },
    },
  },
} as Meta;

const template = `
<lg-button-group>
  <button
    lg-button
    variant="primary-dark"
  >Button</button>
  <a
    lg-button
    href="#"
    variant="secondary-dark"
  >Link</a>
</lg-button-group>
`;

const buttonGroupStory: Story<LgButtonGroupComponent> = (
  args: LgButtonGroupComponent,
) => ({
  props: args,
  template,
});

export const standardButtonGroup = buttonGroupStory.bind({});
standardButtonGroup.storyName = 'Button Group';

standardButtonGroup.parameters = {
  controls: { hideNoControlsWarning: true },
  docs: {
    args: null,
    source: {
      code: template,
    },
  },
};
