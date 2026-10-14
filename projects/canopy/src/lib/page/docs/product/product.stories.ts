import { Meta } from '@storybook/angular';

import { LgPageComponent } from '../../page.component';
import { productHeroHTML } from '../../../hero/docs/hero.stories';
import { createArgs, footer, header, pageStoryMeta } from '../page-story.helpers';

export default {
  ...pageStoryMeta,
  title: 'Templates/Page/Product/Examples',
} as Meta;

const productPageTemplate = `
  <lg-page [variant]="variant">
    ${header}
    <lg-hero [overlap]="overlap">
      ${productHeroHTML}
    </lg-hero>
    <div lgContainer>
      <div lgRow>
        <div lgCol="12" lgColMd="8">
          <lg-card lgMarginHorizontal="none">
            <lg-card-header>
              <lg-card-title headingLevel="2">Your product</lg-card-title>
            </lg-card-header>
            <lg-card-content>
              {{card1}}
            </lg-card-content>
            <lg-card-footer>
              <lg-button-group>
                <button lg-button type="button" priority="primary">View more</button>
                <button lg-button type="button" priority="secondary">Contact us</button>
              </lg-button-group>
            </lg-card-footer>
          </lg-card>
        </div>
        <div lgCol="12" lgColMd="4">
          <lg-card lgMarginHorizontal="none">
            <lg-card-header>
              <lg-card-title headingLevel="2">Related information</lg-card-title>
            </lg-card-header>
            <lg-card-content>
              {{card2}}
            </lg-card-content>
            <lg-card-footer>
              <lg-button-group>
                <button lg-button type="button" priority="primary">View more</button>
                <button lg-button type="button" priority="secondary">Contact us</button>
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
  render: (args: LgPageComponent) => ({
    props: args,
    template: productPageTemplate,
  }),
  args: {
    ...createArgs(),
    overlap: 2,
  },
  parameters: {
    docs: {
      source: {
        code: productPageTemplate,
      },
    },
  },
};
