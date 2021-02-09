import { select, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import { notes } from './promo-card.notes';
import { LgPromoCardModule } from './promo-card.module';
import { LgGridModule } from '../grid';
import { LgHeadingModule } from '../heading';
import { LgButtonModule } from '../button';
import { LgSeparatorModule } from '../separator';
import { LgSpacingModule } from '../spacing';

const cardListConfig = {
  title: 'Get more from Legal & General',
  cards: [
    {
      content:
        'Our care service can help you understand, find and fund care for you or a loved one.',
      ctaText: 'Find out more',
      imageUrl: 'promo-card.jpg',
      title: 'Need help with Care?',
    },
    {
      content:
        'Our care service can help you understand, find and fund care for you or a loved one.',
      ctaText: 'Find out more',
      imageUrl: 'promo-card.jpg',
      title: 'Need help with Care?',
    },
    {
      content:
        'Our care service can help you understand, find and fund care for you or a loved one.',
      ctaText: 'Find out more',
      imageUrl: 'promo-card.jpg',
      title: 'Need help with Care?',
    },
  ],
};

interface PromoCardKnobsConfig {
  content: string;
  ctaText: string;
  title: string;
  imageUrl: string;
}

interface PromoCardListKnobsConfig {
  title: string;
  cards: Array<PromoCardKnobsConfig>;
}

export default {
  title: 'Components/Promo Card',
  parameters: {
    decorators: [
      withKnobs,
      moduleMetadata({
        imports: [
          LgPromoCardModule,
          LgGridModule,
          LgHeadingModule,
          LgButtonModule,
          LgSeparatorModule,
          LgSpacingModule,
        ],
      }),
    ],
    notes: {
      markdown: notes,
    },
  },
};

export const promoCardList = () => createPromoCardListStory(cardListConfig);

const createPromoCardListStory = (config: PromoCardListKnobsConfig) => ({
  template: `
    <lg-promo-card-list>
      <lg-separator [variant]="'dotted'" lgMargin="none"></lg-separator>
      <lg-promo-card-list-title [headingLevel]="1">
        {{ title }}
      </lg-promo-card-list-title>
      <lg-promo-card
        *ngFor="let card of cards; let i = index"
        [variant]="variants[i]">
        <lg-promo-card-image [imageUrl]="card.imageUrl"></lg-promo-card-image>
        <lg-promo-card-title [headingLevel]="2">
          {{ card.title }}
        </lg-promo-card-title>
        <lg-promo-card-content>
          <p>{{ card.content }}</p>
        </lg-promo-card-content>
        <lg-promo-card-footer>
          <button
            lgMarginBottom="none"
            lg-button
            type="button"
            [variant]="variants[i] === 'solid-white' ? 'solid-secondary' : 'reverse-secondary'">
            {{ card.ctaText }}
          </button>
        </lg-promo-card-footer>
      </lg-promo-card>
    </lg-promo-card-list>`,
  props: {
    title: config.title,
    cards: config.cards,
    variants: [
      select('promo card 1 variant', ['solid-white', 'solid-green'], 'solid-white', ''),
      select('promo card 2 variant', ['solid-white', 'solid-green'], 'solid-white', ''),
      select('promo card 3 variant', ['solid-white', 'solid-green'], 'solid-green', ''),
    ],
  },
});
