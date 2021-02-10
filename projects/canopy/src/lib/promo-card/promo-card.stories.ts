import { object, select, text, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import { notes } from './promo-card.notes';
// import { CanopyModule } from '../canopy.module';
import { LgPromoCardModule } from './promo-card.module';
import { LgGridModule } from '../grid';

const propsGroupId = 'properties';
const contentGroupId = 'content';
const cardVariants = ['reverse-secondary', 'solid-secondary'];

export default {
  title: 'Components/Promo Card',
  parameters: {
    decorators: [
      withKnobs,
      moduleMetadata({
        imports: [LgPromoCardModule, LgGridModule],
      }),
    ],
    notes: {
      markdown: notes,
    },
  },
};

interface PromoCardKnobsConfig {
  content: string;
  ctaText: string;
  header: string;
  imageUrl: string;
  variant: string;
}

interface PromoCardListKnobsConfig {
  title: string;
  cards: Array<PromoCardKnobsConfig>;
}

const createPromoCardStory = (config: PromoCardKnobsConfig) => ({
  template: `
    <!--div lgContainer>
      <div lgRow>
        <div [lgColLg]="4"-->
          <lg-promo-card
            [variant]='variant'
          >
            <lg-promo-card-image [imageUrl]='imageUrl'></lg-promo-card-image>
            <lg-promo-card-header [header]='header'></lg-promo-card-header>
            <lg-promo-card-content [content]='content'></lg-promo-card-content>
            <lg-promo-card-footer [ctaText]='ctaText' [ctaVariant]='variant'></lg-promo-card-footer>
          </lg-promo-card>
        <!--/div>
      </div>
    </div-->`,
  props: {
    content: text('content', config.content, contentGroupId),
    ctaText: text('buttonText', config.ctaText, contentGroupId),
    header: text('header', config.header, contentGroupId),
    imageUrl: text('imageUrl', config.imageUrl, contentGroupId),
    variant: select('variant', cardVariants, config.variant, propsGroupId),
  },
});

export const promoCard = () =>
  createPromoCardStory({
    content:
      'Our care service can help you understand, find and fund care for you or a loved one.',
    ctaText: 'Find out more',
    imageUrl:
      'https://www.legalandgeneral.com/images/responsive/original/_home-page-resources/images/articlesandfeatures/1063686372-retire.jpg',
    header: 'Need help with Care?',
    variant: 'solid-secondary',
  });

const createPromoCardListStory = (config: PromoCardListKnobsConfig) => ({
  template: `
    <lg-promo-card-list [title]='title'>
      <lg-promo-card *ngFor='let card of cards'
        [variant]='card.variant'>
        <lg-promo-card-image [imageUrl]='card.imageUrl'></lg-promo-card-image>
        <lg-promo-card-header [header]='card.header'></lg-promo-card-header>
        <lg-promo-card-content [content]='card.content'></lg-promo-card-content>
        <lg-promo-card-footer [ctaText]='card.ctaText' [ctaVariant]='card.variant'></lg-promo-card-footer>
      </lg-promo-card>
    </lg-promo-card-list>`,
  props: {
    title: text('title', config.title, contentGroupId),
    cards: object('cards', config.cards, contentGroupId),
  },
});

export const promoCardList = () =>
  createPromoCardListStory({
    title: 'Get more from Legal & General',
    cards: [
      {
        content:
          'Our care service can help you understand, find and fund care for you or a loved one.',
        ctaText: 'Find out more',
        imageUrl:
          'https://www.legalandgeneral.com/images/responsive/original/_home-page-resources/images/articlesandfeatures/1063686372-retire.jpg',
        header: 'Need help with Care?',
        variant: 'solid-secondary',
      },
      {
        content:
          'Our care service can help you understand, find and fund care for you or a loved one.',
        ctaText: 'Find out more',
        imageUrl:
          'https://www.legalandgeneral.com/images/responsive/original/_home-page-resources/images/articlesandfeatures/1063686372-retire.jpg',
        header: 'Need help with Care?',
        variant: 'reverse-secondary',
      },
      {
        content:
          'Our care service can help you understand, find and fund care for you or a loved one.',
        ctaText: 'Find out more',
        imageUrl:
          'https://www.legalandgeneral.com/images/responsive/original/_home-page-resources/images/articlesandfeatures/1063686372-retire.jpg',
        header: 'Need help with Care?',
        variant: 'reverse-secondary',
      },
    ],
  });
