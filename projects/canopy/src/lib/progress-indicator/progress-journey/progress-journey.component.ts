import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lg-progress-journey',
  templateUrl: './progress-journey.component.html',
  styleUrls: [ './progress-journey.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgProgressJourneyComponent {
  @Input() max = 0;
  @Input() value = 0;
  @Input() showAsPercentage = false;
  @Input() stepsPrefix = 'Step';

  get percentage(): number {
    if (this.max === 0) {
      return 0;
    }

    const rawPercentage = (this.value / this.max) * 100;
    const clampedPercentage = Math.max(0, Math.min(100, rawPercentage));

    return Math.floor(clampedPercentage);
  }
}
