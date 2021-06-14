import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core';

import { HeadingLevel } from '../../heading';

@Component({
  selector: 'lg-hero-card-principle-data-point-label',
  templateUrl: './hero-card-principle-data-point-label.component.html',
  styleUrls: ['./hero-card-principle-data-point-label.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgHeroCardPrincipleDataPointLabelComponent {
  @HostBinding('class.lg-hero-card-principle-data-point-label') class = true;

  @Input() headingLevel: HeadingLevel;
}
