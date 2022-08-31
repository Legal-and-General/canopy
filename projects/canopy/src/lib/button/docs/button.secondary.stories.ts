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
import mdxNotes from './button.secondary.notes.mdx';
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
const buttonSecondaryStory: Story<LgButtonComponent> = (args: LgButtonComponent) => ({
  props: args,
  template: buttonTemplate,
});
const secondaryDarkExample = `
<button lg-button variant="secondary-dark">
  Click me
</button>
`;

export const secondaryDark = buttonSecondaryStory.bind({});
secondaryDark.storyName = 'Secondary dark';

secondaryDark.args = {
  ...defaultArgValues,
  variant: 'secondary-dark',
};

secondaryDark.parameters = {
  docs: {
    source: {
      code: secondaryDarkExample,
    },
  },
  backgrounds: {
    default: setBackground(secondaryDark.args.variant),
  },
};

const secondaryLightExample = `
<button lg-button variant="secondary-light">
  Click me
</button>
`;

export const secondaryLight = buttonSecondaryStory.bind({});
secondaryLight.storyName = 'Secondary light';

secondaryLight.args = {
  ...defaultArgValues,
  variant: 'secondary-light',
};

secondaryLight.parameters = {
  docs: {
    source: {
      code: secondaryLightExample,
    },
  },
  backgrounds: {
    default: setBackground(secondaryLight.args.variant),
  },
};
