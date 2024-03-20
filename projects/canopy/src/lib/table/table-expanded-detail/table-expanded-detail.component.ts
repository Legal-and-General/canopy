import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lg-table-expanded-detail',
  templateUrl: './table-expanded-detail.component.html',
  styleUrls: [ './table-expanded-detail.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class LgTableExpandedDetailComponent {
  @HostBinding('class.lg-table-expanded-detail') class = true;
}
