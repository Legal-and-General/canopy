import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';

import { lgIconChevronRight, LgIconComponent, LgIconRegistry } from '../../icon';

@Component({
  selector: 'lg-side-nav-bar-item',
  templateUrl: './side-nav-bar-item.component.html',
  styleUrls: [ './side-nav-bar-item.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ LgIconComponent ],
})
export class LgSideNavBarItemComponent {
  @HostBinding('class.lg-side-nav-bar-item') class = true;

  constructor(private iconRegistry: LgIconRegistry) {
    this.iconRegistry.registerIcons([ lgIconChevronRight ]);
  }
}
