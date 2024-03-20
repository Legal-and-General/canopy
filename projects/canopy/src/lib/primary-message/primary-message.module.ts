import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LgPrimaryMessageComponent } from './primary-message.component';
import { LgPrimaryMessageTitleComponent } from './primary-message-title/primary-message-title.component';
import { LgPrimaryMessageDescriptionComponent } from './primary-message-description/primary-message-description.component';

const components = [
  LgPrimaryMessageComponent,
  LgPrimaryMessageTitleComponent,
  LgPrimaryMessageDescriptionComponent,
];

@NgModule({
  imports: [ CommonModule, ...components ],
  exports: [ ...components ],
})
export class LgPrimaryMessageModule {}
