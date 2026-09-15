import { Component, Input } from '@angular/core';
import { Meta, moduleMetadata } from '@storybook/angular';

import { LgPictogramComponent } from '../../pictogram';
import { LgNoticeComponent } from '../notice.component';
import { LgNoticeTitleComponent } from '../notice-title/notice-title.component';
import { LgNoticeDescriptionComponent } from '../notice-description/notice-description.component';
import { LgButtonComponent } from '../../button';
import { LgColourDirective } from '../../colour';
import { LgContentAreaComponent } from '../../content-area';
import { LgContentAreaContentComponent } from '../../content-area/content-area-content/content-area-content.component';
import { LgMarginDirective } from '../../spacing';
import type { Colour, ColourTheme } from '../../colour/colour.interface';
import type { Status } from '../../status';

@Component({
  selector: 'lg-notice-story',
  template: `
    <lg-notice [hasRole]="hasRole" [status]="status">
      <lg-pictogram name="calendar" [hasFill]="true" />
      <lg-notice-title>This is a message with pictogram </lg-notice-title>
      <lg-notice-description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        <a href="#">eiusmod tempor</a> incididunt ut labore et dolore magna aliqua.
      </lg-notice-description>
      <lg-notice-description>
        <button lg-button priority="primary" lgMarginTop="4" type="button">
          Call to action
        </button>
      </lg-notice-description>
    </lg-notice>
  `,
  imports: [
    LgNoticeComponent,
    LgPictogramComponent,
    LgNoticeTitleComponent,
    LgNoticeDescriptionComponent,
    LgButtonComponent,
    LgMarginDirective,
  ],
})
class LgNoticeStoryComponent {
  @Input() hasRole = true;
  @Input() status?: Status;
}

@Component({
  selector: 'lg-notice-content-area-story',
  template: `
    <lg-content-area [lgColour]="mode" [lgColourTheme]="theme">
      <lg-content-area-content>
        <lg-notice [status]="status">
          <lg-pictogram name="calendar" [hasFill]="true" />
          <lg-notice-title>This is a message with pictogram</lg-notice-title>
          <lg-notice-description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </lg-notice-description>
        </lg-notice>
      </lg-content-area-content>
    </lg-content-area>
  `,
  imports: [
    LgColourDirective,
    LgContentAreaComponent,
    LgContentAreaContentComponent,
    LgNoticeComponent,
    LgPictogramComponent,
    LgNoticeTitleComponent,
    LgNoticeDescriptionComponent,
  ],
})
class LgNoticeContentAreaStoryComponent {
  @Input() mode: Colour = 'blue';
  @Input() theme: ColourTheme = 'neutral';
  @Input() status: Status = 'info';
}

export default {
  title: 'Components/Notice/Examples',
  component: LgNoticeStoryComponent,
  decorators: [
    moduleMetadata({
      imports: [ LgNoticeStoryComponent, LgNoticeContentAreaStoryComponent ],
    }),
  ],
  argTypes: {
    hasRole: {
      description: 'When no status is set, controls the role ``alert``.',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'true',
        },
      },
    },
    status: {
      control: 'select',
      options: [ 'generic', 'info', 'success', 'warning', 'error' ],
      description:
        'Sets the notice status. Success, warning and error use the role ``alert``.',
      table: {
        type: {
          summary: '\'generic\' | \'info\' | \'success\' | \'warning\' | \'error\'',
        },
      },
    },
    class: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const template = `
  <lg-notice-story [hasRole]="hasRole" [status]="status"></lg-notice-story>
`;

const exampleTemplate = `
<lg-notice [hasRole]="hasRole" [status]="status">
  <lg-pictogram name="calendar" [hasFill]="true"></lg-pictogram>
  <lg-notice-title
    >This is a message with pictogram
  </lg-notice-title>
  <lg-notice-description>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    <a href="#">eiusmod tempor</a> incididunt ut labore et dolore magna aliqua.
  </lg-notice-description>
  <lg-notice-description>
    <button lg-button priority="primary" lgMarginTop="4" type="button">
      Call to action
    </button>
</lg-notice-description>
</lg-notice>
`;

export const StandardNotice = {
  name: 'Notice',
  args: {
    hasRole: true,
  },
  parameters: {
    backgrounds: { disable: true },
    docs: {
      source: {
        code: exampleTemplate,
      },
    },
  },
  render: (args: LgNoticeComponent) => ({
    props: args,
    template,
  }),
};

const contentAreaNoticeTemplate = `
<lg-notice-content-area-story
  [mode]="mode"
  [theme]="theme"
  [status]="status"
></lg-notice-content-area-story>
`;

export const NoticeInContentArea = {
  name: 'Notice in content area',
  args: {
    mode: 'blue',
    theme: 'neutral',
    status: 'info',
  },
  argTypes: {
    mode: {
      options: [ 'blue', 'green', 'red', 'yellow' ],
      control: { type: 'select' },
      description: 'The colour mode applied to the content area.',
    },
    theme: {
      options: [ 'neutral', 'neutral-inverse', 'subtle', 'bold' ],
      control: { type: 'select' },
      description: 'The theme applied to the content area colour mode.',
    },
    status: {
      options: [ 'generic', 'info', 'success', 'warning', 'error' ],
      control: { type: 'select' },
      description: 'The status applied to the notice.',
    },
  },
  parameters: {
    backgrounds: { disable: true },
    docs: {
      source: {
        code: contentAreaNoticeTemplate,
      },
    },
  },
  render: (args: LgNoticeContentAreaStoryComponent) => ({
    props: args,
    template: contentAreaNoticeTemplate,
  }),
};
