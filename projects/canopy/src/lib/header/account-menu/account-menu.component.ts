import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lg-account-menu',
  template: '<ng-content></ng-content>',
  styleUrls: [ './account-menu.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'lg-account-menu',
    tabindex: '-1',
    role: 'list',
    'aria-label': 'Account menu',
  },
})
export class LgAccountMenuComponent {}
