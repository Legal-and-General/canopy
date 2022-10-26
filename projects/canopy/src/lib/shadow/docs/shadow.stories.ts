import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { LgCardModule } from '../../card';
import { LgShadowModule } from '../shadow.module';
import { LgShadowDirective } from '../shadow.directive';

// This default export determines where your story goes in the story list
export default {
  title: 'Helpers/Directives/Shadow/Examples',
  component: LgShadowDirective,
  decorators: [
    moduleMetadata({
      imports: [ LgShadowModule, LgCardModule ],
    }),
  ],
  parameters: {
    backgrounds: {
      default: 'White Smoke',
    },
    viewMode: 'story',
    previewTabs: { 'storybook/docs/panel': { hidden: true } },
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

const shadowTemplate: Story<LgShadowDirective> = (args: LgShadowDirective) => ({
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
