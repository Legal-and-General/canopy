import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lg-link-menu-item-heading',
  templateUrl: './link-menu-item-heading.component.html',
  styleUrls: [ './link-menu-item-heading.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgLinkMenuItemHeadingComponent {
  @HostBinding('class.lg-link-menu-item-heading') class = true;
}
