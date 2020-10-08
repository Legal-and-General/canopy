import { ReactiveFormsModule } from '@angular/forms';

import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

import { LgFilterButtonModule } from './filter-button.module';
import { ReactiveFormFilterSelectMultipleComponent } from './filter-button/filter-button-select-multiple.stories';
import { ReactiveFormFilterSelectOneComponent } from './filter-button/filter-button-select-one.stories';
import { notes } from './filter-button.notes';

export default {
  title: 'Components/Filter Buttons',
  parameters: {
    decorators: [
      withKnobs,
      moduleMetadata({
        imports: [ReactiveFormsModule, LgFilterButtonModule],
        declarations: [
          ReactiveFormFilterSelectOneComponent,
          ReactiveFormFilterSelectMultipleComponent,
        ],
      }),
    ],
    notes: {
      markdown: notes,
    },
  },
};

export const selectOne = () => ({
  template: `
        <lg-reactive-form
        [disabled]="disabled"
        [label]="label"
        (dateChange)="dateChange($event)">
    </lg-reactive-form>
    `,
  props: {
    label: text('label', 'Select a date range'),
    dateChange: action('dateChange'),
    disabled: boolean('disabled', false),
  },
});

selectOne.story = {
  parameters: {
    'in-dsm': {
      id: '5f75d9e2a5c09c75c88bd402',
    },
  },
};

export const selectMultiple = () => ({
  template: `
      <lg-reactive-form-multiple
      [disabled]="disabled"
      [label]="label"
      (colorChange)="colorChange($event)">
    </lg-reactive-form-multiple>
    `,
  props: {
    label: text('label', 'Select color(s)'),
    colorChange: action('colorChange'),
    disabled: boolean('disabled', false),
  },
});

selectMultiple.story = {
  parameters: {
    'in-dsm': {
      id: '5f75d9f774621bd9596c8520',
    },
  },
};
