import {
  Component,
  ContentChild,
  HostBinding,
  Input,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';

import { LgDomService } from '../../utils/dom.service';
import { LgHintComponent } from '../hint/hint.component';
import { LgLabelComponent } from '../label/label.component';
import { LgErrorStateMatcher } from '../validation/error-state-matcher';
import { LgValidationComponent } from '../validation/validation.component';
import { LgInputDirective } from './input.directive';

let nextUniqueId = 0;

@Component({
  selector: 'lg-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LgInputFieldComponent {
  @Input() id = `lg-input-${nextUniqueId++}`;
  @Input() public set block(block: boolean) {
    if (this._inputElement) {
      this._inputElement.block = block;
    }
  }

  @HostBinding('class.lg-input-field') class = true;

  _labelElement: LgLabelComponent;
  @ViewChild(LgLabelComponent, { static: true })
  set labelElement(element: LgLabelComponent) {
    this._labelElement = element;
    this._labelElement.for = this.id;
  }

  _inputElement: LgInputDirective;
  @ContentChild(LgInputDirective, { static: true })
  set inputElement(element: LgInputDirective) {
    if (!element) {
      return;
    }
    this._inputElement = element;
    this._inputElement.id = this.id;
  }

  _hintElement: LgHintComponent;
  @ContentChild(LgHintComponent, { static: false })
  set hintElement(element: LgHintComponent) {
    this._inputElement.ariaDescribedBy = this.domService.toggleIdInStringProperty(
      this._inputElement.ariaDescribedBy,
      this._hintElement,
      element
    );
    this._hintElement = element;
  }

  _validationElement: LgValidationComponent;
  @ContentChild(LgValidationComponent, { static: false })
  set errorElement(element: LgValidationComponent) {
    this._inputElement.ariaDescribedBy = this.domService.toggleIdInStringProperty(
      this._inputElement.ariaDescribedBy,
      this._validationElement,
      element
    );
    this._validationElement = element;
  }

  constructor(private domService: LgDomService) {}
}
