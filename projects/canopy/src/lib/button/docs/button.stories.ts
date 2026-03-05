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
      [loading]="loading"
      [priority]="priority"
    >
      {{ content }}
      @if (icon) {
        <lg-icon [name]="icon"></lg-icon>
      }
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
        [loading]="loading"
        [priority]="priority"
      >
        {{ content }}
        @if (icon) {
          <lg-icon [name]="icon"></lg-icon>
        }
      </a>
    }
  `,
  imports: [ LgButtonComponent, LgIconComponent ],
})
class ButtonComponentExampleComponent {
  @Input() disabled: boolean;
  @Input() fullWidth: boolean;
  @Input() leftIcon: boolean;
  @Input() icon: IconName;
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
    icon: {
      description:
        'Icon name to display on the right side of the button (added via content projection)',
      options: [ null, ...lgIconsArray.map(i => i.name) ],
      table: {
        type: {
          summary: 'IconName',
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
    ngAfterViewInit: {
      table: { disable: true },
    },
    leftIconClass: {
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
  icon: null,
};

const buttonTemplate = `
  <lg-button-component-example
    [disabled]="disabled"
    [fullWidth]="fullWidth"
    [iconButton]="iconButton"
    [leftIcon]="leftIcon"
    [icon]="icon"
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

export const TextWithIcon = {
  name: 'Text with icon',
  render: (args: LgButtonComponent) => ({
    props: args,
    template: buttonTemplate,
  }),
  args: {
    ...defaultArgValues,
    priority: 'primary',
    icon: 'chevron-right',
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
    icon: 'add',
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
