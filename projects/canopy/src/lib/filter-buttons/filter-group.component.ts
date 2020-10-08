import {
  Component,
  ContentChildren,
  forwardRef,
  HostBinding,
  Input,
  Optional,
  QueryList,
  Self,
  ViewEncapsulation,
  Host,
  SkipSelf,
  ContentChild,
  HostListener,
} from '@angular/core';
import {
  ControlValueAccessor,
  NgControl,
  FormGroupDirective,
  FormArray,
  FormControl,
} from '@angular/forms';

import { LgErrorStateMatcher } from '../forms/validation/error-state-matcher';
import { LgValidationComponent } from '../forms/validation/validation.component';
import { LgFilterButtonComponent } from './filter-button/filter-button.component';
import { FilterVariant } from './filter-button.interface';
import { LgDomService } from '../utils/dom.service';

let nextUniqueId = 0;

@Component({
  selector: 'lg-filter-group',
  templateUrl: './filter-group.component.html',
  styleUrls: ['./filter-group.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LgFilterGroupComponent implements ControlValueAccessor {
  @HostBinding('class.lg-filter-group--error') get errorClass() {
    if (this.variant === 'select-one') {
      return this.errorState.isControlInvalid(this.control, this.controlContainer);
    }
  }
  @ContentChildren(
    forwardRef(() => LgFilterButtonComponent),
    {
      descendants: true,
    },
  )
  set options(options: QueryList<LgFilterButtonComponent>) {
    if (this.variant === 'select-one') {
      options.toArray().forEach((option: LgFilterButtonComponent) => {
        option.control = this.control;
      });
    }
    this._options = options;
  }
  get options(): QueryList<LgFilterButtonComponent> {
    return this._options;
  }
  @ContentChild(LgValidationComponent, { static: false })
  set errorElement(element: LgValidationComponent) {
    this.ariaDescribedBy = this.domService.toggleIdInStringProperty(
      this.ariaDescribedBy,
      this._validationElement,
      element,
    );
    this._validationElement = element;
  }
  @Input()
  get value() {
    return this._value;
  }
  set value(value) {
    this._value = value;
    this.onChange(value);
    if (this.options) {
      const selectedFilter = this.options.find(option => option.value === value);
      if (selectedFilter && !selectedFilter.checked) {
        selectedFilter.checked = true;
      }
    }
  }

  @Input()
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
    this._updateFilterButtonNames();
  }

  constructor(
    @Self() @Optional() private control: NgControl,
    private errorState: LgErrorStateMatcher,
    @Optional()
    @Host()
    @SkipSelf()
    private controlContainer: FormGroupDirective,
    private domService: LgDomService,
  ) {
    if (this.control != null) {
      this.control.valueAccessor = this;
    }
  }
  private _name = `lg-filter-group-${nextUniqueId++}`;

  @Input() id = `lg-filter-group-id-${nextUniqueId++}`;
  @Input() disabled = false;
  @Input() valueArrayName: string;
  @Input() ariaDescribedBy: string;
  @Input() variant: FilterVariant = 'select-one';

  @HostBinding('class.lg-filter-group') class = true;

  _options: QueryList<LgFilterButtonComponent>;

  _validationElement: LgValidationComponent;

  _value: string = null;

  @HostListener('change', ['$event'])
  onCheckChange(event) {
    if (this.variant === 'select-multiple' && this.valueArrayName) {
      const formArray: FormArray = this.controlContainer.control.get(
        this.valueArrayName,
      ) as FormArray;

      if (event.target.checked) {
        formArray.push(new FormControl(event.target.value));
      } else {
        formArray.controls.forEach((ctrl: FormControl, i) => {
          if (ctrl.value === event.target.value) {
            formArray.removeAt(i);
            return;
          }
        });
      }
    }
  }

  public onChange(value: string) {
    this._value = value;
  }

  public onTouched(_?: any) {}

  public writeValue(obj: string): void {
    this.value = obj;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  private _updateFilterButtonNames(): void {
    if (this.variant === 'select-one') {
      if (this.options) {
        this.options.forEach(option => {
          option.name = this.name;
        });
      }
    }
  }

  public setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }
}
