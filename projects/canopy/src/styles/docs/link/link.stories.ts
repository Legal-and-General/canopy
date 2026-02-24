import { Meta, moduleMetadata } from '@storybook/angular';

import { LgAlertComponent } from '../../../lib/alert';
import { LgIconComponent } from '../../../lib/icon';
import { LgMarginDirective } from '../../../lib/spacing';

export default {
  title: 'Components/Link/Examples',
  decorators: [
    moduleMetadata({
      imports: [ LgAlertComponent, LgIconComponent, LgMarginDirective ],
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
<lg-alert status="generic" lgMarginTop="6">Example of <a href="#">link text</a> within an alert.</lg-alert>
<lg-alert status="info">Example of <a href="#">link text</a> within an alert.</lg-alert>
<lg-alert status="success">Example of <a href="#">link text</a> within an alert.</lg-alert>
<lg-alert status="error">Example of <a href="#">link text</a> within an alert.</lg-alert>
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

const linkWithIconTemplate = `
<a href="#"><lg-icon name="email" />Link with icon</a>`;

export const LinkWithIcon = {
  name: 'With icon',
  render: (args: unknown) => ({
    props: args,
    template: linkWithIconTemplate,
  }),
  parameters: {
    docs: {
      source: {
        code: linkWithIconTemplate,
      },
    },
  },
};

const externalLinkTemplate = `
<a href="#" target="_blank">Read more about accessibility<lg-icon name="link-external"></lg-icon>
  <span class="lg-visually-hidden">opens in a new tab</span>
</a>
`;

export const ExternalLink = {
  name: 'External link',
  render: (args: unknown) => ({
    props: args,
    template: externalLinkTemplate,
  }),
  parameters: {
    docs: {
      source: {
        code: externalLinkTemplate,
      },
    },
  },
};
