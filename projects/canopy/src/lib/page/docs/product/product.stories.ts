import { Meta } from '@storybook/angular';

import { LgPageComponent } from '../../page.component';
import { createArgs, footer, header, pageStoryMeta } from '../page-story.helpers';

export default {
  ...pageStoryMeta,
  title: 'Templates/Page/Product/Examples',
} as Meta;

const productPageTemplate = `
  <lg-page [variant]="variant">
    ${header}
    <lg-hero>
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
                </lg-hero-card-header>
                <lg-hero-card-content>
                  <div lgRow>
                    <div lgCol="12" lgColLg="8">
                      <lg-card lgMarginBottom="none">
                        <lg-card-header>
                          <lg-card-title [headingLevel]="3">Overview</lg-card-title>
                        </lg-card-header>
                        <lg-card-content>
                          <lg-card-content-inner-data-points>
                            <lg-data-point variant="card">
                              <lg-data-point-label [headingLevel]="6">
                                Data point label
                              </lg-data-point-label>
                              <lg-data-point-value size="lg">
                                Value
                              </lg-data-point-value>
                            </lg-data-point>
                            <lg-data-point-group orientation="horizontal">
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
                      <lg-card lgMarginBottom="none">
                        <lg-card-header>
                          <lg-card-title [headingLevel]="3">Manage product</lg-card-title>
                        </lg-card-header>
                        <lg-card-content>
                          <lg-link-menu>
                            <a href="#">
                              <lg-link-menu-item>
                                <lg-link-menu-item-text [isBold]="false">Primary label</lg-link-menu-item-text>
                              </lg-link-menu-item>
                            </a>
                            <a href="#">
                              <lg-link-menu-item>
                                <lg-link-menu-item-text [isBold]="false">Primary label</lg-link-menu-item-text>
                              </lg-link-menu-item>
                            </a>
                            <a href="#">
                              <lg-link-menu-item>
                                <lg-link-menu-item-text [isBold]="false">Primary label</lg-link-menu-item-text>
                              </lg-link-menu-item>
                            </a>
                            <a href="#">
                              <lg-link-menu-item>
                                <lg-link-menu-item-text [isBold]="false">Primary label</lg-link-menu-item-text>
                              </lg-link-menu-item>
                            </a>
                            <a href="#">
                              <lg-link-menu-item>
                                <lg-link-menu-item-text [isBold]="false">Primary label</lg-link-menu-item-text>
                              </lg-link-menu-item>
                            </a>
                          </lg-link-menu>
                        </lg-card-content>
                      </lg-card>
                    </div>
                  </div>
                </lg-hero-card-content>
              </lg-hero-card>
            </div>
          </div>
        </div>
      </lg-hero-content>
    </lg-hero>
    <div lgContainer>
      <div lgRow>
        <div lgCol="12" lgColMd="4">
          <lg-card lgMarginHorizontal="none" variant="interactive">
            <lg-card-header>
              <lg-card-navigation-title
                title="Card title"
                link="/card"
                [headingLevel]="2"
              ></lg-card-navigation-title>
            </lg-card-header>
            <lg-card-content>
              Card content. This is just placeholder content and should be replaced with your own content.
            </lg-card-content>
            <lg-card-footer>
              <lg-link-menu>
                <a href="#">
                  <lg-link-menu-item>
                    <lg-link-menu-item-text isBold="true">primary label</lg-link-menu-item-text>
                  </lg-link-menu-item>
                </a>
                <a href="#">
                  <lg-link-menu-item>
                    <lg-link-menu-item-text isBold="true">primary label</lg-link-menu-item-text>
                  </lg-link-menu-item>
                </a>
              </lg-link-menu>
            </lg-card-footer>
          </lg-card>
        </div>
        <div lgCol="12" lgColMd="4">
          <lg-card lgMarginHorizontal="none" variant="interactive">
            <lg-card-header>
              <lg-card-navigation-title
                title="Card title"
                link="/card"
                [headingLevel]="2"
              ></lg-card-navigation-title>
            </lg-card-header>
            <lg-card-content>
              Card content. This is just placeholder content and should be replaced with your own content.
            </lg-card-content>
            <lg-card-footer>
              <lg-link-menu>
                <a href="#">
                  <lg-link-menu-item>
                    <lg-link-menu-item-text isBold="true">primary label</lg-link-menu-item-text>
                  </lg-link-menu-item>
                </a>
                <a href="#">
                  <lg-link-menu-item>
                    <lg-link-menu-item-text isBold="true">primary label</lg-link-menu-item-text>
                  </lg-link-menu-item>
                </a>
              </lg-link-menu>
            </lg-card-footer>
          </lg-card>
        </div>
        <div lgCol="12" lgColMd="4">
          <lg-card lgMarginHorizontal="none" variant="interactive">
            <lg-card-header>
              <lg-card-navigation-title
                title="Card title"
                link="/card"
                [headingLevel]="2"
              ></lg-card-navigation-title>
            </lg-card-header>
            <lg-card-content>
              Card content. This is just placeholder content and should be replaced with your own content.
            </lg-card-content>
            <lg-card-footer>
              <lg-link-menu>
                <a href="#">
                  <lg-link-menu-item>
                    <lg-link-menu-item-text isBold="true">primary label</lg-link-menu-item-text>
                  </lg-link-menu-item>
                </a>
                <a href="#">
                  <lg-link-menu-item>
                    <lg-link-menu-item-text isBold="true">primary label</lg-link-menu-item-text>
                  </lg-link-menu-item>
                </a>
              </lg-link-menu>
            </lg-card-footer>
          </lg-card>
        </div>
      </div>
    </div>
    <div lgContainer>
      <div lgRow>
        <div lgCol="12">
          <h2 class="lg-font--expressive" lgMarginTop="6">Heading</h2>
        </div>
        <div lgCol="12">
          <lg-card variant="promo" lgColour="blue" lgColourTheme="subtle" lgMarginBottom="6">
            <lg-card-header>
              <lg-card-title [headingLevel]="3">Card title</lg-card-title>
            </lg-card-header>
            <lg-card-content>
              Card content. This is just placeholder content and should be replaced with your own content.
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
      <div lgRow>
        <div lgColSm="12" lgColLg="6">
          <lg-card variant="promo" lgMarginBottom="6">
            <lg-card-hero-img
              [cover]="true"
              src="promo-card/general-promotion1.jpg"
              alt="A family enjoying time together outdoors"
              aspectRatio="2:1"
            ></lg-card-hero-img>
            <lg-card-header>
              <lg-card-title [headingLevel]="3">Card title</lg-card-title>
            </lg-card-header>
            <lg-card-content>
              Card content. This is just placeholder content and should be replaced with your own content.
            </lg-card-content>
            <lg-card-footer>
              <lg-button-group>
                <a lg-button priority="link" href="#">Link</a>
                <a lg-button priority="link" href="#">Link</a>
              </lg-button-group>
            </lg-card-footer>
          </lg-card>
        </div>
        <div lgColSm="12" lgColLg="6">
          <lg-card variant="promo" lgMarginBottom="6">
            <lg-card-hero-img
              [cover]="true"
              src="promo-card/general-promotion2.jpg"
              alt="A couple walking together in a park"
              aspectRatio="2:1"
            ></lg-card-hero-img>
            <lg-card-header>
              <lg-card-title [headingLevel]="3">Card title</lg-card-title>
            </lg-card-header>
            <lg-card-content>
              Card content. This is just placeholder content and should be replaced with your own content.
            </lg-card-content>
            <lg-card-footer>
              <lg-button-group>
                <a lg-button priority="link" href="#">Link</a>
                <a lg-button priority="link" href="#">Link</a>
              </lg-button-group>
            </lg-card-footer>
          </lg-card>
        </div>
      </div>
    </div>
    ${footer}
  </lg-page>
`;

export const ProductPage = {
  name: 'Product page',
  tags: [ 'updated' ],
  render: (args: LgPageComponent) => ({
    props: args,
    template: productPageTemplate,
  }),
  args: createArgs(),
  parameters: {
    docs: {
      source: {
        code: productPageTemplate,
      },
    },
  },
};
