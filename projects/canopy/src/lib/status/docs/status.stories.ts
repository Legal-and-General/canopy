import { Component, Input } from '@angular/core';
import { moduleMetadata } from '@storybook/angular';

import type { Status, Theme } from '../status.interface';
import { LgStatusDirective } from '..';
import { LgCardComponent, LgCardContentComponent } from '../../card';
import { LgButtonComponent } from '../../button';
import { LgShadowDirective } from '../../shadow';
import { LgMarginDirective, LgPaddingDirective } from '../../spacing';
import { LgColourDirective } from '../../colour';
import { LgAlertComponent } from '../../alert';

const statuses = [ 'generic', 'info', 'success', 'warning', 'error' ];
const themes = [ 'neutral', 'neutral-inverse', 'subtle', 'bold' ];
const colours = [ 'blue', 'green', 'red', 'yellow' ];

@Component({
  selector: 'lg-status-story',
  template: `
    <lg-card
      lgShadow
      [lgStatus]="status"
      [lgStatusTheme]="theme"
      lgPaddingLeft="6"
      lgPaddingRight="6"
    >
      <lg-card-content>
        <p><strong>The status directive</strong></p>
        <p>
          This card has the <strong>{{ status }}</strong> status
          @if (theme) {
            with <strong>{{ theme }}</strong> theme
          }
          applied. Here is some <a href="#">link text</a>.
        </p>
        <button lg-button variant="primary-dark">Primary button</button>
        <br />
        <button lg-button variant="secondary-dark">Secondary button</button>
        <br />
        <a href="#" lg-button variant="primary-dark" lgMarginBottom="none">
          Primary link styled as button
        </a>
      </lg-card-content>
    </lg-card>
  `,
  imports: [
    LgCardComponent,
    LgCardContentComponent,
    LgStatusDirective,
    LgButtonComponent,
    LgShadowDirective,
    LgMarginDirective,
    LgPaddingDirective,
  ],
})
class LgStatusStoryComponent {
  @Input() status: Status;
  @Input() theme?: Theme;
}

@Component({
  selector: 'lg-status-colour-mode-story',
  template: `
    <lg-card [lgColour]="colour" [lgColourTheme]="colourTheme" lgPadding="6" lgShadow>
      <lg-card-content>
        <h3 lgMarginBottom="4">Colour mode: {{ colour }} / {{ colourTheme }}</h3>
        <lg-alert [status]="status" lgMarginBottom="none">
          <p>
            <strong>Alert component with inherited theme</strong>
          </p>
          <p>
            This alert has the <strong>{{ status }}</strong> status and automatically
            inherits the <strong>{{ colourTheme }}</strong> theme from the parent colour
            mode card. Here is some <a href="#">link text</a>.
          </p>
          <button lg-button variant="primary-dark">Primary button</button>
          <br />
          <button lg-button variant="secondary-dark">Secondary button</button>
          <br />
          <a href="#" lg-button variant="secondary-dark" lgMarginBottom="none">
            Secondary link styled as button
          </a>
        </lg-alert>
      </lg-card-content>
    </lg-card>
  `,
  imports: [
    LgCardComponent,
    LgCardContentComponent,
    LgAlertComponent,
    LgButtonComponent,
    LgColourDirective,
    LgShadowDirective,
    LgMarginDirective,
    LgPaddingDirective,
  ],
})
class LgStatusColourModeStoryComponent {
  @Input() status: Status;
  @Input() colour: string;
  @Input() colourTheme: Theme;
}

export default {
  title: 'Helpers/Directives/Status/Examples',
  decorators: [
    moduleMetadata({
      imports: [ LgStatusStoryComponent, LgStatusColourModeStoryComponent ],
    }),
  ],
  argTypes: {
    status: {
      options: statuses,
      description: 'The status to apply to the component.',
      table: {
        type: {
          summary: statuses,
        },
      },
      control: {
        type: 'select',
      },
    },
    theme: {
      options: [ undefined, ...themes ],
      description:
        'Optional theme for status classes. When provided, applies lg-status-{status} and lg-theme-{theme} classes.',
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
};

const template = `
<lg-status-story [status]="status" [theme]="theme"></lg-status-story>
`;
const exampleTemplate = `
<lg-card lgStatus="success">
  <lg-card-content>
    <p>
      This card has the <strong>success</strong> status applied. Here is some
      <a href="#">link text</a>.
    </p>
    <button lg-button variant="secondary-dark" lgMarginBottom="none">Primary button</button>
    <button lg-button variant="secondary-dark">Secondary button</button>
  </lg-card-content>
</lg-card>
`;

export const StandardStatus = {
  name: 'Status with Theme',
  render: (args: LgStatusDirective) => ({
    props: args,
    template,
  }),
  args: {
    status: 'success',
    theme: undefined,
  },
  parameters: {
    docs: {
      source: {
        code: exampleTemplate,
      },
    },
    percy: {
      additionalSnapshots: [
        { suffix: ' [info]', args: { status: 'info' } },
        { suffix: ' [success]', args: { status: 'success' } },
        { suffix: ' [warning]', args: { status: 'warning' } },
        { suffix: ' [error]', args: { status: 'error' } },
      ],
    },
  },
};

const colourModeTemplate = `
<lg-status-colour-mode-story
  [status]="status"
  [colour]="colour"
  [colourTheme]="colourTheme"
></lg-status-colour-mode-story>
`;

const colourModeExampleTemplate = `
<lg-card lgColour="blue" lgColourTheme="subtle">
  <lg-card-content>
    <lg-alert status="warning">
      <p>
        This alert has the <strong>warning</strong> status (yellow/warning colours)
        and automatically inherits the <strong>subtle</strong> theme from the parent
        <strong>blue</strong> colour mode card. Here is some <a href="#">link text</a>.
      </p>
      <button lg-button variant="primary-dark">Primary button</button>
      <br />
      <button lg-button variant="secondary-dark">Secondary button</button>
      <br />
      <a href="#" lg-button variant="secondary-dark" lgMarginBottom="none">
        Secondary link styled as button
      </a>
    </lg-alert>
  </lg-card-content>
</lg-card>
`;

export const StatusWithColourMode = {
  name: 'Status with Colour Mode Inheritance',
  render: (args: { status: Status; colour: string; colourTheme: Theme }) => ({
    props: args,
    template: colourModeTemplate,
  }),
  args: {
    status: 'warning',
    colour: 'blue',
    colourTheme: 'subtle',
  },
  argTypes: {
    status: {
      options: statuses,
      description: 'The status to apply to the component.',
      table: {
        type: {
          summary: statuses,
        },
      },
      control: {
        type: 'select',
      },
    },
    colour: {
      options: colours,
      description: 'The colour mode of the parent container.',
      table: {
        type: {
          summary: colours,
        },
      },
      control: {
        type: 'select',
      },
    },
    colourTheme: {
      options: themes,
      description:
        'The theme of the parent colour mode container. This theme will be inherited by the status component.',
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
        code: colourModeExampleTemplate,
      },
    },
  },
};
