import { Component, Input } from '@angular/core';
import { Meta, moduleMetadata } from '@storybook/angular';

import { LgPictogramComponent, PictogramName } from '../../pictogram';
import { LgNoticeComponent } from '../notice.component';
import { LgNoticeActionComponent } from '../notice-action/notice-action.component';
import { LgNoticeTitleComponent } from '../notice-title/notice-title.component';
import { LgNoticeDescriptionComponent } from '../notice-description/notice-description.component';
import { LgButtonComponent, LgButtonGroupComponent } from '../../button';
import { LgColourDirective } from '../../colour';
import { LgContentAreaComponent } from '../../content-area';
import { LgContentAreaContentComponent } from '../../content-area/content-area-content/content-area-content.component';
import { LgMarginDirective } from '../../spacing';
import type { Colour, ColourTheme } from '../../colour/colour.interface';
import type { Status } from '../../status';

type NoticeStatus = Exclude<Status, 'generic'>;
type NoticeAction = 'link' | 'button' | 'button-group';
const pictogramNames: Array<PictogramName> = [
  'globe',
  'confirm',
  'thumbs-up',
  'message-sent',
  'warning',
  'information',
  'thumbs-down',
  'offline',
];

@Component({
  selector: 'lg-notice-story',
  template: `
    <lg-notice [hasRole]="hasRole" [status]="status">
      <lg-pictogram [name]="icon" [hasFill]="true" />
      <lg-notice-title>This is a message with pictogram </lg-notice-title>
      <lg-notice-description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        <a href="#">eiusmod tempor</a> incididunt ut labore et dolore magna aliqua.
      </lg-notice-description>
      <lg-notice-action [type]="action">
        @switch (action) {
          @case ('link') {
            <a href="#">Continue</a>
          }
          @case ('button-group') {
            <lg-button-group>
              <button lg-button priority="primary" lgMarginBottom="none" type="button">
                Continue
              </button>
              <button lg-button priority="secondary" lgMarginBottom="none" type="button">
                Cancel
              </button>
            </lg-button-group>
          }
          @default {
            <button lg-button priority="primary" lgMarginBottom="none" type="button">
              Continue
            </button>
          }
        }
      </lg-notice-action>
    </lg-notice>
  `,
  imports: [
    LgNoticeComponent,
    LgNoticeActionComponent,
    LgPictogramComponent,
    LgNoticeTitleComponent,
    LgNoticeDescriptionComponent,
    LgButtonComponent,
    LgButtonGroupComponent,
    LgMarginDirective,
  ],
})
class LgNoticeStoryComponent {
  @Input() action: NoticeAction = 'button';
  @Input() hasRole = true;
  @Input() icon: PictogramName = 'globe';
  @Input() status?: NoticeStatus;
}

@Component({
  selector: 'lg-notice-content-area-story',
  template: `
    <lg-content-area [lgColour]="mode" [lgColourTheme]="theme">
      <lg-content-area-content>
        <lg-notice [status]="status">
          <lg-pictogram [name]="icon" [hasFill]="true" />
          <lg-notice-title>This is a message with pictogram</lg-notice-title>
          <lg-notice-description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </lg-notice-description>
          <lg-notice-action [type]="action">
            @switch (action) {
              @case ('link') {
                <a href="#">Continue</a>
              }
              @case ('button-group') {
                <lg-button-group>
                  <button
                    lg-button
                    priority="primary"
                    lgMarginBottom="none"
                    type="button"
                  >
                    Continue
                  </button>
                  <button
                    lg-button
                    priority="secondary"
                    lgMarginBottom="none"
                    type="button"
                  >
                    Cancel
                  </button>
                </lg-button-group>
              }
              @default {
                <button lg-button priority="primary" lgMarginBottom="none" type="button">
                  Continue
                </button>
              }
            }
          </lg-notice-action>
        </lg-notice>
      </lg-content-area-content>
    </lg-content-area>
  `,
  imports: [
    LgColourDirective,
    LgContentAreaComponent,
    LgContentAreaContentComponent,
    LgNoticeComponent,
    LgNoticeActionComponent,
    LgPictogramComponent,
    LgNoticeTitleComponent,
    LgNoticeDescriptionComponent,
    LgButtonComponent,
    LgButtonGroupComponent,
    LgMarginDirective,
  ],
})
class LgNoticeContentAreaStoryComponent {
  @Input() action: NoticeAction = 'button';
  @Input() icon: PictogramName = 'globe';
  @Input() mode: Colour = 'blue';
  @Input() theme: ColourTheme = 'neutral';
  @Input() status: NoticeStatus = 'info';
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
    action: {
      control: 'select',
      options: [ 'link', 'button', 'button-group' ],
      description: 'The action displayed in the notice.',
    },
    icon: {
      control: 'select',
      options: pictogramNames,
      description: 'The pictogram displayed in the notice.',
    },
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
      options: [ 'info', 'success', 'warning', 'error' ],
      description:
        'Sets the notice status. Success, warning and error use the role ``alert``.',
      table: {
        type: {
          summary: '\'info\' | \'success\' | \'warning\' | \'error\'',
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
  <lg-notice-story
    [action]="action"
    [icon]="icon"
    [hasRole]="hasRole"
    [status]="status"
  ></lg-notice-story>
`;

const exampleTemplate = `
<lg-notice [hasRole]="hasRole" [status]="status">
  <lg-pictogram [name]="icon" [hasFill]="true"></lg-pictogram>
  <lg-notice-title
    >This is a message with pictogram
  </lg-notice-title>
  <lg-notice-description>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    <a href="#">eiusmod tempor</a> incididunt ut labore et dolore magna aliqua.
  </lg-notice-description>
  <lg-notice-action type="button">
    <button lg-button priority="primary" lgMarginBottom="none" type="button">
      Continue
    </button>
  </lg-notice-action>
</lg-notice>
`;

export const StandardNotice = {
  name: 'Notice',
  args: {
    action: 'button',
    hasRole: true,
    icon: 'globe',
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
  [action]="action"
  [icon]="icon"
  [mode]="mode"
  [theme]="theme"
  [status]="status"
></lg-notice-content-area-story>
`;

export const NoticeInContentArea = {
  name: 'Notice in content area',
  args: {
    icon: 'globe',
    mode: 'blue',
    theme: 'neutral-inverse',
    status: 'info',
  },
  argTypes: {
    action: {
      control: 'select',
      options: [ 'link', 'button', 'button-group' ],
      description: 'The action displayed in the notice.',
    },
    icon: {
      control: 'select',
      options: pictogramNames,
      description: 'The pictogram displayed in the notice.',
    },
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
      options: [ 'info', 'success', 'warning', 'error' ],
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
