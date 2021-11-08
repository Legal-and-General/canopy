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
  ViewEncapsulation,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgControl,
  ValidationErrors,
  Validator,
  Validators,
} from '@angular/forms';

import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { LgErrorStateMatcher } from '../validation/error-state-matcher';
import { LgDomService } from '../../utils/dom.service';
import { LgHintComponent } from '../hint';
import { SortCodeField } from './sort-code.interface';
import { LgValidationComponent } from '../validation';

let nextUniqueId = 0;

@Component({
  selector: 'lg-sort-code',
  templateUrl: './sort-code.component.html',
  styleUrls: ['./sort-code.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
/**
 * @deprecated LgSortCodeComponent is deprecated.
 * Please use the LgSortCodeDirective instead.
 */
export class LgSortCodeComponent
  implements OnInit, ControlValueAccessor, Validator, OnDestroy
{
  @HostBinding('class.lg-sort-code-field') class = true;

  private uniqueId = nextUniqueId++;
  sortCodeFormGroup: FormGroup;
  first: FormControl;
  second: FormControl;
  third: FormControl;
  subscriptions: Array<Subscription> = [];

  @Input() value: string;
  @Input() disabled: false;
  @Input() focus: boolean;
  @Input() labelId = `lg-input-sort-code-label-${this.uniqueId}`;
  @Input() ariaDescribedBy: string;

  private _hintElement: LgHintComponent;
  @ContentChild(LgHintComponent)
  set hintElement(element: LgHintComponent) {
    this.ariaDescribedBy = this.domService.toggleIdInStringProperty(
      this.ariaDescribedBy,
      this._hintElement,
      element,
    );
    this._hintElement = element;
  }

  private _validationElement: LgValidationComponent;
  @ContentChild(LgValidationComponent)
  set errorContentElement(element: LgValidationComponent) {
    this.ariaDescribedBy = this.domService.toggleIdInStringProperty(
      this.ariaDescribedBy,
      this._validationElement,
      element,
    );
    this._validationElement = element;
  }

  @ViewChild('sortCodeFormDirective')
  formGroupDirective: FormGroupDirective;

  constructor(
    private domService: LgDomService,
    private errorState: LgErrorStateMatcher,
    @Self()
    @Optional()
    private ngControl: NgControl,
    @Optional()
    @Host()
    @SkipSelf()
    private parentFormGroupDirective: FormGroupDirective,
  ) {
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
    this.first = new FormControl(null, [
      Validators.required,
      Validators.pattern(/^\d\d$/),
    ]);
    this.second = new FormControl(null, [
      Validators.required,
      Validators.pattern(/^\d\d$/),
    ]);
    this.third = new FormControl(null, [
      Validators.required,
      Validators.pattern(/^\d\d$/),
    ]);
    this.sortCodeFormGroup = new FormGroup(
      {
        first: this.first,
        second: this.second,
        third: this.third,
      },
      {
        updateOn: 'blur',
      },
    );
  }

  ngOnInit(): void {
    const validators = [this.validate.bind(this)];
    // append internal validators to external validators if applicable.
    if (this.ngControl?.control) {
      if (this.ngControl.control.validator) {
        validators.push(this.ngControl.control.validator);
      }
      this.ngControl.control.setValidators(validators);
      this.ngControl.control.updateValueAndValidity();
    }

    this.subscriptions.push(
      this.sortCodeFormGroup.valueChanges.subscribe((sortCode: SortCodeField) => {
        const first = sortCode.first || '';
        const second = sortCode.second || '';
        const third = sortCode.third || '';
        this.onChange(`${first}${second}${third}`);
      }),

      // submit the group when the parent form is submitted
      this.parentFormGroupDirective.ngSubmit
        .pipe(filter(({ type }) => type === 'submit'))
        .subscribe((event) => {
          this.formGroupDirective.onSubmit(event);
          this.ngControl.control.updateValueAndValidity();
        }),
    );
  }

  isControlInvalid(control: NgControl, form: FormGroupDirective): boolean {
    return this.errorState.isControlInvalid(control, form);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  writeValue(sortCode: string): void {
    if (!sortCode) {
      return;
    }

    this.sortCodeFormGroup.setValue(
      {
        first: sortCode.substr(0, 2),
        second: sortCode.substr(2, 2),
        third: sortCode.substr(4, 2),
      },
      {
        emitEvent: false,
      },
    );
  }

  validate(control: FormControl | FormGroup): ValidationErrors {
    this.first.setErrors(this.first.errors);
    this.second.setErrors(this.second.errors);
    this.third.setErrors(this.third.errors);

    const invalidFields: Array<string> = [];
    Object.keys(this.sortCodeFormGroup.controls).forEach((fieldName) => {
      if (
        this.sortCodeFormGroup.controls[fieldName].invalid &&
        (this.sortCodeFormGroup.controls[fieldName].dirty ||
          (this.formGroupDirective && this.formGroupDirective.submitted))
      ) {
        invalidFields.push(fieldName);
      }
    });

    const requiredFields = invalidFields.filter((fieldName) =>
      this.sortCodeFormGroup.controls[fieldName].hasError('required'),
    );

    const error: ValidationErrors = {};
    if (invalidFields.length) {
      error.invalidField = true;
    }

    if (
      requiredFields.length === 3 ||
      (this.formGroupDirective?.submitted && control?.value?.length !== 6)
    ) {
      delete error.invalidField;
      error.requiredField = true;
    }

    if (Object.keys(error).length) {
      return error;
    }
    return null;
  }

  onBlur(): void {
    if (this.sortCodeFormGroup.touched) {
      this.onTouched();
    }
  }

  onChange(sortCode: string): void {
    this.value = sortCode;
  }

  onTouched(_?: any): void {}

  registerOnChange(fn: (sortCode: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.first.disable();
      this.second.disable();
      this.third.disable();
    } else {
      this.first.enable();
      this.second.enable();
      this.third.enable();
    }
  }
}
