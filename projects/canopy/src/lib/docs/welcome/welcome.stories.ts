import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';

import { DocsWelcomePageComponent } from './welcome.component';

export default {
  title: 'Internal Welcome',
  decorators: [
    moduleMetadata({
      imports: [ DocsWelcomePageComponent ],
    }),
  ],
} as Meta;

const welcomeTemplate: StoryFn<DocsWelcomePageComponent> = (
  args: DocsWelcomePageComponent,
) => ({
  props: args,
  template: '<lg-docs-welcome-page></lg-docs-welcome-page>',
});

export const welcomeStory = welcomeTemplate.bind({});
welcomeStory.storyName = 'Welcome page';
