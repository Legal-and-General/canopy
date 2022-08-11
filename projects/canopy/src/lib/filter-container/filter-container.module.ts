import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LgButtonModule } from '../button';
import { LgIconModule } from '../icon';

import {
  LgFilterContainerComponent,
  LgFilterContainerPanelBodyComponent,
  LgFilterContainerPanelComponent,
  LgFilterContainerPanelFooterComponent,
  lgFilterContainerToggleDirective,
} from './';

@NgModule({
  imports: [ CommonModule, LgButtonModule, LgIconModule ],
  declarations: [
    LgFilterContainerComponent,
    lgFilterContainerToggleDirective,
    LgFilterContainerPanelComponent,
    LgFilterContainerPanelBodyComponent,
    LgFilterContainerPanelFooterComponent,
  ],
  exports: [
    LgFilterContainerComponent,
    lgFilterContainerToggleDirective,
    LgFilterContainerPanelComponent,
    LgFilterContainerPanelBodyComponent,
    LgFilterContainerPanelFooterComponent,
    LgButtonModule,
    LgIconModule,
  ],
})
export class LgFilterContainerModule {}
