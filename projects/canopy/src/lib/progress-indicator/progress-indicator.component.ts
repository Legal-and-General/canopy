import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core';

let nextUniqueId = 0;

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
  @Input() showAsPercentage = false;
  @Input() stepsPrefix = 'Step';

  _id = nextUniqueId++;
  _journeyTitleId = `lg-progress-bar-journey-${this._id}`;
  _stepsTextId = `lg-progress-bar-step-${this._id}`;

  get ariaLabelledByIds(): string {
    return `${this._journeyTitleId} ${this._stepsTextId}`;
  }
}
