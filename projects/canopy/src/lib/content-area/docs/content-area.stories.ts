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
import { LgHintComponent, LgInputDirective, LgInputFieldComponent } from '../../forms';
import {
  LgGridColDirective,
  LgGridContainerDirective,
  LgGridRowDirective,
} from '../../grid';
import { LgMarginDirective, LgPaddingDirective } from '../../spacing';

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
  name: 'Standard',
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
        <form [formGroup]="form" (ngSubmit)="onSubmit(form)">
          <lg-content-area variant="form-journey">
            <lg-content-area-header>
              <a href="#">
                <lg-icon name="arrow-left"></lg-icon>{{backLinkText}}
              </a>
            </lg-content-area-header>
            <lg-content-area-content>
              <p>{{contentAreaContent}}</p>
              <lg-input-field [block]="true">
                {{label}}
                @if (hint) {
                  <lg-hint>{{hint}}</lg-hint>
                }
                <input lgInput formControlName="accountNumber" size="8" />
              </lg-input-field>
            </lg-content-area-content>
            <lg-content-area-footer>
              <lg-button-group>
                <button lg-button type="button" priority="primary">Continue</button>
                <button lg-button type="submit" priority="secondary">Back</button>
              </lg-button-group>
            </lg-content-area-footer>
          </lg-content-area>
        </form>
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
    LgPaddingDirective,
    LgMarginDirective,
    LgButtonComponent,
    LgButtonGroupComponent,
    LgContentAreaFooterComponent,
    LgInputFieldComponent,
    LgInputDirective,
    LgContentAreaTitleComponent,
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

  @Input() contentAreaContent: string;
  @Input() hint: string;
  @Input() label: string;
  @Input() backLinkText: string;

  form: UntypedFormGroup;

  constructor() {
    this.form = this.fb.group({ accountNumber: { value: '', disabled: false } });
  }

  onSubmit(event): void {
    /* eslint-disable-next-line no-console */
    console.log('submit', event);
  }
}

export const FormJourney = {
  name: 'Form journey',
  args: {
    contentAreaContent:
      'Please enter your account number to continue. We will use your account number to verify your identity.',
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
  render: (args: ContentAreaFormJourneyComponent) => ({
    props: args,
    moduleMetadata: {
      imports: [ ContentAreaFormJourneyComponent ],
    },
    template:
      '<lg-content-area-form-journey [contentAreaContent]="contentAreaContent" [hint]="hint" [label]="label" [backLinkText]="backLinkText"></lg-content-area-form-journey>',
  }),
};
