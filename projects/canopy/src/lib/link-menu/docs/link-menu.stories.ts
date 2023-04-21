import { Meta, Story } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';

import { LgLinkMenuModule } from '../link-menu.module';
import { LgLinkMenuComponent } from '../link-menu.component';

const template = `
<lg-link-menu>
  <a href="#" *ngFor="let item of menuItems" [attr.target]="item.target">
    <lg-link-menu-item>
      <lg-link-menu-item-text class="title">{{ item.title }}</lg-link-menu-item-text>
      <lg-link-menu-item-text *ngIf="item.description">
        {{ item.description }}
      </lg-link-menu-item-text>
    </lg-link-menu-item>
  </a>
</lg-link-menu>`;

// This default export determines where your story goes in the story list
export default {
  title: 'Components/Link menu/Examples',
  component: LgLinkMenuComponent,
  decorators: [
    moduleMetadata({
      imports: [ LgLinkMenuModule ],
    }),
  ],
  parameters: {
    viewMode: 'story',
    previewTabs: { 'storybook/docs/panel': { hidden: true } },
  },
  argTypes: {
    class: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const linkMenuTemplate: Story<LgLinkMenuComponent> = (args: LgLinkMenuComponent) => ({
  props: args,
  template,
});

interface MenuItems {
  title: string;
  description: string;
  target: '_blank' | null;
}

function getDefaultMenuItems(): Array<MenuItems> {
  return [
    {
      title: 'Change your bank details',
      description: 'Changes may take up to an hour',
      target: null,
    },
    {
      title: 'Plan for retirement',
      description: '',
      target: null,
    },
    {
      title: 'Life Insurance',
      description: 'Learn more',
      target: '_blank',
    },
  ];
}

export const standardLinkMenu = linkMenuTemplate.bind({});
standardLinkMenu.storyName = 'Link menu';

standardLinkMenu.args = {
  menuItems: getDefaultMenuItems(),
};

standardLinkMenu.parameters = {
  docs: {
    source: {
      code: template,
    },
  },
};
