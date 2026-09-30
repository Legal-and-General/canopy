import { Component, inject, Input } from '@angular/core';
import {
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
} from '@angular/forms';
import { Meta, moduleMetadata } from '@storybook/angular';

import { LgContentAreaComponent } from '../content-area.component';
import { LgContentAreaHeaderComponent } from '../content-area-header/content-area-header.component';
import { LgContentAreaContentComponent } from '../content-area-content/content-area-content.component';
import { LgContentAreaFooterComponent } from '../content-area-footer/content-area-footer.component';
import { LgContentAreaTitleComponent } from '../content-area-title/content-area-title.component';
import { LgIconComponent } from '../../icon';
import { LgButtonComponent, LgButtonGroupComponent } from '../../button';
import {
  LgHintComponent,
  LgInputDirective,
  LgInputFieldComponent,
  LgSelectDirective,
  LgSelectFieldComponent,
  LgSortCodeDirective,
} from '../../forms';
import {
  LgGridColDirective,
  LgGridContainerDirective,
  LgGridRowDirective,
} from '../../grid';
import {
  LgProgressHeaderComponent,
  LgProgressIndicatorComponent,
} from '../../progress-indicator';
import { LgMarginDirective, LgPaddingDirective } from '../../spacing';
import { LgNoticeComponent } from '../../notice/notice.component';
import { LgNoticeActionComponent } from '../../notice/notice-action/notice-action.component';
import { LgNoticeTitleComponent } from '../../notice/notice-title/notice-title.component';
import { LgNoticeDescriptionComponent } from '../../notice/notice-description/notice-description.component';
import { LgPictogramComponent } from '../../pictogram';

const content =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

export default {
  title: 'Components/Content area/Examples',
  component: LgContentAreaComponent,
  decorators: [
    moduleMetadata({
      imports: [
        LgContentAreaComponent,
        LgContentAreaHeaderComponent,
        LgContentAreaContentComponent,
        LgContentAreaFooterComponent,
        LgContentAreaTitleComponent,
        LgIconComponent,
        LgButtonComponent,
        LgButtonGroupComponent,
        LgGridColDirective,
        LgGridContainerDirective,
        LgGridRowDirective,
        LgMarginDirective,
        LgPaddingDirective,
        LgNoticeComponent,
        LgNoticeDescriptionComponent,
        LgNoticeTitleComponent,
        LgPictogramComponent,
      ],
    }),
  ],
  argTypes: {
    class: {
      table: {
        disable: true,
      },
    },
    headingLevel: {
      options: [ '1', '2', '3', '4', '5', '6' ],
      description: 'The heading level for the title component',
      table: {
        type: {
          summary: '1 | 2 | 3 | 4 | 5 | 6',
        },
      },
      control: {
        type: 'select',
      },
    },
  },
  globals: {
    backgrounds: { value: 'off-white' },
  },
} as Meta;

const standardTemplate = `
<lg-content-area>
  <lg-content-area-content>
    <p>{{content}}</p>
  </lg-content-area-content>
</lg-content-area>
`;

export const Standard = {
  args: {
    content: content,
  },
  parameters: {
    docs: {
      source: {
        code: standardTemplate,
      },
    },
  },
  render: (args: LgContentAreaComponent) => ({
    props: args,
    template: standardTemplate,
  }),
};

const contentAreaChildTemplate = `
<lg-content-area>
  <lg-content-area-header>
    <lg-content-area-title [headingLevel]="headingLevel">
      {{title}}
    </lg-content-area-title>
  </lg-content-area-header>
  <lg-content-area-content>
    <p>{{content}}</p>
    <p>{{content}}</p>
  </lg-content-area-content>
</lg-content-area>
`;

export const ContentAreaChild = {
  name: 'Child',
  args: {
    headingLevel: 3,
    title: 'The title',
    content: content,
  },
  parameters: {
    docs: {
      source: {
        code: contentAreaChildTemplate,
      },
    },
  },
  render: (args: LgContentAreaComponent) => ({
    props: args,
    template: contentAreaChildTemplate,
  }),
};

const contentAreaExpressiveTemplate = `
<lg-content-area>
  <lg-content-area-header>
    <lg-content-area-title [headingLevel]="headingLevel" class="lg-font--expressive">
      {{title}}
    </lg-content-area-title>
  </lg-content-area-header>
  <lg-content-area-content>
    <p>{{content}}</p>
  </lg-content-area-content>
</lg-content-area>
`;

export const WithExpressiveType = {
  name: 'Child with expressive type',
  args: {
    headingLevel: 2,
    title: 'Expressive title',
    content: content,
  },
  parameters: {
    docs: {
      source: {
        code: contentAreaExpressiveTemplate,
      },
    },
  },
  render: (args: LgContentAreaComponent) => ({
    props: args,
    template: contentAreaExpressiveTemplate,
  }),
};

const formJourneyTemplate = `
  <div lgContainer>
    <div lgRow>
      <div lgCol="12" lgColLg="6" lgColLgOffset="3" lgColMd="10" lgColMdOffset="1">
        @switch (stage) {
          @case ('introductory') {
            <lg-content-area variant="form-journey">
              <lg-content-area-header>
                <a href="#">
                  <lg-icon name="arrow-left"></lg-icon>{{backLinkText}}
                </a>
              </lg-content-area-header>
              <lg-content-area-content>
                <lg-content-area-title [headingLevel]="2">
                  {{title}}
                </lg-content-area-title>
                <p>{{contentAreaContent}}</p>
                <p>Have your account number and sort code ready.</p>
              </lg-content-area-content>
              <lg-content-area-footer>
                <lg-button-group>
                  <button lg-button type="button" priority="primary">
                    Continue
                    <lg-icon name="arrow-right" />
                  </button>
                  <button lg-button type="button" priority="secondary">
                    Cancel
                    <lg-icon name="close" />
                  </button>
                </lg-button-group>
              </lg-content-area-footer>
            </lg-content-area>
          }
          @case ('intermediate') {
            <form [formGroup]="form" (ngSubmit)="onSubmit(form)">
              <lg-content-area variant="form-journey">
                <lg-content-area-header>
                  <a href="#">
                    <lg-icon name="arrow-left"></lg-icon>{{backLinkText}}
                  </a>
                </lg-content-area-header>
                <lg-content-area-content>
                  <lg-progress-indicator [max]="3" [value]="1">
                    {{journeyTitle}}
                    <lg-progress-header>Your bank details</lg-progress-header>
                  </lg-progress-indicator>
                  <p>{{contentAreaContent}}</p>
                  <lg-input-field [block]="true">
                    {{label}}
                    @if (hint) {
                      <lg-hint>{{hint}}</lg-hint>
                    }
                    <input lgInput formControlName="accountNumber" size="8" />
                  </lg-input-field>
                  <lg-input-field [block]="true">
                    Sort code
                    <lg-hint>Must be 6 digits, like 12-34-56</lg-hint>
                    <input lgInput lgSortCode formControlName="sortCode" size="8" />
                  </lg-input-field>
                  <lg-select-field [block]="true">
                    Account type
                    <select lgSelect formControlName="accountType">
                      <option value="current">Current account</option>
                      <option value="savings">Savings account</option>
                      <option value="joint">Joint account</option>
                    </select>
                  </lg-select-field>
                </lg-content-area-content>
                <lg-content-area-footer>
                  <lg-button-group>
                  <button lg-button type="button" priority="primary">
                    Continue
                    <lg-icon name="arrow-right" />
                  </button>
                  <button lg-button type="button" priority="secondary">
                    Cancel
                    <lg-icon name="close" />
                  </button>
                </lg-button-group>
                </lg-content-area-footer>
              </lg-content-area>
            </form>
          }
          @case ('confirmation') {
            <lg-content-area variant="form-journey">
              <lg-content-area-content>
              <lg-notice status="success">
                <lg-pictogram name="confirm" hasFill="true"></lg-pictogram>
                <lg-notice-title
                  >Success!
                </lg-notice-title>
                <lg-notice-description>
                  You've completed the form
                </lg-notice-description>
                <lg-notice-action type="button">
                  <button lg-button priority="primary" type="button">
                    Return to product
                    <lg-icon name="arrow-right" />
                  </button>
                </lg-notice-action>
              </lg-notice>
              </lg-content-area-content>
            </lg-content-area>
          }
        }
      </div>
    </div>
  </div>
`;

@Component({
  selector: 'lg-content-area-form-journey',
  template: formJourneyTemplate,
  imports: [
    LgGridContainerDirective,
    LgGridRowDirective,
    LgGridColDirective,
    LgButtonComponent,
    LgButtonGroupComponent,
    LgContentAreaFooterComponent,
    LgInputFieldComponent,
    LgInputDirective,
    LgSortCodeDirective,
    LgSelectFieldComponent,
    LgSelectDirective,
    LgContentAreaTitleComponent,
    LgProgressHeaderComponent,
    LgProgressIndicatorComponent,
    LgNoticeComponent,
    LgNoticeActionComponent,
    LgNoticeTitleComponent,
    LgNoticeDescriptionComponent,
    LgPictogramComponent,
    ReactiveFormsModule,
    LgContentAreaContentComponent,
    LgContentAreaComponent,
    LgIconComponent,
    LgHintComponent,
    LgContentAreaHeaderComponent,
  ],
})
class ContentAreaFormJourneyComponent {
  fb = inject(UntypedFormBuilder);

  @Input() stage!: 'introductory' | 'intermediate' | 'confirmation';
  @Input() journeyTitle!: string;
  @Input() title!: string;
  @Input() contentAreaContent!: string;
  @Input() hint!: string;
  @Input() label!: string;
  @Input() backLinkText!: string;

  form: UntypedFormGroup;

  constructor() {
    this.form = this.fb.group({
      accountNumber: { value: '', disabled: false },
      sortCode: { value: '', disabled: false },
      accountType: { value: 'current', disabled: false },
    });
  }

  onSubmit(event: UntypedFormGroup): void {
    /* eslint-disable-next-line no-console */
    console.log('submit', event);
  }
}

const renderFormJourney = (args: ContentAreaFormJourneyComponent) => ({
  props: args,
  moduleMetadata: {
    imports: [ ContentAreaFormJourneyComponent ],
  },
  template:
    '<lg-content-area-form-journey [stage]="stage" [journeyTitle]="journeyTitle" [title]="title" [contentAreaContent]="contentAreaContent" [hint]="hint" [label]="label" [backLinkText]="backLinkText"></lg-content-area-form-journey>',
});

export const Introductory = {
  name: 'Form journey - introductory',
  args: {
    stage: 'introductory',
    title: 'Before you begin',
    contentAreaContent:
      'You can update the bank account used for your payments. This should take about five minutes.',
    backLinkText: 'Back',
    label: 'Account number',
    hint: 'Your account number is 8 digits',
  },
  parameters: {
    docs: {
      source: {
        code: formJourneyTemplate,
      },
    },
  },
  render: renderFormJourney,
};

export const FormJourney = {
  name: 'Form journey - intermediate',
  args: {
    stage: 'intermediate',
    journeyTitle: 'Update your bank details',
    title: 'Your bank details',
    contentAreaContent:
      'Enter the details of the account you want us to use for your payments.',
    backLinkText: 'Back',
    label: 'Account number',
    hint: 'Your account number is 8 digits',
  },
  parameters: {
    docs: {
      source: {
        code: formJourneyTemplate,
      },
    },
  },
  render: renderFormJourney,
};

export const Confirmation = {
  name: 'Form journey - confirmation',
  args: {
    stage: 'confirmation',
    title: 'Your details have been updated',
    contentAreaContent:
      'We have received your new bank details. They will be used for your next eligible payment.',
    backLinkText: 'Back',
    label: 'Account number',
    hint: 'Your account number is 8 digits',
  },
  parameters: {
    docs: {
      source: {
        code: formJourneyTemplate,
      },
    },
  },
  render: renderFormJourney,
};
