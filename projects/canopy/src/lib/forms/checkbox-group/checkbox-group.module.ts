import { NgModule } from '@angular/core';

import { LgLabelModule } from '../label/label.module';
import { LgCheckboxGroupComponent } from './checkbox-group.component';
import { LgMarginModule } from '../../spacing/margin/margin.module';

@NgModule({
  imports: [LgLabelModule, LgMarginModule],
  declarations: [LgCheckboxGroupComponent],
  exports: [LgCheckboxGroupComponent],
  entryComponents: [LgCheckboxGroupComponent],
})
export class LgCheckboxGroupModule {}
