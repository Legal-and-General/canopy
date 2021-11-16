import { Component, Input } from '@angular/core';

import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { LgIconRegistry } from '../icon/icon.registry';
import { iconsArray } from '../icon/icons.stories';
import { LgQuickActionModule } from './quick-action.module';
import { notes } from './quick-action.notes';
import { LgIconModule } from '../icon';

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
  decorators: [
    moduleMetadata({
      declarations: [LgQuickActionButtonComponent, LgQuickActionLinkComponent],
      imports: [LgQuickActionModule, LgIconModule],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: notes,
      },
    },
  },
  argTypes: {
    name: {
      description: 'The name of the icon to use.',
    },
    class: {
      table: {
        disable: true,
      },
    },
    content: {
      table: {
        disable: true,
      },
    },
    icon: {
      table: {
        disable: true,
      },
    },
    icons: {
      table: {
        disable: true,
      },
    },
    target: {
      table: {
        disable: true,
      },
    },
    link: {
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

const quickActionButtonTemplate: Story<LgQuickActionButtonComponent> = (
  args: LgQuickActionButtonComponent,
) => ({
  props: args,
  template: `
    <lg-quick-action-button
      [content]="content"
      [icon]="icon">
    </lg-quick-action-button>
  `,
});

export const quickActionButton = quickActionButtonTemplate.bind({});
quickActionButton.storyName = 'Button';
quickActionButton.component = LgQuickActionButtonComponent;
quickActionButton.args = {
  icon: 'repeat',
  content: 'Load more',
};
quickActionButton.parameters = {
  docs: {
    source: {
      code: exampleButtonTemplate,
    },
  },
};

const exampleLinkTemplate = `
<a lg-quick-action [href]="link" [target]="target">
  <lg-icon [name]="icon"></lg-icon>
  Send us a message
</a>
`;

const quickActionLinkTemplate: Story<LgQuickActionLinkComponent> = (
  args: LgQuickActionLinkComponent,
) => ({
  props: args,
  template: `
    <lg-quick-action-link
      [target]="target"
      [link]="link"
      [content]="content"
      [icon]="icon">
    </lg-quick-action-link>
  `,
});

export const quickActionLink = quickActionLinkTemplate.bind({});
quickActionLink.storyName = 'Link';
quickActionLink.args = {
  link: 'https://google.com',
  target: '_blank',
  icon: 'secure-messaging',
  content: 'Send us a message',
};
quickActionLink.parameters = {
  docs: {
    source: {
      code: exampleLinkTemplate,
    },
  },
};
//
// //
// // export default {
// //   title: 'Components/Quick Action',
// //   parameters: {
// //     decorators: [
// //       withKnobs,
// //       moduleMetadata({
// //         declarations: [LgQuickActionLinkComponent, LgQuickActionButtonComponent],
// //         imports: [LgQuickActionModule, LgIconModule],
// //       }),
// //     ],
// //     notes: {
// //       markdown: notes,
// //     },
// //   },
// // };
// // const groupId = 'lg-quick-action';
// //
// // export const link = () => ({
// //   template: `
// //     <lg-quick-action-link
// //       [target]="target"
// //       [link]="link"
// //       [content]="content"
// //       [icon]="icon">
// //     </lg-quick-action-link>
// //   `,
// //   props: {
// //     content: text('text', 'Send us a message', groupId),
// //     link: text('link', 'https://google.com', groupId),
// //     target: select('target', ['_blank', '_self'], '_blank', groupId),
// //     icon: select(
// //       'icon',
// //       iconsArray.map((icon) => icon.name),
// //       'secure-messaging',
// //       groupId,
// //     ),
// //   },
// // });
// //
// // export const button = () => ({
// //   template: `
// //     <lg-quick-action-button
// //       [content]="content"
// //       [icon]="icon">
// //     </lg-quick-action-button>
// //   `,
// //   props: {
// //     content: text('text', 'Load more', groupId),
// //     icon: select(
// //       'icon',
// //       iconsArray.map((icon) => icon.name),
// //       'repeat',
// //       groupId,
// //     ),
// //   },
// // });
