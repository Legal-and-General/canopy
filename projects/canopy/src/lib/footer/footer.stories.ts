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
    'in-dsm': {
      id: '5ec4f36b45894b0873022460',
    },
    notes: {
      markdown: notes,
    },
  },
};

export const primaryLinks = [
  { text: 'My account', href: 'https://app.somecompany.com' },
  { text: 'My quotes', href: 'https://somecompany.com/quotes' },
  { text: 'Support centre', href: 'https://somecompany.com/support' },
  { text: 'Contact', href: 'https://somecompany.com/contact' },
];

export const secondaryLinks = [
  { text: 'Accessibility', href: 'https://somecompany.com/accessibility' },
  { text: 'Security', href: 'https://somecompany.com/security' },
  { text: 'Legal and regulatory', href: 'https://somecompany.com/legal' },
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
    logo: text(
      'logo',
      'https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo3.png',
      groupId,
    ),
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
