import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  input,
  output,
  viewChild,
  ViewEncapsulation,
} from '@angular/core';

import { LgIconComponent } from '../../icon';
import { randomUniqueId } from '../../utils';
import { CheckboxSize } from '../toggle';

import { LgSignalCheckboxGroupComponent } from './signal-checkbox-group';

@Component({
  selector: 'lg-signal-toggle, lg-signal-checkbox-option, lg-signal-filter-checkbox',
  imports: [ LgIconComponent ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    '../toggle/toggle.component.scss',
    '../toggle/toggle--filter.component.scss',
  ],
  host: {
    class: 'lg-toggle',
    '[attr.id]': 'null',
    '[class.lg-toggle--error]': 'group.showError()',
    '[class.lg-toggle--sm]': 'size() === "sm"',
    '[class.lg-toggle--lg]': 'size() === "lg"',
  },
  template: `
    <input
      #checkbox
      class="lg-toggle__input"
      type="checkbox"
      [id]="id()"
      [name]="group.name()"
      [value]="value()"
      [checked]="group.value().includes(value())"
      [disabled]="disabled() || group.disabled()"
      [attr.aria-invalid]="group.showError() ? 'true' : null"
      [attr.aria-describedby]="ariaDescribedBy() || null"
      [attr.aria-readonly]="group.readonly() ? 'true' : null"
      (click)="onClick($event)"
      (blur)="group.touched.set(true); blur.emit($event)"
    />
    <label
      [for]="id()"
      class="lg-toggle__label"
      [class.lg-toggle__label--filter]="group.variant === 'filter'"
    >
      @if (group.variant === 'filter') {
        <span class="lg-toggle__icon-wrapper">
          <lg-icon class="lg-toggle__icon-add" name="add" />
          <lg-icon class="lg-toggle__icon-selected" name="checkmark" />
        </span>
      } @else {
        <lg-icon
          class="lg-toggle__checkbox"
          [class.lg-toggle__checkbox--sm]="size() === 'sm'"
          [class.lg-toggle__checkbox--lg]="size() === 'lg'"
          [name]="size() === 'sm' ? 'checkmark-heavy' : 'checkmark'"
        />
      }
      <ng-content />
    </label>
  `,
})
export class LgSignalCheckboxOptionComponent {
  private readonly checkbox =
    viewChild.required<ElementRef<HTMLInputElement>>('checkbox');
  readonly group = inject(LgSignalCheckboxGroupComponent);
  readonly id = input(`lg-toggle-${randomUniqueId()}`);
  readonly value = input.required<string>();
  readonly size = input<CheckboxSize>('lg');
  readonly disabled = input(false);
  readonly ariaDescribedBy = input('');
  readonly blur = output<Event>();

  onClick(event: MouseEvent): void {
    if (this.group.readonly()) {
      event.preventDefault();

      return;
    }

    this.group.toggle(this.value());
  }

  focus(options?: FocusOptions): void {
    this.checkbox().nativeElement.focus(options);
  }
}
