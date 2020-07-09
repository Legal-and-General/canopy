import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lg-table-expanded-detail',
  templateUrl: './table-expanded-detail.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgTableExpandedDetailComponent {
  @HostBinding('class.lg-table-expanded-detail') class = true;
}
