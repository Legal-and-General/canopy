import {
  Component,
  ContentChild,
  HostBinding,
  Input,
  ViewChild,
  ViewEncapsulation,
  inject,
} from '@angular/core';

import { LgDomService, randomUniqueId } from '../../utils';
import { LgHintComponent } from '../hint';
import { LgLabelComponent } from '../label';
import { LgErrorStateMatcher } from '../validation';
import { LgValidationComponent, LgValidationWrapperDirective } from '../validation';
import { LgIconComponent } from '../../icon';

import { LgSelectDirective } from './select.directive';

@Component({
  selector: 'lg-select-field',
  templateUrl: './select-field.component.html',
  styleUrls: [ './select-field.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  imports: [ LgLabelComponent, LgIconComponent ],
})
export class LgSelectFieldComponent {
  private errorState = inject(LgErrorStateMatcher);
  private domService = inject(LgDomService);
  private _describedByValidation: { id: string };

  @Input() id = `lg-select-${randomUniqueId()}`;
  @HostBinding('class.lg-select-field') class = true;
  @HostBinding('class.lg-select-field--error') get errorClass() {
    return this.errorState.isControlInvalid(
      this._selectElement.control,
      this._selectElement.controlContainer,
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

  _labelElement: LgLabelComponent;
  @ViewChild(LgLabelComponent, { static: true })
  set labelElement(element: LgLabelComponent) {
    this._labelElement = element;
    this._labelElement.for = this.id;
  }

  _selectElement: LgSelectDirective;
  @ContentChild(LgSelectDirective, { static: true })
  set selectElement(element: LgSelectDirective) {
    if (!element) {
      return;
    }

    this._selectElement = element;
    this._selectElement.id = this.id;
  }

  _hintElement: LgHintComponent;
  @ContentChild(LgHintComponent)
  set hintElement(element: LgHintComponent) {
    this._selectElement.ariaDescribedBy = this.domService.toggleIdInStringProperty(
      this._selectElement.ariaDescribedBy,
      this._hintElement,
      element,
    );

    this._hintElement = element;
  }

  _validationElement: LgValidationComponent;
  @ContentChild(LgValidationComponent, { descendants: true })
  set errorElement(element: LgValidationComponent) {
    this._validationElement = element;
    this.updateAriaDescribedBy();
  }

  _validationWrapperElement: LgValidationWrapperDirective;
  @ContentChild(LgValidationWrapperDirective)
  set errorWrapperElement(element: LgValidationWrapperDirective) {
    this._validationWrapperElement = element;
    this.updateAriaDescribedBy();
  }

  private updateAriaDescribedBy(): void {
    if (!this._selectElement) {
      return;
    }

    const element = this._validationElement ?? this._validationWrapperElement ?? null;

    if (element === this._describedByValidation) {
      return;
    }

    this._selectElement.ariaDescribedBy = this.domService.toggleIdInStringProperty(
      this._selectElement.ariaDescribedBy,
      this._describedByValidation,
      element,
    );

    this._describedByValidation = element;
  }
}
