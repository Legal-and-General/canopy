import { Component, Input } from '@angular/core';
import { moduleMetadata } from '@storybook/angular';
import { NgIf } from '@angular/common';

import { IconName, LgIconComponent } from '../../icon';
import {
  ButtonIconPosition,
  ButtonSize,
  ButtonVariant,
  LgButtonComponent,
} from '../index';
import { lgIconsArray } from '../../ui-icons-files';

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
  standalone: true,
  imports: [ LgButtonComponent, LgIconComponent, NgIf ],
})
class ButtonComponentExampleComponent {
  @Input() disabled: boolean;
  @Input() fullWidth: boolean;
  @Input() icon: IconName;
  @Input() iconButton: boolean;
  @Input() doubleIconButton: boolean;
  @Input() iconPosition: ButtonIconPosition;
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
      options: [ 'None', ...lgIconsArray.map(i => i.name) ],
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
  options: lgIconsArray.map(i => i.name),
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

export const primaryDark = {
  name: 'Primary dark',
  render: (args: LgButtonComponent) => ({
    props: args,
    template: buttonTemplate,
  }),
  args: {
    ...defaultArgValues,
    variant: 'primary-dark',
  },
  globals: {
    backgrounds: { value: setBackground('primary-dark') },
  },
};

export const primaryLight = {
  name: 'Primary light',
  render: (args: LgButtonComponent) => ({
    props: args,
    template: buttonTemplate,
  }),
  args: {
    ...defaultArgValues,
    variant: 'primary-light',
  },
  globals: {
    backgrounds: { value: setBackground('primary-light') },
  },
};

export const secondaryDark = {
  name: 'Secondary dark',
  render: (args: LgButtonComponent) => ({
    props: args,
    template: buttonTemplate,
  }),
  args: {
    ...defaultArgValues,
    variant: 'secondary-dark',
  },
  globals: {
    backgrounds: { value: setBackground('secondary-dark') },
  },
};

export const secondaryLight = {
  name: 'Secondary light',
  render: (args: LgButtonComponent) => ({
    props: args,
    template: buttonTemplate,
  }),
  args: {
    ...defaultArgValues,
    variant: 'secondary-light',
  },
  globals: {
    backgrounds: { value: setBackground('secondary-light') },
  },
};

export const textWithIcon = {
  name: 'Single icon with text',
  render: (args: LgButtonComponent) => ({
    props: args,
    template: buttonTemplate,
  }),
  argTypes: {
    icon: iconArgType,
  },
  args: {
    ...defaultArgValues,
    variant: 'primary-dark',
    icon: lgIconsArray[0].name,
  },
  globals: {
    backgrounds: { value: setBackground('primary-dark') },
  },
};

export const textWithDoubleIcon = {
  name: 'Double icon with text',
  render: (args: LgButtonComponent) => ({
    props: args,
    template: buttonTemplate,
  }),
  argTypes: {
    icon: iconArgType,
  },
  args: {
    ...defaultArgValues,
    variant: 'primary-dark',
    icon: lgIconsArray[0].name,
    doubleIconButton: true,
  },
  globals: {
    backgrounds: { value: setBackground('primary-dark') },
  },
};

export const iconOnly = {
  name: 'Icon only',
  render: (args: LgButtonComponent) => ({
    props: args,
    template: buttonTemplate,
  }),
  args: {
    ...defaultArgValues,
    variant: 'primary-dark',
    iconButton: true,
    icon: lgIconsArray[0].name,
  },
  globals: {
    backgrounds: { value: setBackground('primary-dark') },
  },
};

function setBackground(variant: string) {
  const bgs = {
    'primary-dark': 'light',
    'primary-light': 'super-blue',
    'secondary-dark': 'light',
    'secondary-light': 'super-blue',
    link: 'light',
    'add-on': 'light',
  };

  return bgs[variant];
}

export const link = {
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
