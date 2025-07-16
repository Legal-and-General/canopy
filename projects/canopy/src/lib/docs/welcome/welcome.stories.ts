import { Meta, moduleMetadata } from '@storybook/angular';

import { DocsWelcomePageComponent } from './welcome.component';

export default {
  title: 'Welcome',
  decorators: [
    moduleMetadata({
      imports: [ DocsWelcomePageComponent ],
    }),
  ],
  // !dev tag removes a story/component from the sidebar (See: https://github.com/storybookjs/storybook/pull/26634)
  tags: [ '!dev' ],
} as Meta;

export const welcomeStory = {
  name: 'Welcome page',
  render: (args: DocsWelcomePageComponent) => ({
    props: args,
    template: '<lg-docs-welcome-page></lg-docs-welcome-page>',
  }),
};
