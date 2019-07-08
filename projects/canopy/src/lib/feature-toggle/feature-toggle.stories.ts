import { of } from 'rxjs';
import { storiesOf } from '@storybook/angular';

import { FeatureToggleModule } from './feature-toggle.module';
import { notes } from './feature-toggle.notes';

const stories = storiesOf('Modules', module);

stories.add('Feature Toggle', () => ({
  moduleMetadata: {
    imports: [
      FeatureToggleModule.forRoot({
        useFactory: () => of({ 
          firstFeature: true,
          secondFeature: false,
          thirdFeature: true
        })
      })
    ]
  },
  template: `
  <ul>
    <li *featureToggle="'firstFeature'" class="first">Feature 1 showing</li>
    <li *featureToggle="'secondFeature'" class="second">Feature 2 not showing</li>
    <li *featureToggle="'thirdFeature'" class="third">Feature 3 showing</li>
  </ul>
  `,
  styles: [`
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
  `],
}),
{
  notes: { markdown: notes }
}
);
