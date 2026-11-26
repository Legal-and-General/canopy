import { Directive, ElementRef, HostListener, inject } from '@angular/core';

import { isKeyDown, isKeyUp, keyName } from '../../utils/keyboard-keys';

@Directive()
export abstract class LgSelectKeyboard {
  private static readonly FOCUSABLE_SELECTOR = [
    'a[href]',
    'button:not([disabled])',
    'input:not([disabled]):not([type="hidden"])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
  ].join(', ');

  private readonly selectElementRef = inject<ElementRef<HTMLSelectElement>>(ElementRef);

  @HostListener('keydown', [ '$event' ])
  onKeydown(event: KeyboardEvent): void {
    const selectElement = this.selectElementRef.nativeElement;

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

    const selectElement = this.selectElementRef.nativeElement;

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
      ownerDocument.querySelectorAll<HTMLElement>(LgSelectKeyboard.FOCUSABLE_SELECTOR),
    ).filter(element => this.isTabFocusable(element));
  }

  private isTabFocusable(element: HTMLElement): boolean {
    return !(
      element.hasAttribute('disabled') || element.getAttribute('aria-disabled') === 'true'
    );
  }

  private syncSelectionOnOptionFocus(previousSelectedIndex: number): void {
    const selectElement = this.selectElementRef.nativeElement;
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

    this.notifySelectionChanged(selectElement);
  }

  protected notifySelectionChanged(selectElement: HTMLSelectElement): void {
    selectElement.dispatchEvent(new Event('change', { bubbles: true }));
  }
}
