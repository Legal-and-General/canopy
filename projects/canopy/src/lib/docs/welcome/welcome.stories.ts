import { Meta, moduleMetadata } from '@storybook/angular';

import { DocsWelcomePageComponent } from './welcome.component';

export default {
  title: 'Internal Welcome',
  decorators: [
    moduleMetadata({
      imports: [ DocsWelcomePageComponent ],
    }),
  ],
} as Meta;

export const welcomeStory = {
  name: 'Welcome page',
  render: (args: DocsWelcomePageComponent) => ({
    props: args,
    template: '<lg-docs-welcome-page></lg-docs-welcome-page>',
  }),
};
