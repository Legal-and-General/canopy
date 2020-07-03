import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostBinding,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { AlignmentOptions } from '../table.interface';

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

  alignOptions = AlignmentOptions;

  set align(align: AlignmentOptions) {
    this._align = align;

    this.cd.detectChanges();
  }

  get align() {
    return this._align;
  }

  private _align: AlignmentOptions = AlignmentOptions.Start;

  constructor(private cd: ChangeDetectorRef) {}
}
