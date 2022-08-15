import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LgButtonModule } from '../button';
import { LgIconModule } from '../icon';

import {
  LgFilterContainerComponent,
  LgFilterContainerPanelBodyComponent,
  LgFilterContainerPanelComponent,
  LgFilterContainerPanelFooterComponent,
} from './';

@NgModule({
  imports: [ CommonModule, LgButtonModule, LgIconModule ],
  declarations: [
    LgFilterContainerComponent,
    LgFilterContainerPanelComponent,
    LgFilterContainerPanelBodyComponent,
    LgFilterContainerPanelFooterComponent,
  ],
  exports: [
    LgFilterContainerComponent,
    LgFilterContainerPanelComponent,
    LgFilterContainerPanelBodyComponent,
    LgFilterContainerPanelFooterComponent,
    LgButtonModule,
    LgIconModule,
  ],
})
export class LgFilterContainerModule {}
