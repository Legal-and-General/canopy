import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';

import { LgCamelCasePipe } from '../camel-case.pipe';

// This default export determines where your story goes in the story list
export default {
  title: 'Helpers/Pipes/Camel case/Examples',
  decorators: [
    moduleMetadata({
      imports: [ LgCamelCasePipe ],
    }),
  ],
  argTypes: {
    text: {
      description: 'Text to transform into camel case.',
    },
    transform: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const template = '<p>{{text | camelCase}}</p>';

const camelCasePipeTemplate: StoryFn<LgCamelCasePipe> = (args: LgCamelCasePipe) => ({
  props: args,
  template,
});

export const camelCasePipeStory = camelCasePipeTemplate.bind({});
camelCasePipeStory.storyName = 'Camel case';

camelCasePipeStory.args = {
  text: 'Camel case me',
};

camelCasePipeStory.parameters = {
  docs: {
    source: {
      code: template,
    },
  },
};
