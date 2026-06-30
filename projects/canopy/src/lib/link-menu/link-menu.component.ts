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
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class LgLinkMenuComponent {
  @HostBinding('class.lg-link-menu') class = true;
}
