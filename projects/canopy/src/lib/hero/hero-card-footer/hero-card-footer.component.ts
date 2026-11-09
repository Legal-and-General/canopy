import {
  Component,
  HostBinding,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'lg-hero-card-footer',
  templateUrl: './hero-card-footer.component.html',
  styleUrls: [ './hero-card-footer.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
})
export class LgHeroCardFooterComponent {
  @HostBinding('class.lg-hero-card-footer') class = true;
}
