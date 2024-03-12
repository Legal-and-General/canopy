import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { NgFor, NgIf } from '@angular/common';

import { LgFooterComponent } from '../footer.component';
import { LgFooterNavComponent } from '../footer-nav/footer-nav.component';
import { LgFooterNavItemComponent } from '../footer-nav-item/footer-nav-item.component';
import { LgFooterLogoComponent } from '../footer-logo/footer-logo.component';
import { LgFooterCopyrightComponent } from '../footer-copyright/footer-copyright.component';

export const primaryLinks = [
  { id: 'primary-link-1', text: 'My account', href: 'https://app.somecompany.com' },
  { id: 'primary-link-2', text: 'My quotes', href: 'https://somecompany.com/quotes' },
  {
    id: 'primary-link-3',
    text: 'Support centre',
    href: 'https://somecompany.com/support',
  },
  { id: 'primary-link-4', text: 'Contact', href: 'https://somecompany.com/contact' },
];

export const secondaryLinks = [
  {
    id: 'secondary-link-1',
    text: 'Accessibility',
    href: 'https://somecompany.com/accessibility',
  },
  { id: 'secondary-link-2', text: 'Security', href: 'https://somecompany.com/security' },
  {
    id: 'secondary-link-3',
    text: 'Legal and regulatory',
    href: 'https://somecompany.com/legal',
  },
  {
    id: 'secondary-button-4',
    text: 'Cookie settings',
    isButton: true,
    class: 'secondary-button-class',
  },
];

export default {
  title: 'Components/Footer/Examples',
  excludeStories: [ 'primaryLinks', 'secondaryLinks' ],
  component: LgFooterComponent,
  decorators: [
    moduleMetadata({
      imports: [
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
    copyright: {
      description: 'Copyright text to display in footer.',
    },
    primaryLinks: {
      description: 'The primary footer links.',
    },
    secondaryLinks: {
      description: 'The secondary footer links.',
    },
    ngAfterContentInit: {
      table: {
        disable: true,
      },
    },
    footerLogos: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const template = `
<footer lg-footer>
  <lg-footer-nav variant="primary">
    <lg-footer-nav-item *ngFor="let primaryLink of primaryLinks">
      <a [href]="primaryLink.href" [id]="primaryLink.id" target="_blank">{{ primaryLink.text }}</a>
    </lg-footer-nav-item>
  </lg-footer-nav>

  <lg-footer-nav variant="secondary">
    <lg-footer-nav-item *ngFor="let secondaryLink of secondaryLinks">
      <a *ngIf="!secondaryLink.isButton; else button" [href]="secondaryLink.href" [id]="secondaryLink.id" target="_blank">{{ secondaryLink.text }}</a>

      <ng-template #button>
        <button [class]="secondaryLink.class" [id]="secondaryLink.id">{{ secondaryLink.text }}</button>
      </ng-template>
    </lg-footer-nav-item>
  </lg-footer-nav>

  <lg-footer-logo [src]="logo" [alt]="logoAlt"></lg-footer-logo>

  <lg-footer-copyright>{{ copyright }}</lg-footer-copyright>
</footer>
`;

const standardStory: StoryFn<LgFooterComponent> = (args: LgFooterComponent) => ({
  props: args,
  template,
});

export const standardFooter = standardStory.bind({});
standardFooter.storyName = 'Standard';

standardFooter.args = {
  logo: 'legal-and-general-logo.svg',
  logoAlt: 'Company name',
  copyright: '© Some Company plc 2018',
  secondaryLinks: secondaryLinks,
  primaryLinks: primaryLinks,
};

standardFooter.parameters = {
  docs: {
    source: {
      code: template,
    },
  },
};

standardFooter.argTypes = {
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
};

const compactTemplate = `
<footer lg-footer>
  <lg-footer-nav variant="secondary">
    <lg-footer-nav-item *ngFor="let secondaryLink of secondaryLinks">
      <a [href]="secondaryLink.href" [id]="secondaryLink.id" target="_blank">{{ secondaryLink.text }}</a>
    </lg-footer-nav-item>
  </lg-footer-nav>

  <lg-footer-copyright>{{ copyright }}</lg-footer-copyright>
</footer>
`;

const compactStory: StoryFn<LgFooterComponent> = (args: LgFooterComponent) => ({
  props: args,
  template: compactTemplate,
});

export const compactFooter = compactStory.bind({});
compactFooter.storyName = 'Compact';

compactFooter.args = {
  copyright: '© Some Company plc 2018',
  secondaryLinks: secondaryLinks,
};

compactFooter.parameters = {
  docs: {
    source: {
      code: compactTemplate,
    },
  },
};

compactFooter.argTypes = {
  primaryLinks: {
    table: {
      disable: true,
    },
  },
  logo: {
    table: {
      disable: true,
    },
  },
  logoAlt: {
    table: {
      disable: true,
    },
  },
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
};

const coBrandedTemplate = `
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
  <lg-footer-logo [src]="secondaryLogo" [alt]="secondaryLogoAlt"></lg-footer-logo>

  <lg-footer-copyright>{{ copyright }}</lg-footer-copyright>
</footer>
`;

const coBrandedStory: StoryFn<LgFooterComponent> = (args: LgFooterComponent) => ({
  props: args,
  template: coBrandedTemplate,
});

export const coBrandedFooter = coBrandedStory.bind({});
coBrandedFooter.storyName = 'Co-branded';

coBrandedFooter.args = {
  logo: 'legal-and-general-logo.svg',
  logoAlt: 'Company name',
  secondaryLogo: 'dummy-logo.svg',
  secondaryLogoAlt: 'Secondary company name',
  copyright: '© Some Company plc 2018',
  secondaryLinks: secondaryLinks,
  primaryLinks: primaryLinks,
};

coBrandedFooter.parameters = {
  docs: {
    source: {
      code: coBrandedTemplate,
    },
  },
};
