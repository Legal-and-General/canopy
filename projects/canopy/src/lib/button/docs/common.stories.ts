import { Component, Input } from '@angular/core';

import { LgIconRegistry, lgIconsArray } from '../../icon';
import { ButtonIconPosition, ButtonSize } from '../index';

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
      <lg-icon *ngIf="icon !== 'None' && doubleIconButton" name="filter" first></lg-icon>
      {{ content }}
      <lg-icon *ngIf="icon !== 'None' && doubleIconButton" [name]="icon" second></lg-icon>
      <lg-icon *ngIf="icon !== 'None' && !doubleIconButton" [name]="icon"></lg-icon>
    </a>
  `,
})
export class ButtonComponentExampleComponent {
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

export const iconArgType = {
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

export const defaultArgValues = {
  content: 'Click me',
  disabled: false,
  fullWidth: false,
  iconButton: false,
  doubleIconButton: false,
  loading: false,
  icon: 'None',
  size: 'md',
};

export const buttonTemplate = `
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

export function setBackground(variant: string) {
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
