import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation,
  inject,
} from '@angular/core';

import {
  LgGridColDirective,
  LgGridRowDirective,
  LgGridContainerDirective,
} from '../grid';
import type { Status } from '../status';
import { LgStatusDirective } from '../status';

@Component({
  selector: 'lg-banner',
  templateUrl: './banner.component.html',
  styleUrls: [ './banner.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'lg-banner',
  },
  imports: [ LgGridContainerDirective, LgGridRowDirective, LgGridColDirective ],
  hostDirectives: [
    {
      directive: LgStatusDirective,
      inputs: [ 'lgStatus:status', 'lgStatusTheme:statusTheme' ],
    },
  ],
})
export class LgBannerComponent {
  private readonly statusDirective = inject(LgStatusDirective);

  get status(): Status {
    return this.statusDirective.status;
  }

  @HostBinding('attr.role') get role(): string {
    if (this.status !== 'generic') {
      return 'alert';
    }
  }

  constructor() {
    this.statusDirective.lgStatus = 'generic';
  }
}
