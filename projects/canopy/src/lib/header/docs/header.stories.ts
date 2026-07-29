import { Meta, moduleMetadata } from '@storybook/angular';
import { Component, Input } from '@angular/core';

import { LgHeaderComponent } from '../header.component';
import { LgIconComponent } from '../../icon';
import { LgColourDirective } from '../../colour';
import { LgAccountMenuComponent } from '../account-menu/account-menu.component';
import { LgAccountMenuItemDirective } from '../account-menu/account-menu-item.directive';
import { LgAccountMenuItemLabelComponent } from '../account-menu/account-menu-item-label/account-menu-item-label.component';
import { LgAccountMenuListItemComponent } from '../account-menu/account-menu-list-item/account-menu-list-item.component';
import { LgAccountMenuMobileItemDirective } from '../account-menu/account-menu-mobile-item.directive';
import { LgHeaderLogoComponent } from '../header-logo/header-logo.component';
import { LgLinkMenuItemComponent, LgLinkMenuItemTextComponent } from '../../link-menu';
import { LgNotificationBadgeComponent } from '../notification-badge/notification-badge.component';
import { LgPrimaryNavComponent } from '../primary-navigation/primary-navigation.component';
import { LgPrimaryNavItemDirective } from '../primary-navigation/primary-navigation-item.directive';
import { LgPrimaryNavListItemComponent } from '../primary-navigation/primary-navigation-list-item/primary-navigation-list-item.component';
import { LgPrimaryNavMobileItemDirective } from '../primary-navigation/primary-navigation-mobile-item.directive';

const colours = [ 'blue', 'green', 'red', 'yellow' ];
const themes = [ 'neutral', 'neutral-inverse', 'subtle', 'bold' ];

const navigationTemplate = `
<header lg-header [lgColour]="colour" [lgColourTheme]="theme">
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

const navigationWithoutAccountMenuTemplate = `
<header lg-header [lgColour]="colour" [lgColourTheme]="theme">
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
  </lg-primary-nav>
</header>
`;

@Component({
  selector: 'lg-navigation',
  template: navigationTemplate,
  imports: [
    LgHeaderComponent,
    LgHeaderLogoComponent,
    LgPrimaryNavComponent,
    LgPrimaryNavListItemComponent,
    LgPrimaryNavItemDirective,
    LgPrimaryNavMobileItemDirective,
    LgNotificationBadgeComponent,
    LgColourDirective,
    LgAccountMenuComponent,
    LgAccountMenuListItemComponent,
    LgAccountMenuItemDirective,
    LgAccountMenuItemLabelComponent,
    LgAccountMenuMobileItemDirective,
    LgIconComponent,
    LgLinkMenuItemComponent,
    LgLinkMenuItemTextComponent,
  ],
})
class PrimaryNavigationComponent {
  @Input() logo: string;
  @Input() logoAlt: string;
  @Input() logoHref: string;
  @Input() colour!: string;
  @Input() theme!: string;
}

@Component({
  selector: 'lg-navigation-no-account-menu',
  template: navigationWithoutAccountMenuTemplate,
  imports: [
    LgHeaderComponent,
    LgHeaderLogoComponent,
    LgPrimaryNavComponent,
    LgPrimaryNavListItemComponent,
    LgPrimaryNavItemDirective,
    LgPrimaryNavMobileItemDirective,
    LgNotificationBadgeComponent,
    LgColourDirective,
    LgLinkMenuItemComponent,
    LgLinkMenuItemTextComponent,
  ],
})
class PrimaryNavigationNoAccountMenuComponent {
  @Input() logo: string;
  @Input() logoAlt: string;
  @Input() logoHref: string;
  @Input() colour!: string;
  @Input() theme!: string;
}

const coBrandedNavigationTemplate = `
<header lg-header [lgColour]="colour" [lgColourTheme]="theme">
  <lg-header-logo [src]="logo" [alt]="logoAlt" [href]="logoHref"></lg-header-logo>
  <lg-header-logo [src]="secondaryLogo" [alt]="secondaryLogoAlt" [href]="secondaryLogoHref"></lg-header-logo>
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

@Component({
  selector: 'lg-co-branded-navigation',
  template: coBrandedNavigationTemplate,
  imports: [
    LgHeaderComponent,
    LgHeaderLogoComponent,
    LgPrimaryNavComponent,
    LgPrimaryNavListItemComponent,
    LgPrimaryNavItemDirective,
    LgPrimaryNavMobileItemDirective,
    LgNotificationBadgeComponent,
    LgColourDirective,
    LgAccountMenuComponent,
    LgAccountMenuListItemComponent,
    LgAccountMenuItemDirective,
    LgAccountMenuItemLabelComponent,
    LgAccountMenuMobileItemDirective,
    LgIconComponent,
    LgLinkMenuItemComponent,
    LgLinkMenuItemTextComponent,
  ],
})
class CoBrandedNavigationComponent {
  @Input() logo: string;
  @Input() logoAlt: string;
  @Input() logoHref: string;
  @Input() secondaryLogo: string;
  @Input() secondaryLogoAlt: string;
  @Input() secondaryLogoHref: string;
  @Input() colour!: string;
  @Input() theme!: string;
}

export default {
  title: 'Components/Header/Examples',
  tags: [ 'updated' ],
  component: LgHeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [
        PrimaryNavigationComponent,
        PrimaryNavigationNoAccountMenuComponent,
        CoBrandedNavigationComponent,
        LgHeaderComponent,
        LgHeaderLogoComponent,
        LgColourDirective,
      ],
    }),
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: { disable: true },
    themes: { disable: true },
  },
  argTypes: {
    logo: {
      description: 'A url link to the logo.',
    },
    logoAlt: {
      description: 'alt text to display alongside the logo.',
      table: {
        defaultValue: {
          summary: '',
        },
      },
    },
    logoHref: {
      description: 'Url link if the logo is clickable.',
    },
    secondaryLogo: {
      description: 'A url link to the secondary logo.',
    },
    secondaryLogoAlt: {
      description: 'alt text to display alongside the secondary logo.',
      table: {
        defaultValue: {
          summary: '',
        },
      },
    },
    secondaryLogoHref: {
      description: 'Url link if the secondary logo is clickable.',
    },
    colour: {
      options: colours,
      description: 'The mode colour to apply to the header.',
      table: {
        type: {
          summary: 'blue | green | red | yellow',
        },
      },
      control: {
        type: 'select',
      },
    },
    theme: {
      options: themes,
      description: 'The theme to apply to the header colour mode.',
      table: {
        type: {
          summary: 'neutral | neutral-inverse | subtle | bold',
        },
        defaultValue: {
          summary: 'neutral',
        },
      },
      control: {
        type: 'select',
      },
    },
    class: {
      table: {
        disable: true,
      },
    },
    ngAfterContentInit: {
      table: {
        disable: true,
      },
    },
    headerLogos: {
      table: {
        disable: true,
      },
    },
    showResponsiveMenu: {
      table: {
        disable: true,
      },
    },
    menuToggled: {
      table: {
        disable: true,
      },
    },
    handleToggleKeydown: {
      table: {
        disable: true,
      },
    },
    ngOnDestroy: {
      table: {
        disable: true,
      },
    },
    onDocumentClickout: {
      table: {
        disable: true,
      },
    },
    toggleResponsiveMenu: {
      table: {
        disable: true,
      },
    },
    menuToggleButton: {
      table: {
        disable: true,
      },
    },
    primaryNav: {
      table: {
        disable: true,
      },
    },
    primaryNavEl: {
      table: {
        disable: true,
      },
    },
    navItems: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const coBrandedTemplate = `
<header lg-header [lgColour]="colour" [lgColourTheme]="theme">
  <lg-header-logo [src]="logo" [alt]="logoAlt" [href]="logoHref"></lg-header-logo>
  <lg-header-logo [src]="secondaryLogo" [alt]="secondaryLogoAlt" [href]="secondaryLogoHref"></lg-header-logo>

  <!--  Additional code can be inserted here  -->
</header>
`;

export const CoBrandedHeader = {
  name: 'Co-branded',
  render: (args: LgHeaderComponent) => ({
    props: args,
    template: coBrandedTemplate,
  }),
  args: {
    logo: 'legal-and-general-logo.svg',
    logoAlt: 'Company name',
    logoHref: 'https://storybook.js.org',
    secondaryLogo: 'logo-template-lg.svg',
    secondaryLogoAlt: 'Second company name',
    secondaryLogoHref: 'https://storybook.js.org',
    colour: 'blue',
    theme: 'neutral',
  },
  parameters: {
    docs: {
      source: {
        code: coBrandedTemplate,
      },
    },
  },
};

export const NavHeader = {
  name: 'Standard with navigation',
  render: (args: LgHeaderComponent) => ({
    props: args,
    template:
      '<lg-navigation [logo]="logo" [logoAlt]="logoAlt" [logoHref]="logoHref" [colour]="colour" [theme]="theme"></ lg-navigation>',
  }),
  args: {
    logo: 'legal-and-general-logo.svg',
    logoAlt: 'Company name',
    logoHref: 'https://storybook.js.org',
    colour: 'blue',
    theme: 'neutral',
  },
  argTypes: {
    secondaryLogo: {
      table: {
        disable: true,
      },
    },
    secondaryLogoAlt: {
      table: {
        disable: true,
      },
    },
    secondaryLogoHref: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    docs: {
      source: {
        code: navigationTemplate,
      },
    },
  },
};

export const NavHeaderWithoutAccountMenu = {
  name: 'Standard without account menu',
  render: (args: LgHeaderComponent) => ({
    props: args,
    template:
      '<lg-navigation-no-account-menu [logo]="logo" [logoAlt]="logoAlt" [logoHref]="logoHref" [colour]="colour" [theme]="theme"></lg-navigation-no-account-menu>',
  }),
  args: {
    logo: 'legal-and-general-logo.svg',
    logoAlt: 'Company name',
    logoHref: 'https://storybook.js.org',
    colour: 'blue',
    theme: 'neutral',
  },
  argTypes: {
    secondaryLogo: {
      table: {
        disable: true,
      },
    },
    secondaryLogoAlt: {
      table: {
        disable: true,
      },
    },
    secondaryLogoHref: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    docs: {
      source: {
        code: navigationWithoutAccountMenuTemplate,
      },
    },
  },
};

export const CoBrandedNavHeader = {
  name: 'Co-branded with navigation',
  render: (args: LgHeaderComponent) => ({
    props: args,
    template:
      '<lg-co-branded-navigation [logo]="logo" [logoAlt]="logoAlt" [logoHref]="logoHref" [secondaryLogo]="secondaryLogo" [secondaryLogoAlt]="secondaryLogoAlt" [secondaryLogoHref]="secondaryLogoHref" [colour]="colour" [theme]="theme"></lg-co-branded-navigation>',
  }),
  args: {
    logo: 'legal-and-general-logo.svg',
    logoAlt: 'Company name',
    logoHref: 'https://storybook.js.org',
    secondaryLogo: 'logo-template-lg.svg',
    secondaryLogoAlt: 'Second company name',
    secondaryLogoHref: 'https://storybook.js.org',
    colour: 'blue',
    theme: 'neutral',
  },
  parameters: {
    docs: {
      source: {
        code: coBrandedNavigationTemplate,
      },
    },
  },
};
