import { Meta, moduleMetadata } from '@storybook/angular';
import { Component, Input } from '@angular/core';

import { LgIconComponent } from '../../icon';
import { LgLinkMenuComponent } from '../link-menu.component';
import { LgLinkMenuItemComponent } from '../link-menu-item/link-menu-item.component';
import { LgLinkMenuItemTextComponent } from '../link-menu-item-text/link-menu-item-text.component';

const template = `
<lg-link-menu>
  @for (item of menuItems; track item.title) {
    <a href="#" [attr.target]="item.target">
      <lg-link-menu-item [rightIcon]="item.rightIcon">
        @if (item.leftIcon) {
          <lg-icon [name]="item.leftIcon"></lg-icon>
        }
        <lg-link-menu-item-text [isBold]="item.isBold">{{ item.title }}</lg-link-menu-item-text>
        @if (item.description) {
          <lg-link-menu-item-text>
            {{ item.description }}
          </lg-link-menu-item-text>
        }
      </lg-link-menu-item>
    </a>
  }
</lg-link-menu>`;

@Component({
  selector: 'lg-link-menu-story',
  template,
  standalone: true,
  imports: [
    LgLinkMenuComponent,
    LgLinkMenuItemComponent,
    LgIconComponent,
    LgLinkMenuItemTextComponent,
  ],
})
class LinkMenuStoryComponent {
  @Input() menuItems: MenuItems;
}

// This default export determines where your story goes in the story list
export default {
  title: 'Components/Link menu/Examples',
  decorators: [
    moduleMetadata({
      imports: [ LinkMenuStoryComponent ],
    }),
  ],
  parameters: {
    backgrounds: { disable: true },
  },
  argTypes: {
    class: {
      table: {
        disable: true,
      },
    },
    showLeftIcons: {
      control: 'boolean',
      description: 'Show left icons on menu items',
    },
    showRightIcons: {
      control: 'boolean',
      description: 'Show right icons on menu items',
    },
    isBold: {
      control: 'boolean',
      description: 'Make primary label text bold',
    },
  },
} as Meta;

interface MenuItems {
  title: string;
  description: string;
  target: '_blank' | null;
  leftIcon: string;
  rightIcon: string | null | undefined;
  isBold: boolean;
}

function getDefaultMenuItems(
  showLeftIcons = true,
  showRightIcons = false,
  isBold = true,
): Array<MenuItems> {
  return [
    {
      title: 'Overview',
      description: '',
      target: null,
      leftIcon: showLeftIcons
        ? 'information-outline'
        : '',
      rightIcon: showRightIcons
        ? undefined
        : null,
      isBold,
    },
    {
      title: 'Personal Details',
      description: 'Name, date of birth, marital status',
      target: '_blank',
      leftIcon: showLeftIcons
        ? 'profile'
        : '',
      rightIcon: showRightIcons
        ? undefined
        : null,
      isBold,
    },
    {
      title: 'Contact',
      description: 'Email, address and phone numbers',
      target: null,
      leftIcon: showLeftIcons
        ? 'mail'
        : '',
      rightIcon: showRightIcons
        ? undefined
        : null,
      isBold,
    },
    {
      title: 'Login and security',
      description: 'Reset your password and get a User ID reminder',
      target: null,
      leftIcon: showLeftIcons
        ? 'protection'
        : '',
      rightIcon: showRightIcons
        ? undefined
        : null,
      isBold,
    },
    {
      title: 'Preferences',
      description: 'How we send you documents and marketing',
      target: null,
      leftIcon: showLeftIcons
        ? 'console'
        : '',
      rightIcon: showRightIcons
        ? undefined
        : null,
      isBold,
    },
  ];
}

export const StandardLinkMenu = {
  name: 'Link menu',
  render: (args: {
    showLeftIcons: boolean;
    showRightIcons: boolean;
    isBold: boolean;
  }) => ({
    props: {
      menuItems: getDefaultMenuItems(
        args.showLeftIcons,
        args.showRightIcons,
        args.isBold,
      ),
    },
    template: '<lg-link-menu-story [menuItems]="menuItems"></lg-link-menu-story>',
  }),
  args: {
    showLeftIcons: true,
    showRightIcons: true,
    isBold: true,
  },
  parameters: {
    docs: {
      source: {
        code: template,
      },
    },
    additionalSnapshots: [
      {
        suffix: ' [without icons]',
        args: { showLeftIcons: false, showRightIcons: false, isBold: true },
      },
    ],
  },
};
