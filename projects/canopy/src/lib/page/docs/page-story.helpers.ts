import { Meta, moduleMetadata } from '@storybook/angular';

import { primaryLinks, socialLinks } from '../../footer/docs/footer.stories';
import { LgPageComponent } from '../page.component';
import {
  LgContentAreaComponent,
  LgContentAreaContentComponent,
  LgContentAreaFooterComponent,
  LgContentAreaHeaderComponent,
  LgContentAreaTitleComponent,
} from '../../content-area';
import { LgBannerComponent } from '../../banner';
import { LgAlertComponent } from '../../alert';
import { LgColourDirective } from '../../colour';
import {
  LgAccountMenuComponent,
  LgAccountMenuItemDirective,
  LgAccountMenuItemLabelComponent,
  LgAccountMenuListItemComponent,
  LgAccountMenuMobileItemDirective,
  LgHeaderComponent,
  LgHeaderLogoComponent,
  LgNotificationBadgeComponent,
  LgPrimaryNavComponent,
  LgPrimaryNavItemDirective,
  LgPrimaryNavListItemComponent,
  LgPrimaryNavMobileItemDirective,
} from '../../header';
import {
  LgCardComponent,
  LgCardContentComponent,
  LgCardFooterComponent,
  LgCardHeaderComponent,
  LgCardTitleComponent,
} from '../../card';
import { LgButtonComponent, LgButtonGroupComponent } from '../../button';
import {
  LgHintComponent,
  LgInputDirective,
  LgInputFieldComponent,
  LgSelectDirective,
  LgSelectFieldComponent,
  LgSortCodeDirective,
} from '../../forms';
import {
  LgFooterComponent,
  LgFooterCopyrightComponent,
  LgFooterLogoComponent,
  LgFooterNavComponent,
  LgFooterNavItemComponent,
  LgFooterSocialComponent,
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
  LgHeroCardFooterComponent,
  LgHeroCardHeaderComponent,
  LgHeroCardSubtitleComponent,
  LgHeroCardTitleComponent,
  LgHeroComponent,
  LgHeroContentComponent,
  LgHeroHeaderComponent,
} from '../../hero';
import {
  LgDataPointAddOnComponent,
  LgDataPointComponent,
  LgDataPointGroupComponent,
  LgDataPointLabelComponent,
  LgDataPointSecondaryLabelComponent,
  LgDataPointValueComponent,
} from '../../data-point';
import { LgBreadcrumbComponent, LgBreadcrumbItemComponent } from '../../breadcrumb';
import { LgIconComponent } from '../../icon';
import { LgLinkMenuItemComponent, LgLinkMenuItemTextComponent } from '../../link-menu';

const pageVariants = [ 'default', 'branded' ];

export const createArgs = () => ({
  variant: 'default',
  logo: 'legal-and-general-logo.svg',
  logoAlt: 'Company name',
  logoHref: 'https://storybook.js.org',
  colour: 'blue',
  theme: 'neutral',
  showHeader: true,
  showFooter: true,
  copyright: '© Some Company plc',
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
  primaryLinks,
  socialLinks,
});

export const header = `
  <header lg-header [style.display]="showHeader === false ? 'none' : null">
    <lg-header-logo [src]="logo" [alt]="logoAlt" [href]="logoHref"></lg-header-logo>
    <lg-notification-badge lgMenuBadge variant="dot" accessText="You have unread messages"></lg-notification-badge>

    <lg-primary-nav>
      <lg-primary-nav-list-item>
        <a href="" [isActive]="true" lgPrimaryNavItem>Link 1</a>
      </lg-primary-nav-list-item>
      <lg-primary-nav-list-item>
        <a href="" lgPrimaryNavItem>
          Link 2
          <lg-notification-badge count="3" accessText="You have 3 unread messages"></lg-notification-badge>
        </a>
      </lg-primary-nav-list-item>
      <lg-primary-nav-list-item>
        <a href="" lgPrimaryNavItem>Link 3</a>
      </lg-primary-nav-list-item>

      <a lgPrimaryNavMobileItem href="">
        <lg-link-menu-item>
          <lg-link-menu-item-text>Link 1</lg-link-menu-item-text>
        </lg-link-menu-item>
      </a>
      <a lgPrimaryNavMobileItem href="">
        <lg-link-menu-item>
          <lg-link-menu-item-text>Link 2</lg-link-menu-item-text>
          <lg-notification-badge count="3" accessText="You have 3 unread messages"></lg-notification-badge>
        </lg-link-menu-item>
      </a>
      <a lgPrimaryNavMobileItem href="">
        <lg-link-menu-item>
          <lg-link-menu-item-text>Link 3</lg-link-menu-item-text>
        </lg-link-menu-item>
      </a>

      <a lgAccountMenuMobileItem href="">
        <lg-link-menu-item>
          <lg-icon name="bullet-feature"></lg-icon>
          <lg-link-menu-item-text>Link</lg-link-menu-item-text>
        </lg-link-menu-item>
      </a>
      <a lgAccountMenuMobileItem href="">
        <lg-link-menu-item>
          <lg-icon name="bullet-feature"></lg-icon>
          <lg-link-menu-item-text>Link 2</lg-link-menu-item-text>
        </lg-link-menu-item>
      </a>
    </lg-primary-nav>

    <lg-account-menu>
      <lg-account-menu-list-item>
        <a href="" lgAccountMenuItem>
          <lg-account-menu-item-label>Link</lg-account-menu-item-label>
          <lg-icon name="bullet-feature"></lg-icon>
        </a>
      </lg-account-menu-list-item>
      <lg-account-menu-list-item>
        <a href="" lgAccountMenuItem>
          <lg-account-menu-item-label>Link 2</lg-account-menu-item-label>
          <lg-icon name="bullet-feature"></lg-icon>
        </a>
      </lg-account-menu-list-item>
    </lg-account-menu>
  </header>
`;

const breadcrumbs = `
  <div ngProjectAs="[lg-header]">
    <div lgContainer>
      <div lgRow>
        <div lgCol="12">
          <lg-breadcrumb variant="page" lgColour="blue" [lgColourTheme]="variant === 'branded' ? 'bold' : 'neutral'">
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
              <span aria-current="page">Product details</span>
            </lg-breadcrumb-item>
          </lg-breadcrumb>
        </div>
      </div>
    </div>
  </div>
`;

export const banner = `
  <div
    ngProjectAs="[lg-header]"
    [hidden]="!showBanner"
  >
    <lg-banner status="generic" [icon]="'globe'">
      {{bannerMessage}}
    </lg-banner>
  </div>
`;

export const footer = `
<footer lg-footer [style.display]="showFooter === false ? 'none' : null">
  <lg-footer-nav>
    @for (link of primaryLinks; track link.id) {
      <lg-footer-nav-item>
        @if (!link.isButton) {
          <a [href]="link.href" [id]="link.id" target="_blank">{{ link.text }}</a>
        } @else {
          <button [class]="link.class" [id]="link.id">{{ link.text }}</button>
        }
      </lg-footer-nav-item>
    }
  </lg-footer-nav>

  <lg-footer-logo [src]="logo" [alt]="logoAlt"></lg-footer-logo>

  <lg-footer-social>
    @for (social of socialLinks; track social.id) {
      <a class="social-link" [href]="social.href" [id]="social.id" target="_blank" [attr.aria-label]="social.label">
        <lg-icon [name]="social.icon" size="sm"></lg-icon>
      </a>
    }
  </lg-footer-social>

  <lg-footer-copyright>{{ copyright }}</lg-footer-copyright>
</footer>
`;

const headerCategory = 'header';
const footerCategory = 'footer';
const contentCategory = 'content';

export const pageSectionsCategory = 'page sections';

export const pageStoryMeta = {
  component: LgPageComponent,
  decorators: [
    moduleMetadata({
      imports: [
        LgHeaderComponent,
        LgFooterComponent,
        LgPageComponent,
        LgBannerComponent,
        LgHeroComponent,
        LgHeroHeaderComponent,
        LgHeroContentComponent,
        LgHeroCardComponent,
        LgHeroCardHeaderComponent,
        LgHeroCardSubtitleComponent,
        LgContentAreaComponent,
        LgContentAreaHeaderComponent,
        LgContentAreaContentComponent,
        LgContentAreaFooterComponent,
        LgContentAreaTitleComponent,
        LgInputFieldComponent,
        LgInputDirective,
        LgHintComponent,
        LgSelectFieldComponent,
        LgSelectDirective,
        LgSortCodeDirective,
        LgGridContainerDirective,
        LgHeroCardTitleComponent,
        LgAlertComponent,
        LgDataPointAddOnComponent,
        LgDataPointComponent,
        LgDataPointGroupComponent,
        LgDataPointLabelComponent,
        LgDataPointSecondaryLabelComponent,
        LgDataPointValueComponent,
        LgHeroCardContentComponent,
        LgHeroCardFooterComponent,
        LgBreadcrumbComponent,
        LgBreadcrumbItemComponent,
        LgIconComponent,
        LgColourDirective,
        LgNotificationBadgeComponent,
        LgPrimaryNavComponent,
        LgPrimaryNavListItemComponent,
        LgPrimaryNavItemDirective,
        LgPrimaryNavMobileItemDirective,
        LgAccountMenuComponent,
        LgAccountMenuListItemComponent,
        LgAccountMenuItemDirective,
        LgAccountMenuItemLabelComponent,
        LgAccountMenuMobileItemDirective,
        LgLinkMenuItemComponent,
        LgLinkMenuItemTextComponent,
        LgGridContainerDirective,
        LgGridRowDirective,
        LgGridColDirective,
        LgMarginDirective,
        LgHeaderLogoComponent,
        LgCardComponent,
        LgCardContentComponent,
        LgCardHeaderComponent,
        LgCardTitleComponent,
        LgCardFooterComponent,
        LgButtonComponent,
        LgButtonGroupComponent,
        LgMarginDirective,
        LgFooterComponent,
        LgFooterNavComponent,
        LgFooterNavItemComponent,
        LgFooterLogoComponent,
        LgFooterSocialComponent,
        LgFooterCopyrightComponent,
      ],
    }),
  ],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    colour: { table: { disable: true } },
    theme: { table: { disable: true } },
    variant: {
      options: pageVariants,
      control: { type: 'select' },
      description: 'The page background variant',
      table: {
        type: { summary: 'default | branded' },
        defaultValue: { summary: 'default' },
      },
    },
    logo: { table: { category: headerCategory } },
    logoAlt: { table: { category: headerCategory } },
    copyright: { table: { category: footerCategory } },
    primaryLinks: { table: { category: footerCategory } },
    secondaryLinks: { table: { category: footerCategory } },
    card1: { table: { category: contentCategory } },
    card2: { table: { category: contentCategory } },
    card3: { table: { category: contentCategory } },
    class: { table: { disable: true } },
    skipToMain: { table: { disable: true } },
  },
} as Meta;

export const basicHeroTemplate = `
  <lg-hero>
    <lg-hero-header>
      <div lgContainer>
        <div lgRow>
          <div lgCol="12">
            <lg-breadcrumb variant="embedded" lgMarginBottom="none" lgColour="blue" [lgColourTheme]="variant === 'branded' ? 'bold' : 'neutral'">
              <lg-breadcrumb-item>
                <a href="#">
                  <lg-icon name="home-outline"></lg-icon>
                  Home
                </a>
              </lg-breadcrumb-item>
              <lg-breadcrumb-item>
                <a href="#">Templates</a>
              </lg-breadcrumb-item>
              <lg-breadcrumb-item>
                Page
              </lg-breadcrumb-item>
            </lg-breadcrumb>
          </div>
        </div>
      </div>
    </lg-hero-header>
    <lg-hero-content>
      <div lgContainer>
        <div lgRow>
          <div lgCol="12">
            <lg-hero-card>
              <lg-hero-card-header>
                <lg-hero-card-title headingLevel="1">
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

export const formJourneyProductContent = `
  ${header}
  ${breadcrumbs}
  <div lgContainer>
    <div lgRow>
      <div lgCol="12" lgColLg="8" lgColLgOffset="2" lgColMd="10" lgColMdOffset="1">
        <form [formGroup]="form">
          <lg-content-area variant="form-journey">
            <lg-content-area-header>
              <a href="#">
                <lg-icon name="arrow-left"></lg-icon>
                Back
              </a>
            </lg-content-area-header>
            <lg-content-area-content>
              <lg-progress-indicator [max]="3" [value]="1">
                Journey title
                <lg-progress-header>
                  <h1>Step heading</h1>
                </lg-progress-header>
              </lg-progress-indicator>
              <p>Enter the details of the account you want us to use for your payments.</p>
              <lg-input-field [block]="true">
                Account number
                <lg-hint>Your account number is 8 digits</lg-hint>
                <input lgInput formControlName="accountNumber" size="8" />
              </lg-input-field>
              <lg-input-field [block]="true">
                Sort code
                <lg-hint>Must be 6 digits, like 12-34-56</lg-hint>
                <input lgInput lgSortCode formControlName="sortCode" size="8" />
              </lg-input-field>
              <lg-select-field [block]="true">
                Account type
                <select lgSelect formControlName="accountType">
                  <option value="current">Current account</option>
                  <option value="savings">Savings account</option>
                  <option value="joint">Joint account</option>
                </select>
              </lg-select-field>
            </lg-content-area-content>
            <lg-content-area-footer>
              <lg-button-group>
                <button lg-button type="button" priority="primary">
                  Continue
                  <lg-icon name="arrow-right" />
                </button>
                <button lg-button type="button" priority="secondary">
                  Cancel
                  <lg-icon name="close" />
                </button>
              </lg-button-group>
            </lg-content-area-footer>
          </lg-content-area>
        </form>
      </div>
    </div>
  </div>
  ${footer}
`;
