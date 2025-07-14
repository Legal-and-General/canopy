import { Meta, moduleMetadata } from '@storybook/angular';

import { LgButtonGroupComponent } from '../button-group/button-group.component';
import { LgButtonComponent } from '../button.component';

export default {
  title: 'Components/Button/Examples',
  component: LgButtonGroupComponent,
  decorators: [
    moduleMetadata({
      imports: [ LgButtonComponent ],
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

export const standardButtonGroup = {
  name: 'Group',
  render: (args: LgButtonGroupComponent) => ({
    props: args,
    template,
  }),
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      args: null,
      source: {
        code: template,
      },
    },
  },
};
