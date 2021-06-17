import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { A11yModule } from '@angular/cdk/a11y';

import {
  LgModalBodyComponent,
  LgModalBodyTimerComponent,
  LgModalComponent,
  LgModalFooterComponent,
  LgModalHeaderComponent,
  LgModalService,
  LgModalTriggerDirective,
} from './';
import { LgSeparatorModule } from '../separator';
import { lgIconClose, LgIconModule, LgIconRegistry } from '../icon';
import { LgFocusModule } from '../focus';
import { LgHeadingModule } from '../heading';
import { LgCardModule } from '../card';
import { LgPaddingModule } from '../spacing';

@NgModule({
  declarations: [
    LgModalComponent,
    LgModalTriggerDirective,
    LgModalHeaderComponent,
    LgModalBodyComponent,
    LgModalFooterComponent,
    LgModalBodyTimerComponent,
  ],
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
  exports: [
    LgModalComponent,
    LgModalTriggerDirective,
    LgModalBodyComponent,
    LgModalHeaderComponent,
    LgModalFooterComponent,
    LgModalBodyTimerComponent,
  ],
})
export class LgModalModule {
  constructor(private iconRegistry: LgIconRegistry) {
    this.iconRegistry.registerIcons([lgIconClose]);
  }
}
