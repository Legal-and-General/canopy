import { Component, Input } from '@angular/core';

import { moduleMetadata, Story } from '@storybook/angular';

import { LgButtonModule } from './button.module';
import { notes } from './button.notes';
import { LgIconModule, LgIconRegistry, lgIconsArray } from '../icon';
import { ButtonIconPosition, ButtonSize, LgButtonComponent } from '.';

const deprecatedButtonVariants = [
  'solid-primary',
  'outline-primary',
  'outline-secondary',
  'reverse-primary',
  'reverse-secondary',
];

const buttonVariants = [
  ...deprecatedButtonVariants,
  'add-on',
  'primary-dark',
  'primary-light',
  'secondary-dark',
  'secondary-light',
];

@Component({
  selector: 'lg-button-component-example',
  template: `
    <p *ngIf="isDeprecated()">
      This button is <strong>deprecated</strong> and it will be removed in a future
      update.
    </p>
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
  constructor(private registry: LgIconRegistry) {
    this.registry.registerIcons(lgIconsArray);
  }

  isDeprecated(): boolean {
    return Boolean(deprecatedButtonVariants.find((variant) => variant === this.variant));
  }
}

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
      options: ['None', ...lgIconsArray.map((i) => i.name)],
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
  options: lgIconsArray.map((i) => i.name),
  defaultValue: lgIconsArray[0].name,
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

const primaryDarkExample = `
<button lg-button variant="primary-dark">
  Click me
</button>
`;
export const primaryDark = buttonStory.bind({});
primaryDark.storyName = 'Primary Dark';
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
primaryLight.storyName = 'Primary Light';
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

const secondaryDarkExample = `
<button lg-button variant="secondary-dark">
  Click me
</button>
`;
export const secondaryDark = buttonStory.bind({});
secondaryDark.storyName = 'Secondary Dark';
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
export const secondaryLight = buttonStory.bind({});
secondaryLight.storyName = 'Secondary Light';
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

const solidPrimaryExample = `
<button lg-button variant="solid-primary">
  Click me
</button>
`;
export const solidPrimary = buttonStory.bind({});
solidPrimary.storyName = 'Solid Primary (deprecated)';
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
  backgrounds: {
    default: setBackground(solidPrimary.args.variant),
  },
};

const outlinePrimaryExample = `
<button lg-button variant="outline-primary">
  Click me
</button>
`;
export const outlinePrimary = buttonStory.bind({});
outlinePrimary.storyName = 'Outline primary (deprecated)';
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
  backgrounds: {
    default: setBackground(outlinePrimary.args.variant),
  },
};

const outlineSecondaryExample = `
<button lg-button variant="outline-secondary">
  Click me
</button>
`;
export const outlineSecondary = buttonStory.bind({});
outlineSecondary.storyName = 'Outline secondary (deprecated)';
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
  backgrounds: {
    default: setBackground(outlineSecondary.args.variant),
  },
};

const reversePrimaryExample = `
<button lg-button variant="reverse-primary">
  Click me
</button>
`;
export const reversePrimary = buttonStory.bind({});
reversePrimary.storyName = 'Reverse primary (deprecated)';
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
  backgrounds: {
    default: setBackground(reversePrimary.args.variant),
  },
};

const reverseSecondaryExample = `
<button lg-button variant="reverse-secondary">
  Click me
</button>
`;
export const reverseSecondary = buttonStory.bind({});
reverseSecondary.storyName = 'Reverse secondary (deprecated)';
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
  backgrounds: {
    default: setBackground(reverseSecondary.args.variant),
  },
};

const textWithIconExample = `
<button lg-button variant="solid-primary">
  {{ content }}
  <lg-icon name="add"></lg-icon>
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
  icon: lgIconsArray[0].name,
};
textWithIcon.parameters = {
  docs: {
    source: {
      code: textWithIconExample,
    },
  },
  backgrounds: {
    default: setBackground(textWithIcon.args.variant),
  },
};

const iconOnlyExample = `
<button lg-button variant="solid-primary" [iconButton]="true">
  {{ content }}
  <lg-icon name="add"></lg-icon>
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
  icon: lgIconsArray[0].name,
};
iconOnly.parameters = {
  docs: {
    source: {
      code: iconOnlyExample,
    },
  },
  backgrounds: {
    default: setBackground(iconOnly.args.variant),
  },
};

function setBackground(variant: string) {
  const bgs = {
    'primary-dark': 'Default',
    'primary-light': 'Super Blue',
    'secondary-dark': 'Default',
    'secondary-light': 'Super Blue',
    'solid-primary': 'Default',
    'outline-primary': 'Default',
    'outline-secondary': 'Default',
    'reverse-primary': 'Super Blue',
    'reverse-secondary': 'Leafy Green',
    'add-on': 'Default',
  };
  return bgs[variant];
}
