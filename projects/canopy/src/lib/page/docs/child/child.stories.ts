import { Meta } from '@storybook/angular';

import { LgPageComponent } from '../../page.component';
import {
  banner,
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
    ${banner}
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
    card1: `Leverage agile frameworks to provide a robust synopsis for high level
    overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall
    value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity
    and empowerment.`,
    card2: `Bring to the table win-win survival strategies to ensure proactive domination.
    At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading
    towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for
    offshoring.`,
    showBanner: true,
    bannerMessage: 'Optional banner message',
    showHero: true,
    showContent: true,
  },
  argTypes: {
    variant: { control: false, table: { disable: true } },
    showHeader: {
      control: 'boolean',
      table: { category: pageSectionsCategory },
    },
    showBanner: {
      control: 'boolean',
      table: { category: pageSectionsCategory },
    },
    bannerMessage: {
      control: 'text',
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
    card1: {
      control: 'text',
      table: { category: 'content' },
    },
    card2: {
      control: 'text',
      table: { category: 'content' },
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
