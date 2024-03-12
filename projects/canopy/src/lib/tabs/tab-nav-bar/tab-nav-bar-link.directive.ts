import {
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '[lgTabNavBarLink]',
  standalone: true,
})
export class LgTabNavBarLinkDirective {
  private _isActive = false;
  private _isFocused = false;
  private _index = 0;
  isKeyboardEvent = false;

  @Output() selectedTabIndexChange: EventEmitter<number> = new EventEmitter();

  @Input()
  get index(): number {
    return this._index;
  }
  set index(index: number) {
    this._index = index;
  }

  @Input()
  get isActive(): boolean {
    return this._isActive;
  }
  set isActive(isActive: boolean) {
    if (isActive !== this._isActive) {
      this._isActive = isActive;
    }
  }

  @Input()
  get isFocused(): boolean {
    return this._isFocused;
  }
  set isFocused(isFocused: boolean) {
    this._isFocused = isFocused;
  }

  @HostBinding('class.lg-tab-nav-bar-link--selected')
  get selectedClass(): boolean {
    return this._isActive;
  }
  @HostBinding('attr.aria-selected')
  get ariaSelected(): boolean | null {
    return this._isActive
      ? true
      : null;
  }
  @HostBinding('attr.keyboard-focus')
  get keyboardFocus(): boolean | null {
    return this._isFocused && this.isKeyboardEvent
      ? true
      : null;
  }
  @HostBinding('attr.role') ariaRole = 'tab';
  @HostBinding('class.lg-tab-nav-bar-link') class = true;
  @HostBinding('attr.tabIndex')
  get tabIndex(): string | null {
    return this._isActive
      ? null
      : '-1';
  }

  constructor(private ref: ElementRef) {}

  @HostListener('click') onClick(): void {
    this.isActive = true;
    this.selectedTabIndexChange.emit(this.index);
  }
  @HostListener('keyup') onKeyUp(): void {
    this.isKeyboardEvent = true;
  }
  @HostListener('blur') onBlur(): void {
    this.isKeyboardEvent = false;
    this.isFocused = false;
  }
  @HostListener('focus') onFocus(): void {
    this.isFocused = true;
  }

  selectByKeyboard(): void {
    this.ref.nativeElement.focus();
    this.isKeyboardEvent = true;
    this.ref.nativeElement.click();
  }
}
