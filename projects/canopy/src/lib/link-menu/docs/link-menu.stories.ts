import { Meta, Story } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  lgIconConsole,
  lgIconInformation,
  lgIconMail,
  LgIconModule,
  lgIconProfile,
  LgIconRegistry,
  lgIconSecurity,
} from '../../icon';
import { LgCardModule } from '../../card';
import { LgVariantModule } from '../../variant';
import { LgLinkMenuModule } from '../link-menu.module';

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
})
class LinkMenuStoryComponent {
  @Input() menuItems: MenuItems;

  constructor(private registry: LgIconRegistry) {
    this.registry.registerIcons([
      lgIconInformation,
      lgIconProfile,
      lgIconMail,
      lgIconSecurity,
      lgIconConsole,
    ]);
  }
}

// This default export determines where your story goes in the story list
export default {
  title: 'Components/Link menu/Examples',
  decorators: [
    moduleMetadata({
      declarations: [ LinkMenuStoryComponent ],
      imports: [
        LgLinkMenuModule,
        LgIconModule,
        CommonModule,
        LgVariantModule,
        LgCardModule,
      ],
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

const linkMenuTemplate: Story<LinkMenuStoryComponent> = (
  args: LinkMenuStoryComponent,
) => ({
  props: args,
  template: '<lg-link-menu-story [menuItems]="menuItems"></lg-link-menu-story>',
});

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
