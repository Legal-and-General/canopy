import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { A11yModule } from '@angular/cdk/a11y';

import { LgModalBodyComponent } from './modal-body/modal-body.component';
import { LgModalBodyTimerComponent } from './modal-body-timer/modal-body-timer.component';
import { LgModalComponent } from './modal.component';
import { LgModalFooterComponent } from './modal-footer/modal-footer.component';
import { LgModalService } from './modal.service';
import { LgModalTriggerDirective } from './modal-trigger/modal-trigger.directive';
import { LgModalHeaderComponent } from './modal-header/modal-header.component';
import { LgSeparatorModule } from '../separator';
import { lgIconClose, LgIconModule, LgIconRegistry } from '../icon';
import { LgFocusModule } from '../focus';
import { LgHeadingModule } from '../heading';
import { LgCardModule } from '../card';
import { LgPaddingModule } from '../spacing';

const components = [
  LgModalComponent,
  LgModalTriggerDirective,
  LgModalHeaderComponent,
  LgModalBodyComponent,
  LgModalFooterComponent,
  LgModalBodyTimerComponent,
];

@NgModule({
  declarations: [...components],
  imports: [
    A11yModule,
    CommonModule,
    LgFocusModule,
    LgHeadingModule,
    LgCardModule,
    LgSeparatorModule,
    LgPaddingModule,
    LgIconModule,
  ],
  providers: [LgModalService],
  exports: [...components],
})
export class LgModalModule {
  constructor(private iconRegistry: LgIconRegistry) {
    this.iconRegistry.registerIcons([lgIconClose]);
  }
}
