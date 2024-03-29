import { moduleMetadata, StoryFn } from '@storybook/angular';
import { Component, Input } from '@angular/core';

import { LgGridModule } from '../../../grid/grid.module';
import { LgPaddingModule } from '../../../spacing/padding/padding.module';
import { LgMarginModule } from '../../../spacing/margin/margin.module';
import { LgButtonModule } from '../../../button/button.module';
import { LgSeparatorModule } from '../../../separator/separator.module';
import { LgCardComponent } from '../../card.component';
import { LgCardModule } from '../../card.module';
import {
  lgBrandIconCalendarAppointment,
  lgBrandIconLookingAhead,
  LgBrandIconModule,
  lgBrandIconPensionPot,
  LgBrandIconRegistry,
} from '../../../brand-icon';
import { LgOrientationModule } from '../../../orientation';
import { LgShadowModule } from '../../../shadow';

const promotionsGeneralCardTemplate = `
<lg-card
  lgShadow
  lgMarginBottom="lg"
  [lgPadding]="hasIcon ? 'lg' : 'none'"
  variant="promotion"
  [lgOrientation]="orientation">
  <lg-card-hero-img
    [cover]="true"
    [src]="hasIcon ? '' : imgUrl">
    <lg-brand-icon *ngIf="hasIcon" [name]="iconName" size="xs"></lg-brand-icon>
  </lg-card-hero-img>
  <lg-card-content>
    <h3 lgMarginBottom="xxs" class="lg-font--expressive">{{ title }}</h3>
    <p lgMarginBottom="lg">{{ text }}</p>
    <a href="#">{{ buttonText }}</a>
  </lg-card-content>
</lg-card>
`;

@Component({
  selector: 'lg-card-general-promotion',
  template: promotionsGeneralCardTemplate,
})
class GeneralPromotionCardComponent {
  @Input() title: string;
  @Input() text: string;
  @Input() buttonText: string;
  @Input() imgUrl: string;
  @Input() iconName: string;
  @Input() hasIcon: boolean;
  @Input() orientation = { sm: 'vertical', md: 'horizontal', lg: 'horizontal' };

  constructor(private brandIconRegistry: LgBrandIconRegistry) {
    this.brandIconRegistry.registerBrandIcon([
      lgBrandIconLookingAhead,
      lgBrandIconPensionPot,
      lgBrandIconCalendarAppointment,
    ]);
  }
}

export default {
  title: 'Patterns/Promotions/Examples',
  decorators: [
    moduleMetadata({
      declarations: [ GeneralPromotionCardComponent ],
      imports: [
        LgCardModule,
        LgButtonModule,
        LgGridModule,
        LgPaddingModule,
        LgMarginModule,
        LgShadowModule,
        LgSeparatorModule,
        LgBrandIconModule,
        LgOrientationModule,
      ],
    }),
  ],
  parameters: {
    backgrounds: {
      default: 'White Smoke',
    },
  },
};

const promotionsGeneralCardStandAloneTemplate = `
<div lgContainer>
  <div lgRow>
    <div lgColSm="12">
      <lg-card-general-promotion
        [title]="title"
        [text]="text"
        [buttonText]="buttonText"
        imgUrl="promo-card/general-promotion1.jpg"
        [hasIcon]="hasIcon"
        iconName="looking-ahead"
        [orientation]="orientation">
      </lg-card-general-promotion>
    </div>
  </div>
</div>
`;

const promotionsGeneralCardTwoCardsTemplate = `
<div lgContainer>
  <div lgRow>
    <lg-card-general-promotion
      lgColSm="12"
      lgColLg="6"
      [title]="title"
      [text]="text"
      [buttonText]="buttonText"
      imgUrl="promo-card/general-promotion1.jpg"
      [hasIcon]="hasIcon" iconName="looking-ahead"
      [orientation]="orientation">
    </lg-card-general-promotion>
    <lg-card-general-promotion
      lgColSm="12"
      lgColLg="6"
      [title]="title"
      [text]="text"
      [buttonText]="buttonText"
      imgUrl="promo-card/general-promotion2.jpg"
      [hasIcon]="hasIcon"
      iconName="pension-pot"
      [orientation]="orientation">
    </lg-card-general-promotion>
  </div>
</div>
`;

const promotionsGeneralCardThreeCardsTemplate = `
<div lgContainer>
  <div lgRow>
    <lg-card-general-promotion
      lgColSm="12"
      lgColLg="4"
      [title]="title"
      [text]="text"
      [buttonText]="buttonText"
      imgUrl="promo-card/general-promotion1.jpg"
      [hasIcon]="hasIcon" iconName="looking-ahead"
      [orientation]="orientation">
    </lg-card-general-promotion>
    <lg-card-general-promotion
      lgColSm="12"
      lgColLg="4"
      [title]="title"
      [text]="text"
      [buttonText]="buttonText"
      imgUrl="promo-card/general-promotion2.jpg"
      [hasIcon]="hasIcon"
      iconName="pension-pot"
      [orientation]="orientation">
    </lg-card-general-promotion>
    <lg-card-general-promotion
      lgColSm="12"
      lgColLg="4"
      [title]="title"
      [text]="text"
      [buttonText]="buttonText"
      imgUrl="promo-card/general-promotion3.jpg"
      [hasIcon]="hasIcon"
      iconName="calendar-appointment"
      [orientation]="orientation">
    </lg-card-general-promotion>
  </div>
</div>
`;

const promotionsGeneralCardMagazineLayoutTemplate = `
<div lgContainer>
  <div lgRow>
    <div lgCol="12">
      <lg-separator variant="dotted" lgMarginTop="none"></lg-separator>
    </div>
    <lg-card-general-promotion
      lgColSm="12"
      lgColLg="4"
      [title]="title"
      [text]="text"
      [buttonText]="buttonText"
      imgUrl="promo-card/general-promotion1.jpg"
      [hasIcon]="false"
      iconName="looking-ahead"
      [orientation]="{ sm: 'vertical', md: 'horizontal', lg: 'vertical' }">
    </lg-card-general-promotion>
    <lg-card-general-promotion
      lgColSm="12"
      lgColLg="4"
      [title]="title"
      [text]="text"
      [buttonText]="buttonText"
      imgUrl="promo-card/general-promotion2.jpg"
      [hasIcon]="false"
      iconName="pension-pot"
      [orientation]="{ sm: 'vertical', md: 'horizontal', lg: 'vertical' }">
    </lg-card-general-promotion>
    <lg-card-general-promotion
      lgColSm="12"
      lgColLg="4"
      [title]="title"
      [text]="text"
      [buttonText]="buttonText"
      imgUrl="promo-card/general-promotion3.jpg"
      [hasIcon]="false"
      iconName="calendar-appointment"
      [orientation]="{ sm: 'vertical', md: 'horizontal', lg: 'vertical' }">
    </lg-card-general-promotion>
  </div>
  <div lgRow>
    <div lgCol="12">
      <lg-separator variant="dotted" lgMarginTop="none"></lg-separator>
    </div>
    <lg-card-general-promotion
      lgColSm="12"
      lgColLg="6"
      [title]="title"
      [text]="text"
      [buttonText]="buttonText"
      imgUrl="promo-card/general-promotion1.jpg"
      [hasIcon]="false"
      iconName="looking-ahead"
      [orientation]="{ sm: 'vertical', md: 'horizontal', lg: 'vertical' }">
    </lg-card-general-promotion>
    <lg-card-general-promotion
      lgColSm="12"
      lgColLg="6"
      [title]="title"
      [text]="text"
      [buttonText]="buttonText"
      imgUrl="promo-card/general-promotion2.jpg"
      [hasIcon]="false"
      iconName="pension-pot"
      [orientation]="{ sm: 'vertical', md: 'horizontal', lg: 'vertical' }">
    </lg-card-general-promotion>
  </div>
  <div lgRow>
    <div lgCol="12">
      <lg-separator variant="dotted" lgMarginTop="none"></lg-separator>
    </div>
    <lg-card-general-promotion
      lgColSm="12"
      lgColLg="4"
      [title]="title"
      [text]="text"
      [buttonText]="buttonText"
      imgUrl="promo-card/general-promotion1.jpg"
      [hasIcon]="true"
      iconName="looking-ahead"
      [orientation]="{ sm: 'vertical', md: 'horizontal', lg: 'vertical' }">
    </lg-card-general-promotion>
    <lg-card-general-promotion
      lgColSm="12"
      lgColLg="4"
      [title]="title"
      [text]="text"
      [buttonText]="buttonText"
      imgUrl="promo-card/general-promotion2.jpg"
      [hasIcon]="true"
      iconName="pension-pot"
      [orientation]="{ sm: 'vertical', md: 'horizontal', lg: 'vertical' }">
    </lg-card-general-promotion>
    <lg-card-general-promotion
      lgColSm="12"
      lgColLg="4"
      [title]="title"
      [text]="text"
      [buttonText]="buttonText"
      imgUrl="promo-card/general-promotion3.jpg"
      [hasIcon]="true"
      iconName="calendar-appointment"
      [orientation]="{ sm: 'vertical', md: 'horizontal', lg: 'vertical' }">
    </lg-card-general-promotion>
  </div>
  <div lgRow>
    <div lgCol="12">
      <lg-separator variant="dotted" lgMarginTop="none"></lg-separator>
    </div>
    <lg-card-general-promotion
      lgColSm="12"
      lgColLg="6"
      [title]="title"
      [text]="text"
      [buttonText]="buttonText"
      imgUrl="promo-card/general-promotion1.jpg"
      [hasIcon]="true"
      iconName="looking-ahead"
      [orientation]="{ sm: 'vertical', md: 'horizontal', lg: 'vertical' }">
    </lg-card-general-promotion>
    <lg-card-general-promotion
      lgColSm="12"
      lgColLg="6"
      [title]="title"
      [text]="text"
      [buttonText]="buttonText"
      imgUrl="promo-card/general-promotion2.jpg"
      [hasIcon]="true"
      iconName="pension-pot"
      [orientation]="{ sm: 'vertical', md: 'horizontal', lg: 'vertical' }">
    </lg-card-general-promotion>
  </div>
</div>
`;

const promotionsGeneralCardStory: StoryFn<LgCardComponent> = (args: LgCardComponent) => ({
  props: args,
  template: promotionsGeneralCardStandAloneTemplate,
  title: 'Patterns/Card/Examples',
});

export const promotionsGeneralCard = promotionsGeneralCardStory.bind({
  title: 'Patterns/Card/Examples',
});
promotionsGeneralCard.storyName = 'Stand-alone card';

promotionsGeneralCard.args = {
  title: 'Promotion Title here',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur elementum diam, eget viverra nibh congue vitae. Cras at turpis sapien. Nunc pharetra felis vitae luctus mattis. Aenean eu velit viverra, iaculis sapien non, imperdiet ipsum.',
  buttonText: 'Link or Button text',
  hasIcon: false,
  orientation: { sm: 'vertical', md: 'horizontal', lg: 'horizontal' },
};

promotionsGeneralCard.parameters = {
  docs: {
    source: {
      code: promotionsGeneralCardStandAloneTemplate,
    },
  },
};

const promotionsGeneralTwoCardStory: StoryFn<LgCardComponent> = (
  args: LgCardComponent,
) => ({
  props: args,
  template: promotionsGeneralCardTwoCardsTemplate,
  title: 'Patterns/Card/Examples',
});

export const promotionsGeneralTwoCard = promotionsGeneralTwoCardStory.bind({
  title: 'Patterns/Card/Examples',
});
promotionsGeneralTwoCard.storyName = 'Two cards';

promotionsGeneralTwoCard.args = {
  title: 'Promotion Title here',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur elementum diam, eget viverra nibh congue vitae. Cras at turpis sapien. Nunc pharetra felis vitae luctus mattis. Aenean eu velit viverra, iaculis sapien non, imperdiet ipsum.',
  buttonText: 'Link or Button text',
  hasIcon: false,
  orientation: { sm: 'vertical', md: 'horizontal', lg: 'vertical' },
};

promotionsGeneralTwoCard.parameters = {
  docs: {
    source: {
      code: promotionsGeneralCardTwoCardsTemplate,
    },
  },
};

const promotionsGeneralThreeCardStory: StoryFn<LgCardComponent> = (
  args: LgCardComponent,
) => ({
  props: args,
  template: promotionsGeneralCardThreeCardsTemplate,
  title: 'Patterns/Card/Examples',
});

export const promotionsGeneralThreeCard = promotionsGeneralThreeCardStory.bind({
  title: 'Patterns/Card/Examples',
});
promotionsGeneralThreeCard.storyName = 'Three cards';

promotionsGeneralThreeCard.args = {
  title: 'Promotion Title here',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur elementum diam, eget viverra nibh congue vitae. Cras at turpis sapien. Nunc pharetra felis vitae luctus mattis. Aenean eu velit viverra, iaculis sapien non, imperdiet ipsum.',
  buttonText: 'Link or Button text',
  hasIcon: false,
  orientation: { sm: 'vertical', md: 'horizontal', lg: 'vertical' },
};

promotionsGeneralThreeCard.parameters = {
  docs: {
    source: {
      code: promotionsGeneralCardThreeCardsTemplate,
    },
  },
};

const promotionsGeneralMagazineLayoutStory: StoryFn<LgCardComponent> = (
  args: LgCardComponent,
) => ({
  props: args,
  template: promotionsGeneralCardMagazineLayoutTemplate,
  title: 'Patterns/Card/Examples',
});

export const promotionsGeneralMagazineLayout = promotionsGeneralMagazineLayoutStory.bind({
  title: 'Patterns/Card/Examples',
});
promotionsGeneralMagazineLayout.storyName = 'Magazine Layout';

promotionsGeneralMagazineLayout.args = {
  title: 'Promotion Title here',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur elementum diam, eget viverra nibh congue vitae. Cras at turpis sapien. Nunc pharetra felis vitae luctus mattis. Aenean eu velit viverra, iaculis sapien non, imperdiet ipsum.',
  buttonText: 'Link or Button text',
};

promotionsGeneralMagazineLayout.parameters = {
  docs: {
    source: {
      code: promotionsGeneralCardMagazineLayoutTemplate,
    },
  },
};
