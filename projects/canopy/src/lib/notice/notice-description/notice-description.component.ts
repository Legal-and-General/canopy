import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lg-notice-description',
  templateUrl: './notice-description.component.html',
  styleUrls: [ './notice-description.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class LgNoticeDescriptionComponent {
  @HostBinding('class.lg-notice-description') class = true;
}
