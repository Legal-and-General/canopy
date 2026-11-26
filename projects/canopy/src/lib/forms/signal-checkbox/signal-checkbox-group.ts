import {
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
import { LgValidationComponent, LgValidationWrapperDirective } from '../validation';

import { LgSignalCheckboxOptionComponent } from './signal-checkbox-option';

@Component({
  selector: 'lg-signal-checkbox-group, lg-signal-filter-multiple-group',
  imports: [ LgLabelComponent ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  styleUrls: [ '../checkbox-group/checkbox-group.component.scss' ],
  host: {
    '[class.lg-checkbox-group--checkbox]': 'variant === "checkbox"',
    '[class.lg-checkbox-group--filter]': 'variant === "filter"',
    '[class.lg-checkbox-group--inline]': 'inline()',
    '[class.lg-checkbox-group--error]': 'showError()',
  },
  template: `
    <fieldset [disabled]="disabled()" [attr.aria-describedby]="describedBy()">
      <legend lg-label><ng-content /></legend>
      <ng-content select=".lg-label--optional" />
      <ng-content select="lg-hint" />
      <ng-content select="lg-validation, [lgValidationWrapper]" />
      <ng-content
        select="lg-signal-toggle, lg-signal-checkbox-option, lg-signal-filter-checkbox"
      />
    </fieldset>
  `,
})
export class LgSignalCheckboxGroupComponent implements FormValueControl<Array<string>> {
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);
  readonly value = model<Array<string>>([]);
  readonly touched = model(false);
  readonly dirty = input(false);
  readonly invalid = input(false);
  readonly disabled = input(false);
  readonly readonly = input(false);
  readonly required = input(false);
  readonly name = input(`lg-checkbox-group-${randomUniqueId()}`);
  readonly id = input(`lg-checkbox-group-${randomUniqueId()}`);
  readonly inline = input(false);
  readonly submitted = input(false);
  readonly ariaDescribedBy = input('');
  readonly variant =
    this.element.nativeElement.tagName.toLowerCase() === 'lg-signal-filter-multiple-group'
      ? 'filter'
      : 'checkbox';
  readonly options = contentChildren<LgSignalCheckboxOptionComponent>(
    forwardRef(() => LgSignalCheckboxOptionComponent),
    {
      descendants: true,
    },
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

  toggle(option: string): void {
    this.touched.set(true);

    this.value.update(selected =>
      selected.includes(option)
        ? selected.filter(value => value !== option)
        : [ option, ...selected ],
    );
  }

  focus(options?: FocusOptions): void {
    this.options()
      .find(option => !option.disabled())
      ?.focus(options);
  }
}
