import { ReactiveFormsModule } from '@angular/forms';
import { withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import { LgToggleComponent } from './toggle.component';
import { notes } from './toggle.notes';
import {
  createToggleStory,
  ReactiveToggleFormComponent
} from './toggle.stories.common';

export default {
  title: 'Components/Form/Checkbox',
  parameters: {
    decorators: [
      withKnobs,
      moduleMetadata({
        imports: [ReactiveFormsModule],
        declarations: [LgToggleComponent, ReactiveToggleFormComponent]
      })
    ],
    'in-dsm': {
      id: '5ec4db194dc1ea9f26d698fc'
    },
    notes: {
      markdown: notes('Checkbox')
    }
  }
};

export const standard = () => createToggleStory('Checkbox', 'checkbox');
