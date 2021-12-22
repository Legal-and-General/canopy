import { text, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import { fullScreen } from '../../../../../.storybook/addons/full-screen';
import { notes } from './header.notes';
import { LgHeaderModule } from './header.module';

export default {
  title: 'Components/Header',
  parameters: {
    decorators: [
      fullScreen,
      withKnobs,
      moduleMetadata({
        imports: [LgHeaderModule],
      }),
    ],
    notes: {
      markdown: notes,
    },
  },
};

const groupId = 'header';

export const standard = () => ({
  template: `
    <header lg-header [logo]="logo" [logoAlt]="logoAlt" [logoHref]="logoHref"></header>
  `,
  props: {
    logo: text('logo', 'legal-and-general-logo.svg', groupId),
    logoAlt: text('logoAlt', 'Company name', groupId),
    logoHref: text('logoHref', 'https://storybook.js.org', groupId),
  },
});

export const coBranded = () => ({
  template: `
    <header lg-header [logo]="logo" [logoAlt]="logoAlt" [logoHref]="logoHref" [secondLogo]="secondLogo" [secondLogoAlt]="secondLogoAlt" [secondLogoHref]="secondLogoHref"></header>
  `,
  styles: [
    `
      :host {
        --header-second-logo-width: 100px;
        --header-second-logo-width-lg: 300px;
      }
    `,
  ],
  props: {
    logo: text('logo', 'legal-and-general-logo.svg', groupId),
    logoAlt: text('logoAlt', 'Company name', groupId),
    logoHref: text('logoHref', 'https://storybook.js.org', groupId),
    secondLogo: text('second logo', 'dummy-logo.svg', groupId),
    secondLogoAlt: text('second logoAlt', 'Second company name', groupId),
    secondLogoHref: text('second logoHref', 'https://storybook.js.org', groupId),
  },
});
