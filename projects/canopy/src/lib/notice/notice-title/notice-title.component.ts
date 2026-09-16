import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lg-notice-title',
  templateUrl: './notice-title.component.html',
  styleUrls: [ './notice-title.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class LgNoticeTitleComponent {
  @HostBinding('class.lg-notice-title') class = true;
}
