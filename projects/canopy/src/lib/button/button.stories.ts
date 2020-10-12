import { Component, Input } from '@angular/core';

import { boolean, text, withKnobs, select } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import { LgButtonModule } from './button.module';
import { notes } from './button.notes';
import { iconsArray } from '../icon/icons.stories';
import { LgIconModule, LgIconRegistry } from '../icon';
import { ButtonIconPosition } from '.';
import { Variant } from './button.interface';

const buttonVariants = [
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
    <button
      lg-button
      [variant]="variant"
      [iconButton]="iconButton"
      [iconPosition]="iconPosition"
      [loading]="loading"
      [fullWidth]="fullWidth"
    >
      <ng-content></ng-content>
      <lg-icon *ngIf="showIcon || iconButton" [name]="icon"></lg-icon>
    </button>
  `,
})
class ButtonStoryComponent {
  @Input() icon: string;
  @Input() variant: string;
  @Input() fullWidth: boolean;
  @Input() iconButton: boolean;
  @Input() iconPosition: ButtonIconPosition;
  @Input() loading: boolean;
  @Input() showIcon: boolean;
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
  variant: Variant;
  iconButton?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
  showIcon?: boolean;
}

const createBtnStory = (config: KnobsConfig) => ({
  template: `
    <lg-button-story
      [variant]="variant"
      [fullWidth]="fullWidth ? true : null"
      [loading]="loading ? true : null"
      [showIcon]="showIcon"
      [iconButton]="iconButton"
      [icon]="icon"
      [iconPosition]="iconPosition"
      >
      {{content}}
  </lg-button-story>
  `,
  props: {
    variant: select('variant', buttonVariants, config.variant, propsGroupId),
    iconButton: boolean('iconButton', config.iconButton, propsGroupId),
    iconPosition: select('iconPosition', ['left', 'right'], 'right', propsGroupId),
    fullWidth: boolean('fullWidth', config.fullWidth, propsGroupId),
    loading: boolean('loading', config.loading, propsGroupId),
    content: text('content', 'Button', contentGroupId),
    showIcon: boolean('show icon', config.showIcon, contentGroupId),
    icon: select(
      'icon',
      iconsArray.map(icon => icon.name),
      'add',
      contentGroupId,
    ),
  },
});

export const primaryButton = () =>
  createBtnStory({
    variant: 'solid-primary',
  });
primaryButton.story = {
  parameters: {
    'in-dsm': {
      id: '5eb292680f022e10952f6b54',
    },
  },
};

export const secondaryButton = () =>
  createBtnStory({
    variant: 'solid-secondary',
  });
secondaryButton.story = {
  parameters: {
    'in-dsm': {
      id: '5eb4178bd037c0361eb5b9e8',
    },
  },
};

export const outlinePrimary = () =>
  createBtnStory({
    variant: 'outline-primary',
  });
outlinePrimary.story = {
  parameters: {
    'in-dsm': {
      id: '5ebab3747f701b0829ba471e',
    },
  },
};

export const outlineSecondary = () =>
  createBtnStory({
    variant: 'outline-secondary',
  });
outlineSecondary.story = {
  parameters: {
    'in-dsm': {
      id: '5ebab380a6ef0234a74a414d',
    },
  },
};

export const reversePrimary = () =>
  createBtnStory({
    variant: 'reverse-primary',
  });
reversePrimary.story = {
  parameters: {
    'in-dsm': {
      id: '5ebab38d7f701b688aba4724',
    },
  },
};

export const reverseSecondary = () =>
  createBtnStory({
    variant: 'reverse-secondary',
  });
reversePrimary.story = {
  parameters: {
    'in-dsm': {
      id: '5ebab396602d936ef763d72b',
    },
  },
};

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
