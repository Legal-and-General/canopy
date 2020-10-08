import { ReactiveFormsModule } from '@angular/forms';

import { withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import { LgToggleModule } from './toggle.module';
import { notes } from './toggle.notes';
import { createToggleStory, ReactiveToggleFormComponent } from './toggle.stories.common';

export default {
  title: 'Components/Checkbox',
  parameters: {
    decorators: [
      withKnobs,
      moduleMetadata({
        imports: [ReactiveFormsModule, LgToggleModule],
        declarations: [ReactiveToggleFormComponent],
      }),
    ],
    'in-dsm': {
      id: '5ec4db194dc1ea9f26d698fc',
    },
    notes: {
      markdown: notes('Checkbox'),
    },
  },
};

export const standard = () => createToggleStory('Checkbox', 'checkbox');
