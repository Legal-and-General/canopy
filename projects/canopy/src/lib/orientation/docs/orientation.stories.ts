import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';

import { LgOrientationDirective } from '../orientation.directive';
import {
  LgCardComponent,
  LgCardContentComponent,
  LgCardHeroImageComponent,
} from '../../card';
import { LgShadowDirective } from '../../shadow';
import { LgMarginDirective, LgPaddingDirective } from '../../spacing';

const responsiveCategory = 'Responsive';

const template = `
<lg-card
  lgShadow
  [lgOrientation]="orientation">
  <lg-card-hero-img
    [cover]="true"
    src="promo-card/general-promotion1.jpg">
  </lg-card-hero-img>
  <lg-card-content lgPadding="md">
    <h3 lgMarginBottom="xxs" class="lg-font--expressive">Card with orientation</h3>
    <p lgMarginBottom="lg">{{ text }}</p>
    <a href="#">{{ linkText }}</a>
  </lg-card-content>
</lg-card>
<lg-card
  lgShadow>
  <lg-card-hero-img
    [cover]="true"
    src="promo-card/general-promotion1.jpg">
  </lg-card-hero-img>
  <lg-card-content lgPadding="md">
    <h3 lgMarginBottom="xxs" class="lg-font--expressive">Card without orientation</h3>
    <p lgMarginBottom="lg">{{ text }}</p>
    <a href="#">{{ linkText }}</a>
  </lg-card-content>
</lg-card>`;

export default {
  title: 'Helpers/Directives/Orientation/Examples',
  decorators: [
    moduleMetadata({
      imports: [
        LgCardComponent,
        LgCardHeroImageComponent,
        LgShadowDirective,
        LgOrientationDirective,
        LgCardContentComponent,
        LgMarginDirective,
        LgPaddingDirective,
      ],
    }),
  ],
  parameters: {
    backgrounds: {
      default: 'Super Blue',
    },
  },
  argTypes: {
    orientation: {
      name: 'orientation',
      table: {
        category: responsiveCategory,
      },
    },
  },
} as Meta;

const orientationStory: StoryFn<LgOrientationDirective> = (
  args: LgOrientationDirective,
) => ({
  props: args,
  template,
});

export const orientation = orientationStory.bind({});
orientation.storyName = 'Orientation';

orientation.args = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur elementum diam, eget viverra nibh congue vitae.',
  linkText: 'Link or Button text',
  orientation: { sm: 'vertical', md: 'horizontal', lg: 'horizontal' },
};

orientation.parameters = {
  docs: {
    source: {
      code: template,
    },
  },
};
