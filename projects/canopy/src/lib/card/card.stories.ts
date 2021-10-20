import { Component, Input } from '@angular/core';
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
                  <lg-card-title headingLevel="3" lgPaddingBottom="md">{{title}}</lg-card-title>
                  <p>{{cardContent}}</p>

                  <lg-input-field [block]="block">
                    {{label}}
                    <lg-hint *ngIf="hint">{{hint}}</lg-hint>
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
                  <p lgPaddingBottom="md">{{policy}}</p>
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
  @Input() title: string;
  @Input() cardContent: string;
  @Input() hint: string;
  @Input() policy: string;
  @Input() label: string;

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
};

const defaultCardTemplate = `
<lg-card>
  <lg-card-header>
    <lg-card-title [headingLevel]="headingLevel">
      {{title}}
    </lg-card-title>
  </lg-card-header>
  <lg-card-content>
    {{cardContent}} <a href="#">Test link</a>.
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
  title: 'The title',
  cardContent: content,
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
          {{cardContent}}
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
nestedGridCard.args = {
  cardContent: content,
};
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
          <a href="#">{{title}}</a>
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
productCard.args = {
  title: 'Standard Lifetime Annuity Joint Life Full',
};
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
    <lg-form-journey [title]="title" [cardContent]="cardContent" [hint]="hint" [policy]="policy" [label]="label"></lg-form-journey>
  `,
});

export const formJourneyCard = formJourneyCardStory.bind({});
formJourneyCard.storyName = 'Form journey';
formJourneyCard.args = {
  title: 'New bank details',
  cardContent:
    'Any changes today are unlikely to be processed in time for your next payment, due no later January.',
  hint: 'Must be 8 digits long',
  policy:
    'By completing this form you are confirming you have consent to share these details with us. See our privacy policy.',
  label: 'Account Number',
};
formJourneyCard.parameters = {
  docs: {
    source: {
      code: formJourneyTemplate,
    },
  },
};
