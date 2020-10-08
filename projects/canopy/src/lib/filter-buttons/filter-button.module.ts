import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LgLabelModule } from '../forms/label/label.module';
import { LgFilterButtonComponent } from './filter-button/filter-button.component';
import { LgFilterGroupComponent } from './filter-group.component';
import { LgIconModule } from '../icon/icon.module';
import { LgIconRegistry } from '../icon/icon.registry';
import { lgIconAdd, lgIconCheckmark } from '../icon/icons.interface';
import { LgMarginModule } from '../spacing/margin/margin.module';

@NgModule({
  imports: [LgMarginModule, LgLabelModule, CommonModule, LgIconModule],
  declarations: [LgFilterGroupComponent, LgFilterButtonComponent],
  exports: [LgFilterGroupComponent, LgFilterButtonComponent],
  entryComponents: [LgFilterGroupComponent, LgFilterButtonComponent],
})
export class LgFilterButtonModule {
  constructor(private iconRegistry: LgIconRegistry) {
    this.iconRegistry.registerIcons([lgIconAdd, lgIconCheckmark]);
  }
}
