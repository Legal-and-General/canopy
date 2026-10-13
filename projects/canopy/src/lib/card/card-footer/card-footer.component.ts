import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';

import { LgLinkMenuComponent } from '../../link-menu';

@Component({
  selector: 'lg-card-footer',
  templateUrl: './card-footer.component.html',
  styleUrls: [ './card-footer.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class LgCardFooterComponent {
  @ContentChild(LgLinkMenuComponent) linkMenu?: LgLinkMenuComponent;

  @HostBinding('class.lg-card-footer') class = true;

  @HostBinding('class.lg-card-footer--link-menu')
  get hasLinkMenu(): boolean {
    return !!this.linkMenu;
  }
}
