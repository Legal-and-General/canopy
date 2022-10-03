import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { LgHeaderComponent } from '../header/header.component';
import { LgIconModule } from '../icon';

import { notes } from './header.notes';
import { LgHeaderModule } from './header.module';

export default {
  title: 'Components/Header',
  component: LgHeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [ LgHeaderModule, LgIconModule ],
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
  },
} as Meta;

const template = `
<header lg-header>
  <lg-header-logo [src]="logo" [alt]="logoAlt" [href]="logoHref"></lg-header-logo>

  <!--  Additional code can be inserted here  -->
</header>
`;

const standardStory: Story<LgHeaderComponent> = (args: LgHeaderComponent) => ({
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

const coBrandedStory: Story<LgHeaderComponent> = (args: LgHeaderComponent) => ({
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

const navTemplate = `
<header lg-header>
  <lg-header-logo [src]="logo" [alt]="logoAlt" [href]="logoHref"></lg-header-logo>

  <lg-primary-nav>
    <lg-primary-nav-list-item>
      <a href="/" [isActive]="true" lgPrimaryNavItem>Link 1</a>
    </lg-primary-nav-list-item>
    <lg-primary-nav-list-item>
      <a href="/" lgPrimaryNavItem>
        Link 2
        <lg-notification-badge count="3" accessText="You mave 3 unread messages"></lg-notification-badge>
      </a>
    </lg-primary-nav-list-item>
    <lg-primary-nav-list-item [alignRight]="true">
      <button type="button" lgPrimaryNavItem>Button</button>
    </lg-primary-nav-list-item>
  </lg-primary-nav>
</header>
`;

const navStory: Story<LgHeaderComponent> = (args: LgHeaderComponent) => ({
  props: args,
  template: navTemplate,
});

export const navHeader = navStory.bind({});
navHeader.storyName = 'Global nav';

navHeader.args = {
  logo: 'legal-and-general-logo.svg',
  logoAlt: 'Company name',
  logoHref: 'https://storybook.js.org',
};

navHeader.parameters = {
  docs: {
    source: {
      code: coBrandedTemplate,
    },
  },
};
