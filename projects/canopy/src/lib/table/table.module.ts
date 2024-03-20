import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LgIconRegistry } from '../icon/icon.registry';
import { lgIconChevronDown } from '../icon/icons.interface';

import { LgTableCellComponent } from './table-cell/table-cell.component';
import { LgTableBodyComponent } from './table-body/table-body.component';
import { LgTableExpandedDetailComponent } from './table-expanded-detail/table-expanded-detail.component';
import { LgTableHeadCellComponent } from './table-head-cell/table-head-cell.component';
import { LgTableHeadComponent } from './table-head/table-head.component';
import { LgTableRowComponent } from './table-row/table-row.component';
import { LgTableRowToggleComponent } from './table-row-toggle/table-row-toggle.component';
import { LgTableComponent } from './table/table.component';

const components = [
  LgTableComponent,
  LgTableCellComponent,
  LgTableHeadComponent,
  LgTableRowComponent,
  LgTableExpandedDetailComponent,
  LgTableRowToggleComponent,
  LgTableBodyComponent,
  LgTableHeadCellComponent,
];

@NgModule({
  imports: [ CommonModule, ...components ],
  exports: [ ...components ],
})
export class LgTableModule {
  constructor(private iconRegistry: LgIconRegistry) {
    this.iconRegistry.registerIcons([ lgIconChevronDown ]);
  }
}
