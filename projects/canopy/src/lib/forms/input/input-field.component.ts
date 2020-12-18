import {
  AfterContentInit,
  Component,
  ContentChild,
  ContentChildren,
  HostBinding,
  Input,
  OnDestroy,
  QueryList,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

import { Subscription } from 'rxjs';

import { LgDomService } from '../../utils/dom.service';
import { LgHintComponent } from '../hint/hint.component';
import { LgLabelComponent } from '../label/label.component';
import { LgValidationComponent } from '../validation/validation.component';
import { LgInputDirective } from './input.directive';
import { LgButtonComponent } from '../../button';
import { LgSuffixDirective } from '../../suffix/suffix.directive';
import { LgPrefixDirective } from '../../prefix/prefix.directive';

let nextUniqueId = 0;

@Component({
  selector: 'lg-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LgInputFieldComponent implements AfterContentInit, OnDestroy {
  private _id = nextUniqueId++;

  @Input() public set block(block: boolean) {
    if (this._inputElement) {
      this._inputElement.block = block;
    }
  }

  @HostBinding('class.lg-input-field') class = true;

  @HostBinding('class.lg-input-field--focus')
  get focusClass(): boolean {
    return this.hasFocus;
  }

  @HostBinding('class.lg-input-field--hover')
  get hoverClass(): boolean {
    return this.hasHover;
  }

  @HostBinding('class.lg-input-field--error')
  get errorClass(): boolean {
    return this._inputElement.errorClass;
  }

  @HostBinding('class.lg-input-field--block')
  get blockClass(): boolean {
    return this._inputElement.block;
  }

  @HostBinding('class.lg-input-field--disabled')
  get disabledClass(): boolean {
    return this._inputElement.control && this._inputElement.control.status === 'DISABLED';
  }

  private _labelElement: LgLabelComponent;
  @ViewChild(LgLabelComponent, { static: true })
  set labelElement(element: LgLabelComponent) {
    this._labelElement = element;
    this._labelElement.for = this.id;
  }

  private _inputElement: LgInputDirective;
  @ContentChild(LgInputDirective, { static: true })
  set inputElement(element: LgInputDirective) {
    if (!element) {
      return;
    }
    this._inputElement = element;
    this._inputElement.id = this.id;
  }
  get inputElement(): LgInputDirective {
    return this._inputElement;
  }

  private _hintElement: LgHintComponent;
  @ContentChild(LgHintComponent)
  set hintElement(element: LgHintComponent) {
    this.inputElement.ariaDescribedBy = this.domService.toggleIdInStringProperty(
      this.inputElement.ariaDescribedBy,
      this._hintElement,
      element,
    );
    this._hintElement = element;
  }

  private _validationElement: LgValidationComponent;
  @ContentChild(LgValidationComponent)
  set errorElement(element: LgValidationComponent) {
    this.inputElement.ariaDescribedBy = this.domService.toggleIdInStringProperty(
      this.inputElement.ariaDescribedBy,
      this._validationElement,
      element,
    );
    this._validationElement = element;
  }

  @ContentChild(LgButtonComponent) buttonElement: LgButtonComponent;

  private _suffixChildren: QueryList<LgSuffixDirective>;
  @ContentChildren(LgSuffixDirective)
  set suffixChildren(elements: QueryList<LgSuffixDirective>) {
    elements.forEach((element) => {
      this.inputElement.ariaDescribedBy = this.domService.toggleIdInStringProperty(
        this.inputElement.ariaDescribedBy,
        this._validationElement,
        element,
      );
    });
    this._suffixChildren = elements;
  }
  get suffixChildren() {
    return this._suffixChildren;
  }

  private _prefixChildren: QueryList<LgSuffixDirective>;
  @ContentChildren(LgPrefixDirective)
  set prefixChildren(elements: QueryList<LgSuffixDirective>) {
    elements.forEach((element) => {
      this.inputElement.ariaDescribedBy = this.domService.toggleIdInStringProperty(
        this.inputElement.ariaDescribedBy,
        this._validationElement,
        element,
      );
    });
    this._prefixChildren = elements;
  }
  get prefixChildren() {
    return this._prefixChildren;
  }

  @Input() id = `lg-input-${this._id++}`;

  constructor(private domService: LgDomService) {}

  /*
    The input field control element mimics the border of the input field.
    This allows us to add buttons and icons inside the input field.
    Lack of IE11 support for :focus-within necessitates us doing this in JS
  */
  private hasFocus = false;
  private hasHover = false;
  private disabledStateChanges: Subscription;

  ngAfterContentInit(): void {
    if (this.inputElement && this.buttonElement) {
      this.inputElement.control.statusChanges.subscribe((status) => {
        this.buttonElement.disabled = status === 'DISABLED';
      });
    }
  }

  ngOnDestroy(): void {
    if (this.disabledStateChanges) {
      this.disabledStateChanges.unsubscribe();
    }
  }

  onFocusIn($event: FocusEvent): void {
    if (($event.target as HTMLElement).nodeName === 'INPUT') {
      this.hasFocus = true;
    }
  }

  onFocusOut(): void {
    this.hasFocus = false;
  }

  onMouseOver(): void {
    this.hasHover = true;
  }

  onMouseOut(): void {
    this.hasHover = false;
  }
}
