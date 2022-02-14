import { Meta, Story } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { of } from 'rxjs';

import { LgFeatureToggleOptions } from './feature-toggle.interface';
import { CanopyModule } from './../canopy.module';
import { LgFeatureToggleDirective } from './feature-toggle.directive';
import { LgFeatureToggleModule } from './feature-toggle.module';
import { notes } from './feature-toggle.notes';

const options: LgFeatureToggleOptions = {
  // disable undefined feature e.g. Feature 4 in the following story
  defaultHide: true,
};

// This default export determines where your story goes in the story list
export default {
  title: 'Directives/Feature toggle',
  component: LgFeatureToggleDirective,
  decorators: [
    moduleMetadata({
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
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: notes,
      },
    },
    controls: {
      disable: true,
    },
    backgrounds: {
      default: 'Super Blue',
    },
  },
  argTypes: {
    lgFeatureToggle: {
      table: {
        disable: true,
      },
    },
    ngOnInit: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const template = `
<lg-card *lgFeatureToggle="'firstFeature'"><lg-card-content>Feature 1 showing</lg-card-content></lg-card>
<lg-card *lgFeatureToggle="'secondFeature'"><lg-card-content>Feature 2 not showing</lg-card-content></lg-card>
<lg-card *lgFeatureToggle="'thirdFeature'"><lg-card-content>Feature 3 showing</lg-card-content></lg-card>
<lg-card *lgFeatureToggle="'fourthFeature'"><lg-card-content>Feature 4 not showing</lg-card-content></lg-card>
`;

const featureToggleTemplate: Story<LgFeatureToggleDirective> = (
  args: LgFeatureToggleDirective,
) => ({
  component: LgFeatureToggleDirective,
  props: args,
  template,
});

export const featureToggle = featureToggleTemplate.bind({});
featureToggle.storyName = 'Feature toggle';
featureToggle.parameters = {
  docs: {
    source: {
      code: template,
    },
  },
};
