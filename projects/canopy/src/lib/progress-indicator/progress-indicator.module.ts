import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LgHeadingModule } from '../heading';

import { LgProgressIndicatorComponent } from './progress-indicator.component';
import { LgProgressBarComponent } from './progress-bar/progress-bar.component';
import { LgProgressHeaderComponent } from './progress-header/progress-header.component';
import { LgProgressJourneyComponent } from './progress-journey/progress-journey.component';

const components = [
  LgProgressIndicatorComponent,
  LgProgressBarComponent,
  LgProgressHeaderComponent,
  LgProgressJourneyComponent,
];

@NgModule({
  imports: [ CommonModule, LgHeadingModule ],
  declarations: [ components ],
  exports: [ components ],
})
export class LgProgressIndicatorModule {}
