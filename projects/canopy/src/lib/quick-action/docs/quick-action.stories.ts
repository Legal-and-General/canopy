import { Component, Input } from '@angular/core';
import { Meta, moduleMetadata } from '@storybook/angular';

import { IconName, LgIconComponent } from '../../icon';
import { LgQuickActionComponent } from '../quick-action.component';
import { lgIconsArray } from '../../ui-icons-files';

@Component({
  selector: 'lg-quick-action-link',
  template: `
    <a lg-quick-action [href]="link" [target]="target">
      <lg-icon [name]="icon" />
      {{ content }}
    </a>
  `,
  imports: [ LgIconComponent, LgQuickActionComponent ],
})
class LgQuickActionLinkComponent {
  @Input() content: string;
  @Input() link: string;
  @Input() target: string;
  @Input() icon: IconName;
}

@Component({
  selector: 'lg-quick-action-button',
  template: `
    <button lg-quick-action>
      <lg-icon [name]="icon" />
      {{ content }}
    </button>
  `,
  imports: [ LgIconComponent, LgQuickActionComponent ],
})
class LgQuickActionButtonComponent {
  @Input() content: string;
  @Input() icon: IconName;
}

export default {
  title: 'Components/Quick action/Examples',
  tags: [ 'pending' ],
  decorators: [
    moduleMetadata({
      imports: [ LgQuickActionButtonComponent, LgQuickActionLinkComponent ],
    }),
  ],
  argTypes: {
    icon: {
      description: 'Icon to display',
      options: [ 'None', ...lgIconsArray.map(i => i.name) ],
      control: {
        type: 'select',
      },
    },
    class: {
      table: {
        disable: true,
      },
    },
    icons: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const exampleButtonTemplate = `
<button lg-quick-action>
  <lg-icon [name]="icon"></lg-icon>
  Load more
</button>
`;

export const QuickActionButton = {
  name: 'Button',
  args: {
    icon: 'repeat',
    content: 'Load more',
  },
  parameters: {
    docs: {
      source: {
        code: exampleButtonTemplate,
      },
    },
  },
  render: (args: LgQuickActionButtonComponent) => ({
    props: args,
    template: `
      <lg-quick-action-button
        [content]="content"
        [icon]="icon">
      </lg-quick-action-button>
    `,
  }),
};

const exampleLinkTemplate = `
<a lg-quick-action [href]="link" [target]="target">
  <lg-icon [name]="icon"></lg-icon>
  Send us a message
</a>
`;

export const QuickActionLink = {
  name: 'Link',
  args: {
    link: 'https://google.com',
    target: '_blank',
    icon: 'secure-messaging',
    content: 'Send us a message',
  },
  argTypes: {
    target: {
      options: [ '_self', '_blank' ],
      table: {
        type: {
          summary: [ '_self', '_blank' ],
        },
      },
      control: {
        type: 'select',
      },
    },
  },
  parameters: {
    docs: {
      source: {
        code: exampleLinkTemplate,
      },
    },
  },
  render: (args: LgQuickActionLinkComponent) => ({
    props: args,
    template: `
      <lg-quick-action-link
        [target]="target"
        [link]="link"
        [content]="content"
        [icon]="icon">
      </lg-quick-action-link>
    `,
  }),
};
