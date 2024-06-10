import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
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
  @Input() max = 0;
  @Input() value = 0;
  @Input() showProgressBar = true;
  @Input() showAsPercentage = true;
  @Input() stepsPrefix = 'Step';
}
