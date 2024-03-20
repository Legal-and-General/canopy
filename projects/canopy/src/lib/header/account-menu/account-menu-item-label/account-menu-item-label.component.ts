import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lg-account-menu-item-label',
  template: '<ng-content></ng-content>',
  styleUrls: [ './account-menu-item-label.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'lg-account-menu-item-label',
  },
  standalone: true,
})
export class LgAccountMenuItemLabelComponent {}
