import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lg-notification-badge',
  templateUrl: './notification-badge.component.html',
  styleUrls: [ './notification-badge.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'lg-notification-badge',
  },
})
export class LgNotificationBadgeComponent {
  @Input() count: number;
  @Input() accessText: string;
}
