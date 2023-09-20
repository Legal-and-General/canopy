import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LgIconModule } from '../icon/icon.module';

import { LgListWithIconsComponent } from './list-with-icons.component';
import { LgListWithIconsItemComponent } from './list-with-icons-item/list-with-icons-item.component';

const components = [
  LgListWithIconsComponent,
  LgListWithIconsItemComponent,
];

@NgModule({
  imports: [ CommonModule, LgIconModule ],
  declarations: [ ...components ],
  exports: [ ...components ],
})
export class LgListWithIconsModule { }
