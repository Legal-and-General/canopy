import { Component, Input } from '@angular/core';
import { moduleMetadata } from '@storybook/angular';

import type { Status, Theme } from '../status.interface';
import { LgCardComponent, LgCardContentComponent } from '../../card';
import { LgButtonComponent } from '../../button';
import { LgShadowDirective } from '../../shadow';
import { LgMarginDirective, LgPaddingDirective } from '../../spacing';
import { LgColourDirective } from '../../colour';
import { LgAlertComponent } from '../../alert';
import { LgBannerComponent } from '../../banner';

const statuses = [ 'generic', 'info', 'success', 'warning', 'error' ];
const themes = [ 'neutral', 'neutral-inverse', 'subtle', 'bold' ];
const colours = [ 'blue', 'green', 'red', 'yellow' ];

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

@Component({
  selector: 'lg-status-theme-inheritance-story',
  template: `
    <lg-card [lgColour]="colour" [lgColourTheme]="colourTheme" lgPadding="6" lgShadow>
      <lg-card-content>
        <h3 lgMarginBottom="4">Colour mode: {{ colour }} / {{ colourTheme }}</h3>
        <lg-banner [status]="status" lgMarginBottom="4">
          <p>
            <strong>Banner component with inherited theme</strong>
          </p>
          <p>
            This banner has the <strong>{{ status }}</strong> status and automatically
            inherits the <strong>{{ colourTheme }}</strong> theme from the parent colour
            mode card. Here is some <a href="#">link text</a>.
          </p>
          <button lg-button variant="primary-dark">Primary button</button>
        </lg-banner>
        <lg-alert [status]="status" lgMarginBottom="none">
          <p>
            <strong>Alert component with inherited theme</strong>
          </p>
          <p>
            This alert also has the <strong>{{ status }}</strong> status and automatically
            inherits the same <strong>{{ colourTheme }}</strong> theme. Both components
            and buttons consistently use the status colors.
          </p>
          <button lg-button variant="primary-dark">Primary button</button>
        </lg-alert>
      </lg-card-content>
    </lg-card>
  `,
  imports: [
    LgCardComponent,
    LgCardContentComponent,
    LgBannerComponent,
    LgAlertComponent,
    LgButtonComponent,
    LgColourDirective,
    LgShadowDirective,
    LgMarginDirective,
    LgPaddingDirective,
  ],
})
class LgStatusThemeInheritanceStoryComponent {
  @Input() status: Status;
  @Input() colour: string;
  @Input() colourTheme: Theme;
}

export default {
  title: 'Helpers/Directives/Status/Examples',
  decorators: [
    moduleMetadata({
      imports: [ LgStatusColourModeStoryComponent, LgStatusThemeInheritanceStoryComponent ],
    }),
  ],
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

const themeInheritanceTemplate = `
<lg-status-theme-inheritance-story
  [status]="status"
  [colour]="colour"
  [colourTheme]="colourTheme"
></lg-status-theme-inheritance-story>
`;

const themeInheritanceExampleTemplate = `
<lg-card lgColour="blue" lgColourTheme="subtle" lgPadding="6" lgShadow>
  <lg-card-content>
    <h3 lgMarginBottom="4">Colour mode: blue / subtle</h3>
    <lg-banner status="warning" lgMarginBottom="4">
      <p>
        <strong>Banner component with inherited theme</strong>
      </p>
      <p>
        This banner has the <strong>warning</strong> status and automatically
        inherits the <strong>subtle</strong> theme from the parent colour
        mode card. Here is some <a href="#">link text</a>.
      </p>
    </lg-banner>
    <lg-alert status="warning" lgMarginBottom="none">
      <p>
        <strong>Alert component with inherited theme</strong>
      </p>
      <p>
        This alert also has the <strong>warning</strong> status and
        automatically inherits the same <strong>subtle</strong> theme.
        Both components and buttons consistently use the status colors.
      </p>
      <button lg-button variant="primary-dark">Primary button</button>
    </lg-alert>
  </lg-card-content>
</lg-card>
`;

export const StatusThemeInheritance = {
  name: 'Status Theme Inheritance with Banner and Alert',
  render: (args: { status: Status; colour: string; colourTheme: Theme }) => ({
    props: args,
    template: themeInheritanceTemplate,
  }),
  args: {
    status: 'warning',
    colour: 'blue',
    colourTheme: 'subtle',
  },
  argTypes: {
    status: {
      options: statuses,
      description: 'The status to apply to the banner and alert components.',
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
        'The theme of the parent colour mode container. This theme will be inherited by the banner and alert components.',
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
        code: themeInheritanceExampleTemplate,
      },
    },
  },
};
