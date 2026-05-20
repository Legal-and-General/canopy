import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
  inject,
} from '@angular/core';

import {
  LgGridColDirective,
  LgGridRowDirective,
  LgGridContainerDirective,
} from '../grid';
import type { IconName } from '../icon';
import { LgIconComponent } from '../icon';
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
  imports: [
    LgGridContainerDirective,
    LgGridRowDirective,
    LgGridColDirective,
    LgIconComponent,
  ],
  hostDirectives: [
    {
      directive: LgStatusDirective,
      inputs: [ 'lgStatus:status', 'lgStatusTheme:statusTheme' ],
    },
  ],
})
export class LgBannerComponent {
  private readonly statusDirective = inject(LgStatusDirective);
  private readonly statusIcons: Record<Status, IconName> = {
    generic: 'globe',
    info: 'information-filled',
    success: 'checkmark-spot-filled',
    warning: 'warning-filled',
    error: 'crossmark-spot-filled',
  };

  @Input() showIcon = true;
  @Input() icon: string | null = null;

  get status(): Status {
    return this.statusDirective.status;
  }

  get statusIcon(): IconName {
    if ((this.status === 'generic' || this.status === 'info') && this.icon) {
      return this.icon as IconName;
    }

    return this.statusIcons[this.status];
  }

  @HostBinding('attr.role') get role(): string | null {
    if (
      this.status === 'success' ||
      this.status === 'warning' ||
      this.status === 'error'
    ) {
      return 'alert';
    }

    return null;
  }

  constructor() {
    this.statusDirective.lgStatus = 'generic';
  }
}
