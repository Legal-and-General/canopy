import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LgTableCellComponent } from './table-cell/table-cell.component';
import { LgTableHeadComponent } from './table-head/table-head.component';
import { LgTableRowComponent } from './table-row/table-row.component';
import { LgTableComponent } from './table/table.component';

const components = [
  LgTableComponent,
  LgTableCellComponent,
  LgTableHeadComponent,
  LgTableRowComponent
];

@NgModule({
  imports: [CommonModule],
  declarations: [...components],
  exports: [...components]
})
export class LgTableModule {}
