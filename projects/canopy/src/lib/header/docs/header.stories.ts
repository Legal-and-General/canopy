import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { Component, Input } from '@angular/core';

import { LgHeaderComponent } from '../header.component';
import {
  LgIconRegistry,
  lgIconProfile,
  lgIconRadioButtonUnselected,
  LgIconComponent,
  lgIconHamburgerMenu,
  lgIconClose,
} from '../../icon';
import { LgAccountMenuComponent } from '../account-menu/account-menu.component';
import { LgAccountMenuItemDirective } from '../account-menu/account-menu-item.directive';
import { LgAccountMenuItemLabelComponent } from '../account-menu/account-menu-item-label/account-menu-item-label.component';
import { LgAccountMenuListItemComponent } from '../account-menu/account-menu-list-item/account-menu-list-item.component';
import { LgHeaderLogoComponent } from '../header-logo/header-logo.component';
import { LgNotificationBadgeComponent } from '../notification-badge/notification-badge.component';
import { LgPrimaryNavComponent } from '../primary-navigation/primary-navigation.component';
import { LgPrimaryNavItemDirective } from '../primary-navigation/primary-navigation-item.directive';
import { LgPrimaryNavListItemComponent } from '../primary-navigation/primary-navigation-list-item/primary-navigation-list-item.component';

const navigationTemplate = `
<header lg-header>
  <lg-header-logo [src]="logo" [alt]="logoAlt" [href]="logoHref"></lg-header-logo>

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
    <lg-primary-nav-list-item [alignRight]="true">
      <button type="button" lgPrimaryNavItem>Button</button>
    </lg-primary-nav-list-item>
  </lg-primary-nav>

  <lg-account-menu>
    <lg-account-menu-list-item>
      <button type="button" lgAccountMenuItem>
        <lg-account-menu-item-label>Button</lg-account-menu-item-label>
        <lg-icon name="radio-button-unselected"></lg-icon>
        <lg-notification-badge count="3" accessText="You have 3 unread messages"></lg-notification-badge>
      </button>
    </lg-account-menu-list-item>
    <lg-account-menu-list-item>
      <a href="" lgAccountMenuItem>
        <lg-account-menu-item-label>Link</lg-account-menu-item-label>
        <lg-icon name="radio-button-unselected"></lg-icon>
      </a>
    </lg-account-menu-list-item>
  </lg-account-menu>
</header>
`;

@Component({
  selector: 'lg-navigation',
  template: navigationTemplate,
  standalone: true,
  imports: [
    LgHeaderComponent,
    LgHeaderLogoComponent,
    LgPrimaryNavComponent,
    LgPrimaryNavListItemComponent,
    LgPrimaryNavItemDirective,
    LgNotificationBadgeComponent,
    LgAccountMenuComponent,
    LgAccountMenuListItemComponent,
    LgAccountMenuItemDirective,
    LgAccountMenuItemLabelComponent,
    LgIconComponent,
  ],
})
class PrimaryNavigationComponent {
  @Input() logo: string;
  @Input() logoAlt: string;
  @Input() logoHref: string;

  constructor(private registry: LgIconRegistry) {
    this.registry.registerIcons([
      lgIconProfile,
      lgIconRadioButtonUnselected,
      lgIconHamburgerMenu,
      lgIconClose,
    ]);
  }
}

export default {
  title: 'Components/Header/Examples',
  component: LgHeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [ PrimaryNavigationComponent, LgHeaderComponent, LgHeaderLogoComponent ],
    }),
  ],
  parameters: {
    layout: 'fullscreen',
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

const template = `
<header lg-header>
  <lg-header-logo [src]="logo" [alt]="logoAlt" [href]="logoHref"></lg-header-logo>

  <!--  Additional code can be inserted here  -->
</header>
`;

const standardStory: StoryFn<LgHeaderComponent> = (args: LgHeaderComponent) => ({
  props: args,
  template,
});

export const standardHeader = standardStory.bind({});
standardHeader.storyName = 'Standard';

standardHeader.args = {
  logo: 'legal-and-general-logo.svg',
  logoAlt: 'Company name',
  logoHref: 'https://storybook.js.org',
};

standardHeader.parameters = {
  docs: {
    source: {
      code: template,
    },
  },
};

standardHeader.argTypes = {
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
};

const coBrandedTemplate = `
<header lg-header>
  <lg-header-logo [src]="logo" [alt]="logoAlt" [href]="logoHref"></lg-header-logo>
  <lg-header-logo [src]="secondaryLogo" [alt]="secondaryLogoAlt" [href]="secondaryLogoHref"></lg-header-logo>

  <!--  Additional code can be inserted here  -->
</header>
`;

const coBrandedStory: StoryFn<LgHeaderComponent> = (args: LgHeaderComponent) => ({
  props: args,
  template: coBrandedTemplate,
  styles: [
    `
      :host {
        --header-second-logo-width: 100px;
        --header-second-logo-width-lg: 300px;
      }
    `,
  ],
});

export const coBrandedHeader = coBrandedStory.bind({});
coBrandedHeader.storyName = 'Co-branded';

coBrandedHeader.args = {
  logo: 'legal-and-general-logo.svg',
  logoAlt: 'Company name',
  logoHref: 'https://storybook.js.org',
  secondaryLogo: 'dummy-logo.svg',
  secondaryLogoAlt: 'Second company name',
  secondaryLogoHref: 'https://storybook.js.org',
};

coBrandedHeader.parameters = {
  docs: {
    source: {
      code: coBrandedTemplate,
    },
  },
};

const navStory: StoryFn<LgHeaderComponent> = (args: LgHeaderComponent) => ({
  props: args,
  template:
    '<lg-navigation [logo]="logo" [logoAlt]="logoAlt" [logoHref]="logoHref"></ lg-navigation>',
});

export const navHeader = navStory.bind({});
navHeader.storyName = 'Navigation';

navHeader.args = {
  logo: 'legal-and-general-logo.svg',
  logoAlt: 'Company name',
  logoHref: 'https://storybook.js.org',
};

navHeader.parameters = {
  docs: {
    source: {
      code: navigationTemplate,
    },
  },
};

navHeader.argTypes = {
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
};
