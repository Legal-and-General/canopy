import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { of } from 'rxjs';

import { LgCardModule } from '../../card';
import { LgFeatureToggleOptions } from '../feature-toggle.interface';
import { LgFeatureToggleDirective } from '../feature-toggle.directive';
import { LgFeatureToggleModule } from '../feature-toggle.module';

const options: LgFeatureToggleOptions = {
  // disable undefined feature e.g. Feature 4 in the following story
  defaultHide: true,
};

// This default export determines where your story goes in the story list
export default {
  title: 'Helpers/Directives/Feature toggle/Examples',
  component: LgFeatureToggleDirective,
  decorators: [
    moduleMetadata({
      imports: [
        LgCardModule,
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
    ngOnDestroy: {
      table: {
        disable: true,
      },
    },
    setOptions: {
      table: {
        disable: true,
      },
    },
    subscription: {
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

const featureToggleTemplate: StoryFn<LgFeatureToggleDirective> = (
  args: LgFeatureToggleDirective,
) => ({
  component: LgFeatureToggleDirective,
  props: args,
  template,
});

export const featureToggle = featureToggleTemplate.bind({});
featureToggle.storyName = 'Feature Toggle';

featureToggle.parameters = {
  docs: {
    source: {
      code: template,
    },
  },
};
