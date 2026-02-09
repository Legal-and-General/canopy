import { Component, Input } from '@angular/core';
import { Meta, moduleMetadata } from '@storybook/angular';

import type { Colour, ColourTheme } from '../../../lib/colour/colour.interface';
import { LgAlertComponent } from '../../../lib/alert';
import { LgMarginDirective } from '../../../lib/spacing';
import { LgColourDirective } from '../../../lib/colour';

const colours = [ 'blue', 'green', 'red', 'yellow' ];
const themes = [ 'neutral', 'neutral-inverse', 'subtle', 'bold' ];

@Component({
  selector: 'lg-link-colour-story',
  template: `
    <div [lgColour]="colour" [lgColourTheme]="theme" lgMarginTop="6">
      <p>
        This is a <a href="#">link with {{ colour }} colour mode</a> and
        {{ theme }} theme.
      </p>
    </div>
  `,
  standalone: true,
  imports: [ LgColourDirective, LgMarginDirective ],
})
class LgLinkColourStoryComponent {
  @Input() colour: Colour;
  @Input() theme: ColourTheme;
}

export default {
  title: 'Components/Link/Examples',
  tags: [ 'pending' ],
  decorators: [
    moduleMetadata({
      imports: [
        LgAlertComponent,
        LgMarginDirective,
        LgColourDirective,
        LgLinkColourStoryComponent,
      ],
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

const linksWithColourTemplate = `
<lg-link-colour-story [colour]="colour" [theme]="theme"></lg-link-colour-story>
`;

export const LinksWithColour = {
  name: 'With colour modes',
  render: (args: { colour: Colour; theme: ColourTheme }) => ({
    props: args,
    template: linksWithColourTemplate,
  }),
  args: {
    colour: 'blue',
    theme: 'neutral',
  },
  argTypes: {
    colour: {
      options: colours,
      description: 'The colour mode to apply to the link.',
      table: {
        type: {
          summary: colours,
        },
      },
      control: {
        type: 'select',
      },
    },
    theme: {
      options: themes,
      description: 'The theme to apply to the link.',
      table: {
        type: {
          summary: themes,
        },
      },
      control: {
        type: 'select',
      },
    },
  },
  parameters: {
    docs: {
      source: {
        code: `<div lgColour="blue" lgColourTheme="neutral">
  <p>This is a <a href="#">link with colour mode</a> and theme.</p>
</div>`,
      },
    },
  },
};
