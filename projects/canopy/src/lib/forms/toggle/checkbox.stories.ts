import { ReactiveFormsModule } from '@angular/forms';

import { withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import { LgToggleModule } from './toggle.module';
import { notes } from './toggle.notes';
import { createToggleStory, ReactiveToggleFormComponent } from './toggle.stories.common';

export default {
  title: 'Components/Form/Checkbox',
  parameters: {
    decorators: [
      withKnobs,
      moduleMetadata({
        imports: [ReactiveFormsModule, LgToggleModule],
        declarations: [ReactiveToggleFormComponent],
      }),
    ],
    notes: {
      markdown: notes('Checkbox'),
    },
  },
};

export const standard = () => createToggleStory('checkbox');
