import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';

import { LgIconComponent } from '../../icon';

@Component({
  selector: 'lg-breadcrumb-item-ellipsis',
  templateUrl: './breadcrumb-item-ellipsis.component.html',
  styleUrls: [ './breadcrumb-item-ellipsis.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ LgIconComponent ],
})
export class LgBreadcrumbItemEllipsisComponent {
  @HostBinding('class.lg-breadcrumb-item-ellipsis') class = true;
}
