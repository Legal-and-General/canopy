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
  styleUrls: [ './hero.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class LgHeroComponent {
  @HostBinding('class.lg-hero') class = true;

  @HostBinding('class.lg-hero--child')
  get isChildVariant() {
    return this.variant === 'child';
  }

  @Input() variant: 'default' | 'child' = 'default';
}
