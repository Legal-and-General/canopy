import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lg-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgHeroComponent {
  @HostBinding('class.lg-hero') class = true;

  @HostBinding('style.margin-bottom') get marginBottom() {
    return this.overlap ? `${this.overlap * -1}rem` : null;
  }

  @HostBinding('style.padding-bottom') get paddingBottom() {
    return this.overlap && this.overlap > 0 ? `${this.overlap}rem` : null;
  }

  @Input() overlap = 2;
}
