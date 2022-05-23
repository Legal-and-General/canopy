import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lg-link-menu-item-content',
  templateUrl: './link-menu-item-content.component.html',
  styleUrls: [ './link-menu-item-content.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgLinkMenuItemContentComponent {
  @HostBinding('class.lg-link-menu-item-content') class = true;
}
