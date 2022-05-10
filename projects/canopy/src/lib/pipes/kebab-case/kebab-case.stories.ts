import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { notes } from './kebab-case.notes';
import { LgKebabCasePipe } from './kebab-case.pipe';

// This default export determines where your story goes in the story list
export default {
  title: 'Pipes/Kebab case',
  component: LgKebabCasePipe,
  decorators: [
    moduleMetadata({
      declarations: [ LgKebabCasePipe ],
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

const kebabCasePipeTemplate: Story<LgKebabCasePipe> = (args: LgKebabCasePipe) => ({
  props: args,
  template,
});

export const kebabCasePipeStory = kebabCasePipeTemplate.bind({});
kebabCasePipeStory.storyName = 'Kebab case';

kebabCasePipeStory.args = {
  text: 'Kebab case me',
};

kebabCasePipeStory.parameters = {
  docs: {
    source: {
      code: template,
    },
  },
};
