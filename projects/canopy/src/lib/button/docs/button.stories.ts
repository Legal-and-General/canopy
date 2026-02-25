import { Component, Input } from '@angular/core';
import { moduleMetadata } from '@storybook/angular';

import { IconName, LgIconComponent } from '../../icon';
import { ButtonSize, ButtonVariant, LgButtonComponent } from '../index';
// Direct import required for Webpack compatibility - do not use barrel file
import { lgIconsArray } from '../../ui-icons-files/set/lgIconsArray';

const buttonVariants = [ 'primary', 'secondary', 'link', 'add-on' ];

@Component({
  selector: 'lg-button-component-example',
  template: `
    <p>Used on a <strong>button</strong> element</p>
    <button
      lg-button
      [disabled]="disabled"
      [fullWidth]="fullWidth"
      [iconButton]="iconButton"
      [leftIcon]="leftIcon"
      [rightIcon]="rightIcon"
      [loading]="loading"
      [size]="size"
      [variant]="variant"
    >
      {{ content }}
    </button>
    @if (variant !== 'link') {
      <p>Used on a <strong>link</strong> element</p>
      <a
        lg-button
        href="#"
        [disabled]="disabled"
        [fullWidth]="fullWidth"
        [iconButton]="iconButton"
        [leftIcon]="leftIcon"
        [rightIcon]="rightIcon"
        [loading]="loading"
        [size]="size"
        [variant]="variant"
      >
        {{ content }}
      </a>
    }
  `,
  imports: [ LgButtonComponent, LgIconComponent ],
})
class ButtonComponentExampleComponent {
  @Input() disabled: boolean;
  @Input() fullWidth: boolean;
  @Input() leftIcon: boolean;
  @Input() rightIcon: IconName | null;
  @Input() iconButton: boolean;
  @Input() loading: boolean;
  @Input() size: ButtonSize;
  @Input() variant: ButtonVariant;
  @Input() content: string;
}

export default {
  title: 'Components/Button/Examples',
  component: LgButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [ ButtonComponentExampleComponent ],
    }),
  ],
  argTypes: {
    variant: {
      options: [ ...buttonVariants ],
      table: {
        defaultValue: 'primary',
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
    leftIcon: {
      description: 'Display arrow-left icon on the left side of the button',
      control: {
        type: 'boolean',
      },
    },
    rightIcon: {
      description: 'Icon name to display on the right side of the button',
      options: [ null, ...lgIconsArray.map(i => i.name) ],
      table: {
        type: {
          summary: 'IconName | null',
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
    ngOnInit: {
      table: { disable: true },
    },
  },
};

const defaultArgValues = {
  content: 'Click me',
  disabled: false,
  fullWidth: false,
  iconButton: false,
  loading: false,
  leftIcon: false,
  rightIcon: null,
  size: 'md',
};

const buttonTemplate = `
  <lg-button-component-example
    [disabled]="disabled"
    [fullWidth]="fullWidth"
    [iconButton]="iconButton"
    [leftIcon]="leftIcon"
    [rightIcon]="rightIcon"
    [loading]="loading"
    [size]="size"
    [variant]="variant"
    [content]="content">
  </lg-button-component-example>
`;

export const Primary = {
  name: 'Primary',
  render: (args: LgButtonComponent) => ({
    props: args,
    template: buttonTemplate,
  }),
  args: {
    ...defaultArgValues,
    variant: 'primary',
  },
  globals: {
    backgrounds: { value: setBackground('primary') },
  },
};

export const Secondary = {
  name: 'Secondary',
  render: (args: LgButtonComponent) => ({
    props: args,
    template: buttonTemplate,
  }),
  args: {
    ...defaultArgValues,
    variant: 'secondary',
  },
  globals: {
    backgrounds: { value: setBackground('secondary') },
  },
};

export const TextWithRightIcon = {
  name: 'Text with right icon',
  render: (args: LgButtonComponent) => ({
    props: args,
    template: buttonTemplate,
  }),
  args: {
    ...defaultArgValues,
    variant: 'primary',
    rightIcon: 'chevron-right',
  },
  globals: {
    backgrounds: { value: setBackground('primary') },
  },
};

export const TextWithLeftIcon = {
  name: 'Text with left arrow icon',
  render: (args: LgButtonComponent) => ({
    props: args,
    template: buttonTemplate,
  }),
  args: {
    ...defaultArgValues,
    variant: 'primary',
    content: 'Back',
    leftIcon: true,
  },
  globals: {
    backgrounds: { value: setBackground('primary') },
  },
};

export const IconOnly = {
  name: 'Icon only',
  render: (args: LgButtonComponent) => ({
    props: args,
    template: buttonTemplate,
  }),
  args: {
    ...defaultArgValues,
    variant: 'primary',
    iconButton: true,
    content: '',
    rightIcon: 'add',
  },
  globals: {
    backgrounds: { value: setBackground('primary') },
  },
};

function setBackground(variant: string) {
  const bgs = {
    primary: 'light',
    secondary: 'light',
    link: 'light',
    'add-on': 'light',
  };

  return bgs[variant];
}

export const Link = {
  name: 'Link',
  render: (args: LgButtonComponent) => ({
    props: args,
    template: buttonTemplate,
  }),
  args: {
    ...defaultArgValues,
    variant: 'link',
  },
  globals: {
    backgrounds: { value: setBackground('link') },
  },
};
