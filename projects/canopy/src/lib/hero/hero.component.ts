import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'lg-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LgHeroComponent {
  @HostBinding('class.lg-hero') class = true;

  @HostBinding('style.margin-bottom') get style() {
    return typeof this.overlap === 'number'
      ? `${this.overlap * -1}rem`
      : this.DEFAULT_MARGIN_TOP;
  }

  @Input() overlap: number;

  private DEFAULT_MARGIN_TOP = '-2rem';
}
