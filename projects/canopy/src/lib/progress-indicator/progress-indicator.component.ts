import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressDisplayAs } from './progress-indicator.interface';
import { LgProgressBarComponent } from './progress-bar/progress-bar.component';
import { LgProgressJourneyComponent } from './progress-journey/progress-journey.component';

let nextUniqueId = 0;

@Component({
  selector: 'lg-progress-indicator',
  templateUrl: './progress-indicator.component.html',
  styleUrls: [ './progress-indicator.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ CommonModule, LgProgressBarComponent, LgProgressJourneyComponent ],
})
export class LgProgressIndicatorComponent {
  @HostBinding('class.lg-progress-indicator') class = true;
  @Input() max = 0;
  @Input() value = 0;
  @Input() showProgressBar = true;
  @Input() displayAs: ProgressDisplayAs = 'step';
  @Input() stepsPrefix = 'Step';

  _id = nextUniqueId++;
  _ariaLabelledByIds: string;
  _journeyTitleId = `lg-progress-bar-journey-${this._id}`;
  _stepsTextId = `lg-progress-bar-step-${this._id}`;

  get ariaLabelledByIds(): string {
    return this._ariaLabelledByIds
      ? `${this._ariaLabelledByIds}`
      : `${this._journeyTitleId} ${this._stepsTextId}`;
  }

  set ariaLabelledByIds(label: string) {
    this._ariaLabelledByIds = label;
  }

  set journeyTitleId(value: string) {
    this._journeyTitleId = value;
  }

  set stepsTextId(value: string) {
    this._stepsTextId = value;
  }
}
