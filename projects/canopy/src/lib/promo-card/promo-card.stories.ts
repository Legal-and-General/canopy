import { withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import { notes } from './promo-card.notes';
import { LgPromoCardModule } from './promo-card.module';
import { LgGridModule } from '../grid';
import { LgHeadingModule } from '../heading';
import { LgButtonModule } from '../button';
import { LgSeparatorModule } from '../separator';

const cardListConfig = {
  title: 'Get more from Legal & General',
  cards: [
    {
      content:
        'Our care service can help you understand, find and fund care for you or a loved one.',
      ctaText: 'Find out more',
      imageUrl:
        'https://www.legalandgeneral.com/images/responsive/original/_home-page-resources/images/articlesandfeatures/1063686372-retire.jpg',
      title: 'Need help with Care?',
      variant: 'solid-secondary',
    },
    {
      content:
        'Our care service can help you understand, find and fund care for you or a loved one.',
      ctaText: 'Find out more',
      imageUrl:
        'https://www.legalandgeneral.com/images/responsive/original/_home-page-resources/images/articlesandfeatures/1063686372-retire.jpg',
      title: 'Need help with Care?',
      variant: 'solid-secondary',
    },
    {
      content:
        'Our care service can help you understand, find and fund care for you or a loved one.',
      ctaText: 'Find out more',
      imageUrl:
        'https://www.legalandgeneral.com/images/responsive/original/_home-page-resources/images/articlesandfeatures/1063686372-retire.jpg',
      title: 'Need help with Care?',
      variant: 'reverse-secondary',
    },
  ],
};

interface PromoCardKnobsConfig {
  content: string;
  ctaText: string;
  title: string;
  imageUrl: string;
  variant: string;
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
        ],
      }),
    ],
    notes: {
      markdown: notes,
    },
  },
};

export const promoCard = () =>
  createPromoCardListStory({
    ...cardListConfig,
    cards: [cardListConfig.cards[0]],
  });

export const promoCardList = () => createPromoCardListStory(cardListConfig);

const createPromoCardListStory = (config: PromoCardListKnobsConfig) => ({
  template: `
    <lg-promo-card-list>
      <lg-heading [level]="1" class="lg-font--expressive lg-promo-card-list__heading">
        {{ title }}
      </lg-heading>
      <lg-promo-card *ngFor='let card of cards'
        [variant]='card.variant'>
        <lg-promo-card-image [imageUrl]='card.imageUrl'></lg-promo-card-image>
        <lg-promo-card-title [headingLevel]='2'>
          {{ card.title }}
        </lg-promo-card-title>
        <lg-promo-card-content>
          <p>{{ card.content }}</p>
        </lg-promo-card-content>
        <lg-promo-card-footer>
          <button class="lg-promo-card-footer__cta lg-margin__bottom--none" lg-button type="button" [variant]="card.variant">
            {{ card.ctaText }}
          </button>
        </lg-promo-card-footer>
      </lg-promo-card>
    </lg-promo-card-list>`,
  props: {
    title: config.title,
    cards: config.cards,
  },
});
