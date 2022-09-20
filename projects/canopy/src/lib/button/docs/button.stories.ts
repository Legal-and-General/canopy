import { Component, Input } from '@angular/core';
import { moduleMetadata, Story } from '@storybook/angular';

import { LgIconModule, LgIconRegistry, lgIconsArray } from '../../icon';
import { LgButtonModule } from '../button.module';
import { ButtonIconPosition, ButtonSize, LgButtonComponent } from '../index';

const buttonVariants = [
  'primary-dark',
  'primary-light',
  'secondary-dark',
  'secondary-light',
  'link',
  'add-on',
];

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
      <lg-icon *ngIf="icon !== 'None' && doubleIconButton" name="filter" first></lg-icon>
      {{ content }}
      <lg-icon *ngIf="icon !== 'None' && doubleIconButton" [name]="icon" second></lg-icon>
      <lg-icon *ngIf="icon !== 'None' && !doubleIconButton" [name]="icon"></lg-icon>
    </button>
    <ng-container *ngIf="variant !== 'link'">
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
        <lg-icon
          *ngIf="icon !== 'None' && doubleIconButton"
          name="filter"
          first
        ></lg-icon>
        {{ content }}
        <lg-icon
          *ngIf="icon !== 'None' && doubleIconButton"
          [name]="icon"
          second
        ></lg-icon>
        <lg-icon *ngIf="icon !== 'None' && !doubleIconButton" [name]="icon"></lg-icon>
      </a>
    </ng-container>
  `,
})
class ButtonComponentExampleComponent {
  @Input() disabled: boolean;
  @Input() fullWidth: boolean;
  @Input() icon: string;
  @Input() iconButton: boolean;
  @Input() doubleIconButton: boolean;
  @Input() iconPosition: ButtonIconPosition;
  @Input() loading: boolean;
  @Input() size: ButtonSize;
  @Input() variant: string;
  @Input() content: string;
  constructor(private registry: LgIconRegistry) {
    this.registry.registerIcons(lgIconsArray);
  }
}

export default {
  title: 'Components/Button/Examples',
  component: LgButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [ ButtonComponentExampleComponent ],
      imports: [ LgButtonModule, LgIconModule ],
    }),
  ],
  parameters: {
    viewMode: 'story',
    previewTabs: { 'storybook/docs/panel': { hidden: true } },
  },
  argTypes: {
    variant: {
      options: [ ...buttonVariants ],
      table: {
        defaultValue: 'primary-dark',
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
    ngAfterViewInit: {
      table: { disable: true },
    },
    icons: {
      table: { disable: true },
    },
  },
};

const iconArgType = {
  description: 'Icon to display',
  options: lgIconsArray.map((i) => i.name),
  table: {
    defaultValue: lgIconsArray[0].name,
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
  doubleIconButton: false,
  loading: false,
  icon: 'None',
  size: 'md',
};

const buttonTemplate = `
  <lg-button-component-example
    [disabled]="disabled"
    [fullWidth]="fullWidth"
    [iconButton]="iconButton"
    [doubleIconButton]="doubleIconButton"
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

export const primaryDark = buttonStory.bind({});
primaryDark.storyName = 'Primary dark';

primaryDark.args = {
  ...defaultArgValues,
  variant: 'primary-dark',
};

primaryDark.parameters = {
  backgrounds: {
    default: setBackground(primaryDark.args.variant),
  },
};

export const primaryLight = buttonStory.bind({});
primaryLight.storyName = 'Primary light';

primaryLight.args = {
  ...defaultArgValues,
  variant: 'primary-light',
};

primaryLight.parameters = {
  backgrounds: {
    default: setBackground(primaryLight.args.variant),
  },
};

export const secondaryDark = buttonStory.bind({});
secondaryDark.storyName = 'Secondary dark';

secondaryDark.args = {
  ...defaultArgValues,
  variant: 'secondary-dark',
};

secondaryDark.parameters = {
  backgrounds: {
    default: setBackground(secondaryDark.args.variant),
  },
};

export const secondaryLight = buttonStory.bind({});
secondaryLight.storyName = 'Secondary light';

secondaryLight.args = {
  ...defaultArgValues,
  variant: 'secondary-light',
};

secondaryLight.parameters = {
  backgrounds: {
    default: setBackground(secondaryLight.args.variant),
  },
};

export const textWithIcon = buttonStory.bind({});
textWithIcon.storyName = 'Single icon with text';

textWithIcon.argTypes = {
  icon: iconArgType,
};

textWithIcon.args = {
  ...defaultArgValues,
  variant: 'primary-dark',
  icon: lgIconsArray[0].name,
};

textWithIcon.parameters = {
  backgrounds: {
    default: setBackground(textWithIcon.args.variant),
  },
};

export const textWithDoubleIcon = buttonStory.bind({});
textWithDoubleIcon.storyName = 'Double icon with text';

textWithDoubleIcon.argTypes = {
  icon: iconArgType,
};

textWithDoubleIcon.args = {
  ...defaultArgValues,
  variant: 'primary-dark',
  icon: lgIconsArray[0].name,
  doubleIconButton: true,
};

textWithDoubleIcon.parameters = {
  backgrounds: {
    default: setBackground(textWithDoubleIcon.args.variant),
  },
};

export const iconOnly = buttonStory.bind({});
iconOnly.storyName = 'Icon only';

iconOnly.argTypes = {
  icon: iconArgType,
};

iconOnly.args = {
  ...defaultArgValues,
  variant: 'primary-dark',
  iconButton: true,
  icon: lgIconsArray[0].name,
};

iconOnly.parameters = {
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
    link: 'Default',
    'add-on': 'Default',
  };

  return bgs[variant];
}

export const link = buttonStory.bind({});
link.storyName = 'Link';

link.args = {
  ...defaultArgValues,
  variant: 'link',
};

link.parameters = {
  backgrounds: {
    default: setBackground(link.args.variant),
  },
};
