import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lg-side-nav-bar-item-heading',
  templateUrl: './side-nav-bar-item-heading.component.html',
  styleUrls: [ './side-nav-bar-item-heading.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class LgSideNavBarItemHeadingComponent {
  @HostBinding('class.lg-side-nav-bar-item-heading') class = true;
}
