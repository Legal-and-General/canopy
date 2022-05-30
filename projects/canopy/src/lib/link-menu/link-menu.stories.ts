import { Meta, Story } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';

import { LgLinkMenuModule } from './link-menu.module';
import { LgLinkMenuComponent } from './link-menu.component';
import { notes } from './link-menu.notes';

const template = `
<lg-link-menu>
  <a href="#" *ngFor="let item of menuItems">
    <lg-link-menu-item>
      <lg-link-menu-item-heading>{{ item.title }}</lg-link-menu-item-heading>
      <lg-link-menu-item-content *ngIf="item.description">
        {{ item.description }}
      </lg-link-menu-item-content>
    </lg-link-menu-item>
  </a>
</lg-link-menu>`;

// This default export determines where your story goes in the story list
export default {
  title: 'Components/Link Menu',
  component: LgLinkMenuComponent,
  decorators: [
    moduleMetadata({
      imports: [ LgLinkMenuModule ],
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
}

function getDefaultMenuItems(): Array<MenuItems> {
  return [
    {
      title: 'Change your bank details',
      description: 'Changes may take up to an hour',
    },
    {
      title: 'Plan for retirement',
      description: '',
    },
    {
      title: 'Life Insurance',
      description: 'Learn more',
    },
  ];
}

export const standardLinkMenu = linkMenuTemplate.bind({});
standardLinkMenu.storyName = 'Link Menu';

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
