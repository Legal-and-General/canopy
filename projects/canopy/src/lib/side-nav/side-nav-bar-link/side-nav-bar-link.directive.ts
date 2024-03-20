import { Directive, EventEmitter, HostBinding, Input, Output } from '@angular/core';

@Directive({
  selector: '[lgSideBarNavLink]',
  standalone: true,
})
export class LgSideNavBarLinkDirective {
  _isActive = false;

  @Input()
  set isActive(isActive) {
    if (isActive) {
      this.activated.emit();
    }

    this._isActive = isActive;
  }

  @HostBinding('class.lg-side-nav-bar-link') class = true;
  @HostBinding('class.lg-side-nav-bar-link--selected') get isActiveClass() {
    return this._isActive;
  }

  @Output() activated: EventEmitter<void> = new EventEmitter();
}
