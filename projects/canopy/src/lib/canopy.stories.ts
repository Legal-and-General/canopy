import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { storiesOf } from '@storybook/angular';

import { AppComponent } from '../../../canopy-test-app/src/app/app.component';
import { CanopyModule } from './canopy.module';

const stories = storiesOf('Test Page', module);

stories.add('All', () => {
  require('!style-loader!css-loader!sass-loader!../../../../.storybook/full-screen.css');

  return {
    moduleMetadata: {
      declarations: [AppComponent],
      entryComponents: [AppComponent],
      imports: [CommonModule, CanopyModule]
    },
    template: `<app-root></app-root>`
  };
});
