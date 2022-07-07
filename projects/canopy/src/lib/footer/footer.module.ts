import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LgFooterComponent } from './footer.component';
import { LgFooterCopyrightComponent } from './footer-copyright/footer-copyright.component';
import { LgFooterLogoComponent } from './footer-logo/footer-logo.component';
import { LgFooterNavComponent } from './footer-nav/footer-nav.component';
import { LgFooterNavItemComponent } from './footer-nav-item/footer-nav-item.component';

@NgModule({
  declarations: [ LgFooterComponent, LgFooterCopyrightComponent, LgFooterLogoComponent, LgFooterNavComponent, LgFooterNavItemComponent ],
  exports: [ LgFooterComponent, LgFooterCopyrightComponent, LgFooterLogoComponent, LgFooterNavComponent, LgFooterNavItemComponent ],
  entryComponents: [ LgFooterComponent ],
  imports: [ CommonModule ],
})
export class LgFooterModule {}
