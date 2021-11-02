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

const detailsTemplate: Story<LgHeaderComponent> = (args: LgHeaderComponent) => ({
  props: args,
  template,
});

export const standardHeader = detailsTemplate.bind({});
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
