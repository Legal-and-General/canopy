import { text, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import { fullScreen } from '../../../../../.storybook/addons/full-screen';
import { LgHeaderComponent } from '../header/header.component';
import { notes } from './header.notes';

export default {
  title: 'Components/Header',
  parameters: {
    decorators: [
      fullScreen,
      withKnobs,
      moduleMetadata({
        declarations: [LgHeaderComponent],
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
    logo: text('logo', 'legal-and-general-logo.png', groupId),
    logoAlt: text('logoAlt', 'Company name', groupId),
    logoHref: text('logoHref', 'https://storybook.js.org', groupId),
  },
});
