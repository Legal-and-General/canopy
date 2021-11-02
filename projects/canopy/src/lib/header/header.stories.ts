import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { LgHeaderComponent } from '../header/header.component';
import { notes } from './header.notes';
import { LgHeaderModule } from './header.module';

export default {
  title: 'Components/Header',
  component: LgHeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [LgHeaderModule],
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
    class: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const template = `
  <header lg-header [logo]="logo" [logoAlt]="logoAlt" [logoHref]="logoHref"></header>
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

const coBrandedTemplate = `
  <header lg-header [logo]="logo" [logoAlt]="logoAlt" [logoHref]="logoHref" [secondaryLogo]="secondaryLogo" [secondaryLogoAlt]="secondaryLogoAlt" [secondaryLogoHref]="secondaryLogoHref"></header>
`;

const coBrandedStory: Story<LgHeaderComponent> = (args: LgHeaderComponent) => ({
  props: args,
  template,
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
  secondLogo: 'dummy-logo.svg',
  secondLogoAlt: 'Second company name',
  secondLogoHref: 'https://storybook.js.org',
};
coBrandedHeader.parameters = {
  docs: {
    source: {
      code: coBrandedTemplate,
    },
  },
};
