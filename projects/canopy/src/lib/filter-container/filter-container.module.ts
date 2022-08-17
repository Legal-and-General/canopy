import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LgButtonModule } from '../button';
import { LgIconModule } from '../icon';

import { LgFilterContainerComponent } from './filter-container.component';
import { LgFilterContainerPanelComponent } from './filter-container-panel/filter-container-panel.component';
import { LgFilterContainerPanelBodyComponent } from './filter-container-panel-body/filter-container-panel-body.component';
import { LgFilterContainerPanelFooterComponent } from './filter-container-panel-footer/filter-container-panel-footer.component';

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
