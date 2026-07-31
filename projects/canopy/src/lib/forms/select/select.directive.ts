import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  inject,
} from '@angular/core';
import { FormControl, FormGroupDirective, NgControl } from '@angular/forms';

import { isKeyDown, isKeyUp, keyName } from '../../utils/keyboard-keys';
import { LgErrorStateMatcher } from '../validation';
import { randomUniqueId } from '../../utils/unique-id';

@Directive({
  selector: '[lgSelect]',
  standalone: true,
})
export class LgSelectDirective {
  private static readonly FOCUSABLE_SELECTOR = [
    'a[href]',
    'button:not([disabled])',
    'input:not([disabled]):not([type="hidden"])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
  ].join(', ');

  private errorState = inject(LgErrorStateMatcher);
  private readonly selectElementRef = inject<ElementRef<HTMLSelectElement>>(ElementRef);
  private readonly uniqueId = randomUniqueId();
  private readonly fallbackControl = new FormControl('');
  private _name: string | undefined;

  control = inject(NgControl, { self: true, optional: true });
  controlContainer = inject(FormGroupDirective, {
    optional: true,
    host: true,
    skipSelf: true,
  });

  @HostBinding('class.lg-select') class = true;
  @HostBinding('class.lg-select--block')
  public get blockClass() {
    return this.block;
  }

  @HostBinding('attr.aria-invalid')
  @HostBinding('class.lg-select--error')
  public get errorClass() {
    const control = this.control ?? this.fallbackControl;

    return this.errorState.isControlInvalid(control, this.controlContainer ?? undefined);
  }

  @Input() block = false;

  @Input()
  @HostBinding('attr.name')
  get name(): string {
    return this._name ?? this.id;
  }

  set name(value: string) {
    this._name = value;
  }

  @Input()
  @HostBinding('id')
  id = `lg-select-${this.uniqueId}`;

  @Input()
  @HostBinding('attr.aria-describedby')
  ariaDescribedBy: string | null = null;

  @HostListener('keydown', [ '$event' ])
  onKeydown(event: KeyboardEvent): void {
    const selectElement: HTMLSelectElement = this.selectElementRef.nativeElement;

    if (selectElement.disabled) {
      return;
    }

    if (event.key === keyName.KEY_TAB) {
      this.handleTabNavigation(event, selectElement);

      return;
    }

    if (!isKeyDown(event) && !isKeyUp(event)) {
      return;
    }

    const previousSelectedIndex = selectElement.selectedIndex;

    Promise.resolve().then(() => this.syncSelectionOnOptionFocus(previousSelectedIndex));
  }

  @HostListener('document:keydown', [ '$event' ])
  onDocumentKeydown(event: KeyboardEvent): void {
    if (event.defaultPrevented || event.key !== keyName.KEY_TAB) {
      return;
    }

    const selectElement: HTMLSelectElement = this.selectElementRef.nativeElement;

    if (
      selectElement.disabled ||
      event.target === selectElement ||
      !this.isSelectEventContext(event, selectElement)
    ) {
      return;
    }

    this.handleTabNavigation(event, selectElement);
  }

  private handleTabNavigation(
    event: KeyboardEvent,
    selectElement: HTMLSelectElement,
  ): void {
    const target = this.getTabNavigationTarget(selectElement, event.shiftKey);

    selectElement.blur();

    if (!target) {
      return;
    }

    // Allow native popup close/blur cycle to settle before moving focus.
    setTimeout(() => target.focus());
  }

  private isSelectEventContext(
    event: KeyboardEvent,
    selectElement: HTMLSelectElement,
  ): boolean {
    const ownerDocument = selectElement.ownerDocument;

    return (
      event.target === selectElement || ownerDocument.activeElement === selectElement
    );
  }

  private getTabNavigationTarget(
    selectElement: HTMLSelectElement,
    isReverse: boolean,
  ): HTMLElement | null {
    const focusableElements = this.getFocusableElements(selectElement.ownerDocument);
    const currentIndex = focusableElements.indexOf(selectElement);

    if (currentIndex < 0) {
      return null;
    }

    const targetIndex = isReverse
      ? currentIndex - 1
      : currentIndex + 1;

    if (targetIndex < 0 || targetIndex >= focusableElements.length) {
      return null;
    }

    return focusableElements[targetIndex];
  }

  private getFocusableElements(ownerDocument: Document): Array<HTMLElement> {
    return Array.from(
      ownerDocument.querySelectorAll<HTMLElement>(LgSelectDirective.FOCUSABLE_SELECTOR),
    ).filter(element => this.isTabFocusable(element));
  }

  private isTabFocusable(element: HTMLElement): boolean {
    return !(
      element.hasAttribute('disabled') || element.getAttribute('aria-disabled') === 'true'
    );
  }

  private syncSelectionOnOptionFocus(previousSelectedIndex: number): void {
    const selectElement: HTMLSelectElement = this.selectElementRef.nativeElement;
    const nextSelectedIndex = selectElement.selectedIndex;

    if (nextSelectedIndex < 0 || nextSelectedIndex === previousSelectedIndex) {
      return;
    }

    for (let index = 0; index < selectElement.options.length; index++) {
      const option = selectElement.options.item(index);

      if (option) {
        option.selected = index === nextSelectedIndex;
      }
    }

    selectElement.dispatchEvent(new Event('change', { bubbles: true }));
  }
}
