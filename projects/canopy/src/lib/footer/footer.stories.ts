import { object, text, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import { action } from '@storybook/addon-actions';

import { fullScreen } from '../../../../../.storybook/addons/full-screen';
import { LgFooterComponent } from '../footer/footer.component';
import { notes } from './footer.notes';

export default {
  title: 'Components/Footer',
  excludeStories: ['primaryLinks', 'secondaryLinks'],
  parameters: {
    decorators: [
      fullScreen,
      withKnobs,
      moduleMetadata({
        declarations: [LgFooterComponent],
      }),
    ],
    notes: {
      markdown: notes,
    },
  },
};

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

const groupId = 'footer';

export const standard = () => ({
  template: `
    <footer lg-footer
      [copyright]="copyright"
      [logo]="logo"
      [logoAlt]="logoAlt"
      [primaryLinks]="primaryLinks"
      [secondaryLinks]="secondaryLinks"
      (primaryLinkClicked)="primaryLinkClicked($event)"
      (secondaryLinkClicked)="secondaryLinkClicked($event)">
    </footer>
  `,
  props: {
    logo: text('logo', 'legal-and-general-logo.svg', groupId),
    logoAlt: text('logoAlt', 'Company name', groupId),
    copyright: text('copyright', '© Some Company plc 2018', groupId),
    secondaryLinks: object('secondaryLinks', secondaryLinks, groupId),
    primaryLinks: object('primaryLinks', primaryLinks, groupId),
    primaryLinkClicked: action('primaryLinkClicked'),
    secondaryLinkClicked: action('secondaryLinkClicked'),
  },
});

export const compact = () => ({
  template: `
    <footer lg-footer
      [copyright]="copyright"
      [secondaryLinks]="secondaryLinks"
      (secondaryLinkClicked)="secondaryLinkClicked($event)">
    </footer>
  `,
  props: {
    copyright: text('copyright', '© Some Company plc 2018', groupId),
    secondaryLinks: object('secondaryLinks', secondaryLinks, groupId),
    secondaryLinkClicked: action('secondaryLinkClicked'),
  },
});

export const coBranded = () => ({
  template: `
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
  `,
  props: {
    logo: text('logo', 'legal-and-general-logo.svg', groupId),
    logoAlt: text('logoAlt', 'Company name', groupId),
    secondaryLogo: text('secondaryLogo', 'dummy-logo.svg', groupId),
    secondaryLogoAlt: text('secondaryLogoAlt', 'Second company name', groupId),
    copyright: text('copyright', '© Some Company plc 2018', groupId),
    secondaryLinks: object('secondaryLinks', secondaryLinks, groupId),
    primaryLinks: object('primaryLinks', primaryLinks, groupId),
    primaryLinkClicked: action('primaryLinkClicked'),
    secondaryLinkClicked: action('secondaryLinkClicked'),
  },
});
