import { Component, Input } from '@angular/core';
import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { LgGridModule } from '../../grid';
import { LgHeadingModule } from '../../heading';
import { LgButtonModule } from '../../button';
import { LgSeparatorModule } from '../../separator';
import { LgSpacingModule } from '../../spacing';
import { LgPromoCardModule } from '../promo-card.module';
import { LgPromoCardComponent } from '../promo-card/promo-card.component';
import { PromoCardVariant } from '../promo-card.interface';

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
})
class PromoCardListStoryComponent {
  @Input() variants: Array<PromoCardVariant> = [];
  title = cardListConfig.title;
  cards = cardListConfig.cards;
}

const variants = [ 'solid-white', 'solid-green' ];

export default {
  title: 'Components/Promo card/Examples',
  decorators: [
    moduleMetadata({
      declarations: [ PromoCardListStoryComponent ],
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
  parameters: {
    viewMode: 'story',
    previewTabs: { 'storybook/docs/panel': { hidden: true } },
  },
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

const promoCardListTemplate: Story<LgPromoCardComponent> = (
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
