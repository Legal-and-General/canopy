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
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class LgHeroHeaderComponent {
  @HostBinding('class.lg-hero-header') class = true;
}
