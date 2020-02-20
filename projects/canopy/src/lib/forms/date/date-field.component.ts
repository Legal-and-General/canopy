import {
  Component,
  ContentChild,
  forwardRef,
  HostBinding,
  Input,
  OnDestroy,
  QueryList,
  ViewChildren,
  ViewEncapsulation
} from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  FormGroup,
  NG_VALUE_ACCESSOR
} from '@angular/forms';

import { Subscription } from 'rxjs';

import { LgHintComponent } from '../hint/hint.component';
import { LgInputDirective } from '../input/input.directive';

interface DateField {
  date?: string;
  month?: number;
  year?: number;
}

let nextUniqueId = 0;
@Component({
  selector: 'lg-date-field',
  templateUrl: './date-field.component.html',
  styleUrls: ['./date-field.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LgDateFieldComponent),
      multi: true
    }
  ]
})
export class LgDateFieldComponent implements ControlValueAccessor, OnDestroy {
  @HostBinding('class.lg-date-field') class = true;

  uniqueId = nextUniqueId++;
  dateForm: FormGroup;
  valueChanges: Subscription;

  @Input() value: string;
  @Input() disabled = false;
  @Input() dateId = `lg-input-date-${this.uniqueId++}`;
  @Input() monthId = `lg-input-month-${this.uniqueId++}`;
  @Input() yearId = `lg-input-year-${this.uniqueId++}`;
  @Input() ariaDescribedBy: string;

  _hintElement: LgHintComponent;
  @ContentChild(LgHintComponent, { static: false })
  set hintElement(element: LgHintComponent) {
    this.ariaDescribedBy = element.id;
  }

  @ViewChildren(LgInputDirective) inputs: QueryList<LgInputDirective>;

  constructor(public fb: FormBuilder) {
    this.dateForm = this.fb.group({
      date: null,
      month: null,
      year: null
    });
    this.valueChanges = this.dateForm.valueChanges.subscribe(
      (date: DateField) => {
        this.onChange(`${date.year}-${date.month}-${date.date}`);
      }
    );
  }

  ngOnDestroy() {
    this.valueChanges.unsubscribe();
  }

  writeValue(dateString: string): void {
    const [year, month, date] = dateString.split(/-/);
    this.dateForm.setValue(
      {
        date,
        month,
        year
      },
      {
        emitEvent: false
      }
    );
  }

  public onTouched(_?: any) {}

  public onChange(value: string) {
    this.value = value;
  }

  registerOnChange(fn: (date: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
    this.inputs.forEach(input => {
      input.disabled = isDisabled;
    });
  }
}
