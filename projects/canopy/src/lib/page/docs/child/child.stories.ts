import { Meta } from '@storybook/angular';

import { LgPageComponent } from '../../page.component';
import {
  basicHeroTemplate,
  createArgs,
  footer,
  header,
  pageSectionsCategory,
  pageStoryMeta,
} from '../page-story.helpers';

export default {
  ...pageStoryMeta,
  title: 'Templates/Page/Child/Examples',
} as Meta;

const childPageTemplate = `
  <lg-page [variant]="variant">
    ${header}
    @if (showHero) {
      ${basicHeroTemplate}
    }
    @if (showContent) {
      <div lgContainer>
        <div lgRow>
          <div lgCol="12" lgColMd="8">
            <lg-card lgMarginHorizontal="none">
              <lg-card-content>
                {{card1}}
              </lg-card-content>
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
                </lg-button-group>
              </lg-card-footer>
            </lg-card>
          </div>
        </div>
      </div>
    }
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
  args: {
    ...createArgs(),
    showHero: true,
    showContent: true,
  },
  argTypes: {
    showHeader: {
      control: 'boolean',
      table: { category: pageSectionsCategory },
    },
    showHero: {
      control: 'boolean',
      table: { category: pageSectionsCategory },
    },
    showContent: {
      control: 'boolean',
      table: { category: pageSectionsCategory },
    },
    showFooter: {
      control: 'boolean',
      table: { category: pageSectionsCategory },
    },
  },
  parameters: {
    docs: {
      source: {
        code: childPageTemplate,
      },
    },
  },
};
