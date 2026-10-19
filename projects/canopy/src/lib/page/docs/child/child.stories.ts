import { Meta } from '@storybook/angular';

import { LgPageComponent } from '../../page.component';
import {
  basicHeroTemplate,
  createArgs,
  footer,
  header,
  pageStoryMeta,
} from '../page-story.helpers';

export default {
  ...pageStoryMeta,
  title: 'Templates/Page/Child/Examples',
} as Meta;

const childPageTemplate = `
  <lg-page [variant]="variant">
    ${header}
    ${basicHeroTemplate}
    <div lgContainer>
      <div lgRow>
        <div lgCol="12" lgColMd="8">
          <lg-card lgMarginHorizontal="none">
            <lg-card-header>
              <lg-card-title headingLevel="2">Main content</lg-card-title>
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
              <lg-card-title headingLevel="2">Related content</lg-card-title>
            </lg-card-header>
            <lg-card-content>{{card2}}</lg-card-content>
            <lg-card-footer>
              <lg-button-group>
                <button lg-button type="button" priority="primary">View more</button>
                <button lg-button type="button" priority="secondary">Contact us</button>
              </lg-button-group>
            </lg-card-footer>
          </lg-card>
          <lg-card lgMarginHorizontal="none">
            <lg-card-header>
              <lg-card-title headingLevel="2">Additional content</lg-card-title>
            </lg-card-header>
            <lg-card-content>{{card3}}</lg-card-content>
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

export const ChildPage = {
  name: 'Child page',
  tags: [ 'updated' ],
  render: (args: LgPageComponent) => ({
    props: args,
    template: childPageTemplate,
  }),
  args: createArgs(),
  parameters: {
    docs: {
      source: {
        code: childPageTemplate,
      },
    },
  },
};
