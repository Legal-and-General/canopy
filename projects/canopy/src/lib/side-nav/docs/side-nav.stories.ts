import { AsyncPipe, Location } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { applicationConfig, moduleMetadata } from '@storybook/angular';
import {
  ActivatedRoute,
  provideRouter,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  withHashLocation,
} from '@angular/router';

import { SideNavBarItem } from '../side-nav.interface';
import { LgSideNavComponent } from '../side-nav.component';
import { LgButtonComponent } from '../../button';
import { LgSideNavBarComponent } from '../side-nav-bar/side-nav-bar.component';
import { LgSideNavContentComponent } from '../side-nav-content/side-nav-content.component';
import { LgSideNavBarLinkDirective } from '../side-nav-bar-link/side-nav-bar-link.directive';
import { LgSideNavBarFooterComponent } from '../side-nav-bar-footer/side-nav-bar-footer.component';
import { LgMarginDirective } from '../../spacing';
import {
  LgContentAreaComponent,
  LgContentAreaContentComponent,
  LgContentAreaHeaderComponent,
} from '../../content-area';
import {
  LgLinkMenuComponent,
  LgLinkMenuItemComponent,
  LgLinkMenuItemTextComponent,
} from '../../link-menu';
import { LgIconComponent } from '../../icon';
import { LgColourDirective } from '../../colour';
import type { Colour, ColourTheme } from '../../colour';
import {
  LgInputDirective,
  LgInputFieldComponent,
  LgSelectDirective,
  LgSelectFieldComponent,
} from '../../forms';

interface SideNavStoryItem extends SideNavBarItem {
  link: string;
}

const template = `
<lg-content-area [lgColour]="mode" [lgColourTheme]="theme">
  @if (showHeader) {
    <lg-content-area-header>
      <a href="#">
      <lg-icon name="arrow-left"></lg-icon>
      Back
    </a>
    </lg-content-area-header>
  }
  <lg-content-area-content>
    <lg-side-nav>
      <lg-side-nav-bar label="Account navigation">
        <lg-link-menu>
          @for (item of navItems; track item.link) {
            <a
              [routerLink]="item.link"
              routerLinkActive
              #activeRoute="routerLinkActive"
              ariaCurrentWhenActive="page"
              [isActive]="activeRoute.isActive"
              lgSideBarNavLink
            >
              <lg-link-menu-item>
                <lg-link-menu-item-text [isBold]="true">{{ item.title }}</lg-link-menu-item-text>
                @if (item.description) {
                  <lg-link-menu-item-text>{{ item.description }}</lg-link-menu-item-text>
                }
              </lg-link-menu-item>
            </a>
          }
        </lg-link-menu>
        @if (showLogout) {
          <lg-side-nav-bar-footer>
            <button
              lg-button
              type="button"
              lgMarginBottom="none"
              priority="secondary"
              [fullWidth]="false"
            >Logout</button>
          </lg-side-nav-bar-footer>
        }
      </lg-side-nav-bar>
      <lg-side-nav-content>
        <router-outlet />
      </lg-side-nav-content>
    </lg-side-nav>
  </lg-content-area-content>
</lg-content-area>
`;

@Component({
  template: `
    @if ((route.data | async)?.isPersonalDetails) {
      <form>
        <h2>Personal details</h2>
        <lg-input-field [block]="true">
          Name
          <input lgInput autocomplete="name" />
        </lg-input-field>
        <lg-input-field [block]="true">
          Date of birth
          <input lgInput type="date" autocomplete="bday" />
        </lg-input-field>
        <lg-select-field [block]="true">
          Marital status
          <select lgSelect>
            <option value="" disabled selected>Select marital status</option>
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="civil-partnership">Civil partnership</option>
            <option value="divorced">Divorced</option>
            <option value="widowed">Widowed</option>
          </select>
        </lg-select-field>
      </form>
    } @else {
      <h2>{{ (route.data | async)?.title }}</h2>
      <p>{{ (route.data | async)?.description }}</p>
    }
  `,
  imports: [
    AsyncPipe,
    LgInputDirective,
    LgInputFieldComponent,
    LgSelectDirective,
    LgSelectFieldComponent,
  ],
})
export class StorySideNavContentComponent {
  route = inject(ActivatedRoute);
}

@Component({
  selector: 'lg-story-side-nav',
  template,
  standalone: true,
  imports: [
    LgSideNavComponent,
    LgSideNavBarComponent,
    LgSideNavContentComponent,
    LgSideNavBarLinkDirective,
    LgLinkMenuComponent,
    LgLinkMenuItemComponent,
    LgLinkMenuItemTextComponent,
    LgContentAreaComponent,
    LgContentAreaHeaderComponent,
    LgContentAreaContentComponent,
    LgSideNavBarFooterComponent,
    LgMarginDirective,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    LgButtonComponent,
    LgIconComponent,
    LgColourDirective,
  ],
})
export class StorySideNavComponent {
  private location = inject(Location);

  @Input() navItems: Array<SideNavStoryItem> = [];
  @Input() showHeader = true;
  @Input() showLogout = true;
  @Input() mode: Colour = 'blue';
  @Input() theme: ColourTheme = 'neutral';

  back(): void {
    this.location.back();
  }
}

const getDefaultNavItems = (): Array<SideNavStoryItem> => [
  {
    title: 'Personal details',
    description: 'Name, date of birth and marital status.',
    link: '/overview',
  },
  {
    title: 'Contact',
    description: 'User contact information.',
    link: '/contact',
  },
  {
    title: 'Account security',
    description: 'Account protection tools.',
    link: '/account-security',
  },
  {
    title: 'Settings',
    description: 'App-related settings.',
    link: '/settings',
  },
];

export default {
  title: 'Patterns/Side nav/Examples',
  tags: [ 'updated' ],
  excludeStories: [ 'StorySideNavComponent', 'StorySideNavContentComponent' ],
  component: LgSideNavComponent,
  argTypes: {
    mode: {
      options: [ 'blue', 'green', 'red', 'yellow' ],
      control: { type: 'select' },
      description: 'The colour mode applied to the outer content area.',
    },
    theme: {
      options: [ 'neutral', 'neutral-inverse', 'subtle', 'bold' ],
      control: { type: 'select' },
      description: 'The theme applied to the outer content area colour mode.',
    },
  },
  decorators: [
    moduleMetadata({
      imports: [ StorySideNavComponent ],
    }),
    applicationConfig({
      providers: [
        provideRouter(
          [
            ...getDefaultNavItems().map(item => ({
              path: item.link.slice(1),
              component: StorySideNavContentComponent,
              data: {
                title: item.title,
                description: item.description,
                isPersonalDetails: item.link === '/overview',
              },
            })),
            { path: '**', redirectTo: 'overview' },
          ],
          withHashLocation(),
        ),
      ],
    }),
  ],
  globals: {
    backgrounds: { value: 'off-white' },
  },
};

export const SideNav = {
  name: 'Side nav',
  render: (args: StorySideNavComponent) => ({
    props: args,
    template:
      '<lg-story-side-nav [navItems]="navItems" [showHeader]="showHeader" [showLogout]="showLogout" [mode]="mode" [theme]="theme" />',
  }),
  args: {
    navItems: getDefaultNavItems(),
    showHeader: true,
    showLogout: true,
    mode: 'blue',
    theme: 'neutral',
  },
  parameters: {
    docs: {
      source: {
        code: template,
      },
    },
  },
};

export const WithoutHeader = {
  ...SideNav,
  name: 'Without header',
  args: { ...SideNav.args, showHeader: false },
};

export const WithoutSecondaryAction = {
  ...SideNav,
  name: 'Without secondary action',
  args: { ...SideNav.args, showLogout: false },
};
