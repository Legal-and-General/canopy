import { moduleMetadata, Story } from '@storybook/angular';

import { LgIconModule, lgIconsArray } from '../../icon';
import { LgButtonModule } from '../button.module';
import { LgButtonComponent } from '../button.component';

import {
  ButtonComponentExampleComponent,
  buttonTemplate,
  defaultArgValues,
  setBackground,
} from './common.stories';
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import mdxNotes from './button.primary.notes.mdx';
/* eslint-enable */

export default {
  title: 'Components/Button/Previews',
  component: LgButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [ ButtonComponentExampleComponent ],
      imports: [ LgButtonModule, LgIconModule ],
    }),
  ],
  parameters: {
    docs: {
      page: mdxNotes,
    },
  },
  argTypes: {
    variant: {
      table: { disable: true },
    },
    content: {
      description: 'Text content within the button',
    },
    icon: {
      description: 'Icon to display',
      options: [ 'None', ...lgIconsArray.map((i) => i.name) ],
      table: {
        type: {
          type: { summary: 'string' },
        },
      },
      control: {
        type: 'select',
      },
    },
    _variant: {
      table: { disable: true },
    },
    class: {
      table: { disable: true },
    },
    hostElement: {
      table: { disable: true },
    },
  },
};
const buttonStory: Story<LgButtonComponent> = (args: LgButtonComponent) => ({
  props: args,
  template: buttonTemplate,
});

const primaryDarkExample = `
<button lg-button variant="primary-dark">
  Click me
</button>
`;

export const primaryDark = buttonStory.bind({});
primaryDark.storyName = 'Primary dark';

primaryDark.args = {
  ...defaultArgValues,
  variant: 'primary-dark',
};

primaryDark.parameters = {
  docs: {
    source: {
      code: primaryDarkExample,
    },
  },
  backgrounds: {
    default: setBackground(primaryDark.args.variant),
  },
};

const primaryLightExample = `
<button lg-button variant="primary-light">
  Click me
</button>
`;

export const primaryLight = buttonStory.bind({});
primaryLight.storyName = 'Primary light';

primaryLight.args = {
  ...defaultArgValues,
  variant: 'primary-light',
};

primaryLight.parameters = {
  docs: {
    source: {
      code: primaryLightExample,
    },
  },
  backgrounds: {
    default: setBackground(primaryLight.args.variant),
  },
};
