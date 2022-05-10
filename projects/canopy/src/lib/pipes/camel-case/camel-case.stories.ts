import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { notes } from './camel-case.notes';
import { LgCamelCasePipe } from './camel-case.pipe';

// This default export determines where your story goes in the story list
export default {
  title: 'Pipes/Camel case',
  component: LgCamelCasePipe,
  decorators: [
    moduleMetadata({
      declarations: [ LgCamelCasePipe ],
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
