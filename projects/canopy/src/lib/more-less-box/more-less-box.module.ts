import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { lgIconLike, LgIconModule, LgIconRegistry } from '../icon';
import { LgButtonModule } from '../button';

import { LgMoreLessBoxComponent } from './more-less-box.component';
import { LgMoreLessBoxMoreInfoComponent } from './more-less-box-more-info/more-less-box-more-info.component';

const components = [ LgMoreLessBoxComponent, LgMoreLessBoxMoreInfoComponent ];

@NgModule({
  imports: [ CommonModule, LgIconModule, LgButtonModule ],
  declarations: [ ...components ],
  exports: [ ...components ],
})
export class LgMoreLessBoxModule {
  constructor(private iconRegistry: LgIconRegistry) {
    this.iconRegistry.registerIcons([ lgIconLike ]);
  }
}
