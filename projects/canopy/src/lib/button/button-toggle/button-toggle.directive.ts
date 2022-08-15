import {
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  selector: '[lgButtonToggle]',
})
export class LgButtonToggleDirective {
  private _isActive = false;
  id: string;
  ariaControls: string;

  @Output() toggleActive: EventEmitter<boolean> = new EventEmitter();

  @HostBinding('class.lg-btn-toggle') class = true;
  @HostBinding('role') role = 'button';

  constructor(private hostElement: ElementRef) {
    if (this.hostElement.nativeElement.tagName !== 'BUTTON') {
      throw Error(
        'The `lgButtonToggle` should always be a button. Please change the HTML tag accordingly',
      );
    }
  }

  @HostBinding('class.lg-btn-toggle--active')
  @HostBinding('attr.aria-expanded')
  get active(): boolean {
    return this._isActive;
  }
  @HostBinding('id') get idAttr(): string {
    return this.id;
  }
  @HostBinding('attr.aria-controls') get ariaControlsAttr(): string {
    return this.ariaControls;
  }

  @HostListener('click') onClick(): void {
    this.toggle();
  }

  toggle(): void {
    this._isActive = !this._isActive;
    this.toggleActive.emit(this._isActive);
  }

  get isActive(): boolean {
    return this._isActive;
  }
}
