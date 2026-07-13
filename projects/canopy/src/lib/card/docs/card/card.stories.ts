import { Component, Input } from '@angular/core';
import { moduleMetadata } from '@storybook/angular';
import { RouterTestingModule } from '@angular/router/testing';

import { LgCardComponent } from '../../card.component';
import { LgCardGroupComponent } from '../../card-group/card-group.component';
import { LgCardHeaderComponent } from '../../card-header/card-header.component';
import { LgCardTitleComponent } from '../../card-title/card-title.component';
import { LgCardFooterComponent } from '../../card-footer/card-footer.component';
import { LgCardContentComponent } from '../../card-content/card-content.component';
import {
  LgGridColDirective,
  LgGridContainerDirective,
  LgGridRowDirective,
} from '../../../grid';
import { LgMarginDirective } from '../../../spacing';
import {
  LgButtonComponent,
  LgButtonGroupComponent,
  LgButtonToggleDirective,
} from '../../../button';
import { LgCardToggableContentComponent } from '../../card-toggable-content/card-toggable-content.component';
import { LgCardSubheadingComponent } from '../../card-subheading/card-subheading.component';
import { LgCardSubtitleComponent } from '../../card-subtitle/card-subtitle.component';
import { LgCardContentInnerDataPointsComponent } from '../../card-content-inner-data-points/card-content-inner-data-points.component';
import { LgCardNavigationTitleComponent } from '../../card-navigation-title/card-navigation-title.component';
import { LgCardHeroImageComponent } from '../../card-hero-img/card-hero-img.component';
import {
  LgDataPointComponent,
  LgDataPointLabelComponent,
  LgDataPointValueComponent,
  LgDataPointSecondaryLabelComponent,
} from '../../../data-point';
import { LgPictogramComponent } from '../../../pictogram';
import { LgOrientationDirective } from '../../../orientation';
import {
  LgLinkMenuComponent,
  LgLinkMenuItemComponent,
  LgLinkMenuItemTextComponent,
} from '../../../link-menu';

const content =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

const showMoreCardTemplate = `
<lg-card>
    <lg-card-header>
      <lg-card-title [headingLevel]="2">
        Example of showing/hiding more content
      </lg-card-title>
    </lg-card-header>
    <lg-card-content>
      <lg-card-subheading [headingLevel]="3">Subheading</lg-card-subheading>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
      laborum.

      <lg-card-toggable-content>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
        aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
        dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
        amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam
        aliquam quaerat voluptatem.
      </lg-card-toggable-content>

      <div lgMarginTop="5">
        <button lg-button type="button" priority="link" lgButtonToggle (toggleActive)="toggleActive($event)"
                lgMarginBottom="none">
          @if (isToggleActive) {
            Show less
          }
          @if (!isToggleActive) {
            Show more
          }
        </button>
      </div>
    </lg-card-content>
  </lg-card>
`;

@Component({
  selector: 'lg-card-show-more',
  template: showMoreCardTemplate,
  imports: [
    LgCardToggableContentComponent,
    LgCardSubheadingComponent,
    LgCardContentComponent,
    LgCardTitleComponent,
    LgCardHeaderComponent,
    LgCardComponent,
    LgMarginDirective,
    LgButtonComponent,
    LgButtonToggleDirective,
  ],
})
class ShowMoreCardComponent {
  isToggleActive: boolean;

  toggleActive(state: boolean): void {
    this.isToggleActive = state;
  }
}

const dataPointsCardTemplate = `
<lg-card>
  <lg-card-header>
    <lg-card-navigation-title title="Data Points" link="#" [headingLevel]="2"></lg-card-navigation-title>
  </lg-card-header>
  <lg-card-content>
    <lg-card-content-inner-data-points>
      <lg-data-point variant="card">
        <lg-data-point-label [headingLevel]="3">
          Data key 1
        </lg-data-point-label>
        <lg-data-point-value size="md">
          Data value 1
        </lg-data-point-value>
      </lg-data-point>
      <lg-data-point variant="card">
        <lg-data-point-label [headingLevel]="3">
          Data key 2
        </lg-data-point-label>
        <lg-data-point-value size="sm">
          Data value 2
        </lg-data-point-value>
      </lg-data-point>
      <lg-data-point variant="card">
        <lg-data-point-label [headingLevel]="3">
          Data key 3
        </lg-data-point-label>
        <lg-data-point-value size="sm">
          Data value 3
        </lg-data-point-value>
      </lg-data-point>
    </lg-card-content-inner-data-points>
  </lg-card-content>
  <lg-card-footer>
    <lg-link-menu>
      <a href="" target="_blank">
        <lg-link-menu-item>
          <lg-link-menu-item-text isBold="true">Link menu item 1</lg-link-menu-item-text>
        </lg-link-menu-item>
      </a>
      <a href="">
        <lg-link-menu-item>
          <lg-link-menu-item-text isBold="true">Link menu item 2</lg-link-menu-item-text>
        </lg-link-menu-item>
      </a>
    </lg-link-menu>
  </lg-card-footer>
</lg-card>
`;

@Component({
  selector: 'lg-card-data-points',
  template: dataPointsCardTemplate,
  imports: [
    LgCardContentComponent,
    LgCardHeaderComponent,
    LgCardComponent,
    LgCardNavigationTitleComponent,
    LgCardContentInnerDataPointsComponent,
    LgDataPointComponent,
    LgDataPointLabelComponent,
    LgDataPointValueComponent,
    LgCardFooterComponent,
    LgLinkMenuComponent,
    LgLinkMenuItemComponent,
    LgLinkMenuItemTextComponent,
    RouterTestingModule,
  ],
})
class DataPointsCardComponent {}

const cardGroupTemplate = `
<div lgContainer>
  <div lgRow>
    <div lgCol="12">
      <aside lg-card-group>
        <lg-card>
          <lg-card-header>
            <lg-card-navigation-title title="Internal link title" link="/foo"
                                      [headingLevel]="2"></lg-card-navigation-title>
          </lg-card-header>
          <lg-card-content>
            {{ cardContent }} <a href="#">Test link</a>.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
            rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo.
          </lg-card-content>
        </lg-card>
        @for (i of [].constructor(additionalCards); track $index) {
          <lg-card>
            <lg-card-header>
              <lg-card-navigation-title title="External link title" link="https://www.landg.com"
                                        headingLevel="2"></lg-card-navigation-title>
            </lg-card-header>
            <lg-card-content>
              {{ cardContent }} <a href="#">Test link</a>.
            </lg-card-content>
            <lg-card-footer>
            <lg-link-menu>
              <a href="" target="_blank">
                <lg-link-menu-item>
                  <lg-link-menu-item-text isBold="true">Link menu item 1</lg-link-menu-item-text>
                </lg-link-menu-item>
              </a>
              <a href="">
                <lg-link-menu-item>
                  <lg-link-menu-item-text isBold="true">Link menu item 2</lg-link-menu-item-text>
                </lg-link-menu-item>
              </a>
            </lg-link-menu>
          </lg-card-footer>
        </lg-card>
        }
      </aside>
    </div>
  </div>
</div>`;

@Component({
  selector: 'lg-card-group',
  template: cardGroupTemplate,
  imports: [
    LgCardContentComponent,
    LgCardNavigationTitleComponent,
    LgCardHeaderComponent,
    LgLinkMenuItemTextComponent,
    LgLinkMenuItemComponent,
    LgLinkMenuComponent,
    LgCardFooterComponent,
    LgCardComponent,
    LgCardGroupComponent,
    LgGridColDirective,
    LgGridRowDirective,
    LgGridContainerDirective,
    LgMarginDirective,
  ],
})
class GroupCardComponent {
  @Input() cardContent: never;
  @Input() additionalCards: number;
}

export default {
  title: 'Components/Card/Examples',
  decorators: [
    moduleMetadata({
      imports: [
        ShowMoreCardComponent,
        DataPointsCardComponent,
        GroupCardComponent,
        LgCardComponent,
        LgCardHeaderComponent,
        LgCardTitleComponent,
        LgCardSubtitleComponent,
        LgCardSubheadingComponent,
        LgCardContentComponent,
        LgDataPointComponent,
        LgDataPointLabelComponent,
        LgDataPointValueComponent,
        LgDataPointSecondaryLabelComponent,
        LgCardNavigationTitleComponent,
        LgCardContentInnerDataPointsComponent,
        LgGridContainerDirective,
        LgGridRowDirective,
        LgGridColDirective,
        LgButtonComponent,
        LgButtonGroupComponent,
        LgCardFooterComponent,
        LgCardHeroImageComponent,
        LgPictogramComponent,
        LgOrientationDirective,
        LgMarginDirective,
      ],
    }),
  ],
  globals: {
    backgrounds: { value: 'off-white' },
  },
};

const defaultCardTemplate = `
<lg-card [variant]="variant">
  <lg-card-header>
    @if (variant === 'interactive') {
      <lg-card-navigation-title
        [title]="title"
        [link]="link"
        [queryParams]="queryParams"
        [queryParamsHandling]="queryParamsHandling"
        [headingLevel]="headingLevel"
      ></lg-card-navigation-title>
    }
    @if (variant !== 'interactive') {
      <lg-card-title [headingLevel]="headingLevel">
        {{title}}
      </lg-card-title>
    }
  </lg-card-header>
  <lg-card-content>
    <lg-card-subheading [headingLevel]="headingLevel + 1">Subheading</lg-card-subheading>
    {{cardContent}} <a href="#">Test link</a>.
  </lg-card-content>
  <lg-card-footer>
    <lg-button-group>
      <button lg-button type="button" priority="primary">Continue</button>
      <button lg-button type="button" priority="secondary">Back</button>
    </lg-button-group>
  </lg-card-footer>
</lg-card>
`;

export const DefaultCard = {
  name: 'Standard',
  args: {
    variant: 'default',
    link: '/foo',
    queryParams: null,
    queryParamsHandling: null,
    headingLevel: 2,
    title: 'The title',
    cardContent: content,
  },
  argTypes: {
    variant: {
      options: [ 'default', 'promo', 'interactive' ],
      control: { type: 'select' },
      table: {
        type: { summary: [ 'default', 'promo', 'interactive' ] },
        defaultValue: { summary: 'default' },
      },
    },
  },
  parameters: {
    docs: {
      source: {
        code: defaultCardTemplate,
      },
    },
  },
  render: (args: LgCardComponent) => ({
    props: args,
    template: defaultCardTemplate,
  }),
};

const promoCardTemplate = `
<lg-card [variant]="variant" [lgOrientation]="orientation">
  <lg-card-hero-img
    [cover]="true"
    [src]="mediaType === 'image' ? imgUrl : ''"
    [alt]="altText"
  >
    @if (mediaType === 'pictogram') {
      <lg-pictogram [name]="iconName" size="lg" [hasFill]="false"></lg-pictogram>
    }
  </lg-card-hero-img>
  <lg-card-header>
    <lg-card-title [headingLevel]="headingLevel">
      {{title}}
    </lg-card-title>
  </lg-card-header>
  <lg-card-content>
    <p lgMarginBottom="6">{{ cardContent }}</p>
    <a href="#">Find out more</a>
  </lg-card-content>
  <lg-card-footer>
    <lg-button-group>
      <button lg-button type="button" priority="primary">Continue</button>
      <button lg-button type="button" priority="secondary">Back</button>
    </lg-button-group>
  </lg-card-footer>
</lg-card>
`;

export const Promo = {
  name: 'Image',
  args: {
    title: 'The title',
    headingLevel: 2,
    cardContent: content,
    mediaType: 'image',
    imgUrl: 'promo-card/general-promotion1.jpg',
    altText: 'Family sitting in a park',
    iconName: 'looking-ahead',
    variant: 'promo',
    orientation: { sm: 'vertical', md: 'horizontal', lg: 'horizontal' },
  },
  argTypes: {
    variant: {
      options: [ 'default', 'promo' ],
      control: { type: 'select' },
      table: {
        type: { summary: [ 'default', 'promo' ] },
        defaultValue: { summary: 'promo' },
      },
    },
    mediaType: {
      options: [ 'image', 'pictogram' ],
      control: { type: 'select' },
      table: {
        type: { summary: [ 'image', 'pictogram' ] },
        defaultValue: { summary: 'image' },
      },
    },
    iconName: {
      options: [ 'looking-ahead', 'pension-pot', 'calendar' ],
      control: { type: 'select' },
      table: {
        type: {
          summary: [ 'looking-ahead', 'pension-pot', 'calendar' ],
        },
        defaultValue: { summary: 'looking-ahead' },
      },
    },
    orientation: {
      options: {
        horizontal: { sm: 'horizontal', md: 'horizontal', lg: 'horizontal' },
        vertical: { sm: 'vertical', md: 'vertical', lg: 'vertical' },
      },
      control: { type: 'select' },
      table: {
        type: { summary: 'horizontal | vertical' },
        defaultValue: { summary: 'vertical (sm), horizontal (md/lg)' },
      },
    },
  },
  parameters: {
    docs: {
      source: {
        code: promoCardTemplate,
      },
    },
  },
  render: (args: LgCardComponent) => ({
    props: args,
    template: promoCardTemplate,
  }),
};

const threeCardsTemplate = `
<div lgContainer>
  <div lgRow>
    <div lgCol="12" lgColMd="4">
      <lg-card [variant]="variant" [lgOrientation]="orientation">
        <lg-card-hero-img
          [cover]="true"
          [src]="mediaType === 'image' ? imgUrl : ''"
          [alt]="altText"
        >
          @if (mediaType === 'pictogram') {
            <lg-pictogram [name]="iconName" size="lg" [hasFill]="false"></lg-pictogram>
          }
        </lg-card-hero-img>
        <lg-card-header>
          <lg-card-title [headingLevel]="headingLevel">
            {{title}}
          </lg-card-title>
        </lg-card-header>
        <lg-card-content>
          <p lgMarginBottom="6">{{ cardContent }}</p>
          <a href="#">Find out more</a>
        </lg-card-content>
        <lg-card-footer>
          <lg-button-group>
            <button lg-button type="button" priority="primary">Continue</button>
            <button lg-button type="button" priority="secondary">Back</button>
          </lg-button-group>
        </lg-card-footer>
      </lg-card>
    </div>
    <div lgCol="12" lgColMd="4">
      <lg-card [variant]="variant" [lgOrientation]="orientation">
        <lg-card-hero-img
          [cover]="true"
          [src]="mediaType === 'image' ? imgUrl : ''"
          [alt]="altText"
        >
          @if (mediaType === 'pictogram') {
            <lg-pictogram [name]="iconName" size="lg" [hasFill]="false"></lg-pictogram>
          }
        </lg-card-hero-img>
        <lg-card-header>
          <lg-card-title [headingLevel]="headingLevel">
            {{title}}
          </lg-card-title>
        </lg-card-header>
        <lg-card-content>
          <p lgMarginBottom="6">{{ cardContent }}</p>
          <a href="#">Find out more</a>
        </lg-card-content>
        <lg-card-footer>
          <lg-button-group>
            <button lg-button type="button" priority="primary">Continue</button>
            <button lg-button type="button" priority="secondary">Back</button>
          </lg-button-group>
        </lg-card-footer>
      </lg-card>
    </div>
    <div lgCol="12" lgColMd="4">
      <lg-card [variant]="variant" [lgOrientation]="orientation">
        <lg-card-hero-img
          [cover]="true"
          [src]="mediaType === 'image' ? imgUrl : ''"
          [alt]="altText"
        >
          @if (mediaType === 'pictogram') {
            <lg-pictogram [name]="iconName" size="lg" [hasFill]="false"></lg-pictogram>
          }
        </lg-card-hero-img>
        <lg-card-header>
          <lg-card-title [headingLevel]="headingLevel">
            {{title}}
          </lg-card-title>
        </lg-card-header>
        <lg-card-content>
          <p lgMarginBottom="6">{{ cardContent }}</p>
          <a href="#">Find out more</a>
        </lg-card-content>
        <lg-card-footer>
          <lg-button-group>
            <button lg-button type="button" priority="primary">Continue</button>
            <button lg-button type="button" priority="secondary">Back</button>
          </lg-button-group>
        </lg-card-footer>
      </lg-card>
    </div>
  </div>
</div>
`;

export const ThreeImages = {
  name: 'Three cards',
  args: {
    title: 'The title',
    headingLevel: 2,
    cardContent: content,
    mediaType: 'image',
    imgUrl: 'promo-card/general-promotion1.jpg',
    altText: 'Family sitting in a park',
    iconName: 'looking-ahead',
    variant: 'promo',
    orientation: { sm: 'vertical', md: 'vertical', lg: 'vertical' },
  },
  argTypes: {
    variant: {
      options: [ 'default', 'promo' ],
      control: { type: 'select' },
      table: {
        type: { summary: [ 'default', 'promo' ] },
        defaultValue: { summary: 'promo' },
      },
    },
    mediaType: {
      options: [ 'image', 'pictogram' ],
      control: { type: 'select' },
      table: {
        type: { summary: [ 'image', 'pictogram' ] },
        defaultValue: { summary: 'image' },
      },
    },
    iconName: {
      options: [ 'looking-ahead', 'pension-pot', 'calendar' ],
      control: { type: 'select' },
      table: {
        type: {
          summary: [ 'looking-ahead', 'pension-pot', 'calendar' ],
        },
        defaultValue: { summary: 'looking-ahead' },
      },
    },
    orientation: {
      options: {
        horizontal: { sm: 'horizontal', md: 'horizontal', lg: 'horizontal' },
        vertical: { sm: 'vertical', md: 'vertical', lg: 'vertical' },
      },
      control: { type: 'select' },
      table: {
        type: { summary: 'horizontal | vertical' },
        defaultValue: { summary: 'vertical' },
      },
    },
  },
  parameters: {
    docs: {
      source: {
        code: threeCardsTemplate,
      },
    },
  },
  render: (args: LgCardComponent) => ({
    props: args,
    template: threeCardsTemplate,
  }),
};

const productCardTemplate = `
<lg-card>
  <lg-card-content>
    <div lgRow>
      <div lgCol="12" lgColMd="6">
        <lg-card-title headingLevel="4">
          <a href="#">{{title}}</a>
        </lg-card-title>
        <lg-card-subtitle>
          Payroll Reference Number P23456
        </lg-card-subtitle>
      </div>
      <lg-data-point variant="card-principle" lgCol="12" lgColMd="6">
        <lg-data-point-label [headingLevel]="5">
          Last payment (after tax and deductions)
        </lg-data-point-label>
        <lg-data-point-value [size]="size">
          <span><span class="lg-font-size-3">£</span>230.20</span>
        </lg-data-point-value>
        <lg-data-point-secondary-label>
          as of 01 Jan 2020
        </lg-data-point-secondary-label>
      </lg-data-point>
    </div>
  </lg-card-content>
</lg-card>
`;

export const ProductCard = {
  name: 'Product',
  args: {
    title: 'Standard Lifetime Annuity Joint Life Full',
    size: 'lg',
  },
  argTypes: {
    size: {
      options: [ 'sm', 'md', 'lg' ],
      description: 'The size variant applied to the `<lg-data-point-value>` component',
      table: {
        type: { summary: [ 'sm', 'md', 'lg' ] },
        defaultValue: { summary: 'lg' },
      },
      control: { type: 'select' },
    },
  },
  parameters: {
    docs: {
      source: {
        code: productCardTemplate,
      },
    },
  },
  render: (args: LgCardComponent) => ({
    props: args,
    template: productCardTemplate,
  }),
};

export const ShowMoreCard = {
  name: 'Show more',
  parameters: {
    docs: {
      source: {
        code: showMoreCardTemplate,
      },
    },
  },
  render: (args: LgCardComponent) => ({
    props: args,
    template: `
      <lg-card-show-more></lg-card-show-more>
    `,
  }),
};

export const DataPointsCard = {
  name: 'Data points',
  parameters: {
    docs: {
      source: {
        code: dataPointsCardTemplate,
      },
    },
  },
  render: (args: LgCardComponent) => ({
    props: args,
    template: '<lg-card-data-points></lg-card-data-points>',
  }),
};

export const CardGroup = {
  name: 'Card group',
  args: {
    cardContent: content,
    additionalCards: 1,
  },
  argTypes: {
    queryParams: {
      table: {
        disable: true,
      },
    },
    queryParamsHandling: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    docs: {
      source: {
        code: cardGroupTemplate,
      },
    },
  },
  render: (args: LgCardComponent) => ({
    props: args,
    template:
      '<lg-card-group [cardContent]="cardContent" [additionalCards]="additionalCards"></lg-card-group>',
  }),
};
