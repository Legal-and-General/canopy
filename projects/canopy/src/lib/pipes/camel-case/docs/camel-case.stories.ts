import { Meta, moduleMetadata } from '@storybook/angular';

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

export const camelCasePipeStory = {
  name: 'Camel case',
  render: (args: LgCamelCasePipe) => ({
    props: args,
    template,
  }),
  args: {
    text: 'Camel case me',
  },
  parameters: {
    docs: {
      source: {
        code: template,
      },
    },
  },
};
