import {
  Component,
  HostBinding,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
@Component({
  selector: 'lg-link-menu',
  templateUrl: './link-menu.component.html',
  styleUrls: [ './link-menu.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
})
export class LgLinkMenuComponent {
  @HostBinding('class.lg-link-menu') class = true;
}
