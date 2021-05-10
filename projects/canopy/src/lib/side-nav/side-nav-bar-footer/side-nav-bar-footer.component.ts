import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lg-side-nav-bar-footer',
  templateUrl: './side-nav-bar-footer.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgSideNavBarFooterComponent {
  @HostBinding('class.lg-side-nav-bar-footer') class = true;
}
