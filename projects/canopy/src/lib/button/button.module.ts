import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LgMarginModule } from '../spacing/margin/margin.module';
import { LgSpinnerModule } from '../spinner/spinner.module';

import { LgButtonComponent } from './button.component';
import { LgButtonGroupComponent } from './button-group/button-group.component';
import { LgButtonToggleDirective } from './button-toggle/button-toggle.directive';

@NgModule({
  imports: [ CommonModule, LgSpinnerModule, LgMarginModule ],
  declarations: [ LgButtonComponent, LgButtonGroupComponent, LgButtonToggleDirective ],
  exports: [ LgButtonComponent, LgButtonGroupComponent, LgButtonToggleDirective ],
})
export class LgButtonModule {}
