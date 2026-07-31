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

import { randomUniqueId } from '../../utils';
import { LgHintComponent } from '../hint';
import { LgLabelComponent } from '../label';
import { LgValidationComponent } from '../validation';
import { LgButtonComponent } from '../../button';
import { LgSuffixDirective } from '../../suffix';
import { LgPrefixDirective } from '../../prefix';
import { LgInputFieldExternalButtonDirective } from '../input-field-external-button';

import { LgInputDirective } from './input.directive';

interface LgInputAffix {
  id: string;
  hostElement: HTMLElement;
}

@Component({
  selector: 'lg-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: [ './input-field.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  imports: [
    LgLabelComponent,
    LgHintComponent,
    LgValidationComponent,
    LgButtonComponent,
    LgSuffixDirective,
    LgPrefixDirective,
    LgInputDirective,
    LgInputFieldExternalButtonDirective,
  ],
})
export class LgInputFieldComponent implements AfterContentInit, OnDestroy {
  private _id = randomUniqueId();
  private _labelElement: LgLabelComponent;
  private _inputElement: LgInputDirective;
  private _hintElement: LgHintComponent;
  private _validationElement: LgValidationComponent;
  private _suffixChildren: QueryList<LgSuffixDirective>;
  private _prefixChildren: QueryList<LgPrefixDirective>;
  private _externalButtonChildren: QueryList<LgInputFieldExternalButtonDirective>;
  /*
  The input field control element mimics the border of the input field.
  This allows us to add buttons and icons inside the input field.
  Lack of IE11 support for :focus-within necessitates us doing this in JS
*/
  private hasFocus = false;
  private hasHover = false;
  private disabledStateChanges: Subscription;

  @Input() id = `lg-input-${this._id}`;
  @Input() showLabel = true;
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

  @ViewChild(LgLabelComponent, { static: true })
  set labelElement(element: LgLabelComponent) {
    this._labelElement = element;
    this._labelElement.for = this.id;
  }

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

  @ContentChild(LgHintComponent)
  set hintElement(element: LgHintComponent) {
    this._hintElement = element;
    this.updateAriaDescribedBy();
  }

  @ContentChild(LgValidationComponent)
  set errorElement(element: LgValidationComponent) {
    this._validationElement = element;
    this.updateAriaDescribedBy();
  }

  @ContentChildren(LgButtonComponent, { descendants: true })
  allButtonElements: QueryList<LgButtonComponent>;

  @ContentChildren(LgSuffixDirective)
  set suffixChildren(elements: QueryList<LgSuffixDirective>) {
    this._suffixChildren = elements;
    this.updateAriaDescribedBy();
  }
  get suffixChildren() {
    return this._suffixChildren;
  }

  @ContentChildren(LgPrefixDirective)
  set prefixChildren(elements: QueryList<LgPrefixDirective>) {
    this._prefixChildren = elements;
    this.updateAriaDescribedBy();
  }
  get prefixChildren() {
    return this._prefixChildren;
  }

  @ContentChildren(LgInputFieldExternalButtonDirective)
  set externalButtonChildren(elements: QueryList<LgInputFieldExternalButtonDirective>) {
    this._externalButtonChildren = elements;
  }
  get externalButtonChildren() {
    return this._externalButtonChildren;
  }

  ngAfterContentInit(): void {
    if (this.inputElement?.control && this.allButtonElements) {
      const updateDisabledState = (status: string) => {
        const isDisabled = status === 'DISABLED';

        this.allButtonElements.forEach(button => {
          button.disabled = isDisabled;
        });
      };

      updateDisabledState(this.inputElement.control.status);

      this.disabledStateChanges =
        this.inputElement.control.statusChanges.subscribe(updateDisabledState);
    }
  }

  ngOnDestroy(): void {
    if (this.disabledStateChanges) {
      this.disabledStateChanges.unsubscribe();
    }
  }

  onFocusIn($event: FocusEvent): void {
    const targetNode = ($event.target as HTMLElement).nodeName;

    if (targetNode === 'INPUT' || targetNode === 'TEXTAREA') {
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

  private updateAriaDescribedBy(): void {
    if (!this._inputElement) {
      return;
    }

    const ids = [
      this._hintElement?.id,
      this._validationElement?.id,
      ...this.getDescriptiveAffixIds(this._prefixChildren),
      ...this.getDescriptiveAffixIds(this._suffixChildren),
    ].filter((id, index, values) => Boolean(id) && values.indexOf(id) === index);

    this._inputElement.ariaDescribedBy = ids.length > 0
      ? ids.join(' ')
      : null;
  }

  private getDescriptiveAffixIds<T extends LgInputAffix>(
    affixes: QueryList<T> | undefined,
  ): Array<string> {
    return (
      affixes
        ?.toArray()
        .filter(affix => !this.isInteractiveAffix(affix.hostElement))
        .map(affix => affix.id) ?? []
    );
  }

  private isInteractiveAffix(element: HTMLElement): boolean {
    const interactiveTags = [ 'A', 'BUTTON', 'INPUT', 'SELECT', 'TEXTAREA' ];

    if (interactiveTags.includes(element.tagName)) {
      return true;
    }

    return element.tabIndex >= 0;
  }
}
