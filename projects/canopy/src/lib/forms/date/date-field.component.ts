import {
  Component,
  ContentChild,
  Host,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  Self,
  SkipSelf,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgControl,
  ValidationErrors,
  Validators
} from '@angular/forms';

import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { LgDomService } from '../../utils/dom.service';
import { LgHintComponent } from '../hint/hint.component';
import { LgErrorStateMatcher } from '../validation/error-state-matcher';
import { LgValidationComponent } from '../validation/validation.component';
import { DateField } from './date-field.interface';

import isValid from 'date-fns/isValid';
import parseISO from 'date-fns/parseISO';
import omit from '../../utils/omit';

let nextUniqueId = 0;

const labelFieldMap = {
  date: 'day',
  month: 'month',
  year: 'year'
};

@Component({
  selector: 'lg-date-field',
  templateUrl: './date-field.component.html',
  styleUrls: ['./date-field.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LgDateFieldComponent
  implements OnInit, ControlValueAccessor, OnDestroy {
  @HostBinding('class.lg-date-field') class = true;

  private uniqueId = nextUniqueId++;
  dateFormGroup: FormGroup;
  date: FormControl;
  month: FormControl;
  year: FormControl;
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
    this.ariaDescribedBy = this.domService.toggleIdInStringProperty(
      this.ariaDescribedBy,
      this._hintElement,
      element
    );
    this._hintElement = element;
  }

  _validationElement: LgValidationComponent;
  @ContentChild(LgValidationComponent, { static: false })
  set errorContentElement(element: LgValidationComponent) {
    this.ariaDescribedBy = this.domService.toggleIdInStringProperty(
      this.ariaDescribedBy,
      this._validationElement,
      element
    );
    this._validationElement = element;
  }

  @ViewChild('dateFormDirective', { static: false })
  formGroupDirective: FormGroupDirective;

  constructor(
    private fb: FormBuilder,
    private domService: LgDomService,
    private errorState: LgErrorStateMatcher,
    @Self()
    @Optional()
    private ngControl: NgControl,
    @Optional()
    @Host()
    @SkipSelf()
    private parentFormGroupDirective: FormGroupDirective
  ) {
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnInit() {
    this.date = new FormControl(null, [
      Validators.required,
      Validators.pattern(/\d{1,2}/),
      Validators.min(1),
      Validators.max(31)
    ]);
    this.month = new FormControl(null, [
      Validators.required,
      Validators.pattern(/\d{1,2}/),
      Validators.min(1),
      Validators.max(12)
    ]);
    this.year = new FormControl(null, [
      Validators.required,
      Validators.pattern(/\d\d\d\d/)
    ]);
    this.dateFormGroup = new FormGroup(
      {
        date: this.date,
        month: this.month,
        year: this.year
      },
      {
        updateOn: 'blur'
      }
    );

    const validators = [this.validate.bind(this)];
    // append internal validators to external validators if applicable.
    if (this.ngControl.control.validator) {
      validators.push(this.ngControl.control.validator);
    }
    this.ngControl.control.setValidators(validators);
    this.ngControl.control.updateValueAndValidity();

    this.valueChanges = this.dateFormGroup.valueChanges.subscribe(
      (date: DateField) => {
        const day = date.date ? ('0' + date.date).slice(-2) : '';
        const month = date.month ? ('0' + date.month).slice(-2) : '';
        const year = date.year ? date.year : '';
        this.onChange(`${year}-${month}-${day}`);
      }
    );

    // submit the group when the parent form is submitted
    this.parentFormGroupDirective.ngSubmit
      .pipe(filter(({ type }) => type === 'submit'))
      .subscribe(event => {
        this.formGroupDirective.onSubmit(event);
        this.ngControl.control.updateValueAndValidity();
      });
  }

  isControlInvalid(control: NgControl, form: FormGroupDirective) {
    return this.errorState.isControlInvalid(control, form);
  }

  ngOnDestroy() {
    this.valueChanges.unsubscribe();
  }

  writeValue(dateString: string): void {
    if (!dateString) {
      return;
    }
    const [year, month, date] = dateString.split(/-/);
    this.dateFormGroup.setValue(
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

  validate(control: FormControl | FormGroup): ValidationErrors {
    this.date.setErrors(omit(this.date.errors, 'invalidDate'));
    this.month.setErrors(omit(this.month.errors, 'invalidDate'));
    this.year.setErrors(omit(this.year.errors, 'invalidDate'));

    const invalidFields: string[] = [];
    Object.keys(this.dateFormGroup.controls).forEach(fieldName => {
      if (
        this.dateFormGroup.controls[fieldName].invalid &&
        (this.dateFormGroup.controls[fieldName].dirty ||
          (this.formGroupDirective && this.formGroupDirective.submitted))
      ) {
        invalidFields.push(fieldName);
      }
    });

    const invalidFieldNames: string[] = [];
    const requiredFieldNames: string[] = [];
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

  onBlur() {
    if (this.dateFormGroup.touched) {
      this.onTouched();
    }
  }

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

  public setDisabledState(isDisabled: boolean) {
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
