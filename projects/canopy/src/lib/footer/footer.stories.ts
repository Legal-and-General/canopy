import { object, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';

import { action } from '@storybook/addon-actions';

import { LgFooterComponent } from '../footer/footer.component';
import { notes } from './footer.notes';

const stories = storiesOf('Components', module).addDecorator(withKnobs);

const groupId = 'footer';

export const primaryLinks = [
  { text: 'My account', href: 'https://app.somecompany.com' },
  { text: 'My quotes', href: 'https://somecompany.com/quotes' },
  { text: 'Support centre', href: 'https://somecompany.com/support' },
  { text: 'Contact', href: 'https://somecompany.com/contact' }
];

export const secondaryLinks = [
  { text: 'Accessibility', href: 'https://somecompany.com/accessibility' },
  { text: 'Security', href: 'https://somecompany.com/security' },
  { text: 'Legal and regulatory', href: 'https://somecompany.com/legal' }
];

stories
  .addParameters({
    backgrounds: [{ name: 'default', value: '#f5f7fa', default: true }]
  })
  .add(
    'Footer',
    () => {
      require('!style-loader!css-loader!sass-loader!../../../../../.storybook/full-screen.css');

      return {
        moduleMetadata: {
          declarations: [LgFooterComponent]
        },
        template: `
        <footer lg-footer
          [copyright]="copyright"
          [logo]="logo"
          [logoAlt]="logoAlt"
          [logoHeight]="logoHeight"
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
            groupId
          ),
          logoHeight: text('logoHeight', '3rem', groupId),
          logoAlt: text('logoAlt', 'Company name', groupId),
          copyright: text('copyright', '© Some Company plc 2018', groupId),
          secondaryLinks: object('secondaryLinks', secondaryLinks, groupId),
          primaryLinks: object('primaryLinks', primaryLinks, groupId),
          primaryLinkClicked: action('primaryLinkClicked'),
          secondaryLinkClicked: action('secondaryLinkClicked')
        }
      };
    },
    {
      notes: {
        markdown: notes
      }
    }
  );
