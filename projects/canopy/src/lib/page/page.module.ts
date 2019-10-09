import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LgFooterModule } from './footer/footer.module';
import { LgHeaderModule } from './header/header.module';
import { LgPageComponent } from './page/page.component';

@NgModule({
  declarations: [LgPageComponent],
  entryComponents: [LgPageComponent],
  exports: [LgFooterModule, LgHeaderModule, LgPageComponent],
  imports: [CommonModule]
})
export class LgPageModule {}
