import { Component, Input } from '@angular/core';
import { moduleMetadata } from '@storybook/angular';

import type { Colour, ColourTheme } from '../colour.interface';
import { LgColourDirective } from '..';
import { LgCardComponent, LgCardContentComponent } from '../../card';
import { LgButtonComponent } from '../../button';
import { LgShadowDirective } from '../../shadow';
import { LgMarginDirective, LgPaddingDirective } from '../../spacing';

const colours = [ 'blue', 'green', 'red', 'yellow' ];
const themes = [ 'neutral', 'neutral-inverse', 'subtle', 'bold' ];

@Component({
  selector: 'lg-colour-story',
  template: `
    <lg-card
      lgShadow
      [lgColour]="colour"
      [lgColourTheme]="theme"
      lgPaddingLeft="6"
      lgPaddingRight="6"
    >
      <lg-card-content>
        <p><strong>The colour directive</strong></p>
        <p>
          This card has the <strong>{{ colour }}</strong> colour
          @if (theme) {
            with <strong>{{ theme }}</strong> theme
          }
          applied. Here is some <a href="#">link text</a>.
        </p>
        <button lg-button priority="primary">Primary button</button>
        <br />
        <button lg-button priority="secondary">Secondary button</button>
        <br />
        <a href="#" lg-button priority="secondary" lgMarginBottom="none">
          Secondary link styled as button
        </a>
      </lg-card-content>
    </lg-card>
  `,
  imports: [
    LgCardComponent,
    LgCardContentComponent,
    LgColourDirective,
    LgButtonComponent,
    LgShadowDirective,
    LgMarginDirective,
    LgPaddingDirective,
  ],
})
class LgColourStoryComponent {
  @Input() colour: Colour;
  @Input() theme?: ColourTheme;
}

export default {
  title: 'Helpers/Directives/Colour/Examples',
  decorators: [
    moduleMetadata({
      imports: [ LgColourStoryComponent ],
    }),
  ],
  argTypes: {
    colour: {
      options: colours,
      description: 'The colour to apply to the component.',
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
      description:
        'Optional theme for colour classes. When provided, applies lg-mode-{colour} and lg-theme-{theme} classes. Defaults to neutral.',
      table: {
        type: {
          summary: themes,
        },
        defaultValue: {
          summary: 'neutral',
        },
      },
      control: {
        type: 'select',
      },
    },
  },
};

const template = `
<lg-colour-story [colour]="colour" [theme]="theme"></lg-colour-story>
`;
const exampleTemplate = `
<lg-card lgColour="blue">
  <lg-card-content>
    <p>
      This card has the <strong>blue</strong> colour applied. Here is some
      <a href="#">link text</a>.
    </p>
    <button lg-button priority="primary" lgMarginBottom="none">Primary button</button>
    <button lg-button priority="secondary">Secondary button</button>
  </lg-card-content>
</lg-card>
`;

export const StandardColour = {
  name: 'Colour with Theme',
  render: (args: LgColourDirective) => ({
    props: args,
    template,
  }),
  args: {
    colour: 'green',
  },
  parameters: {
    docs: {
      source: {
        code: exampleTemplate,
      },
    },
    percy: {
      additionalSnapshots: [
        { suffix: ' [blue]', args: { colour: 'blue' } },
        { suffix: ' [green]', args: { colour: 'green' } },
        { suffix: ' [red]', args: { colour: 'red' } },
        { suffix: ' [yellow]', args: { colour: 'yellow' } },
      ],
    },
  },
};
