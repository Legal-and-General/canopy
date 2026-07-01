import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
  numberAttribute,
} from '@angular/core';

@Component({
  selector: 'lg-notification-badge',
  templateUrl: './notification-badge.component.html',
  styleUrls: [ './notification-badge.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'lg-notification-badge lg-mode-red lg-theme-neutral',
  },
  standalone: true,
})
export class LgNotificationBadgeComponent {
  @Input({ transform: numberAttribute }) count: number;
  @Input() accessText: string;
  @Input() variant: 'count' | 'dot' = 'count';

  @HostBinding('class.lg-notification-badge--dot') get isDot(): boolean {
    return this.variant === 'dot';
  }
}
