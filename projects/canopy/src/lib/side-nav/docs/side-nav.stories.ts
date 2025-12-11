import { Component, Input } from '@angular/core';
import { moduleMetadata } from '@storybook/angular';
import { RouterOutlet } from '@angular/router';

import { SideNavBarItem } from '../side-nav.interface';
import { LgSideNavComponent } from '../side-nav.component';
import { LgButtonComponent } from '../../button';
import { LgSideNavBarComponent } from '../side-nav-bar/side-nav-bar.component';
import { LgSideNavContentComponent } from '../side-nav-content/side-nav-content.component';
import { LgSideNavBarLinkDirective } from '../side-nav-bar-link/side-nav-bar-link.directive';
import { LgSideNavBarItemComponent } from '../side-nav-bar-item/side-nav-bar-item.component';
import { LgSideNavBarItemHeadingComponent } from '../side-nav-bar-item-heading/side-nav-bar-item-heading.component';
import { LgSideNavBarItemContentComponent } from '../side-nav-bar-item-content/side-nav-bar-item-content.component';
import { LgSideNavBarFooterComponent } from '../side-nav-bar-footer/side-nav-bar-footer.component';
import { LgMarginDirective } from '../../spacing';

const template = `
<lg-side-nav>
  <lg-side-nav-bar label="Side Nav Demo">
    @for (item of navItems; track $index; let i = $index) {
      <a
        id="side-nav-{{ i }}"
        href=""
        (click)="onClick($event, i)"
        [isActive]="i == selectedNavIndex"
        lgSideBarNavLink
      >
        <lg-side-nav-bar-item>
          <lg-side-nav-bar-item-heading>{{ item.title }}</lg-side-nav-bar-item-heading>
          @if (item.description) {
            <lg-side-nav-bar-item-content>{{
              item.description
            }}</lg-side-nav-bar-item-content>
          }
        </lg-side-nav-bar-item>
      </a>
    }
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
  ],
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
  title: 'Patterns/Side nav/Examples',
  tags: [ 'pending' ],
  excludeStories: [ 'StorySideNavComponent' ],
  component: LgSideNavComponent,
  decorators: [
    moduleMetadata({
      imports: [ StorySideNavComponent ],
    }),
  ],
  globals: {
    backgrounds: { value: 'off-white' },
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

export const SideNav = {
  name: 'Side nav',
  render: (args: StorySideNavComponent) => ({
    props: args,
    template: '<lg-story-side-nav [navItems]="navItems"></lg-story-side-nav>',
  }),
  args: {
    navItems: getDefaultNavItems(),
  },
  parameters: {
    docs: {
      source: {
        code: template,
      },
    },
  },
};
