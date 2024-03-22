import { Component, Input } from '@angular/core';
import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { NgFor } from '@angular/common';

import { LgPromoCardComponent } from '../promo-card/promo-card.component';
import { PromoCardVariant } from '../promo-card.interface';
import { LgPromoCardListComponent } from '../promo-card-list/promo-card-list.component';
import { LgSeparatorComponent } from '../../separator';
import { LgPromoCardImageComponent } from '../promo-card/promo-card-image/promo-card-image.component';
import { LgPromoCardTitleComponent } from '../promo-card/promo-card-title/promo-card-title.component';
import { LgPromoCardContentComponent } from '../promo-card/promo-card-content/promo-card-content.component';
import { LgPromoCardFooterComponent } from '../promo-card/promo-card-footer/promo-card-footer.component';
import { LgMarginDirective } from '../../spacing';
import { LgButtonComponent } from '../../button';
import { LgPromoCardListTitleComponent } from '../promo-card-list/promo-card-list-title/promo-card-list-title.component';

const cardListConfig = {
  title: 'Get more from Legal & General',
  cards: [
    {
      content:
        'Our care service can help you understand, find and fund care for you or a loved one.',
      ctaText: 'Find care options',
      imageUrl: 'promo-card/care.jpg',
      title: 'Need help with Care?',
    },
    {
      content:
        'You may have pension pots from several employers. We can help you trace any lost pensions and combine them into one easy to manage plan.',
      ctaText: 'Start consolidating',
      imageUrl: 'promo-card/pension-consolidation.jpg',
      title: 'Consolidate your pension pots',
    },
    {
      content:
        'If you have pension pots that you haven\'t accessed yet, we can help you understand the different ways you can use your pension.',
      ctaText: 'Learn more',
      imageUrl: 'promo-card/other-income-options.jpg',
      title: 'Our other income options',
    },
  ],
};

@Component({
  selector: 'lg-promo-card-list-story',
  template: `
    <lg-promo-card-list>
      <lg-separator [variant]="'dotted'" lgMargin="none"></lg-separator>
      <lg-promo-card-list-title headingLevel="1">
        {{ title }}
      </lg-promo-card-list-title>
      <lg-promo-card *ngFor="let card of cards; let i = index" [variant]="variants[i]">
        <lg-promo-card-image [imageUrl]="card.imageUrl"></lg-promo-card-image>
        <lg-promo-card-title headingLevel="2">
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
            [variant]="variants[i] === 'solid-white' ? 'primary-dark' : 'primary-light'"
          >
            {{ card.ctaText }}
          </button>
        </lg-promo-card-footer>
      </lg-promo-card>
    </lg-promo-card-list>
  `,
  standalone: true,
  imports: [
    LgPromoCardListComponent,
    LgSeparatorComponent,
    LgPromoCardListTitleComponent,
    LgPromoCardComponent,
    LgPromoCardImageComponent,
    LgPromoCardTitleComponent,
    LgPromoCardContentComponent,
    LgPromoCardFooterComponent,
    LgMarginDirective,
    LgButtonComponent,
    NgFor,
  ],
})
class PromoCardListStoryComponent {
  @Input() variants: Array<PromoCardVariant> = [];
  title = cardListConfig.title;
  cards = cardListConfig.cards;
}

const variants = [ 'solid-white', 'solid-green' ];

export default {
  title: 'Components/Promo cards/Examples',
  decorators: [
    moduleMetadata({
      imports: [ PromoCardListStoryComponent ],
    }),
  ],
  argTypes: {
    variant1: {
      name: 'Promo card 1 variant',
      options: variants,
      description: 'The variant to apply to the card.',
      table: {
        type: {
          summary: variants,
        },
        defaultValue: {
          summary: variants[0],
        },
      },
      control: {
        type: 'select',
      },
    },
    variant2: {
      name: 'Promo card 2 variant',
      options: variants,
      description: 'The variant to apply to the card.',
      table: {
        type: {
          summary: variants,
        },
        defaultValue: {
          summary: variants[0],
        },
      },
      control: {
        type: 'select',
      },
    },
    variant3: {
      name: 'Promo card 3 variant',
      options: variants,
      description: 'The variant to apply to the card.',
      table: {
        type: {
          summary: variants,
        },
        defaultValue: {
          summary: variants[1],
        },
      },
      control: {
        type: 'select',
      },
    },
  },
} as Meta;

const examplePromoCardTemplate = `
<lg-promo-card-list>
  <lg-separator [variant]="'dotted'" lgMargin="none"></lg-separator>
  <lg-promo-card-list-title headingLevel="1">
    {{ title }}
  </lg-promo-card-list-title>
  <lg-promo-card
    *ngFor="let card of cards; let i = index;"
    variant="variant[i]">
    <lg-promo-card-image [imageUrl]="card.imageUrl"></lg-promo-card-image>
    <lg-promo-card-title headingLevel="2">
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
        [variant]="variant[i] === 'solid-white' ? 'primary-dark' : 'primary-light'">
        {{ card.ctaText }}
      </button>
    </lg-promo-card-footer>
  </lg-promo-card>
</lg-promo-card-list>
`;

const promoCardListTemplate: StoryFn<LgPromoCardComponent> = (
  args: LgPromoCardComponent,
) => ({
  props: args,
  template:
    '<lg-promo-card-list-story [variants]="[variant1, variant2, variant3]"></lg-promo-card-list-story>',
});

export const promoCardList = promoCardListTemplate.bind({});
promoCardList.storyName = 'Promo card list';
promoCardList.component = promoCardListTemplate;

promoCardList.args = {
  variant1: variants[0],
  variant2: variants[0],
  variant3: variants[1],
};

promoCardList.parameters = {
  docs: {
    source: {
      code: examplePromoCardTemplate,
    },
  },
};
