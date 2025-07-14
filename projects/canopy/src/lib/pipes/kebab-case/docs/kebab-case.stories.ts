import { Meta, moduleMetadata } from '@storybook/angular';

import { LgKebabCasePipe } from '../kebab-case.pipe';

// This default export determines where your story goes in the story list
export default {
  title: 'Helpers/Pipes/Kebab case/Examples',
  decorators: [
    moduleMetadata({
      imports: [ LgKebabCasePipe ],
    }),
  ],
  argTypes: {
    text: {
      description: 'Text to transform into kebab case.',
    },
    transform: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const template = '<p>{{text | kebabCase}}</p>';

export const kebabCasePipeStory = {
  name: 'Kebab case',
  render: (args: LgKebabCasePipe) => ({
    props: args,
    template,
  }),
  args: {
    text: 'Kebab case me',
  },
  parameters: {
    docs: {
      source: {
        code: template,
      },
    },
  },
};
