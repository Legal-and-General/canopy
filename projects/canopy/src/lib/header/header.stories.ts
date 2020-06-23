import { text, withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';

import { LgHeaderComponent } from '../header/header.component';
import { notes } from './header.notes';

export default {
  title: 'Header',
  parameters: {
    decorators: [
      withKnobs,
      moduleMetadata({
        declarations: [LgHeaderComponent]
      })
    ],
    notes: {
      markdown: notes
    }
  }
};

const groupId = 'header';

export const Default = () => ({
  template: `
    <header lg-header [logo]="logo" [logoAlt]="logoAlt" [logoHref]="logoHref"></header>
  `,
  props: {
    logo: text(
      'logo',
      'https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo3.png',
      groupId
    ),
    logoAlt: text('logoAlt', 'Company name', groupId),
    logoHref: text('logoHref', 'https://storybook.js.org', groupId)
  }
});
