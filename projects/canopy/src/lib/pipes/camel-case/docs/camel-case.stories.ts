import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { LgCamelCasePipe } from '../camel-case.pipe';

// This default export determines where your story goes in the story list
export default {
  title: 'Helpers/Pipes/Camel case/Examples',
  component: LgCamelCasePipe,
  decorators: [
    moduleMetadata({
      declarations: [ LgCamelCasePipe ],
    }),
  ],
  parameters: {
    viewMode: 'story',
    previewTabs: { 'storybook/docs/panel': { hidden: true } },
  },
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

const camelCasePipeTemplate: Story<LgCamelCasePipe> = (args: LgCamelCasePipe) => ({
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
