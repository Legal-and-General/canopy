import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabStoryContentComponent } from './tab-story-content.component';

// Route Configuration
export const routes: Routes = [
  {
    path: 'tab-1',
    component: TabStoryContentComponent,
  },
  {
    path: 'tab-2',
    component: TabStoryContentComponent,
  },
  {
    path: 'tab-3',
    component: TabStoryContentComponent,
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
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
