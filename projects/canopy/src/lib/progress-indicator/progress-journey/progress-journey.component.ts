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
  @Input() name: string;
  @Input() showProgressBar = true;
  @Input() showAsPercentage = true;

  get percentage(): number {
    return Math.floor((this.value / this.max) * 100);
  }
}
