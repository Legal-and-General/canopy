import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChild,
  contentChildren,
  ElementRef,
  forwardRef,
  inject,
  input,
  model,
  ViewEncapsulation,
} from '@angular/core';
import { FormValueControl } from '@angular/forms/signals';

import { randomUniqueId } from '../../utils';
import { LgHintComponent } from '../hint';
import { LgLabelComponent } from '../label';
import { RadioStackBreakpoint, RadioVariant } from '../radio';
import { LgValidationComponent, LgValidationWrapperDirective } from '../validation';

import { LgSignalRadioButtonComponent } from './signal-radio-button';

@Component({
  selector: 'lg-signal-radio-group, lg-signal-filter-group, lg-signal-segment-group',
  imports: [ LgLabelComponent ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    '../radio/radio-group.component.scss',
    '../radio/radio-group--segment.component.scss',
  ],
  host: {
    class: 'lg-radio-group',
    '[class.lg-radio-group--inline]': 'inline()',
    '[class.lg-radio-group--error]': 'showError()',
    '[class.lg-radio-group--stack-md]': 'stack() === "md"',
    '[class.lg-radio-group--stack-lg]': 'stack() === "lg"',
  },
  template: `
    <fieldset
      role="radiogroup"
      [disabled]="disabled()"
      [attr.aria-describedby]="describedBy()"
      [attr.aria-required]="required() ? 'true' : null"
    >
      <legend lg-label><ng-content /></legend>
      <ng-content select=".lg-label--optional" />
      <ng-content select="lg-hint" />
      <ng-content select="lg-validation, [lgValidationWrapper]" />
      <div [class.lg-radio-group__segment]="variant === 'segment'">
        <ng-content
          select="lg-signal-radio-button, lg-signal-filter-button, lg-signal-segment-button"
        />
      </div>
    </fieldset>
  `,
})
export class LgSignalRadioGroupComponent
implements FormValueControl<string | boolean>, AfterContentInit {
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);
  readonly value = model<string | boolean>('');
  readonly touched = model(false);
  readonly dirty = input(false);
  readonly invalid = input(false);
  readonly disabled = input(false);
  readonly required = input(false);
  readonly name = input(`lg-radio-group-${randomUniqueId()}`);
  readonly id = input(`lg-radio-group-${randomUniqueId()}`);
  readonly inline = input(false);
  readonly stack = input<RadioStackBreakpoint | undefined>();
  readonly submitted = input(false);
  readonly ariaDescribedBy = input('');
  readonly variant: RadioVariant =
    this.element.nativeElement.tagName.toLowerCase() === 'lg-signal-segment-group'
      ? 'segment'
      : this.element.nativeElement.tagName.toLowerCase() === 'lg-signal-filter-group'
        ? 'filter'
        : 'radio';
  readonly options = contentChildren<LgSignalRadioButtonComponent>(
    forwardRef(() => LgSignalRadioButtonComponent),
    { descendants: true },
  );
  readonly hint = contentChild(LgHintComponent);
  readonly validation = contentChild(LgValidationComponent, { descendants: true });
  readonly validationWrapper = contentChild(LgValidationWrapperDirective);
  readonly showError = computed(
    () => this.invalid() && ((this.dirty() && this.touched()) || this.submitted()),
  );
  readonly describedBy = computed(() => {
    const ids = [
      ...this.ariaDescribedBy().split(/\s+/),
      this.hint()?.id,
      this.validation()?.id ?? this.validationWrapper()?.id,
    ].filter((id): id is string => !!id);

    return ids.length
      ? [ ...new Set(ids) ].join(' ')
      : null;
  });

  ngAfterContentInit(): void {
    if (
      this.variant === 'segment' &&
      (this.options().length < 2 || this.options().length > 5)
    ) {
      console.warn(
        `LgSignalRadioGroupComponent: Segment controls must have between 2 and 5 options. Current count: ${this.options().length}`,
      );
    }
  }

  select(value: string | boolean): void {
    this.touched.set(true);
    this.value.set(value);
  }

  focus(options?: FocusOptions): void {
    const enabled = this.options().filter(option => !option.disabled());
    const target =
      enabled.find(option => option.value() === this.value()) ?? enabled[0];

    target?.focus(options);
  }
}
