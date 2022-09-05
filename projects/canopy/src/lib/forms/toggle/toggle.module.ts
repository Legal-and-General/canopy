import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LgIconModule } from '../../icon/icon.module';
import { LgIconRegistry } from '../../icon/icon.registry';
import {
  lgIconAdd,
  lgIconCheckboxMark,
  lgIconCheckmark,
} from '../../icon/icons.interface';
import { LgFocusModule } from '../../focus/focus.module';
import { LgCheckboxGroupModule } from '../checkbox-group/checkbox-group.module';

import { LgToggleComponent } from './toggle.component';

@NgModule({
  imports: [ CommonModule, LgIconModule, LgFocusModule, LgCheckboxGroupModule ],
  declarations: [ LgToggleComponent ],
  exports: [ LgToggleComponent ],
})
export class LgToggleModule {
  constructor(private iconRegistry: LgIconRegistry) {
    this.iconRegistry.registerIcons([ lgIconCheckboxMark, lgIconAdd, lgIconCheckmark ]);
  }
}
