import { storiesOf } from '@storybook/angular';
import { of } from 'rxjs';

import { CanopyModule } from '../canopy.module';
import { LgFeatureToggleOptions } from './feature-toggle.interface';
import { LgFeatureToggleModule } from './feature-toggle.module';
import { notes } from './feature-toggle.notes';

const stories = storiesOf('Directives', module);
const options: LgFeatureToggleOptions = {
  // disable undefined feature e.g. Feature 4 in the following story
  defaultHide: true,
};

stories
  .addParameters({
    backgrounds: [{ name: 'default', value: '#0076d6', default: true }],
  })
  .add(
    'Feature Toggle',
    () => ({
      moduleMetadata: {
        imports: [
          CanopyModule,
          LgFeatureToggleModule.forRoot(
            {
              useFactory: () =>
                of({
                  firstFeature: true,
                  secondFeature: false,
                  thirdFeature: true,
                  fourthFeature: false,
                }),
            },
            options,
          ),
        ],
      },
      template: `
  <lg-card *lgFeatureToggle="'firstFeature'"><lg-card-content>Feature 1 showing</lg-card-content></lg-card>
  <lg-card *lgFeatureToggle="'secondFeature'"><lg-card-content>Feature 2 not showing</lg-card-content></lg-card>
  <lg-card *lgFeatureToggle="'thirdFeature'"><lg-card-content>Feature 3 showing</lg-card-content></lg-card>
  <lg-card *lgFeatureToggle="'fourthFeature'"><lg-card-content>Feature 4 not showing</lg-card-content></lg-card>
  `,
    }),
    {
      notes: { markdown: notes },
    },
  );
