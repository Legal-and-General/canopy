import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[lgPrimaryNavItem]',
  host: {
    class: 'lg-primary-nav-item',
  },
  standalone: true,
})
export class LgPrimaryNavItemDirective {
  private _isActive = false;

  @HostBinding('class.lg-primary-nav-item--active') get activeClass() {
    return this._isActive;
  }

  @Input()
  set isActive(isActive: boolean) {
    this._isActive = isActive;
  }
}
