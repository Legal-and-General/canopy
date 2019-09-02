import { NgModule } from '@angular/core';

import { LgLabelDirective } from './label.directive';

@NgModule({
  declarations: [LgLabelDirective],
  exports: [LgLabelDirective]
})
export class LgLabelModule {}
