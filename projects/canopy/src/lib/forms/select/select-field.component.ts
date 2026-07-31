import {
  Component,
  ContentChild,
  HostBinding,
  Input,
  ViewChild,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { FormControl } from '@angular/forms';

import { randomUniqueId } from '../../utils/unique-id';
import { LgHintComponent } from '../hint';
import { LgLabelComponent } from '../label';
import { LgErrorStateMatcher } from '../validation';
import { LgValidationComponent } from '../validation';
import { LgIconComponent } from '../../icon';

import { LgSelectDirective } from './select.directive';

type LgSelectControl = Pick<
  LgSelectDirective,
  'ariaDescribedBy' | 'block' | 'control' | 'controlContainer' | 'id'
>;

@Component({
  selector: 'lg-select-field',
  templateUrl: './select-field.component.html',
  styleUrls: [ './select-field.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  imports: [ LgLabelComponent, LgIconComponent ],
})
export class LgSelectFieldComponent {
  private errorState = inject(LgErrorStateMatcher);
  private readonly uniqueId = randomUniqueId();
  private readonly fallbackControl = new FormControl('');

  @Input() id = `lg-select-${this.uniqueId}`;
  @HostBinding('class.lg-select-field') class = true;
  @HostBinding('class.lg-select-field--error') get errorClass() {
    if (!this._selectElement) {
      return false;
    }

    const control = this._selectElement.control ?? this.fallbackControl;

    return this.errorState.isControlInvalid(
      control,
      this._selectElement.controlContainer ?? undefined,
    );
  }

  _block = false;
  @Input()
  public set block(block: boolean) {
    if (this._selectElement) {
      this._selectElement.block = block;
    }

    this._block = block;
  }
  public get block() {
    return this._block;
  }

  _labelElement?: LgLabelComponent;
  @ViewChild(LgLabelComponent, { static: true })
  set labelElement(element: LgLabelComponent) {
    this._labelElement = element;
    this._labelElement.for = this.id;
  }

  _selectElement?: LgSelectControl;
  @ContentChild(LgSelectDirective, { static: true })
  set nativeSelectElement(element: LgSelectDirective) {
    this.registerSelectElement(element);
  }

  _hintElement?: LgHintComponent;
  @ContentChild(LgHintComponent)
  set hintElement(element: LgHintComponent) {
    this._hintElement = element;
    this.updateAriaDescribedBy();
  }

  _validationElement?: LgValidationComponent;
  @ContentChild(LgValidationComponent)
  set errorElement(element: LgValidationComponent) {
    this._validationElement = element;
    this.updateAriaDescribedBy();
  }

  private updateAriaDescribedBy(): void {
    if (!this._selectElement) {
      return;
    }

    const ids = [ this._hintElement?.id, this._validationElement?.id ].filter(
      (id, index, values) => Boolean(id) && values.indexOf(id) === index,
    );

    this._selectElement.ariaDescribedBy = ids.length > 0
      ? ids.join(' ')
      : null;
  }

  private registerSelectElement(element: LgSelectControl | undefined): void {
    if (!element) {
      return;
    }

    this._selectElement = element;
    this._selectElement.id = this.id;
    this._selectElement.block = this._block;
    this.updateAriaDescribedBy();
  }
}
