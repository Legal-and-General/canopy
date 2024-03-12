import { Component, Input } from '@angular/core';
import { moduleMetadata, StoryFn } from '@storybook/angular';
import { NgFor, NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { SideNavBarItem } from '../side-nav.interface';
import { LgSideNavComponent } from '../side-nav.component';
import { LgValidationComponent } from '../../forms';
import { LgSideNavBarComponent } from '../side-nav-bar/side-nav-bar.component';
import { LgSideNavBarLinkDirective } from '../side-nav-bar-link/side-nav-bar-link.directive';
import { LgSideNavBarItemComponent } from '../side-nav-bar-item/side-nav-bar-item.component';
import { LgSideNavBarItemHeadingComponent } from '../side-nav-bar-item-heading/side-nav-bar-item-heading.component';
import { LgSideNavBarItemContentComponent } from '../side-nav-bar-item-content/side-nav-bar-item-content.component';
import { LgSideNavBarFooterComponent } from '../side-nav-bar-footer/side-nav-bar-footer.component';
import { LgMarginDirective } from '../../spacing';
import { LgSideNavContentComponent } from '../side-nav-content/side-nav-content.component';
import { LgButtonComponent } from '../../button';
import { lgIconChevronRight, LgIconRegistry } from '../../icon';

const template = `
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
        variant="secondary-dark"
        [fullWidth]="false"
        href="#"
        >Logout</a
      >
    </lg-side-nav-bar-footer>
  </lg-side-nav-bar>
  <lg-side-nav-content>
    <router-outlet>The content of each route will be displayed here.</router-outlet>
  </lg-side-nav-content>
</lg-side-nav>
`;

@Component({
  selector: 'lg-story-side-nav',
  template,
  standalone: true,
  imports: [
    LgSideNavComponent,
    LgSideNavBarComponent,
    LgSideNavContentComponent,
    LgSideNavBarLinkDirective,
    LgSideNavBarItemComponent,
    LgSideNavBarItemHeadingComponent,
    LgSideNavBarItemContentComponent,
    LgSideNavBarFooterComponent,
    LgMarginDirective,
    RouterOutlet,
    LgButtonComponent,
    NgFor,
    NgIf,
  ],
})
export class StorySideNavComponent {
  selectedNavIndex = 0;

  @Input()
  navItems = [];

  constructor(private registry: LgIconRegistry) {
    this.registry.registerIcons([ lgIconChevronRight ]);
  }

  onClick = (ev, ix) => {
    ev.preventDefault();
    this.selectedNavIndex = ix;
  };
}

export default {
  title: 'Patterns/Side nav/Examples',
  excludeStories: [ 'StorySideNavComponent' ],
  component: LgSideNavComponent,
  decorators: [
    moduleMetadata({
      imports: [ StorySideNavComponent ],
    }),
  ],
  parameters: {
    backgrounds: {
      default: 'White Smoke',
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

const sideNavStory: StoryFn<LgValidationComponent> = (args: LgValidationComponent) => ({
  props: args,
  template: '<lg-story-side-nav [navItems]="navItems"></lg-story-side-nav>',
});

export const sideNav = sideNavStory.bind({});
sideNav.storyName = 'Side nav';

sideNav.args = {
  navItems: getDefaultNavItems(),
};

sideNav.parameters = {
  docs: {
    source: {
      code: template,
    },
  },
};
