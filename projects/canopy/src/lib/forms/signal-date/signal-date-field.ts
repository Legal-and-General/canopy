import {
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChild,
  ElementRef,
  input,
  model,
  OnChanges,
  signal,
  SimpleChanges,
  viewChild,
  ViewEncapsulation,
} from '@angular/core';
import { FormValueControl, transformedValue } from '@angular/forms/signals';
import { isValid, parseISO } from 'date-fns';

import { randomUniqueId } from '../../utils';
import { LgMarginDirective } from '../../spacing';
import { LgHintComponent } from '../hint';
import { LgLabelComponent } from '../label';
import { LgValidationComponent, LgValidationWrapperDirective } from '../validation';

type DatePart = 'day' | 'month' | 'year';
type DateParts = Record<DatePart, string>;
type DatePartFlags = Record<DatePart, boolean>;

function parseParts(value: string): DateParts {
  const [ year = '', month = '', day = '' ] = value.split('-');

  return { day, month, year };
}

function formatParts({ day, month, year }: DateParts): string {
  if (!day && !month && !year) {
    return '';
  }

  const formattedDay = day
    ? ('0' + day).slice(-2)
    : '';
  const formattedMonth = month
    ? ('0' + month).slice(-2)
    : '';

  return `${year}-${formattedMonth}-${formattedDay}`;
}

function validateParts(parts: DateParts, dirty: DatePartFlags, submitted: boolean) {
  if (!parts.day && !parts.month && !parts.year) {
    return undefined;
  }

  const invalid: Array<DatePart> = [];
  const missing: Array<DatePart> = [];
  const names: Array<DatePart> = [ 'day', 'month', 'year' ];

  const partValid = (name: DatePart) => {
    const value = parts[name];

    if (name === 'year') {
      return /^\d{4}$/.test(value);
    }

    const max = name === 'day'
      ? 31
      : 12;

    return /^\d{1,2}$/.test(value) && Number(value) >= 1 && Number(value) <= max;
  };

  for (const name of names) {
    if (!dirty[name] && !submitted) {
      continue;
    }

    if (!parts[name]) {
      missing.push(name);
    } else if (!partValid(name)) {
      invalid.push(name);
    }
  }

  if (invalid.length === 1) {
    return { kind: 'invalidField', field: invalid[0] };
  }

  if (invalid.length === 2) {
    return { kind: 'invalidFields', fields: invalid };
  }

  if (invalid.length > 2) {
    return { kind: 'invalidDate' };
  }

  if (missing.length === 1) {
    return { kind: 'requiredField', field: missing[0] };
  }

  if (missing.length === 2) {
    return { kind: 'requiredFields', fields: missing };
  }

  if ((names.every(partValid) || submitted) && !isValid(parseISO(formatParts(parts)))) {
    return { kind: 'invalidDate' };
  }

  if (!submitted && !names.every(partValid)) {
    return validateParts(parts, { day: true, month: true, year: true }, true);
  }

  return undefined;
}

@Component({
  selector: 'lg-signal-date-field',
  imports: [ LgHintComponent, LgLabelComponent, LgMarginDirective ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  styleUrls: [ '../date/date-field.component.scss', '../input/input-field.component.scss' ],
  host: { class: 'lg-date-field' },
  template: `
    <fieldset [disabled]="disabled()" [attr.aria-describedby]="describedBy()">
      <legend lg-label><ng-content /></legend>
      <lg-hint #hint>For example, 27 12 1977</lg-hint>
      <ng-content select="lg-validation, [lgValidationWrapper]" />
      <div class="lg-date-field__fields">
        @for (part of parts; track part.key) {
          <div [class]="'lg-date-field__' + part.className">
            <div
              class="lg-input-field"
              lgMarginBottom="none"
              [class.lg-input-field--error]="partInvalid(part.key)"
              [class.lg-input-field--focus]="focusedPart() === part.key"
              [class.lg-input-field--hover]="hoveredPart() === part.key"
              [class.lg-input-field--disabled]="disabled()"
              (mouseenter)="hoveredPart.set(part.key)"
              (mouseleave)="hoveredPart.set(undefined)"
            >
              <label lg-label [for]="partId(part.key)">{{ part.label }}</label>
              <div class="lg-input-field__inputs">
                <input
                  #dateInput
                  class="lg-input"
                  type="text"
                  inputmode="numeric"
                  [id]="partId(part.key)"
                  [attr.name]="name() + '-' + part.key"
                  [attr.maxlength]="part.key === 'year' ? 4 : 2"
                  [attr.size]="part.size"
                  [value]="rawDate()[part.key]"
                  [readonly]="readonly()"
                  [required]="required()"
                  [attr.aria-invalid]="partInvalid(part.key) ? 'true' : null"
                  [attr.aria-describedby]="describedBy()"
                  (input)="updatePart(part.key, $event)"
                  (focus)="focusedPart.set(part.key)"
                  (blur)="onBlur(part.key)"
                />
              </div>
            </div>
          </div>
        }
      </div>
    </fieldset>
  `,
})
export class LgSignalDateFieldComponent implements FormValueControl<string>, OnChanges {
  private readonly dateInput = viewChild<ElementRef<HTMLInputElement>>('dateInput');
  private readonly hint = viewChild.required<LgHintComponent>('hint');
  private readonly dirtyParts = signal<DatePartFlags>({
    day: false,
    month: false,
    year: false,
  });
  private readonly pendingParts = signal<DatePartFlags>({
    day: false,
    month: false,
    year: false,
  });
  private readonly touchedParts = signal<DatePartFlags>({
    day: false,
    month: false,
    year: false,
  });
  private lastEditedValue: string | undefined;
  private validatingExternalValue = false;
  readonly value = model('');
  readonly touched = model(false);
  readonly dirty = input(false);
  readonly invalid = input(false);
  readonly disabled = input(false);
  readonly readonly = input(false);
  readonly required = input(false);
  readonly name = input(`lg-date-${randomUniqueId()}`);
  readonly dateId = input(`lg-input-date-${randomUniqueId()}`);
  readonly monthId = input(`lg-input-month-${randomUniqueId()}`);
  readonly yearId = input(`lg-input-year-${randomUniqueId()}`);
  readonly submitted = input(false);
  readonly ariaDescribedBy = input('');
  readonly focusedPart = signal<DatePart | undefined>(undefined);
  readonly hoveredPart = signal<DatePart | undefined>(undefined);
  readonly validation = contentChild(LgValidationComponent, { descendants: true });
  readonly validationWrapper = contentChild(LgValidationWrapperDirective);
  readonly rawDate = transformedValue(this.value, {
    format: parseParts,
    parse: parts => ({
      value: this.validatingExternalValue
        ? undefined
        : formatParts(parts),
      error:
        this.validatingExternalValue &&
        this.value() !== this.lastEditedValue &&
        this.value() !== '' &&
        !/^\d{4}-\d{1,2}-\d{1,2}$/.test(this.value())
          ? { kind: 'invalidDate' }
          : validateParts(parts, this.dirtyParts(), this.submitted()),
    }),
  });
  readonly parts: ReadonlyArray<{
    key: DatePart;
    label: string;
    className: string;
    size: number;
  }> = [
    { key: 'day', label: 'Day', className: 'date', size: 2 },
    { key: 'month', label: 'Month', className: 'month', size: 3 },
    { key: 'year', label: 'Year', className: 'year', size: 4 },
  ];
  readonly describedBy = computed(() => {
    const ids = [
      ...this.ariaDescribedBy().split(/\s+/),
      this.hint().id,
      this.validation()?.id ?? this.validationWrapper()?.id,
    ].filter((id): id is string => !!id);

    return ids.length
      ? [ ...new Set(ids) ].join(' ')
      : null;
  });

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.value && this.value() !== this.lastEditedValue) {
      this.revalidate(parseParts(this.value()));
    }

    if (changes.dirty && !changes.dirty.firstChange && !this.dirty()) {
      this.dirtyParts.set({ day: false, month: false, year: false });
      this.pendingParts.set({ day: false, month: false, year: false });
      this.touchedParts.set({ day: false, month: false, year: false });
      this.revalidate(parseParts(this.value()));
    }

    if (changes.submitted && !changes.submitted.firstChange) {
      this.revalidate(this.rawDate());
    }
  }

  partId(part: DatePart): string {
    switch (part) {
      case 'day':
        return this.dateId();
      case 'month':
        return this.monthId();
      case 'year':
        return this.yearId();
    }
  }

  updatePart(part: DatePart, event: Event): void {
    if (!(event.target instanceof HTMLInputElement)) {
      throw new Error('Date input event must originate from an input element');
    }

    const newValue = event.target.value;

    this.pendingParts.update(value => ({ ...value, [part]: true }));

    const parts = { ...this.rawDate(), [part]: newValue };

    this.lastEditedValue = formatParts(parts);
    this.rawDate.set(parts);
  }

  onBlur(part: DatePart): void {
    this.focusedPart.set(undefined);
    this.touched.set(true);
    this.touchedParts.update(value => ({ ...value, [part]: true }));

    if (this.pendingParts()[part]) {
      this.dirtyParts.update(value => ({ ...value, [part]: true }));
      this.rawDate.set(this.rawDate());
    }
  }

  partInvalid(part: DatePart): boolean {
    if (
      !this.invalid() ||
      !(this.submitted() || (this.dirtyParts()[part] && this.touchedParts()[part]))
    ) {
      return false;
    }

    const error = validateParts(this.rawDate(), this.dirtyParts(), this.submitted());

    return (
      !error ||
      error?.kind === 'invalidDate' ||
      error?.field === part ||
      !!error?.fields?.includes(part) ||
      (!this.value() && this.required())
    );
  }

  focus(options?: FocusOptions): void {
    this.dateInput()?.nativeElement.focus(options);
  }

  private revalidate(parts: DateParts): void {
    this.validatingExternalValue = true;

    try {
      this.rawDate.set(parts);
    } finally {
      this.validatingExternalValue = false;
    }
  }
}
