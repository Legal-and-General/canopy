import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { LgCardModule } from '../card/card.module';
import { LgSeparatorModule } from '../separator/separator.module';
import { LgShowAtModule } from './show-at.module';
import { notes } from './show-at.notes';
import { LgShowAtDirective } from './show-at.directive';

// This default export determines where your story goes in the story list
export default {
  title: 'Directives/Show at',
  component: LgShowAtDirective,
  decorators: [
    moduleMetadata({
      imports: [LgShowAtModule, LgCardModule, LgSeparatorModule],
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
    lgShowAt: {
      options: ['sm', 'md', 'lg', 'xl', 'xxl'],
      description: 'The name of the breakpoint applied.',
      table: {
        type: {
          summary: ['sm', 'md', 'lg', 'xl', 'xxl'],
        },
      },
      control: {
        type: 'select',
      },
    },
    responsiveUtilClass: {
      table: {
        disable: true,
      },
    },
    toggleClass: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const directiveTemplate = `
<lg-card [lgShowAt]="lgShowAt">
  <lg-card-content>
    Now you see me...
  </lg-card-content>
</lg-card>
`;

const template = `
<p><strong>Change viewport width to see the card appear at specified breakpoint</strong></p>
<pre>lgShowAt="{{lgShowAt}}"</pre>
<lg-separator></lg-separator>
${directiveTemplate}
`;

const showAtTemplate: Story<LgShowAtDirective> = (args: LgShowAtDirective) => ({
  props: args,
  template,
});

export const showAtStory = showAtTemplate.bind({});
showAtStory.storyName = 'Show at';
showAtStory.args = {
  lgShowAt: 'md',
};
showAtStory.parameters = {
  docs: {
    source: {
      code: directiveTemplate,
    },
  },
};
