import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoryContentComponent } from './story-content.component';

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
    component: StoryContentComponent,
    outlet: 'side-nav',
  },
  {
    path: 'side-nav-2',
    component: StoryContentComponent,
    outlet: 'side-nav',
  },
  {
    path: 'side-nav-3',
    component: StoryContentComponent,
    outlet: 'side-nav',
  },
  {
    path: 'side-nav-4',
    component: StoryContentComponent,
    outlet: 'side-nav',
  },
  {
    path: '',
    redirectTo: 'tab-1',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {}
