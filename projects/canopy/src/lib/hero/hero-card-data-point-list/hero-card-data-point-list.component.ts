import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'lg-hero-card-data-point-list',
  templateUrl: './hero-card-data-point-list.component.html',
  styleUrls: ['./hero-card-data-point-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LgHeroCardDataPointListComponent {
  @HostBinding('class.lg-hero-card-data-point-list') class = true;

  @HostBinding('attr.role') role = 'list';
}
