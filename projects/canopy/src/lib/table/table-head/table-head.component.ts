import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  ViewEncapsulation
} from '@angular/core';

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

  constructor(public element: ElementRef) {}
}
