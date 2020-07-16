import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  HostBinding,
  QueryList,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

import { LgTableCellComponent } from '../table-cell/table-cell.component';
import { LgTableHeadComponent } from '../table-head/table-head.component';

@Component({
  selector: 'lg-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgTableRowComponent {
  @HostBinding('class') class = 'lg-table-row';

  @HostBinding('attr.role') role = 'row';

  @ViewChild('headerTemplate', { static: false })
  headerTemplate: TemplateRef<any>;

  @ViewChild('bodyTemplate', { static: false })
  bodyTemplate: TemplateRef<any>;

  @ContentChildren(LgTableCellComponent) cells: QueryList<LgTableCellComponent>;

  @ContentChildren(LgTableHeadComponent)
  headCells: QueryList<LgTableHeadComponent>;
}
