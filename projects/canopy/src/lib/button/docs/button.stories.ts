import { Component, Input } from '@angular/core';
import { moduleMetadata } from '@storybook/angular';

import { IconName, LgIconComponent } from '../../icon';
import { ButtonPriority, LgButtonComponent } from '../index';
// Direct import required for Webpack compatibility - do not use barrel file
import { lgIconsArray } from '../../ui-icons-files/set/lgIconsArray';

const buttonVariants = [ 'primary', 'secondary', 'link' ];

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
      [priority]="priority"
    >
      {{ content }}
    </button>
    @if (priority !== 'link') {
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
        [priority]="priority"
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
  @Input() priority: ButtonPriority;
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
    content: {
      description: 'Text content within the button',
    },
    disabled: {
      description: 'Programmatically disable the button',
      control: {
        type: 'boolean',
      },
    },
    fullWidth: {
      description: 'If the button has to span full width',
      control: {
        type: 'boolean',
      },
    },
    iconButton: {
      description: 'The button displays an icon only',
      control: {
        type: 'boolean',
      },
    },
    loading: {
      description: 'If the button shows a loading spinner',
      control: {
        type: 'boolean',
      },
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
    priority: {
      description: 'The priority level of the button',
      options: [ ...buttonVariants ],
      table: {
        defaultValue: 'primary',
        type: {
          summary: 'ButtonPriority',
        },
      },
      control: {
        type: 'select',
      },
    },
    _priority: {
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
    leftIconClass: {
      table: { disable: true },
    },
    rightIconClass: {
      table: { disable: true },
    },
    hasIcon: {
      table: { disable: true },
    },
    disabledAttr: {
      table: { disable: true },
    },
    loadingClass: {
      table: { disable: true },
    },
    fullWidthClass: {
      table: { disable: true },
    },
    iconButtonClass: {
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
};

const buttonTemplate = `
  <lg-button-component-example
    [disabled]="disabled"
    [fullWidth]="fullWidth"
    [iconButton]="iconButton"
    [leftIcon]="leftIcon"
    [rightIcon]="rightIcon"
    [loading]="loading"
    [priority]="priority"
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
    priority: 'primary',
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
    priority: 'secondary',
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
    priority: 'primary',
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
    priority: 'primary',
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
    priority: 'primary',
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
    priority: 'link',
  },
  globals: {
    backgrounds: { value: setBackground('link') },
  },
};
