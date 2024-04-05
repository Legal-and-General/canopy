import {
  Component,
  ContentChild,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  Self,
  SkipSelf,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import {
  ControlValueAccessor,
  UntypedFormControl,
  UntypedFormGroup,
  FormGroupDirective,
  NgControl,
  ValidationErrors,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { isValid, parseISO } from 'date-fns';

import { LgDomService } from '../../utils/dom.service';
import { LgHintComponent } from '../hint/hint.component';
import { LgErrorStateMatcher } from '../validation/error-state-matcher';
import { LgValidationComponent } from '../validation/validation.component';
import omit from '../../utils/omit';
import { LgInputDirective } from '../input/input.directive';
import { LgMarginDirective } from '../../spacing/margin/margin.directive';
import { LgInputFieldComponent } from '../input/input-field.component';
import { LgLabelComponent } from '../label/label.component';
import { LgFocusDirective } from '../../focus/focus.directive';

import { DateField } from './date-field.interface';

let nextUniqueId = 0;

const labelFieldMap = {
  date: 'day',
  month: 'month',
  year: 'year',
};

@Component({
  selector: 'lg-date-field',
  templateUrl: './date-field.component.html',
  styleUrls: [ './date-field.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    LgFocusDirective,
    LgLabelComponent,
    ReactiveFormsModule,
    LgInputFieldComponent,
    LgMarginDirective,
    LgInputDirective,
  ],
})
export class LgDateFieldComponent implements OnInit, ControlValueAccessor, OnDestroy {
  private uniqueId = nextUniqueId++;
  dateFormGroup: UntypedFormGroup;
  date: UntypedFormControl;
  month: UntypedFormControl;
  year: UntypedFormControl;
  subscriptions: Array<Subscription> = [];
  _hintElement: LgHintComponent;
  _validationElement: LgValidationComponent;

  @Input() value: string;
  @Input() disabled = false;
  @Input() focus: boolean;
  @Input() dateId = `lg-input-date-${this.uniqueId++}`;
  @Input() monthId = `lg-input-month-${this.uniqueId++}`;
  @Input() yearId = `lg-input-year-${this.uniqueId++}`;
  @Input() ariaDescribedBy: string;

  @HostBinding('class.lg-date-field') class = true;

  @ContentChild(LgHintComponent)
  set hintElement(element: LgHintComponent) {
    this.ariaDescribedBy = this.domService.toggleIdInStringProperty(
      this.ariaDescribedBy,
      this._hintElement,
      element,
    );

    this._hintElement = element;
  }

  @ContentChild(LgValidationComponent)
  set errorContentElement(element: LgValidationComponent) {
    this.ariaDescribedBy = this.domService.toggleIdInStringProperty(
      this.ariaDescribedBy,
      this._validationElement,
      element,
    );

    this._validationElement = element;
  }

  @ViewChild('dateFormDirective')
  formGroupDirective: FormGroupDirective;

  constructor(
    private domService: LgDomService,
    private errorState: LgErrorStateMatcher,
    @Self()
    @Optional()
    private ngControl: NgControl,
    @Optional()
    @SkipSelf()
    private parentFormGroupDirective: FormGroupDirective,
  ) {
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }

    this.date = new UntypedFormControl(null, [
      Validators.required,
      Validators.pattern(/^\d{1,2}$/),
      Validators.min(1),
      Validators.max(31),
    ]);

    this.month = new UntypedFormControl(null, [
      Validators.required,
      Validators.pattern(/^\d{1,2}$/),
      Validators.min(1),
      Validators.max(12),
    ]);

    this.year = new UntypedFormControl(null, [
      Validators.required,
      Validators.pattern(/^\d\d\d\d$/),
    ]);

    this.dateFormGroup = new UntypedFormGroup(
      {
        date: this.date,
        month: this.month,
        year: this.year,
      },
      {
        updateOn: 'blur',
      },
    );
  }

  ngOnInit(): void {
    const validators = [ this.validate.bind(this) ];

    // append internal validators to external validators if applicable.
    if (this.ngControl && this.ngControl.control) {
      if (this.ngControl.control.validator) {
        validators.push(this.ngControl.control.validator);
      }

      this.ngControl.control.setValidators(validators);
      this.ngControl.control.updateValueAndValidity();
    }

    this.subscriptions.push(
      this.dateFormGroup.valueChanges.subscribe((date: DateField) => {
        const day = date.date
          ? ('0' + date.date).slice(-2)
          : '';
        const month = date.month
          ? ('0' + date.month).slice(-2)
          : '';
        const year = date.year
          ? date.year
          : '';

        const formatedDate = day || month || year
          ? `${year}-${month}-${day}`
          : '';

        this.onChange(formatedDate);
      }),

      // submit the group when the parent form is submitted
      this.parentFormGroupDirective.ngSubmit
        .pipe(filter(({ type }) => type === 'submit'))
        .subscribe(event => {
          this.formGroupDirective.onSubmit(event);
          this.ngControl.control.updateValueAndValidity();
        }),
    );
  }

  isControlInvalid(control: NgControl, form: FormGroupDirective): boolean {
    return this.errorState.isControlInvalid(control, form);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  writeValue(dateString: string): void {
    if (!dateString) {
      return;
    }

    const [ year, month, date ] = dateString.split(/-/);

    this.dateFormGroup.setValue(
      {
        date,
        month,
        year,
      },
      {
        emitEvent: false,
      },
    );
  }

  validate(control: UntypedFormControl | UntypedFormGroup): ValidationErrors {
    this.date.setErrors(omit(this.date.errors, 'invalidDate'));
    this.month.setErrors(omit(this.month.errors, 'invalidDate'));
    this.year.setErrors(omit(this.year.errors, 'invalidDate'));

    if (!this.date.value && !this.month.value && !this.year.value) {
      return null;
    }

    const invalidFields: Array<string> = [];

    Object.keys(this.dateFormGroup.controls).forEach(fieldName => {
      if (
        this.dateFormGroup.controls[fieldName].invalid &&
        (this.dateFormGroup.controls[fieldName].dirty ||
          (this.formGroupDirective && this.formGroupDirective.submitted))
      ) {
        invalidFields.push(fieldName);
      }
    });

    const invalidFieldNames: Array<string> = [];
    const requiredFieldNames: Array<string> = [];

    invalidFields.forEach(fieldName => {
      if (this.dateFormGroup.controls[fieldName].hasError('required')) {
        requiredFieldNames.push(labelFieldMap[fieldName]);
      } else {
        invalidFieldNames.push(labelFieldMap[fieldName]);
      }
    });

    const error: ValidationErrors = {};

    if (invalidFieldNames.length) {
      switch (invalidFieldNames.length) {
        case 1:
          error.invalidField = invalidFieldNames[0];
          break;
        case 2:
          error.invalidFields = invalidFieldNames;
          break;
        default:
          error.invalidDate = true;
          break;
      }
    } else if (requiredFieldNames.length) {
      switch (requiredFieldNames.length) {
        case 1:
          error.requiredField = requiredFieldNames[0];
          break;
        case 2:
          error.requiredFields = requiredFieldNames;
          break;
      }
    } else if (
      ((this.date.valid && this.month.valid && this.year.valid) ||
        (this.formGroupDirective && this.formGroupDirective.submitted)) &&
      !isValid(parseISO(control.value))
    ) {
      this.date.setErrors(error);
      this.month.setErrors(error);
      this.year.setErrors(error);
      error.invalidDate = true;
    }

    if (Object.keys(error).length) {
      return error;
    }

    return null;
  }

  onBlur(): void {
    if (this.dateFormGroup.touched) {
      this.onTouched();
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public onTouched(_?: any) {}

  public onChange(date: string) {
    this.value = date;
  }

  registerOnChange(fn: (date: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.date.disable();
      this.month.disable();
      this.year.disable();
    } else {
      this.date.enable();
      this.month.enable();
      this.year.enable();
    }
  }
}
