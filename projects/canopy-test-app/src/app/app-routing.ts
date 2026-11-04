import { Routes } from '@angular/router';

import { StoryContentComponent } from './story-content.component';
import { SideNavContentComponent } from './side-nav-content.component';

// Route Configuration
export const routes: Routes = [
  {
    path: 'tab-1',
    component: StoryContentComponent,
  },
  {
    path: 'tab-2',
    component: StoryContentComponent,
  },
  {
    path: 'tab-3',
    component: StoryContentComponent,
  },
  {
    path: 'side-nav-1',
    component: SideNavContentComponent,
    outlet: 'side-nav',
    data: {
      title: 'Personal details',
      description: 'Name, date of birth and marital status.',
      isPersonalDetails: true,
    },
  },
  {
    path: 'side-nav-2',
    component: SideNavContentComponent,
    outlet: 'side-nav',
    data: { title: 'Contact', description: 'View and update your contact information.' },
  },
  {
    path: 'side-nav-3',
    component: SideNavContentComponent,
    outlet: 'side-nav',
    data: {
      title: 'Account security',
      description: 'Manage your account protection tools.',
    },
  },
  {
    path: 'side-nav-4',
    component: SideNavContentComponent,
    outlet: 'side-nav',
    data: { title: 'Settings', description: 'Manage your app preferences.' },
  },
  {
    path: '',
    redirectTo: 'tab-1',
    pathMatch: 'full',
  },
];
