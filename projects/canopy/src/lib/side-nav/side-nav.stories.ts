import { object, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import { LgSideNavModule } from './side-nav.module';
import { notes } from './side-nav.notes';
import { LgButtonModule } from '../button';
import { SideNavBarItem } from './side-nav.interface';
import { LgMarginModule } from '../spacing';

export default {
  title: 'Components/Side Nav',
  parameters: {
    decorators: [
      withKnobs,
      moduleMetadata({
        declarations: [],
        imports: [LgSideNavModule, LgButtonModule, LgMarginModule],
      }),
    ],
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
    title: 'Personal details',
    description:
      'Your name, date of birth, marital status and National Insurance Number.',
  },
  {
    title: 'Contact details',
    description: 'Your address, email and phone number.',
  },
  {
    title: 'Login and security',
    description: 'Reset your password and get a User ID reminder.',
  },
  {
    title: 'Preferences',
    description: 'How we send you documents and marketing.',
  },
];

export const standard = () => ({
  template: `
    <lg-side-nav>
      <lg-side-nav-bar label="Side Nav Demo">
        <a *ngFor="let item of navItems; index as i"
           id="side-nav-{{i}}"
           [routerLink]=""
           lgTabNavBarLink
           href=""
           (click)="onClick($event)"
           [isActive]="i==selectedNavIndex"
           >
          <lg-side-nav-bar-item [title]="item.title" [description]="item.description"></lg-side-nav-bar-item>
        </a>
        <lg-side-nav-bar-footer>
          <a lg-button lgMarginTop="xxl" variant="outline-primary" [fullWidth]="false" href="#">Logout</a>
        </lg-side-nav-bar-footer>
      </lg-side-nav-bar>
      <lg-side-nav-content [selectedNavId]="'side-nav-' + selectedNavIndex">
        <h1>Overview</h1>
      </lg-side-nav-content>
    </lg-side-nav>
  `,
  props: {
    navItems: object('Navs', getDefaultNavItems()),
    selectedNavIndex: 0,
    onClick: (event: MouseEvent) => event.preventDefault(),
  },
});
