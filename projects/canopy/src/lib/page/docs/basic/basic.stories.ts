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
  title: 'Templates/Page/Basic/Examples',
} as Meta;

const basicTemplate = `
  <lg-page [variant]="variant">
    ${header}
    ${banner}
    @if (showHero) {
      ${basicHeroTemplate}
    }
    @if (showContent) {
      <div lgContainer>
        <div lgRow>
        </div>
      </div>
    }
    ${footer}
  </lg-page>
`;

export const Basic = {
  name: 'Basic page',
  render: (args: LgPageComponent) => ({
    props: args,
    template: basicTemplate,
  }),
  args: {
    ...createArgs(),
    showHeader: true,
    showBanner: true,
    showHero: true,
    showContent: true,
    showFooter: true,
    bannerMessage: 'Generic banner message',
  },
  argTypes: {
    showHeader: {
      control: 'boolean',
      table: { category: pageSectionsCategory },
    },
    showBanner: {
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
    bannerMessage: {
      control: 'text',
      table: { category: pageSectionsCategory },
    },
  },
  parameters: {
    docs: {
      source: {
        code: basicTemplate,
      },
    },
  },
};
