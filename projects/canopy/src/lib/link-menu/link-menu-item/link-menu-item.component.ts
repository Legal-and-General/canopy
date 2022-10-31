import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lg-link-menu-item',
  templateUrl: './link-menu-item.component.html',
  styleUrls: [ './link-menu-item.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgLinkMenuItemComponent {
  @HostBinding('class.lg-link-menu-item') class = true;

  @Input() internal = true;
}
