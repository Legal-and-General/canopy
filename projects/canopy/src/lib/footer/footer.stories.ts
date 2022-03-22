import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { LgFooterComponent } from '../footer/footer.component';
import { notes } from './footer.notes';
import { LgFooterModule } from './footer.module';

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
    type: 'button',
    class: 'secondary-button-class',
  },
];

export default {
  title: 'Components/Footer',
  excludeStories: ['primaryLinks', 'secondaryLinks'],
  component: LgFooterComponent,
  decorators: [
    moduleMetadata({
      imports: [LgFooterModule],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: notes,
      },
    },
  },
  argTypes: {
    clickedLink: {
      action: 'Clicked link',
    },
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
    primaryLinkClicked: {
      description: 'Event emitted when a primary link is clicked.',
    },
    secondaryLinkClicked: {
      description: 'Event emitted when a secondary link is clicked.',
    },
    class: {
      table: {
        disable: true,
      },
    },
    role: {
      table: {
        disable: true,
      },
    },
    handlePrimaryLinkClick: {
      table: {
        disable: true,
      },
    },
    handleSecondaryLinkClick: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const template = `
<footer lg-footer
  [copyright]="copyright"
  [logo]="logo"
  [logoAlt]="logoAlt"
  [primaryLinks]="primaryLinks"
  [secondaryLinks]="secondaryLinks"
  (primaryLinkClicked)="primaryLinkClicked($event)"
  (secondaryLinkClicked)="secondaryLinkClicked($event)">
</footer>
`;

const standardStory: Story<LgFooterComponent> = (args: LgFooterComponent) => ({
  props: args,
  template,
});

export const standardFooter = standardStory.bind({});
standardFooter.storyName = 'Footer';
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

const coBrandedTemplate = `
<footer lg-footer
  [copyright]="copyright"
  [logo]="logo"
  [logoAlt]="logoAlt"
  [secondaryLogo]="secondaryLogo"
  [secondaryLogoAlt]="secondaryLogoAlt"
  [primaryLinks]="primaryLinks"
  [secondaryLinks]="secondaryLinks"
  (primaryLinkClicked)="primaryLinkClicked($event)"
  (secondaryLinkClicked)="secondaryLinkClicked($event)">
</footer>
`;

const coBrandedStory: Story<LgFooterComponent> = (args: LgFooterComponent) => ({
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
