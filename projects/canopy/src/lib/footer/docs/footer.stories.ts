import { Meta, moduleMetadata } from '@storybook/angular';

import { LgFooterComponent } from '../footer.component';
import { LgFooterNavComponent } from '../footer-nav/footer-nav.component';
import { LgFooterNavItemComponent } from '../footer-nav-item/footer-nav-item.component';
import { LgFooterLogoComponent } from '../footer-logo/footer-logo.component';
import { LgFooterCopyrightComponent } from '../footer-copyright/footer-copyright.component';
import { LgFooterSocialComponent } from '../footer-social/footer-social.component';
import { LgFooterStickersComponent } from '../footer-stickers/footer-stickers.component';
import { LgFooterFootnoteComponent } from '../footer-footnote/footer-footnote.component';
import { LgIconComponent } from '../../icon';

export const primaryLinks = [
  { id: 'link-1', text: 'My account', href: 'https://app.somecompany.com' },
  { id: 'link-2', text: 'My quotes', href: 'https://somecompany.com/quotes' },
  { id: 'link-3', text: 'Support centre', href: 'https://somecompany.com/support' },
  { id: 'link-4', text: 'Contact', href: 'https://somecompany.com/contact' },
  { id: 'link-5', text: 'Accessibility', href: 'https://somecompany.com/accessibility' },
  { id: 'link-6', text: 'Security', href: 'https://somecompany.com/security' },
  { id: 'link-7', text: 'Legal and regulatory', href: 'https://somecompany.com/legal' },
  { id: 'link-8', text: 'Privacy', href: 'https://somecompany.com/privacy' },
];

export const socialLinks = [
  {
    id: 'social-1',
    icon: 'facebook',
    href: 'https://facebook.com/somecompany',
    label: 'Facebook',
  },
  {
    id: 'social-3',
    icon: 'linkedin',
    href: 'https://linkedin.com/company/somecompany',
    label: 'LinkedIn',
  },
  {
    id: 'social-4',
    icon: 'youtube',
    href: 'https://youtube.com/somecompany',
    label: 'YouTube',
  },
];

export default {
  title: 'Components/Footer/Examples',
  excludeStories: [ 'primaryLinks', 'socialLinks' ],
  component: LgFooterComponent,
  decorators: [
    moduleMetadata({
      imports: [
        LgFooterComponent,
        LgFooterNavComponent,
        LgFooterNavItemComponent,
        LgFooterLogoComponent,
        LgFooterCopyrightComponent,
        LgFooterSocialComponent,
        LgFooterStickersComponent,
        LgFooterFootnoteComponent,
        LgIconComponent,
      ],
    }),
  ],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    logo: {
      description: 'A URL link to the logo.',
    },
    logoAlt: {
      description: 'Alt text to display alongside the logo.',
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
      description: 'The footer links (primary and secondary merged).',
    },
    socialLinks: {
      description: 'Social media links (maximum 8).',
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

const standardTemplate = `
<footer lg-footer>
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

  <lg-footer-copyright>{{ copyright }}</lg-footer-copyright>
</footer>
`;

export const StandardFooter = {
  name: 'Standard',
  render: (args: LgFooterComponent) => ({
    props: args,
    template: standardTemplate,
  }),
  args: {
    logo: 'legal-and-general-logo.svg',
    logoAlt: 'Company name',
    copyright: '© Some Company plc',
    primaryLinks,
  },
  parameters: {
    docs: {
      source: {
        code: standardTemplate,
      },
    },
  },
};

const withSocialTemplate = `
<footer lg-footer>
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
        <lg-icon [name]="social.icon"></lg-icon>
      </a>
    }
  </lg-footer-social>

  <lg-footer-copyright>{{ copyright }}</lg-footer-copyright>
</footer>
`;

export const FooterWithSocial = {
  name: 'With Social Icons',
  render: (args: LgFooterComponent) => ({
    props: args,
    template: withSocialTemplate,
  }),
  args: {
    logo: 'legal-and-general-logo.svg',
    logoAlt: 'Company name',
    copyright: '© Some Company plc',
    primaryLinks,
    socialLinks,
  },
  parameters: {
    docs: {
      source: {
        code: withSocialTemplate,
      },
    },
  },
};

const withStickersTemplate = `
<footer lg-footer>
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
  <lg-footer-copyright>{{ copyright }}</lg-footer-copyright>

  <lg-footer-stickers>
    <svg width="80" height="80" xmlns="http://www.w3.org/2000/svg">
      <rect width="80" height="80" fill="#e0e0e0" />
      <text x="50%" y="50%" font-size="12" text-anchor="middle" dy=".3em" fill="#666">Award</text>
    </svg>
    <svg width="80" height="80" xmlns="http://www.w3.org/2000/svg">
      <rect width="80" height="80" fill="#e0e0e0" />
      <text x="50%" y="50%" font-size="12" text-anchor="middle" dy=".3em" fill="#666">Certificate</text>
    </svg>
  </lg-footer-stickers>
</footer>
`;

export const FooterWithStickers = {
  name: 'With Stickers',
  render: (args: LgFooterComponent) => ({
    props: args,
    template: withStickersTemplate,
  }),
  args: {
    logo: 'legal-and-general-logo.svg',
    logoAlt: 'Company name',
    copyright: '© Some Company plc',
    primaryLinks,
  },
  parameters: {
    docs: {
      source: {
        code: withStickersTemplate,
      },
    },
  },
};

const fullFeaturedTemplate = `
<footer lg-footer>
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

  <lg-footer-stickers>
    <svg width="80" height="80" xmlns="http://www.w3.org/2000/svg">
      <rect width="80" height="80" fill="#e0e0e0" />
      <text x="50%" y="50%" font-size="12" text-anchor="middle" dy=".3em" fill="#666">Award</text>
    </svg>
    <svg width="80" height="80" xmlns="http://www.w3.org/2000/svg">
      <rect width="80" height="80" fill="#e0e0e0" />
      <text x="50%" y="50%" font-size="12" text-anchor="middle" dy=".3em" fill="#666">Certificate</text>
    </svg>
  </lg-footer-stickers>

  <lg-footer-footnote>
    Footnote
  </lg-footer-footnote>
</footer>
`;

export const FullFeaturedFooter = {
  name: 'Full Featured',
  render: (args: LgFooterComponent) => ({
    props: args,
    template: fullFeaturedTemplate,
  }),
  args: {
    logo: 'legal-and-general-logo.svg',
    logoAlt: 'Company name',
    copyright: '© Some Company plc',
    primaryLinks,
    socialLinks,
  },
  parameters: {
    docs: {
      source: {
        code: fullFeaturedTemplate,
      },
    },
  },
};

const coBrandedTemplate = `
<footer lg-footer>
  <lg-footer-nav>
    @for (link of primaryLinks; track link.id) {
      <lg-footer-nav-item>
        <a [href]="link.href" [id]="link.id" target="_blank">{{ link.text }}</a>
      </lg-footer-nav-item>
    }
  </lg-footer-nav>

  <lg-footer-logo [src]="secondaryLogo" [alt]="secondaryLogoAlt"></lg-footer-logo>
  <lg-footer-logo [src]="logo" [alt]="logoAlt"></lg-footer-logo>

  <lg-footer-copyright>{{ copyright }}</lg-footer-copyright>
</footer>
`;

export const CoBrandedFooter = {
  name: 'Co-Branded',
  render: (args: LgFooterComponent) => ({
    props: args,
    template: coBrandedTemplate,
  }),
  args: {
    logo: 'legal-and-general-logo.svg',
    logoAlt: 'Company name',
    secondaryLogo: 'dummy-logo.svg',
    secondaryLogoAlt: 'Secondary company name',
    copyright: '© Some Company plc',
    primaryLinks,
  },
  parameters: {
    docs: {
      source: {
        code: coBrandedTemplate,
      },
    },
  },
};
