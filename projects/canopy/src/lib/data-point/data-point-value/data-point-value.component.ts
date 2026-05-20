import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  inject,
  Input,
  ViewEncapsulation,
} from '@angular/core';

import { LgDataPointComponent } from '../data-point/data-point.component';
import type { DataPointSize } from '../data-point.interface';

@Component({
  selector: 'lg-data-point-value',
  templateUrl: './data-point-value.component.html',
  styleUrls: [ './data-point-value.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class LgDataPointValueComponent {
  private readonly dataPoint = inject(LgDataPointComponent, { optional: true });

  @HostBinding('class.lg-data-point-value') class = true;

  @HostBinding('class.lg-data-point-value--sm')
  get isSm() {
    return this.size === 'sm';
  }

  @HostBinding('class.lg-data-point-value--md')
  get isMd() {
    return this.size === 'md';
  }

  @HostBinding('class.lg-data-point-value--lg')
  get isLg() {
    return this.size === 'lg';
  }

  @HostBinding('class.lg-data-point-value--form')
  get isFormVariant() {
    return this.dataPoint?.variant === 'form';
  }

  @HostBinding('class.lg-data-point-value--card')
  get isCardVariant() {
    return this.dataPoint?.variant === 'card';
  }

  @HostBinding('class.lg-data-point-value--card-principle')
  get isCardPrincipleVariant() {
    return this.dataPoint?.variant === 'card-principle';
  }

  @Input() size: DataPointSize = 'sm';
}
