import { storiesOf } from '@storybook/angular';
import { of } from 'rxjs';
import { LgFeatureToggleOptions } from './feature-toggle.interface';

import { LgFeatureToggleModule } from './feature-toggle.module';
import { notes } from './feature-toggle.notes';

const stories = storiesOf('Modules', module);
const options: LgFeatureToggleOptions = {
  // disable undefined feature e.g. Feature 4 in the following story
  defaultHide: true
};

stories.add(
  'Feature Toggle',
  () => ({
    moduleMetadata: {
      imports: [
        LgFeatureToggleModule.forRoot(
          {
            useFactory: () =>
              of({
                firstFeature: true,
                secondFeature: false,
                thirdFeature: true
              })
          },
          options
        )
      ]
    },
    template: `
  <ul>
    <li *lgFeatureToggle="'firstFeature'" class="first">Feature 1 showing</li>
    <li *lgFeatureToggle="'secondFeature'" class="second">Feature 2 not showing</li>
    <li *lgFeatureToggle="'thirdFeature'" class="third">Feature 3 showing</li>
    <li *lgFeatureToggle="'fourthFeature'" class="third">Feature 4 not showing</li>
  </ul>
  `,
    styles: [
      `
    li {
      margin-top: 20px;
      width: 80px;
      height: 80px;
      color: white;
    }

    .first {
      background-color: darkred;
    }

    .second {
      background-color: darkblue;
    }

    .third {
      background-color: darkgreen;
    }
  `
    ]
  }),
  {
    notes: { markdown: notes }
  }
);
