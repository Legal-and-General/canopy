import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { DocsWelcomePageComponent } from './welcome.component';

export default {
  title: 'Internal Welcome',
  decorators: [
    moduleMetadata({
      imports: [ DocsWelcomePageComponent ],
    }),
  ],
  parameters: {
    viewMode: 'story',
    previewTabs: { 'storybook/docs/panel': { hidden: true } },
  },
} as Meta;

const welcomeTemplate: Story<DocsWelcomePageComponent> = (
  args: DocsWelcomePageComponent,
) => ({
  props: args,
  template: '<lg-docs-welcome-page></lg-docs-welcome-page>',
});

export const welcomeStory = welcomeTemplate.bind({});
welcomeStory.storyName = 'Welcome page';
