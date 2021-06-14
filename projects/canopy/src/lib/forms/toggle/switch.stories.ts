import { ReactiveFormsModule } from '@angular/forms';

import { withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import { LgToggleModule } from './toggle.module';
import { notes } from './toggle.notes';
import { createToggleStory, ReactiveToggleFormComponent } from './toggle.stories.common';

export default {
  title: 'Components/Form/Switch',
  parameters: {
    decorators: [
      withKnobs,
      moduleMetadata({
        imports: [ReactiveFormsModule, LgToggleModule],
        declarations: [ReactiveToggleFormComponent],
      }),
    ],
    notes: {
      markdown: notes('Switch'),
    },
  },
};

export const standard = () => createToggleStory('switch');
