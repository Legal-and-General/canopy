import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { A11yModule } from '@angular/cdk/a11y';

import { lgIconClose, LgIconRegistry } from '../icon';
import { LgCardModule } from '../card';

import { LgModalBodyComponent } from './modal-body/modal-body.component';
import { LgModalBodyTimerComponent } from './modal-body-timer/modal-body-timer.component';
import { LgModalComponent } from './modal.component';
import { LgModalFooterComponent } from './modal-footer/modal-footer.component';
import { LgModalService } from './modal.service';
import { LgModalTriggerDirective } from './modal-trigger/modal-trigger.directive';
import { LgModalHeaderComponent } from './modal-header/modal-header.component';

const components = [
  LgModalComponent,
  LgModalTriggerDirective,
  LgModalHeaderComponent,
  LgModalBodyComponent,
  LgModalFooterComponent,
  LgModalBodyTimerComponent,
];

@NgModule({
  imports: [ A11yModule, CommonModule, LgCardModule, ...components ],
  providers: [ LgModalService ],
  exports: [ ...components ],
})
export class LgModalModule {
  constructor(private iconRegistry: LgIconRegistry) {
    this.iconRegistry.registerIcons([ lgIconClose ]);
  }
}
