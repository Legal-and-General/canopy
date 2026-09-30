import { Component } from '@angular/core';
import { moduleMetadata } from '@storybook/angular';

import { LgHeroComponent } from '../hero.component';
import { LgBreadcrumbComponent, LgBreadcrumbItemComponent } from '../../breadcrumb';
import { LgMarginDirective } from '../../spacing';
import { LgHeroHeaderComponent } from '../hero-header/hero-header.component';
import {
  LgGridColDirective,
  LgGridContainerDirective,
  LgGridRowDirective,
} from '../../grid';
import { LgHeroContentComponent } from '../hero-content/hero-content.component';
import { LgHeroCardComponent } from '../hero-card/hero-card.component';
import { LgHeroCardFooterComponent } from '../hero-card-footer/hero-card-footer.component';
import { LgHeroCardContentComponent } from '../hero-card-content/hero-card-content.component';
import { LgHeroCardDataPointListComponent } from '../hero-card-data-point-list/hero-card-data-point-list.component';
import { LgHeroCardDataPointValueComponent } from '../hero-card-data-point-value/hero-card-data-point-value.component';
import { LgHeroCardDataPointLabelComponent } from '../hero-card-data-point-label/hero-card-data-point-label.component';
import { LgHeroCardDataPointComponent } from '../hero-card-data-point/hero-card-data-point.component';
import { LgHeroCardPrincipleDataPointValueComponent } from '../hero-card-principle-data-point-value/hero-card-principle-data-point-value.component';
import { LgHeroCardPrincipleDataPointLabelComponent } from '../hero-card-principle-data-point-label/hero-card-principle-data-point-label.component';
import { LgHeroCardPrincipleDataPointComponent } from '../hero-card-principle-data-point/hero-card-principle-data-point.component';
import { LgHeroCardNotificationComponent } from '../hero-card-notification/hero-card-notification.component';
import { LgHeroCardSubtitleComponent } from '../hero-card-subtitle/hero-card-subtitle.component';
import { LgHeroCardTitleComponent } from '../hero-card-title/hero-card-title.component';
import { LgHeroCardHeaderComponent } from '../hero-card-header/hero-card-header.component';
import {
  LgCardComponent,
  LgCardContentComponent,
  LgCardContentInnerDataPointsComponent,
  LgCardHeaderComponent,
  LgCardTitleComponent,
} from '../../card';
import { LgIconComponent } from '../../icon';
import { LgAlertComponent } from '../../alert/alert.component';
import {
  LgLinkMenuComponent,
  LgLinkMenuItemComponent,
  LgLinkMenuItemTextComponent,
} from '../../link-menu';
import {
  LgDataPointAddOnComponent,
  LgDataPointComponent,
  LgDataPointGroupComponent,
  LgDataPointLabelComponent,
  LgDataPointValueComponent,
} from '../../data-point';

const bodyHTML = `
  <div lgContainer>
    <div lgRow>
      <div [lgCol]="12">
        <lg-card>
          <lg-card-content>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Fusce iaculis nunc vel pulvinar molestie. Quisque porta
            interdum ligula, in pellentesque purus ultrices sed.
            Praesent euismod nisi neque, eget varius eros consequat
            eget. Morbi vulputate tincidunt risus, quis facilisis dui
            interdum nec. Vestibulum et vulputate purus. Phasellus in
            luctus nunc, vehicula convallis erat. Nunc dignissim nulla
            at mattis efficitur. Nunc tempor auctor enim, in hendrerit
            neque blandit sit amet. Donec efficitur mauris ut molestie
            lobortis. Integer nec consectetur odio, ut aliquam tortor.
            </p>
          </lg-card-content>
        </lg-card>
      </div>
    </div>
  </div>
`;

export const productHeroHTML = `
<lg-hero-header>
    <div lgContainer>
      <div lgRow>
        <div [lgCol]="12">
          <lg-breadcrumb variant="page" lgMarginBottom="none">
            <lg-breadcrumb-item>
              <a href="#">
                <lg-icon name="home-outline"></lg-icon>
                Home
              </a>
            </lg-breadcrumb-item>
            <lg-breadcrumb-item>
              <a href="#">Products</a>
            </lg-breadcrumb-item>
            <lg-breadcrumb-item>
              Pension Annuity
            </lg-breadcrumb-item>
          </lg-breadcrumb>
        </div>
      </div>
    </div>
  </lg-hero-header>
  <lg-hero-content>
    <div lgContainer>
      <div lgRow>
        <div [lgCol]="12">
          <lg-hero-card>
            <lg-hero-card-header>
              <lg-hero-card-title [headingLevel]="4">
                Pension annuity
              </lg-hero-card-title>
              <lg-hero-card-subtitle>
                Payroll Reference Number P23456
              </lg-hero-card-subtitle>
              <lg-hero-card-notification>
                <lg-icon name="information-filled"></lg-icon>
                <p>Your payments have been suspended, please <a href="#">contact us</a> to learn more.</p>
              </lg-hero-card-notification>
              <lg-hero-card-principle-data-point>
                <lg-hero-card-principle-data-point-label [headingLevel]="5">
                  Last payment (after tax and deductions)
                </lg-hero-card-principle-data-point-label>
                <lg-hero-card-principle-data-point-value>
                  £230.20
                </lg-hero-card-principle-data-point-value>
              </lg-hero-card-principle-data-point>
            </lg-hero-card-header>
            <lg-hero-card-content>
              <lg-hero-card-data-point-list>
                <lg-hero-card-data-point>
                  <lg-hero-card-data-point-label [headingLevel]="6">
                    Payment due
                  </lg-hero-card-data-point-label>
                  <lg-hero-card-data-point-value>
                    15 Jan 2020
                  </lg-hero-card-data-point-value>
                </lg-hero-card-data-point>
                <lg-hero-card-data-point>
                  <lg-hero-card-data-point-label [headingLevel]="6">
                    Payment frequency
                  </lg-hero-card-data-point-label>
                  <lg-hero-card-data-point-value>
                    Monthly
                  </lg-hero-card-data-point-value>
                </lg-hero-card-data-point>
                <lg-hero-card-data-point>
                  <lg-hero-card-data-point-label [headingLevel]="6">
                    Tax code
                  </lg-hero-card-data-point-label>
                  <lg-hero-card-data-point-value>
                    2T <span lgMarginLeft="4" class="lg-font-size-1">Received on 12 Mar 2019</span>
                  </lg-hero-card-data-point-value>
                </lg-hero-card-data-point>
              </lg-hero-card-data-point-list>
            </lg-hero-card-content>
            <lg-hero-card-footer>
              <small class="lg-font-size-0-6">* This is not a guaranteed amount and could be subject to change.</small>
            </lg-hero-card-footer>
          </lg-hero-card>
        </div>
      </div>
    </div>
  </lg-hero-content>
`;

export const productHeroDataPointHTML = `
  <lg-hero-header>
    <div lgContainer>
      <div lgRow>
        <div [lgCol]="12">
          <lg-breadcrumb variant="page" lgMarginBottom="none">
            <lg-breadcrumb-item>
              <a href="#">
                <lg-icon name="home-outline"></lg-icon>
                Home
              </a>
            </lg-breadcrumb-item>
            <lg-breadcrumb-item>
              <a href="#">Products</a>
            </lg-breadcrumb-item>
            <lg-breadcrumb-item>
              Pension Annuity
            </lg-breadcrumb-item>
          </lg-breadcrumb>
        </div>
      </div>
    </div>
  </lg-hero-header>
  <lg-hero-content>
    <div lgContainer>
      <div lgRow>
        <div [lgCol]="12">
          <lg-hero-card>
            <lg-hero-card-header>
              <lg-hero-card-title [headingLevel]="4">
                Pension annuity
              </lg-hero-card-title>
              <lg-hero-card-subtitle>
                Payroll Reference Number P23456
              </lg-hero-card-subtitle>
              <lg-data-point variant="card-principle">
                <lg-data-point-label [headingLevel]="5">
                  Valuation
                </lg-data-point-label>
                <lg-data-point-value size="lg">
                  £00,000.00
                </lg-data-point-value>
                <lg-data-point-add-on>
                  <a href="#">Optional help link</a>
                </lg-data-point-add-on>
              </lg-data-point>
            </lg-hero-card-header>
            <lg-hero-card-content>
              <lg-data-point-group orientation="horizontal">
                <lg-data-point>
                  <lg-data-point-label [headingLevel]="6">
                    Payment due
                  </lg-data-point-label>
                  <lg-data-point-value size="md">
                    15 Jan 2020
                  </lg-data-point-value>
                </lg-data-point>
                <lg-data-point>
                  <lg-data-point-label [headingLevel]="6">
                    Payment frequency
                  </lg-data-point-label>
                  <lg-data-point-value size="md">
                    Monthly
                  </lg-data-point-value>
                </lg-data-point>
                <lg-data-point>
                  <lg-data-point-label [headingLevel]="6">
                    Tax code
                  </lg-data-point-label>
                  <lg-data-point-value size="md">
                    2T
                  </lg-data-point-value>
                </lg-data-point>
              </lg-data-point-group>
            </lg-hero-card-content>
            <lg-hero-card-footer>
              <small class="lg-font-size-0-6">* This is not a guaranteed amount and could be subject to change.</small>
            </lg-hero-card-footer>
          </lg-hero-card>
        </div>
      </div>
    </div>
  </lg-hero-content>
`;

export const heroCardsDataPointHTML = `
  <lg-hero-header>
    <div lgContainer>
      <div lgRow>
        <div [lgCol]="12">
          <lg-breadcrumb variant="page" lgMarginBottom="none">
            <lg-breadcrumb-item>
              <a href="#">
                <lg-icon name="home-outline"></lg-icon>
                Home
              </a>
            </lg-breadcrumb-item>
            <lg-breadcrumb-item>
              <a href="#">Products</a>
            </lg-breadcrumb-item>
            <lg-breadcrumb-item>
              Pension Annuity
            </lg-breadcrumb-item>
          </lg-breadcrumb>
        </div>
      </div>
    </div>
  </lg-hero-header>
  <lg-hero-content>
    <div lgContainer>
      <div lgRow>
        <div [lgCol]="12">
          <lg-hero-card>
            <lg-hero-card-header>
              <lg-hero-card-title [headingLevel]="4">
                Product name
              </lg-hero-card-title>
              <lg-hero-card-subtitle>
                Additional product info
              </lg-hero-card-subtitle>
              <lg-hero-card-subtitle>
                Account number 12345678
              </lg-hero-card-subtitle>
              <lg-data-point variant="card-principle">
                <lg-data-point-label [headingLevel]="5">
                  Valuation
                </lg-data-point-label>
                <lg-data-point-value size="lg">
                  £00,000.00
                </lg-data-point-value>
                <lg-data-point-add-on>
                  <a href="#">Optional help link</a>
                </lg-data-point-add-on>
              </lg-data-point>
            </lg-hero-card-header>
            <lg-hero-card-content>
              <div lgRow>
                <div lgCol="12" lgColLg="8">
                  <lg-card>
                    <lg-card-header>
                      <lg-card-title [headingLevel]="3">Overview</lg-card-title>
                    </lg-card-header>
                    <lg-card-content>
                      <lg-card-content-inner-data-points>
                        <lg-data-point variant="card">
                          <lg-data-point-label [headingLevel]="6">
                            Payment due
                          </lg-data-point-label>
                          <lg-data-point-value size="lg">
                            15 Jan 2020
                          </lg-data-point-value>
                        </lg-data-point>
                        <lg-data-point-group orientation="horizontal">
                          <lg-data-point variant="card">
                            <lg-data-point-label [headingLevel]="6">
                              Payment frequency
                            </lg-data-point-label>
                            <lg-data-point-value size="md">
                              Monthly
                            </lg-data-point-value>
                          </lg-data-point>
                          <lg-data-point variant="card">
                            <lg-data-point-label [headingLevel]="6">
                              Tax code
                            </lg-data-point-label>
                            <lg-data-point-value size="md">
                              2T
                            </lg-data-point-value>
                          </lg-data-point>
                          <lg-data-point variant="card">
                            <lg-data-point-label [headingLevel]="6">
                              Data point label
                            </lg-data-point-label>
                            <lg-data-point-value size="md">
                              Value
                            </lg-data-point-value>
                          </lg-data-point>
                          <lg-data-point variant="card">
                            <lg-data-point-label [headingLevel]="6">
                              Data point label
                            </lg-data-point-label>
                            <lg-data-point-value size="md">
                              Value
                            </lg-data-point-value>
                          </lg-data-point>
                        </lg-data-point-group>
                      </lg-card-content-inner-data-points>
                      <lg-alert showIcon="true" status="info">
                        <p>Inline message</p>
                      </lg-alert>
                    </lg-card-content>
                  </lg-card>
                </div>
                <div lgCol="12" lgColLg="4">
                  <lg-card>
                    <lg-card-header>
                      <lg-card-title [headingLevel]="3">Manage product</lg-card-title>
                    </lg-card-header>
                    <lg-card-content>
                      <lg-link-menu>
                        <a href="#">
                          <lg-link-menu-item>
                            <lg-link-menu-item-text>Primary label</lg-link-menu-item-text>
                          </lg-link-menu-item>
                        </a>
                        <a href="#">
                          <lg-link-menu-item>
                            <lg-link-menu-item-text>Primary label</lg-link-menu-item-text>
                          </lg-link-menu-item>
                        </a>
                        <a href="#">
                          <lg-link-menu-item>
                            <lg-link-menu-item-text>Primary label</lg-link-menu-item-text>
                          </lg-link-menu-item>
                        </a>
                        <a href="#">
                          <lg-link-menu-item>
                            <lg-link-menu-item-text>Primary label</lg-link-menu-item-text>
                          </lg-link-menu-item>
                        </a>
                        <a href="#">
                          <lg-link-menu-item>
                            <lg-link-menu-item-text>Primary label</lg-link-menu-item-text>
                          </lg-link-menu-item>
                        </a>
                      </lg-link-menu>
                    </lg-card-content>
                  </lg-card>
                </div>
              </div>
            </lg-hero-card-content>
            <lg-hero-card-footer>
              <small class="lg-font-size-0-6">* This is not a guaranteed amount and could be subject to change.</small>
            </lg-hero-card-footer>
          </lg-hero-card>
        </div>
      </div>
    </div>
  </lg-hero-content>
`;

export const conversationalHeroHTML = `
<lg-hero variant="child">
  <lg-hero-content>
    <div lgContainer>
      <div lgRow>
        <div [lgCol]="12">
          <lg-hero-card>
            <lg-hero-card-header>
              <lg-hero-card-title headingLevel="4">
                Good morning, Gene
              </lg-hero-card-title>
            </lg-hero-card-header>
          </lg-hero-card>
        </div>
      </div>
    </div>
  </lg-hero-content>
</lg-hero>
`;

const productHeroTemplate = `<lg-hero lgMarginTop="none">${productHeroHTML}</lg-hero>${bodyHTML}`;

@Component({
  selector: 'lg-hero-product-story',
  template: productHeroTemplate,
  imports: [
    LgCardComponent,
    LgCardContentComponent,
    LgHeroComponent,
    LgMarginDirective,
    LgHeroHeaderComponent,
    LgGridContainerDirective,
    LgGridRowDirective,
    LgGridColDirective,
    LgBreadcrumbComponent,
    LgBreadcrumbItemComponent,
    LgIconComponent,
    LgHeroContentComponent,
    LgHeroCardComponent,
    LgHeroCardFooterComponent,
    LgHeroCardContentComponent,
    LgHeroCardDataPointListComponent,
    LgHeroCardDataPointValueComponent,
    LgHeroCardDataPointLabelComponent,
    LgHeroCardDataPointComponent,
    LgHeroCardPrincipleDataPointValueComponent,
    LgHeroCardPrincipleDataPointLabelComponent,
    LgHeroCardPrincipleDataPointComponent,
    LgHeroCardNotificationComponent,
    LgHeroCardSubtitleComponent,
    LgHeroCardTitleComponent,
    LgHeroCardHeaderComponent,
  ],
})
class HeroProductStoryComponent {}

const productHeroDataPointTemplate = `<lg-hero lgMarginTop="none">${productHeroDataPointHTML}</lg-hero>${bodyHTML}`;

@Component({
  selector: 'lg-hero-product-data-point-story',
  template: productHeroDataPointTemplate,
  imports: [
    LgCardComponent,
    LgCardContentComponent,
    LgHeroComponent,
    LgHeroHeaderComponent,
    LgMarginDirective,
    LgBreadcrumbComponent,
    LgBreadcrumbItemComponent,
    LgIconComponent,
    LgGridContainerDirective,
    LgGridRowDirective,
    LgGridColDirective,
    LgHeroContentComponent,
    LgHeroCardComponent,
    LgHeroCardFooterComponent,
    LgHeroCardContentComponent,
    LgHeroCardSubtitleComponent,
    LgHeroCardTitleComponent,
    LgHeroCardHeaderComponent,
    LgDataPointComponent,
    LgDataPointGroupComponent,
    LgDataPointLabelComponent,
    LgDataPointValueComponent,
    LgDataPointAddOnComponent,
  ],
})
class HeroProductDataPointStoryComponent {}

const heroCardsDataPointTemplate = `<lg-hero lgMarginTop="none">${heroCardsDataPointHTML}</lg-hero>`;

@Component({
  selector: 'lg-hero-cards-data-point-story',
  template: heroCardsDataPointTemplate,
  imports: [
    LgCardComponent,
    LgCardContentComponent,
    LgCardContentInnerDataPointsComponent,
    LgCardHeaderComponent,
    LgCardTitleComponent,
    LgAlertComponent,
    LgHeroComponent,
    LgHeroHeaderComponent,
    LgMarginDirective,
    LgBreadcrumbComponent,
    LgBreadcrumbItemComponent,
    LgIconComponent,
    LgGridContainerDirective,
    LgGridRowDirective,
    LgGridColDirective,
    LgHeroContentComponent,
    LgHeroCardComponent,
    LgHeroCardFooterComponent,
    LgHeroCardContentComponent,
    LgHeroCardSubtitleComponent,
    LgHeroCardTitleComponent,
    LgHeroCardHeaderComponent,
    LgDataPointComponent,
    LgDataPointGroupComponent,
    LgDataPointLabelComponent,
    LgDataPointValueComponent,
    LgDataPointAddOnComponent,
    LgLinkMenuComponent,
    LgLinkMenuItemComponent,
    LgLinkMenuItemTextComponent,
  ],
})
class HeroCardsDataPointStoryComponent {}

export default {
  title: 'Patterns/Hero/Examples',
  globals: {
    backgrounds: { value: 'off-white' },
  },
  excludeStories: [
    'productHeroHTML',
    'productHeroDataPointHTML',
    'heroCardsDataPointHTML',
    'conversationalHeroHTML',
  ],
  decorators: [
    moduleMetadata({
      imports: [
        HeroProductStoryComponent,
        HeroProductDataPointStoryComponent,
        HeroCardsDataPointStoryComponent,
        LgHeroComponent,
        LgHeroContentComponent,
        LgGridContainerDirective,
        LgGridRowDirective,
        LgGridColDirective,
        LgHeroCardComponent,
        LgHeroCardTitleComponent,
        LgHeroCardHeaderComponent,
        LgCardComponent,
        LgCardContentComponent,
      ],
    }),
  ],
  parameters: {
    layout: 'fullscreen',
  },
};

export const ProductHero = {
  name: 'Product details',
  render: () => ({
    template: '<lg-hero-product-story></lg-hero-product-story>',
  }),
  parameters: {
    docs: {
      source: {
        code: productHeroTemplate,
      },
    },
  },
};

export const ProductHeroDataPoint = {
  name: 'Product details (data point)',
  render: () => ({
    template: '<lg-hero-product-data-point-story></lg-hero-product-data-point-story>',
  }),
  parameters: {
    docs: {
      source: {
        code: productHeroDataPointTemplate,
      },
    },
  },
};

export const HeroCardsDataPoint = {
  name: 'Hero cards (data point)',
  render: () => ({
    template: '<lg-hero-cards-data-point-story></lg-hero-cards-data-point-story>',
  }),
  parameters: {
    docs: {
      source: {
        code: heroCardsDataPointTemplate,
      },
    },
  },
};

const conversationalHeroTemplate = `
${conversationalHeroHTML}
${bodyHTML}
`;

export const ConversationalHero = {
  name: 'Conversational UI',
  render: () => ({
    template: conversationalHeroTemplate,
  }),
  parameters: {
    docs: {
      source: {
        code: conversationalHeroHTML,
      },
    },
  },
};
