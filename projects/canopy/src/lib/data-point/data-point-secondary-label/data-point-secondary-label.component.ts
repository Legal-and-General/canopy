import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lg-data-point-secondary-label',
  templateUrl: './data-point-secondary-label.component.html',
  styleUrls: [ './data-point-secondary-label.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class LgDataPointSecondaryLabelComponent {
  @HostBinding('class.lg-data-point-secondary-label') class = true;
}
