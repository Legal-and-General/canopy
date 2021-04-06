import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lg-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgSideNavBarComponent {
  @HostBinding('class.lg-side-nav-bar') class = true;
  @HostBinding('attr.role') ariaRole = 'navigation';
  @HostBinding('attr.aria-label')
  @Input()
  label = 'Nav';
  get ariaLabel() {
    return this.label;
  }
}
