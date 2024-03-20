import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';

import { LgCardModule } from '../../card';
import { LgShadowDirective } from '../shadow.directive';

// This default export determines where your story goes in the story list
export default {
  title: 'Helpers/Directives/Shadow/Examples',
  component: LgShadowDirective,
  decorators: [
    moduleMetadata({
      imports: [ LgCardModule ],
    }),
  ],
  parameters: {
    backgrounds: {
      default: 'White Smoke',
    },
  },
  argTypes: {
    class: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const template = `
<lg-card lgShadow>
  <lg-card-content>
    Look, I have a shadow
  </lg-card-content>
</lg-card>
`;

const shadowTemplate: StoryFn<LgShadowDirective> = (args: LgShadowDirective) => ({
  props: args,
  template,
});

export const shadowStory = shadowTemplate.bind({});
shadowStory.storyName = 'Shadow';

shadowStory.parameters = {
  docs: {
    source: {
      code: template,
    },
  },
};
