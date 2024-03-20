import { Component, Input } from '@angular/core';
import { moduleMetadata, StoryFn } from '@storybook/angular';

import { LgValidationModule } from '../../forms';
import { LgSideNavModule } from '../side-nav.module';
import { SideNavBarItem } from '../side-nav.interface';

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
  excludeStories: [ 'StorySideNavComponent' ],
  component: LgSideNavModule,
  decorators: [
    moduleMetadata({
      declarations: [ StorySideNavComponent ],
      imports: [ LgSideNavModule ],
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

const sideNavStory: StoryFn<LgValidationModule> = (args: LgValidationModule) => ({
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
