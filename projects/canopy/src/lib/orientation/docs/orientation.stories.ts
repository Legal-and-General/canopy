import { Meta, moduleMetadata } from '@storybook/angular';

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
  tags: [ 'pending' ],
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
  globals: {
    backgrounds: { value: 'breezy-blue' },
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

export const Orientation = {
  name: 'Orientation',
  render: (args: LgOrientationDirective) => ({
    props: args,
    template,
  }),
  args: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur elementum diam, eget viverra nibh congue vitae.',
    linkText: 'Link or Button text',
    orientation: { sm: 'vertical', md: 'horizontal', lg: 'horizontal' },
  },
  parameters: {
    docs: {
      source: {
        code: template,
      },
    },
  },
};
