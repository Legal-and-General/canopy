import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { moduleMetadata } from '@storybook/angular';

import { fullScreen } from '../../../../.storybook/addons/full-screen';
import { AppComponent } from '../../../canopy-test-app/src/app/app.component';
import { AppRoutingModule } from '../../../canopy-test-app/src/app/app-routing.module';
import { CanopyModule } from './canopy.module';
import { TabStoryContentComponent } from '../../../canopy-test-app/src/app/tab-story-content.component';

export default {
  title: 'Test Page',
  parameters: {
    decorators: [
      fullScreen,
      moduleMetadata({
        declarations: [AppComponent, TabStoryContentComponent],
        entryComponents: [AppComponent],
        imports: [AppRoutingModule, ReactiveFormsModule, CommonModule, CanopyModule],
      }),
    ],
  },
};

export const standard = () => ({
  template: `<app-root></app-root>`,
});
