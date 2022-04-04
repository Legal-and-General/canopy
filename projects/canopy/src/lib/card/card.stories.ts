import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { moduleMetadata, Story } from '@storybook/angular';

import { LgGridModule } from '../grid/grid.module';
import { LgPaddingModule } from '../spacing/padding/padding.module';
import { notes } from './card.notes';
import { LgMarginModule } from '../spacing/margin/margin.module';
import { LgBreadcrumbModule } from '../breadcrumb/breadcrumb.module';
import { LgIconModule } from '../icon/icon.module';
import { LgButtonModule } from '../button/button.module';
import { LgInputModule } from '../forms/input/input.module';
import { LgLabelModule } from '../forms/label/label.module';
import { LgHintModule } from '../forms/hint/hint.module';
import { LgSeparatorModule } from '../separator/separator.module';
import { iconsArray } from '../icon/icons.stories';
import { LgIconRegistry } from '../icon/icon.registry';
import { LgCardComponent } from './card.component';
import { LgCardModule } from './card.module';

const content =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

const formJourneyTemplate = `
<div lgContainer>
  <div lgRow>
    <div lgCol="12" lgColLg="6" lgColLgOffset="3" lgColMd="10" lgColMdOffset="1">
      <form [formGroup]="form" (ngSubmit)="onSubmit(form)">
        <lg-card lgPadding="none">
          <lg-card-header lgPadding="sm" lgPaddingBottom="xs" lgMarginBottom="lg">
            <lg-breadcrumb lgMarginBottom="none">
              <lg-breadcrumb-item>
                <a href="#">
                  <lg-icon name="chevron-left"></lg-icon>
                  Back
                </a>
              </lg-breadcrumb-item>
            </lg-breadcrumb>
          </lg-card-header>
          <lg-card-content>
            <div lgContainer>
              <div lgRow>
                <div lgCol="12" lgColMd="10" lgColMdOffset="1">
                  <lg-card-title headingLevel="3" lgPaddingBottom="md">New bank details</lg-card-title>
                  <p>${content}</p>

                  <lg-input-field [block]="block">
                    Account Number
                    <lg-hint>Must be 8 digits long</lg-hint>
                    <input lgInput formControlName="accountNumber" size="8" />
                  </lg-input-field>
                </div>
              </div>
            </div>
          </lg-card-content>
          <lg-card-footer>
            <div lgContainer>
              <div lgRow>
                <div lgCol="12" lgColMd="10" lgColMdOffset="1">
                  <button
                    lg-button
                    type="button"
                    variant="outline-primary"
                    lgMarginRight="sm"
                  >
                    Back
                  </button>
                  <button lg-button type="submit" variant="solid-primary">
                    Confirm
                  </button>
                  <p lgPaddingBottom="md">By completing this form you are confirming you have consent to share these details with us. See our privacy policy.</p>
                </div>
              </div>
            </div>
          </lg-card-footer>
        </lg-card>
      </form>
    </div>
  </div>
</div>
`;

@Component({
  selector: 'lg-form-journey',
  template: formJourneyTemplate,
})
class FormJourneyComponent {
  form: FormGroup;
  icons = iconsArray;

  constructor(private registry: LgIconRegistry, public fb: FormBuilder) {
    this.registry.registerIcons(this.icons);
    this.form = this.fb.group({ accountNumber: { value: '', disabled: false } });
  }

  onSubmit(event): void {
    console.log('submit', event);
  }
}

export default {
  title: 'Components/Card',
  decorators: [
    moduleMetadata({
      declarations: [FormJourneyComponent],
      imports: [
        ReactiveFormsModule,
        LgInputModule,
        LgLabelModule,
        LgHintModule,
        LgCardModule,
        LgBreadcrumbModule,
        LgIconModule,
        LgButtonModule,
        LgGridModule,
        LgPaddingModule,
        LgMarginModule,
        LgSeparatorModule,
      ],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: notes,
      },
    },
    backgrounds: {
      default: 'White Smoke',
    },
  },
  argTypes: {
    headingLevel: {
      options: ['1', '2', '3', '4', '5', '6'],
      description: 'The heading level of the card title.',
      table: {
        type: {
          summary: ['1', '2', '3', '4', '5', '6'],
        },
      },
      control: {
        type: 'select',
      },
    },
  },
};

const defaultCardTemplate = `
<lg-card>
  <lg-card-header>
    <lg-card-title [headingLevel]="headingLevel">
      The title
    </lg-card-title>
  </lg-card-header>
  <lg-card-content>
    ${content} <a href="#">Test link</a>.
  </lg-card-content>
</lg-card>
`;

const defaultCardStory: Story<LgCardComponent> = (args: LgCardComponent) => ({
  props: args,
  template: defaultCardTemplate,
});

export const defaultCard = defaultCardStory.bind({});
defaultCard.storyName = 'Standard';
defaultCard.args = {
  headingLevel: 2,
};
defaultCard.parameters = {
  docs: {
    source: {
      code: defaultCardTemplate,
    },
  },
};

const nestedGridCardTemplate = `
<lg-card lgPaddingHorizontal="none">
  <lg-card-content>
    <div lgContainer>
      <div lgRow>
        <div lgCol="12" lgColMd="10" lgColMdOffset="1">
          ${content}
        </div>
      </div>
    </div>
  </lg-card-content>
</lg-card>
`;

const nestedGridCardStory: Story<LgCardComponent> = (args: LgCardComponent) => ({
  props: args,
  template: nestedGridCardTemplate,
});

export const nestedGridCard = nestedGridCardStory.bind({});
nestedGridCard.storyName = 'Nested grid';
nestedGridCard.parameters = {
  docs: {
    source: {
      code: nestedGridCardTemplate,
    },
  },
};

const productCardTemplate = `
<lg-card>
  <lg-card-content>
    <div lgRow>
      <div lgCol="12" lgColMd="6">
        <lg-card-title headingLevel="4">
          <a href="#">Standard Lifetime Annuity Joint Life Full</a>
        </lg-card-title>
        <lg-card-subtitle>
          Payroll Reference Number P23456
        </lg-card-subtitle>
      </div>
      <lg-card-principle-data-point lgCol="12" lgColMd="6">
        <lg-card-principle-data-point-label>
          Last payment (after tax and deductions)
        </lg-card-principle-data-point-label>
        <lg-card-principle-data-point-value>
          <span><span class="lg-font-size-3">£</span>230.20</span>
        </lg-card-principle-data-point-value>
        <lg-card-principle-data-point-date>
          as of 01 Jan 2020
        </lg-card-principle-data-point-date>
      </lg-card-principle-data-point>
    </div>
  </lg-card-content>
</lg-card>
`;

const productCardStory: Story<LgCardComponent> = (args: LgCardComponent) => ({
  props: args,
  template: productCardTemplate,
});

export const productCard = productCardStory.bind({});
productCard.storyName = 'Product';
productCard.parameters = {
  docs: {
    source: {
      code: productCardTemplate,
    },
  },
};

const formJourneyCardStory: Story<LgCardComponent> = (args: LgCardComponent) => ({
  props: args,
  template: `
    <lg-form-journey></lg-form-journey>
  `,
});

export const formJourneyCard = formJourneyCardStory.bind({});
formJourneyCard.storyName = 'Form journey';
formJourneyCard.parameters = {
  docs: {
    source: {
      code: formJourneyTemplate,
    },
  },
};
