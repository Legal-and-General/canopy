import { moduleMetadata, Story } from '@storybook/angular';

import { LgIconModule, lgIconsArray } from '../../icon';
import { LgButtonModule } from '../button.module';
import { LgButtonComponent } from '../button.component';

import {
  ButtonComponentExampleComponent,
  buttonTemplate,
  defaultArgValues,
  iconArgType,
  setBackground,
} from './common.stories';

export default {
  title: 'Components/Button/Previews',
  component: LgButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [ ButtonComponentExampleComponent ],
      imports: [ LgButtonModule, LgIconModule ],
    }),
  ],
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

const iconOnlyExample = `
<button lg-button variant="primary-dark" [iconButton]="true">
  {{ content }}
  <lg-icon name="add"></lg-icon>
</button>
`;

export const internalIconOnly = buttonStory.bind({});

internalIconOnly.argTypes = {
  icon: iconArgType,
};

internalIconOnly.args = {
  ...defaultArgValues,
  variant: 'primary-dark',
  iconButton: true,
  icon: lgIconsArray[0].name,
};

internalIconOnly.parameters = {
  docs: {
    source: {
      code: iconOnlyExample,
    },
  },
  backgrounds: {
    default: setBackground(internalIconOnly.args.variant),
  },
};
