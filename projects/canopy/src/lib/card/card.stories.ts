import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { text, withKnobs, boolean } from '@storybook/addon-knobs';
import { moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

import { LgCardModule } from '../card/card.module';
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

@Component({
  selector: 'lg-form-journey',
  template: `
    <div lgContainer>
      <div lgRow>
        <div lgCol="12" lgColLg="6" lgColLgOffset="3" lgColMd="10" lgColMdOffset="1">
          <form [formGroup]="form" (ngSubmit)="onSubmit(form)">
            <lg-card lgPadding="none">
              <lg-card-header lgPadding="sm" lgPaddingBottom="xs" lgMarginBottom="lg">
                <lg-breadcrumb lgMarginBottom="none">
                  <lg-breadcrumb-item showOnSmScreens="true">
                    <a href="#">
                      <lg-icon [name]="'chevron-left'"></lg-icon>
                      Back
                    </a>
                  </lg-breadcrumb-item>
                </lg-breadcrumb>
              </lg-card-header>
              <lg-card-content>
                <div lgContainer>
                  <div lgRow>
                    <div lgCol="12" lgColMd="10" lgColMdOffset="1">
                      <lg-card-title headingLevel="3" lgPaddingBottom="md">{{
                        title
                      }}</lg-card-title>
                      <p>{{ cardContent }}</p>

                      <lg-input-field [block]="block">
                        {{ label }}
                        <lg-hint *ngIf="hint">{{ hint }}</lg-hint>
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
                      <p *ngIf="policy" lgPaddingBottom="md">{{ policy }}</p>
                    </div>
                  </div>
                </div>
              </lg-card-footer>
            </lg-card>
          </form>
        </div>
      </div>
    </div>
  `,
})
class FormJourneyComponent {
  @Input()
  set disabled(disabled: boolean) {
    if (disabled === true) {
      this.form.controls.accountNumber.disable();
    } else {
      this.form.controls.accountNumber.enable();
    }
  }
  get disabled(): boolean {
    return this.form.controls.accountNumber.disabled;
  }

  @Input() hint: string;
  @Input() label: string;
  @Input() title: string;
  @Input() cardContent: string;
  @Input() policy: string;

  @Output() inputChange: EventEmitter<void> = new EventEmitter();
  @Output() formSubmit: EventEmitter<void> = new EventEmitter();

  form: FormGroup;
  icons = iconsArray;

  constructor(private registry: LgIconRegistry, public fb: FormBuilder) {
    this.registry.registerIcons(this.icons);
    this.form = this.fb.group({ accountNumber: { value: '', disabled: false } });
    this.form.valueChanges.subscribe((val) => this.inputChange.emit(val));
  }

  onSubmit(event): void {
    this.formSubmit.emit(event);
  }
}

export default {
  title: 'Components/Card',
  parameters: {
    decorators: [
      withKnobs,
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
    'in-dsm': {
      id: '5ede22091f488863e2eeaa35',
    },
    notes: {
      markdown: notes,
    },
  },
};

export const standard = () => ({
  template: `
    <lg-card>
      <lg-card-header>
        <lg-card-title headingLevel="4">
          {{title}}
        </lg-card-title>
      </lg-card-header>
      <lg-card-content>
        {{cardContent}}
      </lg-card-content>
    </lg-card>
  `,
  props: {
    title: text('title', 'Card title'),
    cardContent: text(
      'cardContent',
      `Leverage agile frameworks to provide a robust synopsis for high level
    overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall
    value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity
    and empowerment.`,
    ),
  },
});

export const nestedGrid = () => ({
  template: `
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
  `,
  props: {
    cardContent: text(
      'cardContent',
      `Leverage agile frameworks to provide a robust synopsis for high level
    overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall
    value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity
    and empowerment.`,
    ),
  },
});

export const product = () => ({
  template: `
    <lg-card>
      <lg-card-content>
        <div lgRow>
          <div lgCol="12" lgColMd="6">
            <lg-card-title headingLevel="4">
              <a href="#">{{title}}</a>.
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
  `,
  props: {
    title: text('title', 'Standard Lifetime Annuity Joint Life Full'),
  },
});

export const formJourney = () => ({
  template: `
    <lg-form-journey
      [title]="title"
      [cardContent]="cardContent"
      [disabled]="disabled"
      [hint]="hint"
      [policy]="policy"
      [label]="label"
      (inputChange)="inputChange($event)"
    >
    </lg-form-journey>
  `,
  props: {
    title: text('title', 'New bank details'),
    cardContent: text(
      'cardContent',
      `Any changes today are unlikely to be processed in time for your next payment, due no later January.`,
    ),
    disabled: boolean('disabled', false),
    hint: text('hint', 'Must be 8 digits long'),
    policy: text(
      'policy',
      'By completing this form you are confirming you have consent to share these details with us. See our privacy policy.',
    ),
    label: text('label', 'Account Number'),
    inputChange: action('inputChange'),
  },
});
