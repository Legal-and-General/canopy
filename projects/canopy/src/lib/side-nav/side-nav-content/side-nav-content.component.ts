import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lg-side-nav-content',
  templateUrl: './side-nav-content.component.html',
  styleUrls: [ './side-nav-content.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class LgSideNavContentComponent {
  @HostBinding('class.lg-side-nav-content') class = true;
  @HostBinding('tabindex') tabindex = -1;
}
