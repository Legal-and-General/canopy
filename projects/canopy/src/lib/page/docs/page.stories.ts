import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

import { primaryLinks, secondaryLinks } from '../../footer/docs/footer.stories';
import { productHeroHTML } from '../../hero/docs/hero.stories';
import { LgPageComponent } from '../page.component';
import { LgHeaderComponent, LgHeaderLogoComponent } from '../../header';
import { LgCardComponent, LgCardContentComponent } from '../../card';
import {
  LgFooterComponent,
  LgFooterCopyrightComponent,
  LgFooterLogoComponent,
  LgFooterNavComponent,
  LgFooterNavItemComponent,
} from '../../footer';
import {
  LgGridColDirective,
  LgGridContainerDirective,
  LgGridRowDirective,
} from '../../grid';
import { LgMarginDirective } from '../../spacing';
import {
  LgHeroCardComponent,
  LgHeroCardContentComponent,
  LgHeroCardDataPointComponent,
  LgHeroCardDataPointLabelComponent,
  LgHeroCardDataPointListComponent,
  LgHeroCardDataPointValueComponent,
  LgHeroCardFooterComponent,
  LgHeroCardHeaderComponent,
  LgHeroCardNotificationComponent,
  LgHeroCardPrincipleDataPointComponent,
  LgHeroCardPrincipleDataPointLabelComponent,
  LgHeroCardPrincipleDataPointValueComponent,
  LgHeroCardSubtitleComponent,
  LgHeroCardTitleComponent,
  LgHeroComponent,
  LgHeroContentComponent,
  LgHeroHeaderComponent,
} from '../../hero';
import { LgBreadcrumbComponent, LgBreadcrumbItemComponent } from '../../breadcrumb';
import {
  LgIconComponent,
  lgIconHome,
  lgIconInformationFill,
  LgIconRegistry,
} from '../../icon';

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
  <header lg-header>
    <lg-header-logo [src]="logo" [alt]="logoAlt" [href]="logoHref"></lg-header-logo>
  </header>
`;

const footer = `
<footer lg-footer>
  <lg-footer-nav variant="primary">
    <lg-footer-nav-item *ngFor="let primaryLink of primaryLinks">
      <a [href]="primaryLink.href" [id]="primaryLink.id" target="_blank">{{ primaryLink.text }}</a>
    </lg-footer-nav-item>
  </lg-footer-nav>

  <lg-footer-nav variant="secondary">
    <lg-footer-nav-item *ngFor="let secondaryLink of secondaryLinks">
      <a [href]="secondaryLink.href" [id]="secondaryLink.id" target="_blank">{{ secondaryLink.text }}</a>
    </lg-footer-nav-item>
  </lg-footer-nav>

  <lg-footer-logo [src]="logo" [alt]="logoAlt"></lg-footer-logo>

  <lg-footer-copyright>{{ copyright }}</lg-footer-copyright>
</footer>
`;

const headerCategory = 'header';
const footerCategory = 'footer';
const contentCategory = 'content';

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

@Component({
  selector: 'lg-full-width-with-header',
  template: fullWidthWithHeroTemplate,
  standalone: true,
  imports: [
    LgPageComponent,
    LgHeroComponent,
    LgHeroHeaderComponent,
    LgHeroContentComponent,
    LgHeroCardComponent,
    LgHeroCardContentComponent,
    LgHeroCardHeaderComponent,
    LgHeroCardTitleComponent,
    LgHeroCardSubtitleComponent,
    LgHeroCardNotificationComponent,
    LgHeroCardPrincipleDataPointComponent,
    LgHeroCardPrincipleDataPointLabelComponent,
    LgHeroCardPrincipleDataPointValueComponent,
    LgHeroCardDataPointListComponent,
    LgHeroCardDataPointComponent,
    LgHeroCardDataPointLabelComponent,
    LgHeroCardDataPointValueComponent,
    LgHeroCardFooterComponent,
    LgBreadcrumbComponent,
    LgBreadcrumbItemComponent,
    LgIconComponent,
    LgGridContainerDirective,
    LgGridRowDirective,
    LgGridColDirective,
    LgCardComponent,
    LgCardContentComponent,
    LgHeaderComponent,
    LgHeaderLogoComponent,
    LgFooterComponent,
    LgFooterComponent,
    LgFooterNavComponent,
    LgFooterNavItemComponent,
    LgFooterLogoComponent,
    LgFooterCopyrightComponent,
    NgIf,
    NgFor,
    LgMarginDirective,
  ],
})
class FullWidthWithHeaderComponent {
  @Input() overlap: number;
  @Input() logo: string;
  @Input() logoAlt: string;
  @Input() copyright: string;
  @Input() card1: string;
  @Input() card2: string;
  @Input() card3: string;
  @Input() primaryLinks: never;
  @Input() secondaryLinks: never;
  constructor(private registry: LgIconRegistry) {
    this.registry.registerIcons([ lgIconHome, lgIconInformationFill ]);
  }
}

export default {
  title: 'Templates/Page/Examples',
  component: LgPageComponent,
  decorators: [
    moduleMetadata({
      imports: [
        LgHeaderComponent,
        LgFooterComponent,
        LgPageComponent,
        LgGridContainerDirective,
        LgGridRowDirective,
        LgGridColDirective,
        LgMarginDirective,
        FullWidthWithHeaderComponent,
        LgHeaderLogoComponent,
        LgCardComponent,
        LgCardContentComponent,
        LgMarginDirective,
        LgFooterComponent,
        LgFooterNavComponent,
        LgFooterNavItemComponent,
        LgFooterLogoComponent,
        LgFooterCopyrightComponent,
        NgIf,
        NgFor,
      ],
    }),
  ],
  parameters: {
    layout: 'fullscreen',
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
        <lg-card lgMarginHorizontal="none"><lg-card-content>{{card3}}</lg-card-content></lg-card>
      </div>
    </div>
  </div>
  ${footer}
</lg-page>
`;

const oneColumnStory: StoryFn<LgPageComponent> = (args: LgPageComponent) => ({
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

const twoColumnsStory: StoryFn<LgPageComponent> = (args: LgPageComponent) => ({
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

const fullWidthStory: StoryFn<LgPageComponent> = (args: LgPageComponent) => ({
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

const fullWidthWithHeroStory: StoryFn<LgPageComponent> = (args: LgPageComponent) => ({
  props: args,
  template: `<lg-full-width-with-header
    [overlap]="overlap"
    [logo]="logo"
    [logoAlt]="logoAlt"
    [copyright]="copyright"
    [card1]="card1"
    [card2]="card2"
    [card3]="card3"
    [primaryLinks]="primaryLinks"
    [secondaryLinks]="secondaryLinks"
  ></lg-full-width-with-header>`,
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
