import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lg-side-nav-bar-item',
  templateUrl: './side-nav-bar-item.component.html',
  styleUrls: [ './side-nav-bar-item.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgSideNavBarItemComponent {
  @HostBinding('class.lg-side-nav-bar-item') class = true;
}
