import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { primaryLinks, secondaryLinks } from '../footer/footer.stories';
import { notes } from './page.notes';
import { LgPageComponent } from './page.component';
import { LgPageModule } from './page.module';
import { LgGridModule } from '../grid';
import { LgMarginModule } from '../spacing';
import { LgHeaderModule } from '../header';
import { LgFooterModule } from '../footer';
import { LgCardModule } from '../card';
import { productHeroHTML } from '../hero/hero.stories';
import { LgHeroModule } from '../hero';
import { LgBreadcrumbModule } from '../breadcrumb';

const createArgs = () => ({
  logo: 'legal-and-general-logo.svg',
  logoAlt: 'Company name',
  copyright: '© Some Company plc 2019',
  card1: `Leverage agile frameworks to provide a robust synopsis for high level
    overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall
    value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity
    and empowerment.
    `,
  card2: `Bring to the table win-win survival strategies to ensure proactive domination.
    At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading
    towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for
    offshoring.`,
  card3: `Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one
    customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art
    customer service.`,
  primaryLinks: primaryLinks,
  secondaryLinks: secondaryLinks,
});

const header = `
  <header lg-header
    [logo]="logo"
    [logoAlt]="logoAlt"
    [logoHref]="logoHref">
  </header>
`;

const footer = `
  <footer lg-footer
    [logo]="logo"
    [logoAlt]="logoAlt"
    [copyright]="copyright"
    [primaryLinks]="primaryLinks"
    [secondaryLinks]="secondaryLinks">
  </footer>
`;

const headerCategory = 'header';
const footerCategory = 'footer';
const contentCategory = 'content';

export default {
  title: 'Components/Page',
  component: LgPageComponent,
  decorators: [
    moduleMetadata({
      imports: [
        LgPageModule,
        LgGridModule,
        LgMarginModule,
        LgHeaderModule,
        LgFooterModule,
        LgCardModule,
        LgHeroModule,
        LgBreadcrumbModule,
      ],
    }),
  ],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: notes,
      },
    },
  },
  argTypes: {
    logo: {
      table: {
        category: headerCategory,
      },
    },
    logoAlt: {
      table: {
        category: headerCategory,
      },
    },
    copyright: {
      table: {
        category: footerCategory,
      },
    },
    primaryLinks: {
      table: {
        category: footerCategory,
      },
    },
    secondaryLinks: {
      table: {
        category: footerCategory,
      },
    },
    card1: {
      table: {
        category: contentCategory,
      },
    },
    card2: {
      table: {
        category: contentCategory,
      },
    },
    card3: {
      table: {
        category: contentCategory,
      },
    },
    class: {
      table: {
        disable: true,
      },
    },
    skipToMain: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const oneColumnTemplate = `
<lg-page>
  ${header}
  <div lgContainer>
    <div lgRow>
      <div
          lgCol="12"
          lgColSm="10"
          lgColSmOffset="1"
          lgColMd="8"
          lgColMdOffset="2"
          lgColLg="6"
          lgColLgOffset="3">
        <lg-card lgMarginHorizontal="none"><lg-card-content>{{card1}}</lg-card-content></lg-card>
        <lg-card lgMarginHorizontal="none"><lg-card-content>{{card2}}</lg-card-content></lg-card>
      </div>
    </div>
  </div>
  ${footer}
</lg-page>
`;

const oneColumnStory: Story<LgPageComponent> = (args: LgPageComponent) => ({
  props: args,
  template: oneColumnTemplate,
});

export const oneColumn = oneColumnStory.bind({});
oneColumn.storyName = 'One column';
oneColumn.args = createArgs();
oneColumn.parameters = {
  docs: {
    source: {
      code: oneColumnTemplate,
    },
  },
};

const twoColumnsTemplate = `
<lg-page>
  ${header}
  <div lgContainer>
    <div lgRow>
      <div lgCol="12" lgColMd="8" lgColLg="5" lgColLgOffset="2">
        <lg-card lgMarginHorizontal="none">
          <lg-card-content>
            {{card1}}
            {{card3}}
          </lg-card-content>
        </lg-card>
      </div>
      <div lgCol="12" lgColMd="4" lgColLg="3">
        <lg-card lgMarginHorizontal="none"><lg-card-content>{{card2}}</lg-card-content></lg-card>
        <lg-card lgMarginHorizontal="none"><lg-card-content>{{card3}}</lg-card-content></lg-card>
      </div>
    </div>
  </div>
  ${footer}
</lg-page>
`;

const twoColumnsStory: Story<LgPageComponent> = (args: LgPageComponent) => ({
  props: args,
  template: twoColumnsTemplate,
});

export const twoColumns = twoColumnsStory.bind({});
twoColumns.storyName = 'Two columns';
twoColumns.args = createArgs();
twoColumns.parameters = {
  docs: {
    source: {
      code: twoColumnsTemplate,
    },
  },
};

const fullWidthTemplate = `
<lg-page>
  ${header}
  <div lgContainer>
    <div lgRow>
      <div lgCol="12">
        <lg-card lgMarginHorizontal="none">
          <lg-card-content>
            {{card1}} <br /><br />
            {{card2}} <br /><br />
            {{card3}}
          </lg-card-content>
        </lg-card>
      </div>
    </div>
  </div>
  ${footer}
</lg-page>
`;

const fullWidthStory: Story<LgPageComponent> = (args: LgPageComponent) => ({
  props: args,
  template: fullWidthTemplate,
});

export const fullWidth = fullWidthStory.bind({});
fullWidth.storyName = 'Full width';
fullWidth.args = createArgs();
fullWidth.parameters = {
  docs: {
    source: {
      code: fullWidthTemplate,
    },
  },
};

const fullWidthWithHeroTemplate = `
<lg-page>
  ${header}
  <lg-hero [overlap]="overlap">
    ${productHeroHTML}
  </lg-hero>
  <div lgContainer>
    <div lgRow>
      <div lgCol="12">
        <lg-card lgMarginHorizontal="none">
          <lg-card-content>
            {{card1}} <br /><br />
            {{card2}} <br /><br />
            {{card3}}
          </lg-card-content>
        </lg-card>
      </div>
    </div>
  </div>
  ${footer}
</lg-page>
`;

const fullWidthWithHeroStory: Story<LgPageComponent> = (args: LgPageComponent) => ({
  props: args,
  template: fullWidthWithHeroTemplate,
});

export const fullWidthWithHero = fullWidthWithHeroStory.bind({});
fullWidthWithHero.storyName = 'Full width with Hero';
fullWidthWithHero.args = {
  ...createArgs(),
  overlap: 2,
};
fullWidthWithHero.argTypes = {
  overlap: {
    description: 'The amount that the page content overlaps the hero component (rem)',
    table: {
      category: 'other',
    },
  },
};
fullWidthWithHero.parameters = {
  docs: {
    source: {
      code: fullWidthWithHeroTemplate,
    },
  },
};
