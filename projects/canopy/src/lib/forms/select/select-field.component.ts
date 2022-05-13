import {
  Component,
  ContentChild,
  HostBinding,
  Input,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

import { LgDomService } from '../../utils/dom.service';
import { LgHintComponent } from '../hint/hint.component';
import { LgLabelComponent } from '../label/label.component';
import { LgErrorStateMatcher } from '../validation/error-state-matcher';
import { LgValidationComponent } from '../validation/validation.component';

import { LgSelectDirective } from './select.directive';

let nextUniqueId = 0;

@Component({
  selector: 'lg-select-field',
  templateUrl: './select-field.component.html',
  styleUrls: [ './select-field.component.scss' ],
  encapsulation: ViewEncapsulation.None,
})
export class LgSelectFieldComponent {
  @Input() id = `lg-select-${nextUniqueId++}`;
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
    this._selectElement = element;
    this._selectElement.id = this.id;
  }

  _hintElement: LgHintComponent;
  @ContentChild(LgHintComponent)
  set hintElement(element: LgValidationComponent) {
    this._selectElement.ariaDescribedBy = this.domService.toggleIdInStringProperty(
      this._selectElement.ariaDescribedBy,
      this._hintElement,
      element,
    );

    this._hintElement = element;
  }

  _validationElement: LgValidationComponent;
  @ContentChild(LgValidationComponent)
  set errorElement(element: LgValidationComponent) {
    this._selectElement.ariaDescribedBy = this.domService.toggleIdInStringProperty(
      this._selectElement.ariaDescribedBy,
      this._validationElement,
      element,
    );

    this._validationElement = element;
  }

  constructor(
    private errorState: LgErrorStateMatcher,
    private domService: LgDomService,
  ) {}
}
