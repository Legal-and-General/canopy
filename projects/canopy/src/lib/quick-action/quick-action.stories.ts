import { Component, Input } from '@angular/core';

import { select, text, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import { LgIconModule } from '../icon/icon.module';
import { LgIconRegistry } from '../icon/icon.registry';
import { iconsArray } from '../icon/icons.stories';
import { LgQuickActionModule } from './quick-action.module';
import { notes } from './quick-action.notes';

@Component({
  selector: 'lg-quick-action-link',
  template: `
    <a lg-quick-action [href]="link" [target]="target">
      <lg-icon [name]="icon"></lg-icon>
      {{ content }}
    </a>
  `,
})
class LgQuickActionLinkComponent {
  @Input() content: string;
  @Input() link: string;
  @Input() target: string;
  @Input() icon: string;
  icons = iconsArray;
  constructor(private registry: LgIconRegistry) {
    this.registry.registerIcons(this.icons);
  }
}

@Component({
  selector: 'lg-quick-action-button',
  template: `
    <button lg-quick-action>
      <lg-icon [name]="icon"></lg-icon>
      {{ content }}
    </button>
  `,
})
class LgQuickActionButtonComponent {
  @Input() content: string;
  @Input() icon: string;
  icons = iconsArray;
  constructor(private registry: LgIconRegistry) {
    this.registry.registerIcons(this.icons);
  }
}

export default {
  title: 'Components/Quick Action',
  parameters: {
    decorators: [
      withKnobs,
      moduleMetadata({
        declarations: [LgQuickActionLinkComponent, LgQuickActionButtonComponent],
        imports: [LgQuickActionModule, LgIconModule],
      }),
    ],
    'in-dsm': {
      id: '5ed4e34ce3f5ee8be6874448',
    },
    notes: {
      markdown: notes,
    },
  },
};
const groupId = 'lg-quick-action';

export const link = () => ({
  template: `
    <lg-quick-action-link
      [target]="target"
      [link]="link"
      [content]="content"
      [icon]="icon">
    </lg-quick-action-link>
  `,
  props: {
    content: text('text', 'Send us a message', groupId),
    link: text('link', 'https://google.com', groupId),
    target: select('target', ['_blank', '_self'], '_blank', groupId),
    icon: select(
      'icon',
      iconsArray.map((icon) => icon.name),
      'secure-messaging',
      groupId,
    ),
  },
});

export const button = () => ({
  template: `
    <lg-quick-action-button
      [content]="content"
      [icon]="icon">
    </lg-quick-action-button>
  `,
  props: {
    content: text('text', 'Load more', groupId),
    icon: select(
      'icon',
      iconsArray.map((icon) => icon.name),
      'repeat',
      groupId,
    ),
  },
});
