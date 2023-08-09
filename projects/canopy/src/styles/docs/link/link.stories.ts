import { Meta, Story } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';

import { LgAlertModule } from '../../../lib/alert';
import { LgMarginModule } from '../../../lib/spacing';

export default {
  title: 'Components/Link/Examples',
  decorators: [
    moduleMetadata({
      imports: [ LgAlertModule, LgMarginModule ],
    }),
  ],
} as Meta;

const standardTemplate = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit <a href="#">inline link example</a> and <a href="#" style="display: inline-block">inline block link example</a>
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
`;

const linksTemplateStory: Story = () => ({
  template: standardTemplate,
});

export const links = linksTemplateStory.bind({});
links.storyName = 'Standard';

links.parameters = {
  docs: {
    source: {
      code: standardTemplate,
    },
  },
};

const linksInlineMessagesTemplate = `
<lg-alert variant="generic" lgMarginTop="lg">Example of <a href="#">link text</a> within an alert.</lg-alert>
<lg-alert variant="info">Example of <a href="#">link text</a> within an alert.</lg-alert>
<lg-alert variant="success">Example of <a href="#">link text</a> within an alert.</lg-alert>
<lg-alert variant="error">Example of <a href="#">link text</a> within an alert.</lg-alert>
`;

const linksInlineMessagesStory: Story = () => ({
  template: linksInlineMessagesTemplate,
});

export const linksInlineMessages = linksInlineMessagesStory.bind({});
linksInlineMessages.storyName = 'Within inline messages';

linksInlineMessages.parameters = {
  docs: {
    source: {
      code: linksInlineMessagesTemplate,
    },
  },
};
