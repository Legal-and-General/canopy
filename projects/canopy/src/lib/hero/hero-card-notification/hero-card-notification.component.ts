import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lg-hero-card-notification',
  templateUrl: './hero-card-notification.component.html',
  styleUrls: ['./hero-card-notification.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgHeroCardNotificationComponent {
  @HostBinding('class.lg-hero-card-notification') class = true;
}
