import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core';

import { AlignmentOptions } from '../table.interface';

@Component({
  selector: '[lg-table-head-cell]',
  templateUrl: './table-head-cell.component.html',
  styleUrls: ['./table-head-cell.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgTableHeadCellComponent {
  @HostBinding('class') class = 'lg-table-head-cell';

  @HostBinding('attr.align')
  get alignment() {
    return this.align === AlignmentOptions.End ? 'right' : 'left';
  }

  @Input() set align(align: AlignmentOptions) {
    this._align = align;

    this.cd.detectChanges();
  }

  get align() {
    return this._align;
  }

  private _align: AlignmentOptions = AlignmentOptions.Start;

  constructor(private cd: ChangeDetectorRef, public element: ElementRef) {}
}
