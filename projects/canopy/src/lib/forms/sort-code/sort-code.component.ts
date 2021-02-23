import {
  Component,
  ContentChild,
  HostBinding,
  Input,
  OnInit,
  Optional,
  Self,
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
export class LgSortCodeComponent implements OnInit, ControlValueAccessor {
  @HostBinding('class.lg-sort-code-field') class = true;

  private uniqueId = nextUniqueId++;
  sortCodeFormGroup: FormGroup;
  first: FormControl;
  second: FormControl;
  third: FormControl;
  valueChanges: Subscription;
  hasError: boolean;

  @Input() value: string;
  @Input() disabled: false;
  @Input() focus: boolean;
  @Input() labelId = `lg-input-sort-code-label-${this.uniqueId}`;
  @Input() firstId = `lg-input-sort-code-first-${this.uniqueId}`;
  @Input() secondId = `lg-input-sort-code-second-${this.uniqueId}`;
  @Input() thirdId = `lg-input-sort-code-third-${this.uniqueId}`;
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
    // append internal validators to external validators if applicable.
    if (this.ngControl && this.ngControl.control) {
      this.ngControl.control.setValidators([this.validate.bind(this)]);
      this.ngControl.control.updateValueAndValidity();
    }

    this.valueChanges = this.sortCodeFormGroup.valueChanges.subscribe(
      (sortCode: SortCodeField) => {
        const first = sortCode.first || '';
        const second = sortCode.second || '';
        const third = sortCode.third || '';
        this.onChange(`${first}${second}${third}`);
      },
    );

    // submit the group when the parent form is submitted
    this.parentFormGroupDirective.ngSubmit
      .pipe(filter(({ type }) => type === 'submit'))
      .subscribe((event) => {
        this.formGroupDirective.onSubmit(event);
        this.ngControl.control.updateValueAndValidity();
      });
  }

  isControlInvalid(control: NgControl, form: FormGroupDirective): boolean {
    return this.errorState.isControlInvalid(control, form);
  }

  writeValue(sortCode: string): void {
    if (!sortCode) {
      return;
    }

    this.sortCodeFormGroup.setValue({
      first: sortCode.substr(0, 2),
      second: sortCode.substr(2, 2),
      third: sortCode.substr(4, 2),
    });
  }

  validate(): ValidationErrors {
    const errors: ValidationErrors = {};
    Object.keys(this.sortCodeFormGroup.controls).forEach((fieldName) => {
      if (
        this.sortCodeFormGroup.controls[fieldName].invalid &&
        (this.sortCodeFormGroup.controls[fieldName].dirty ||
          (this.formGroupDirective && this.formGroupDirective.submitted))
      ) {
        errors.invalidField = true;
      }
    });
    if (Object.keys(errors).length) {
      return errors;
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
