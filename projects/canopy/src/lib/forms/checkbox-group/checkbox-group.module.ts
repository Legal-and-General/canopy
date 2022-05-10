import { NgModule } from '@angular/core';

import { LgLabelModule } from '../label/label.module';
import { LgMarginModule } from '../../spacing/margin/margin.module';
import { LgFocusModule } from '../../focus/focus.module';

import { LgCheckboxGroupComponent } from './checkbox-group.component';

@NgModule({
  imports: [ LgLabelModule, LgMarginModule, LgFocusModule ],
  declarations: [ LgCheckboxGroupComponent ],
  exports: [ LgCheckboxGroupComponent ],
  entryComponents: [ LgCheckboxGroupComponent ],
})
export class LgCheckboxGroupModule {}
