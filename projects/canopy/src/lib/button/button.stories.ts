import { Component, Input } from '@angular/core';

import { moduleMetadata, Story } from '@storybook/angular';

import { LgButtonModule } from './button.module';
import { notes } from './button.notes';
import { LgIconModule, LgIconRegistry } from '../icon';
import { ButtonIconPosition, ButtonSize, LgButtonComponent } from '.';
import { iconsArray } from '../icon/icons.stories';
// import type { ButtonVariant } from './button.interface';

@Component({
  selector: 'lg-button-component-example',
  template: `
    <button
      lg-button
      [disabled]="disabled"
      [fullWidth]="fullWidth"
      [iconButton]="iconButton"
      [iconPosition]="iconPosition"
      [loading]="loading"
      [size]="size"
      [variant]="variant"
    >
      {{ content }}
      <lg-icon *ngIf="icon !== 'None'" [name]="icon"></lg-icon>
    </button>
  `,
})
class ButtonComponentExample {
  @Input() disabled: boolean;
  @Input() fullWidth: boolean;
  @Input() icon: string;
  @Input() iconButton: boolean;
  @Input() iconPosition: ButtonIconPosition;
  @Input() loading: boolean;
  @Input() size: ButtonSize;
  @Input() variant: string;
  @Input() content: string;
  icons = iconsArray;
  constructor(private registry: LgIconRegistry) {
    this.registry.registerIcons(this.icons);
  }
}

const buttonVariants = [
  'add-on',
  'solid-primary',
  'solid-secondary',
  'outline-primary',
  'outline-secondary',
  'reverse-primary',
  'reverse-secondary',
];

export default {
  title: 'Components/Button',
  component: LgButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [ButtonComponentExample],
      imports: [LgButtonModule, LgIconModule],
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
    variant: {
      options: [...buttonVariants],
      defaultValue: 'solid-primary',
      table: {
        type: {
          summary: 'ButtonVariant',
        },
      },
      control: {
        type: 'select',
      },
    },
    content: {
      description: 'Text content within the button'
    },
    icon: {
      description: 'Icon to display',
      options: ['None', ...iconsArray.map((i) => i.name)],
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

const iconArgType = {
  description: 'Icon to display',
  options: iconsArray.map((i) => i.name),
  defaultValue: iconsArray[0].name,
  table: {
    type: {
      type: { summary: 'string' },
    },
  },
  control: {
    type: 'select',
  },
};

const defaultArgValues = {
  content: 'Click me',
  disabled: false,
  fullWidth: false,
  iconButton: false,
  loading: false,
  icon: 'None',
  size: 'md',
};

const buttonTemplate = `
  <lg-button-component-example
    [disabled]="disabled"
    [fullWidth]="fullWidth"
    [iconButton]="iconButton"
    [iconPosition]="iconPosition"
    [loading]="loading"
    [size]="size"
    [variant]="variant"
    [content]="content"
    [icon]="icon">
  </lg-button-component-example>
`;

const solidPrimaryExample = `
<button lg-button variant="solid-primary">
  Click me
</button>
`;
const solidPrimaryStory: Story<LgButtonComponent> = (args: LgButtonComponent) => ({
  props: args,
  template: buttonTemplate,
});
export const solidPrimary = solidPrimaryStory.bind({});
solidPrimary.storyName = 'Solid Primary';
solidPrimary.args = {
  ...defaultArgValues,
  variant: 'solid-primary',
};
solidPrimary.parameters = {
  docs: {
    source: {
      code: solidPrimaryExample,
    },
  },
};

const solidSecondaryExample = `
<button lg-button variant="solid-secondary">
  Click me
</button>
`;
const solidSecondaryStory: Story<LgButtonComponent> = (args: LgButtonComponent) => ({
  props: args,
  template: buttonTemplate,
});
export const solidSecondary = solidSecondaryStory.bind({});
solidSecondary.storyName = 'Solid Secondary';
solidSecondary.args = {
  ...defaultArgValues,
  variant: 'solid-secondary',
};
solidSecondary.parameters = {
  docs: {
    source: {
      code: solidSecondaryExample
    },
  },
};

const outlinePrimaryExample = `
<button lg-button variant="outline-primary">
  Click me
</button>
`;
const outlinePrimaryStory: Story<LgButtonComponent> = (args: LgButtonComponent) => ({
  props: args,
  template: buttonTemplate,
});
export const outlinePrimary = outlinePrimaryStory.bind({});
outlinePrimary.storyName = 'Outline primary';
outlinePrimary.args = {
  ...defaultArgValues,
  variant: 'outline-primary',
};
outlinePrimary.parameters = {
  docs: {
    source: {
      code: outlinePrimaryExample,
    }
  },
};

const outlineSecondaryExample = `
<button lg-button variant="outline-secondary">
  Click me
</button>
`;
const outlineSecondaryStory: Story<LgButtonComponent> = (args: LgButtonComponent) => ({
  props: args,
  template: buttonTemplate,
});
export const outlineSecondary = outlineSecondaryStory.bind({});
outlineSecondary.storyName = 'Outline secondary';
outlineSecondary.args = {
  ...defaultArgValues,
  variant: 'outline-secondary',
};
outlineSecondary.parameters = {
  docs: {
    source: {
      code: outlineSecondaryExample
    }
  },
};

const reversePrimaryExample = `
  <button lg-button variant="reverse-primary">
    Click me
  </button>
`;
const reversePrimaryStory: Story<LgButtonComponent> = (args: LgButtonComponent) => ({
  props: args,
  template: buttonTemplate,
});
export const reversePrimary = reversePrimaryStory.bind({});
reversePrimary.storyName = 'Reverse primary';
reversePrimary.args = {
  ...defaultArgValues,
  variant: 'reverse-primary',
};
reversePrimary.parameters = {
  docs: {
    source: {
      code: reversePrimaryExample
    }
  },
};

const reverseSecondaryExample = `
  <button lg-button variant="reverse-secondary">
    Click me
  </button>
`;
const reverseSecondaryStory: Story<LgButtonComponent> = (args: LgButtonComponent) => ({
  props: args,
  template: buttonTemplate,
});
export const reverseSecondary = reverseSecondaryStory.bind({});
reverseSecondary.storyName = 'Reverse secondary';
reverseSecondary.args = {
  ...defaultArgValues,
  variant: 'reverse-secondary',
};
reverseSecondary.parameters = {
  docs: {
    source: {
      code: reverseSecondaryExample
    },
  },
};

const textWithIconExample = `
<button lg-button variant="solid-primary">
  {{ content }}
  <lg-icon name="secure-messaging"></lg-icon>
</button> 
`;
const textWithIconStory: Story<LgButtonComponent> = (args: LgButtonComponent) => ({
  props: args,
  template: buttonTemplate,
});
export const textWithIcon = textWithIconStory.bind({});
textWithIcon.storyName = 'Icon with text';
textWithIcon.argTypes = {
  icon: iconArgType,
};
textWithIcon.args = {
  ...defaultArgValues,
  variant: 'solid-primary',
  icon: iconsArray[0].name,
};
textWithIcon.parameters = {
  docs: {
    source: {
      code: textWithIconExample,
    },
  },
};


const iconOnlyExample = `
<button lg-button variant="solid-primary" [iconButton]="true">
  {{ content }}
  <lg-icon name="secure-messaging"></lg-icon>
</button> 
`;
const iconOnlyStory: Story<LgButtonComponent> = (args: LgButtonComponent) => ({
  props: args,
  template: buttonTemplate,
});
export const iconOnly = iconOnlyStory.bind({});
iconOnly.storyName = 'Icon Only';
iconOnly.argTypes = {
  icon: iconArgType,
};
iconOnly.args = {
  ...defaultArgValues,
  variant: 'solid-primary',
  iconButton: true,
  icon: iconsArray[0].name,
};
iconOnly.parameters = {
  docs: {
    source: {
      code: iconOnlyExample,
    },
  },
};

/* Old button stories
export const buttonGroup = () => ({
  template: `
    <lg-button-group>
      <button
        lg-button
        variant="solid-primary"
      >Button</button>
      <a
        lg-button
        href="#"
        variant="outline-primary"
      >Link</a>
    </lg-button-group>
  `,
});
*/
