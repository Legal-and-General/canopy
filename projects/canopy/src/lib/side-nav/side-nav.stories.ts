import { Component, Input } from '@angular/core';

import { object, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import { LgSideNavModule } from './side-nav.module';
import { notes } from './side-nav.notes';
import { LgButtonModule } from '../button';
import { SideNavBarItem } from './side-nav.interface';
import { LgMarginModule } from '../spacing';

@Component({
  selector: 'story-side-nav',
  template: `
    <lg-side-nav>
      <lg-side-nav-bar label="Side Nav Demo">
        <a
          *ngFor="let item of navItems; index as i"
          id="side-nav-{{ i }}"
          href=""
          (click)="onClick($event, i)"
          [isActive]="i == selectedNavIndex"
          lgSideBarNavLink
        >
          <lg-side-nav-bar-item>
            <lg-side-nav-bar-item-heading>{{ item.title }}</lg-side-nav-bar-item-heading>
            <lg-side-nav-bar-item-content *ngIf="item.description">{{
              item.description
            }}</lg-side-nav-bar-item-content>
          </lg-side-nav-bar-item>
        </a>
        <lg-side-nav-bar-footer>
          <a
            lg-button
            lgMarginBottom="none"
            variant="outline-primary"
            [fullWidth]="false"
            href="#"
            >Logout</a
          >
        </lg-side-nav-bar-footer>
      </lg-side-nav-bar>
      <lg-side-nav-content></lg-side-nav-content>
    </lg-side-nav>
  `,
})
export class StorySideNavComponent {
  selectedNavIndex = 0;

  @Input()
  navItems = [];

  onClick = (ev, ix) => {
    ev.preventDefault();
    this.selectedNavIndex = ix;
  };
}

export default {
  title: 'Components/Side Nav',
  excludeStories: ['StorySideNavComponent'],
  parameters: {
    decorators: [
      withKnobs,
      moduleMetadata({
        declarations: [StorySideNavComponent],
        imports: [LgSideNavModule, LgButtonModule, LgMarginModule],
      }),
    ],
    backgrounds: [{ name: 'default', value: '#FAF5F7', default: true }],
    notes: {
      markdown: notes,
    },
  },
};

const getDefaultNavItems = (): Array<SideNavBarItem> => [
  {
    title: 'Overview',
  },
  {
    title: 'Contact',
    description: 'User contact information.',
  },
  {
    title: 'Account security',
    description: 'Account protection tools.',
  },
  {
    title: 'Settings',
    description: 'App-related settings.',
  },
];

export const standard = () => ({
  template: '<story-side-nav [navItems]="navItems"></story-side-nav>',
  props: {
    navItems: object('Navs', getDefaultNavItems()),
  },
});
