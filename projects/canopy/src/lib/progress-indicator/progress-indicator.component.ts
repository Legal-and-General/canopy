import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lg-progress-indicator',
  templateUrl: './progress-indicator.component.html',
  styleUrls: [ './progress-indicator.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgProgressIndicatorComponent {
  @HostBinding('class.lg-progress-indicator') class = true;
}
