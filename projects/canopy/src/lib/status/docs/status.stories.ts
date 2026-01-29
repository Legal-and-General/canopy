import { Component, Input } from '@angular/core';
import { moduleMetadata } from '@storybook/angular';

import type { Status, Theme } from '../status.interface';
import { LgStatusDirective } from '..';
import { LgCardComponent, LgCardContentComponent } from '../../card';
import { LgButtonComponent } from '../../button';
import { LgShadowDirective } from '../../shadow';
import { LgMarginDirective, LgPaddingDirective } from '../../spacing';

const statuses = [ 'generic', 'info', 'success', 'warning', 'error' ];
const themes = [ 'neutral', 'neutral-inverse', 'subtle', 'bold' ];

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
        <button lg-button variant="secondary-dark">Outline primary button</button>
        <br />
        <a href="#" lg-button variant="secondary-dark" lgMarginBottom="none">
          Outline primary link styled as button
        </a>
      </lg-card-content>
    </lg-card>
    <lg-card lgShadow>
      <lg-card-content>
        This card doesn't use the status directive. Here is some
        <a href="#">link text</a>.
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
  selector: 'lg-status-status-story',
  template: `
    <lg-card
      lgShadow
      [lgStatus]="status"
      [lgStatusTheme]="theme"
      lgPaddingLeft="6"
      lgPaddingRight="6"
    >
      <lg-card-content>
        <p><strong>Status with Theme</strong></p>
        <p>
          This card uses the <strong>{{ status }}</strong> status with
          <strong>{{ theme }}</strong> theme, applying status classes:
          <code>lg-status-{{ status }}</code> and <code>lg-theme-{{ theme }}</code
          >. Here is some <a href="#">link text</a>.
        </p>
        <button lg-button variant="secondary-dark">Outline primary button</button>
      </lg-card-content>
    </lg-card>
  `,
  imports: [
    LgCardComponent,
    LgCardContentComponent,
    LgStatusDirective,
    LgButtonComponent,
    LgShadowDirective,
    LgPaddingDirective,
  ],
})
class LgStatusStatusStoryComponent {
  @Input() status: Status;
  @Input() theme: Theme;
}

export default {
  title: 'Helpers/Directives/Status/Examples',
  tags: [ 'pending' ],
  decorators: [
    moduleMetadata({
      imports: [ LgStatusStoryComponent, LgStatusStatusStoryComponent ],
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
    <button lg-button variant="secondary-dark" lgMarginBottom="none">Outline primary button</button>
  </lg-card-content>
</lg-card>
`;

const statusTemplate = `
<lg-status-status-story [status]="status" [theme]="theme"></lg-status-status-story>
`;

const statusExampleTemplate = `
<lg-card lgStatus="success" lgStatusTheme="bold">
  <lg-card-content>
    <p>
      This card uses the success status with bold theme, applying
      status classes for design token support.
    </p>
  </lg-card-content>
</lg-card>
`;

export const StandardStatus = {
  name: 'Status',
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

export const StatusStatus = {
  name: 'Status with Theme',
  render: (args: { status: Status; theme: Theme }) => ({
    props: args,
    template: statusTemplate,
  }),
  args: {
    status: 'success',
    theme: 'bold',
  },
  parameters: {
    docs: {
      source: {
        code: statusExampleTemplate,
      },
    },
    percy: {
      additionalSnapshots: [
        { suffix: ' [info-neutral]', args: { status: 'info', theme: 'neutral' } },
        { suffix: ' [success-bold]', args: { status: 'success', theme: 'bold' } },
        { suffix: ' [warning-subtle]', args: { status: 'warning', theme: 'subtle' } },
        {
          suffix: ' [error-neutral-inverse]',
          args: { status: 'error', theme: 'neutral-inverse' },
        },
      ],
    },
  },
};
