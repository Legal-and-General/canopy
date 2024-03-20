import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  HostBinding,
  QueryList,
  ViewEncapsulation,
} from '@angular/core';

import { LgTableRowComponent } from '../table-row/table-row.component';

@Component({
  selector: '[lg-table-body]',
  templateUrl: './table-body.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class LgTableBodyComponent {
  @HostBinding('class.lg-table-body') class = true;

  @ContentChildren(LgTableRowComponent) rows: QueryList<LgTableRowComponent>;
}
