import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'lg-table-cell',
  templateUrl: './table-cell.component.html',
  styleUrls: ['./table-cell.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LgTableCellComponent {
  @HostBinding('class') class = 'lg-table-cell';

  @HostBinding('attr.role') role = 'cell';

  @ViewChild('label', { static: true })
  label: ElementRef;
}
