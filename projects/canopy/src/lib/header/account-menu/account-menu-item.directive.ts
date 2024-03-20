import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[lgAccountMenuItem]',
  host: {
    class: 'lg-account-menu-item',
  },
  standalone: true,
})
export class LgAccountMenuItemDirective {
  private _isActive = false;

  @HostBinding('class.lg-account-menu-item--active') get activeClass() {
    return this._isActive;
  }

  @Input()
  set isActive(isActive: boolean) {
    this._isActive = isActive;
  }
}
