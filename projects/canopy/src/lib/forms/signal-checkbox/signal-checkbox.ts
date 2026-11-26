import {
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChild,
  ElementRef,
  input,
  model,
  output,
  viewChild,
  ViewEncapsulation,
} from '@angular/core';
import { FormCheckboxControl } from '@angular/forms/signals';

import { LgIconComponent } from '../../icon';
import { randomUniqueId } from '../../utils';
import { LgHintComponent } from '../hint';
import { CheckboxSize } from '../toggle';
import { LgValidationComponent, LgValidationWrapperDirective } from '../validation';

@Component({
  selector: 'lg-signal-checkbox',
  imports: [ LgIconComponent ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  styleUrls: [ '../toggle/toggle.component.scss' ],
  host: {
    class: 'lg-toggle',
    '[attr.id]': 'null',
    '[class.lg-toggle--error]': 'showError()',
    '[class.lg-toggle--sm]': 'size() === "sm"',
    '[class.lg-toggle--lg]': 'size() === "lg"',
  },
  template: `
    <ng-content select="lg-hint" />
    <ng-content select="lg-validation, [lgValidationWrapper]" />
    <input
      #checkbox
      class="lg-toggle__input"
      type="checkbox"
      [id]="id()"
      [name]="name()"
      [checked]="checked()"
      [disabled]="disabled()"
      [required]="required()"
      [attr.aria-invalid]="showError() ? 'true' : null"
      [attr.aria-describedby]="describedBy()"
      [attr.aria-readonly]="readonly() ? 'true' : null"
      (click)="onClick($event)"
      (blur)="touched.set(true); blur.emit($event)"
    />
    <label [for]="id()" class="lg-toggle__label">
      <lg-icon
        class="lg-toggle__checkbox"
        [class.lg-toggle__checkbox--sm]="size() === 'sm'"
        [class.lg-toggle__checkbox--lg]="size() === 'lg'"
        [name]="size() === 'sm' ? 'checkmark-heavy' : 'checkmark'"
      />
      <ng-content />
    </label>
  `,
})
export class LgSignalCheckboxComponent implements FormCheckboxControl {
  private readonly checkbox =
    viewChild.required<ElementRef<HTMLInputElement>>('checkbox');
  readonly checked = model(false);
  readonly touched = model(false);
  readonly dirty = input(false);
  readonly invalid = input(false);
  readonly disabled = input(false);
  readonly readonly = input(false);
  readonly required = input(false);
  readonly name = input(`lg-checkbox-${randomUniqueId()}`);
  readonly id = input(`lg-checkbox-${randomUniqueId()}`);
  readonly size = input<CheckboxSize>('lg');
  readonly submitted = input(false);
  readonly ariaDescribedBy = input('');
  readonly blur = output<Event>();
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

  onClick(event: MouseEvent): void {
    if (this.readonly()) {
      event.preventDefault();

      return;
    }

    this.touched.set(true);
    this.checked.update(value => !value);
  }

  focus(options?: FocusOptions): void {
    this.checkbox().nativeElement.focus(options);
  }
}
