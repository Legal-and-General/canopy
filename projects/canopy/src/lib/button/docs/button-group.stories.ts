import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';

import { LgButtonGroupComponent } from '../button-group/button-group.component';

export default {
  title: 'Components/Button/Examples',
  component: LgButtonGroupComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
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

const buttonGroupStory: StoryFn<LgButtonGroupComponent> = (
  args: LgButtonGroupComponent,
) => ({
  props: args,
  template,
});

export const standardButtonGroup = buttonGroupStory.bind({});
standardButtonGroup.storyName = 'Group';

standardButtonGroup.parameters = {
  controls: { hideNoControlsWarning: true },
  docs: {
    args: null,
    source: {
      code: template,
    },
  },
};
