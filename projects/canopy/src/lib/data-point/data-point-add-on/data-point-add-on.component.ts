import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lg-data-point-add-on',
  templateUrl: './data-point-add-on.component.html',
  styleUrls: [ './data-point-add-on.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class LgDataPointAddOnComponent {
  @HostBinding('class.lg-data-point-add-on') class = true;
}
