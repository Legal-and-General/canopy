import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[lgAccountMenuItem]',
})
export class LgAccountMenuItemDirective {
  private _isActive = false;

  @HostBinding('class.lg-account-menu-item') class = true;
  @HostBinding('class.lg-account-menu-item--active') get activeClass() {
    return this._isActive;
  }

  @Input()
  set isActive(isActive: boolean) {
    this._isActive = isActive;
  }

  constructor() {}
}
