import { Component, Input } from '@angular/core';
import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';

import { IconName, LgIconRegistry, lgIconsArray, LgIconComponent } from '../../icon';
import { LgQuickActionComponent } from '../quick-action.component';

@Component({
  selector: 'lg-quick-action-link',
  template: `
    <a lg-quick-action [href]="link" [target]="target">
      <lg-icon [name]="icon"></lg-icon>
      {{ content }}
    </a>
  `,
  standalone: true,
  imports: [ LgIconComponent, LgQuickActionComponent ],
})
class LgQuickActionLinkComponent {
  @Input() content: string;
  @Input() link: string;
  @Input() target: string;
  @Input() icon: IconName;

  constructor(private registry: LgIconRegistry) {
    this.registry.registerIcons(lgIconsArray);
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
  standalone: true,
  imports: [ LgIconComponent, LgQuickActionComponent ],
})
class LgQuickActionButtonComponent {
  @Input() content: string;
  @Input() icon: IconName;

  constructor(private registry: LgIconRegistry) {
    this.registry.registerIcons(lgIconsArray);
  }
}

export default {
  title: 'Components/Quick action/Examples',
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

const quickActionButtonTemplate: StoryFn<LgQuickActionButtonComponent> = (
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

const quickActionLinkTemplate: StoryFn<LgQuickActionLinkComponent> = (
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

quickActionLink.argTypes = {
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
};

quickActionLink.parameters = {
  docs: {
    source: {
      code: exampleLinkTemplate,
    },
  },
};
