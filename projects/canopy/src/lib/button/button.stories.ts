import { Component, Input } from '@angular/core';

import { boolean, text, withKnobs, select } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import { LgButtonModule } from './button.module';
import { notes } from './button.notes';
import { iconsArray } from '../icon/icons.stories';
import { LgIconModule, LgIconRegistry } from '../icon';
import { ButtonIconPosition } from '.';
import { ButtonVariant, ButtonSize } from './button.interface';

const buttonVariants = [
  'add-on',
  'solid-primary',
  'solid-secondary',
  'outline-primary',
  'outline-secondary',
  'reverse-primary',
  'reverse-secondary',
];

const propsGroupId = 'properties';
const contentGroupId = 'content';

@Component({
  selector: 'lg-button-story',
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
      <lg-icon *ngIf="showIcon || iconButton" [name]="icon"></lg-icon>
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
      <lg-icon *ngIf="showIcon || iconButton" [name]="icon"></lg-icon>
    </a>
  `,
})
class ButtonStoryComponent {
  @Input() disabled: boolean;
  @Input() fullWidth: boolean;
  @Input() icon: string;
  @Input() iconButton: boolean;
  @Input() iconPosition: ButtonIconPosition;
  @Input() loading: boolean;
  @Input() showIcon: boolean;
  @Input() size: ButtonSize;
  @Input() variant: string;
  @Input() content: string;
  icons = iconsArray;
  constructor(private registry: LgIconRegistry) {
    this.registry.registerIcons(this.icons);
  }
}

export default {
  title: 'Components/Button',
  parameters: {
    decorators: [
      withKnobs,
      moduleMetadata({
        declarations: [ButtonStoryComponent],
        imports: [LgButtonModule, LgIconModule],
      }),
    ],
    notes: {
      markdown: notes,
    },
  },
};

interface KnobsConfig {
  disabled?: boolean;
  fullWidth?: boolean;
  iconButton?: boolean;
  loading?: boolean;
  showIcon?: boolean;
  size?: ButtonSize;
  variant: ButtonVariant;
}

const createBtnStory = (config: KnobsConfig) => ({
  template: `
    <lg-button-story
      [disabled]="disabled"
      [fullWidth]="fullWidth ? true : null"
      [icon]="icon"
      [iconButton]="iconButton"
      [iconPosition]="iconPosition"
      [loading]="loading ? true : null"
      [showIcon]="showIcon"
      [size]="size"
      [variant]="variant"
      [content]="content"
      >
  </lg-button-story>
  `,
  props: {
    disabled: boolean('disabled', false, propsGroupId),
    content: text('content', 'Button', contentGroupId),
    fullWidth: boolean('fullWidth', config.fullWidth, propsGroupId),
    icon: select(
      'icon',
      iconsArray.map((icon) => icon.name),
      'add',
      contentGroupId,
    ),
    iconButton: boolean('iconButton', config.iconButton, propsGroupId),
    iconPosition: select('iconPosition', ['left', 'right'], 'right', propsGroupId),
    loading: boolean('loading', config.loading, propsGroupId),
    showIcon: boolean('show icon', config.showIcon, contentGroupId),
    size: select('size', ['sm', 'md'], 'md', propsGroupId),
    variant: select('variant', buttonVariants, config.variant, propsGroupId),
  },
});

export const primaryButton = () =>
  createBtnStory({
    variant: 'solid-primary',
  });

export const secondaryButton = () =>
  createBtnStory({
    variant: 'solid-secondary',
  });

export const outlinePrimary = () =>
  createBtnStory({
    variant: 'outline-primary',
  });

export const outlineSecondary = () =>
  createBtnStory({
    variant: 'outline-secondary',
  });

export const reversePrimary = () =>
  createBtnStory({
    variant: 'reverse-primary',
  });

export const reverseSecondary = () =>
  createBtnStory({
    variant: 'reverse-secondary',
  });

export const textWithIcon = () =>
  createBtnStory({
    variant: 'solid-primary',
    showIcon: true,
  });

export const iconOnly = () =>
  createBtnStory({
    variant: 'solid-primary',
    showIcon: true,
    iconButton: true,
  });
