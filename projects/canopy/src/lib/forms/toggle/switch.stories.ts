import { ReactiveFormsModule } from '@angular/forms';

import { withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import { LgToggleComponent } from './toggle.component';
import { notes } from './toggle.notes';
import { createToggleStory, ReactiveToggleFormComponent } from './toggle.stories.common';

export default {
  title: 'Components/Form/Switch',
  parameters: {
    decorators: [
      withKnobs,
      moduleMetadata({
        imports: [ReactiveFormsModule],
        declarations: [LgToggleComponent, ReactiveToggleFormComponent],
      }),
    ],
    'in-dsm': {
      id: '5ed65458a269db897a682602',
    },
    notes: {
      markdown: notes('Switch'),
    },
  },
};

export const standard = () => createToggleStory('Switch', 'switch');
