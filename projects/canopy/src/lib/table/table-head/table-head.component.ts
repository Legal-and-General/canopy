import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  Input,
  ViewEncapsulation
} from '@angular/core';
import { AlignmentOptions } from '../table.interface';

@Component({
  selector: 'lg-table-head',
  templateUrl: './table-head.component.html',
  styleUrls: ['./table-head.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LgTableHeadComponent {
  @HostBinding('class') class = 'lg-table-head';

  @HostBinding('attr.role') role = 'columnheader';

  @HostBinding('class.lg-table-head--align-end')
  get alignment() {
    return this.align === AlignmentOptions.End;
  }

  @Input() align: AlignmentOptions;

  constructor(public element: ElementRef) {}
}
