import {
  ChangeDetectionStrategy,
  Component,
  contentChild,
  ElementRef,
  inject,
  input,
  output,
  viewChild,
  ViewEncapsulation,
} from '@angular/core';

import { randomUniqueId } from '../../utils';
import { LgHintComponent } from '../hint';
import { RadioSize } from '../radio';

import { LgSignalRadioGroupComponent } from './signal-radio-group';

@Component({
  selector: 'lg-signal-radio-button, lg-signal-filter-button, lg-signal-segment-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    '../radio/radio-button.component.scss',
    '../radio/radio-button--filter.component.scss',
    '../radio/radio-button--segment.component.scss',
  ],
  host: {
    class: 'lg-radio-button',
    '[attr.id]': 'null',
    '[class.lg-radio-button--error]': 'group.showError()',
    '[class.lg-radio-button--sm]': 'size() === "sm"',
    '[class.lg-radio-button--lg]': 'size() === "lg"',
    '[class.lg-radio-button--radio]': 'group.variant === "radio"',
    '[class.lg-radio-button--filter]': 'group.variant === "filter"',
    '[class.lg-radio-button--segment]': 'group.variant === "segment"',
    '[class.lg-radio-button--stacked-md]': 'group.stack() === "md"',
    '[class.lg-radio-button--stacked-lg]': 'group.stack() === "lg"',
  },
  template: `
    <input
      #radio
      class="lg-radio-button__input"
      type="radio"
      [id]="id()"
      [name]="group.name()"
      [attr.value]="value()"
      [checked]="group.value() === value()"
      [disabled]="disabled() || group.disabled()"
      [attr.aria-invalid]="group.showError() ? 'true' : null"
      [attr.aria-describedby]="describedBy()"
      (click)="group.select(value())"
      (blur)="group.touched.set(true); blur.emit($event)"
    />
    <label
      [for]="id()"
      class="lg-radio-button__label"
      [class.lg-radio-button__label--sm]="group.variant === 'radio' && size() === 'sm'"
      [class.lg-radio-button__label--lg]="group.variant === 'radio' && size() === 'lg'"
    >
      <ng-content />
    </label>
    @if (hint()) {
      <div class="lg-radio-button__hint"><ng-content select="lg-hint" /></div>
    }
  `,
})
export class LgSignalRadioButtonComponent {
  private readonly radio = viewChild.required<ElementRef<HTMLInputElement>>('radio');
  readonly group = inject(LgSignalRadioGroupComponent);
  readonly id = input(`lg-radio-button-${randomUniqueId()}`);
  readonly value = input.required<string | boolean>();
  readonly size = input<RadioSize>('lg');
  readonly disabled = input(false);
  readonly ariaDescribedBy = input('');
  readonly hint = contentChild(LgHintComponent);
  readonly blur = output<Event>();

  describedBy(): string | null {
    const ids = [ ...this.ariaDescribedBy().split(/\s+/), this.hint()?.id ].filter(
      (id): id is string => !!id,
    );

    return ids.length
      ? [ ...new Set(ids) ].join(' ')
      : null;
  }

  focus(options?: FocusOptions): void {
    this.radio().nativeElement.focus(options);
  }
}
