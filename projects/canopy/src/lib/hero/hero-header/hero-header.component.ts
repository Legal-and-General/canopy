import {
  Component,
  HostBinding,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'lg-hero-header',
  templateUrl: './hero-header.component.html',
  styleUrls: [ './hero-header.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
})
export class LgHeroHeaderComponent {
  @HostBinding('class.lg-hero-header') class = true;
}
