import { CommonModule } from '@angular/common';

import { moduleMetadata } from '@storybook/angular';

import { fullScreen } from '../../../../.storybook/addons/full-screen';
import { AppComponent } from '../../../canopy-test-app/src/app/app.component';
import { CanopyModule } from './canopy.module';

export default {
  title: 'Test Page',
  parameters: {
    decorators: [
      fullScreen,
      moduleMetadata({
        declarations: [AppComponent],
        entryComponents: [AppComponent],
        imports: [CommonModule, CanopyModule],
      }),
    ],
  },
};

export const standard = () => ({
  template: `<app-root></app-root>`,
});
