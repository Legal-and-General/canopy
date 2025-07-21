import { Meta, moduleMetadata } from '@storybook/angular';
import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

import { LgIconComponent } from '../../icon';
import { LgLinkMenuComponent } from '../link-menu.component';
import { LgLinkMenuItemComponent } from '../link-menu-item/link-menu-item.component';
import { LgLinkMenuItemTextComponent } from '../link-menu-item-text/link-menu-item-text.component';

const template = `
<lg-link-menu>
  <a href="#" *ngFor="let item of menuItems" [attr.target]="item.target">
    <lg-link-menu-item>
      <lg-icon [name]="item.icon" *ngIf="item.icon"></lg-icon>
      <lg-link-menu-item-text isBold="true">{{ item.title }}</lg-link-menu-item-text>
      <lg-link-menu-item-text *ngIf="item.description">
        {{ item.description }}
      </lg-link-menu-item-text>
    </lg-link-menu-item>
  </a>
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
    NgFor,
    NgIf,
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
  argTypes: {
    class: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

interface MenuItems {
  title: string;
  description: string;
  target: '_blank' | null;
  icon: string;
}

function getDefaultMenuItems(): Array<MenuItems> {
  return [
    {
      title: 'Overview',
      description: '',
      target: null,
      icon: 'information',
    },
    {
      title: 'Personal Details',
      description: 'Name, date of birth, marital status',
      target: '_blank',
      icon: 'profile',
    },
    {
      title: 'Contact',
      description: 'Email, address and phone numbers',
      target: null,
      icon: 'mail',
    },
    {
      title: 'Login and security',
      description: 'Reset your password and get a User ID reminder',
      target: null,
      icon: 'security',
    },
    {
      title: 'Preferences',
      description: 'How we send you documents and marketing',
      target: null,
      icon: 'console',
    },
  ];
}

export const StandardLinkMenu = {
  name: 'Link menu',
  render: (args: LinkMenuStoryComponent) => ({
    props: args,
    template: '<lg-link-menu-story [menuItems]="menuItems"></lg-link-menu-story>',
  }),
  args: {
    menuItems: getDefaultMenuItems(),
  },
  parameters: {
    docs: {
      source: {
        code: template,
      },
    },
  },
};
