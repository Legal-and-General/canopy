import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core';

import { LgHideAtDirective } from '../../hide-at/hide-at.directive';

@Component({
  selector: 'lg-primary-nav',
  templateUrl: './primary-navigation.component.html',
  styleUrls: [ './primary-navigation.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'lg-primary-nav',
    tabindex: '-1',
    role: 'navigation',
    id: 'primary-nav',
    'aria-label': 'Main navigation',
  },
  standalone: true,
  imports: [ LgHideAtDirective ],
})
export class LgPrimaryNavComponent {
  private _showResponsiveMenu = false;

  @Input() set showResponsiveMenu(show: boolean) {
    this._showResponsiveMenu = show;
    this.cdr.markForCheck();
  }
  get showResponsiveMenu() {
    return this._showResponsiveMenu;
  }

  @HostBinding('class.lg-primary-nav--active') get activeClass() {
    return this.showResponsiveMenu;
  }
  @HostBinding('attr.aria-hidden') get ariaHidden() {
    return this.showResponsiveMenu
      ? false
      : null;
  }

  constructor(private cdr: ChangeDetectorRef) {}
}
