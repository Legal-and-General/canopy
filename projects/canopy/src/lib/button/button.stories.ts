import { Component, Input } from '@angular/core';

import { moduleMetadata, Story } from '@storybook/angular';

import { LgButtonModule } from './button.module';
import { notes } from './button.notes';
import { LgIconModule, LgIconRegistry } from '../icon';
import { ButtonIconPosition, ButtonSize, LgButtonComponent } from '.';
import { iconsArray } from '../icon/icons.stories';

@Component({
  selector: 'lg-button-component-example',
  template: `
    <p>Used on a <strong>button</strong> element</p>
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
    <p>Used on a <strong>link</strong> element</p>
    <a
      lg-button
      href="#"
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
    </a>
  `,
})
class ButtonComponentExampleComponent {
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
      declarations: [ButtonComponentExampleComponent],
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
      description: 'Text content within the button',
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
const buttonStory: Story<LgButtonComponent> = (args: LgButtonComponent) => ({
  props: args,
  template: buttonTemplate,
});

const solidPrimaryExample = `
<button lg-button variant="solid-primary">
  Click me
</button>
`;
export const solidPrimary = buttonStory.bind({});
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
export const solidSecondary = buttonStory.bind({});
solidSecondary.storyName = 'Solid Secondary';
solidSecondary.args = {
  ...defaultArgValues,
  variant: 'solid-secondary',
};
solidSecondary.parameters = {
  docs: {
    source: {
      code: solidSecondaryExample,
    },
  },
};

const outlinePrimaryExample = `
<button lg-button variant="outline-primary">
  Click me
</button>
`;
export const outlinePrimary = buttonStory.bind({});
outlinePrimary.storyName = 'Outline primary';
outlinePrimary.args = {
  ...defaultArgValues,
  variant: 'outline-primary',
};
outlinePrimary.parameters = {
  docs: {
    source: {
      code: outlinePrimaryExample,
    },
  },
};

const outlineSecondaryExample = `
<button lg-button variant="outline-secondary">
  Click me
</button>
`;
export const outlineSecondary = buttonStory.bind({});
outlineSecondary.storyName = 'Outline secondary';
outlineSecondary.args = {
  ...defaultArgValues,
  variant: 'outline-secondary',
};
outlineSecondary.parameters = {
  docs: {
    source: {
      code: outlineSecondaryExample,
    },
  },
};

const reversePrimaryExample = `
  <button lg-button variant="reverse-primary">
    Click me
  </button>
`;
export const reversePrimary = buttonStory.bind({});
reversePrimary.storyName = 'Reverse primary';
reversePrimary.args = {
  ...defaultArgValues,
  variant: 'reverse-primary',
};
reversePrimary.parameters = {
  docs: {
    source: {
      code: reversePrimaryExample,
    },
  },
};

const reverseSecondaryExample = `
  <button lg-button variant="reverse-secondary">
    Click me
  </button>
`;
export const reverseSecondary = buttonStory.bind({});
reverseSecondary.storyName = 'Reverse secondary';
reverseSecondary.args = {
  ...defaultArgValues,
  variant: 'reverse-secondary',
};
reverseSecondary.parameters = {
  docs: {
    source: {
      code: reverseSecondaryExample,
    },
  },
};

const textWithIconExample = `
<button lg-button variant="solid-primary">
  {{ content }}
  <lg-icon name="secure-messaging"></lg-icon>
</button> 
`;
export const textWithIcon = buttonStory.bind({});
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
export const iconOnly = buttonStory.bind({});
iconOnly.storyName = 'Icon only';
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
