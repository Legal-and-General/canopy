import { NgModule } from '@angular/core';

import { LgPrefixDirective } from './prefix.directive';

@NgModule({
  declarations: [LgPrefixDirective],
  exports: [LgPrefixDirective],
})
export class LgPrefixModule {}
