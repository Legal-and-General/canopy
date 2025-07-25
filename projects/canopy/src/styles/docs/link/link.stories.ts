import { Meta } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';

import { LgAlertComponent } from '../../../lib/alert';
import { LgMarginDirective } from '../../../lib/spacing';

export default {
  title: 'Components/Link/Examples',
  decorators: [
    moduleMetadata({
      imports: [ LgAlertComponent, LgMarginDirective ],
    }),
  ],
} as Meta;

const standardTemplate = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit <a href="#">inline link example</a> and <a href="#" style="display: inline-block">inline block link example</a>
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
`;

export const Links = {
  name: 'Standard',
  render: (args: unknown) => ({
    props: args,
    template: standardTemplate,
  }),
  parameters: {
    docs: {
      source: {
        code: standardTemplate,
      },
    },
  },
};

const linksInlineMessagesTemplate = `
<lg-alert variant="generic" lgMarginTop="lg">Example of <a href="#">link text</a> within an alert.</lg-alert>
<lg-alert variant="info">Example of <a href="#">link text</a> within an alert.</lg-alert>
<lg-alert variant="success">Example of <a href="#">link text</a> within an alert.</lg-alert>
<lg-alert variant="error">Example of <a href="#">link text</a> within an alert.</lg-alert>
`;

export const LinksInlineMessages = {
  name: 'Within inline messages',
  render: (args: unknown) => ({
    props: args,
    template: linksInlineMessagesTemplate,
  }),
  parameters: {
    docs: {
      source: {
        code: linksInlineMessagesTemplate,
      },
    },
  },
};
