import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lg-side-nav-bar-item-content',
  templateUrl: './side-nav-bar-item-content.component.html',
  styleUrls: [ './side-nav-bar-item-content.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class LgSideNavBarItemContentComponent {
  @HostBinding('class.lg-side-nav-bar-item-content') class = true;
}
