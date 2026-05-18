import { Component, HostBinding, Input, ViewEncapsulation, inject } from '@angular/core';

import type { Status, Theme } from '../status';
import { LgStatusDirective } from '../status';
import { LgIconComponent } from '../icon';
import type { IconName } from '../icon/ui-icons-files.interface';

const statusIcons: Record<Status, IconName> = {
  generic: 'globe',
  info: 'information-filled',
  success: 'checkmark-spot-filled',
  warning: 'warning-filled',
  error: 'crossmark-spot-filled',
};

@Component({
  selector: 'lg-alert',
  templateUrl: './alert.component.html',
  styleUrls: [ './alert.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  imports: [ LgIconComponent ],
  hostDirectives: [
    {
      directive: LgStatusDirective,
      inputs: [ 'lgStatus:status', 'lgStatusTheme:statusTheme' ],
    },
  ],
})
export class LgAlertComponent {
  private explicitRole: string;
  private readonly statusDirective = inject(LgStatusDirective);

  @Input() showIcon = true;
  @Input() icon?: IconName;

  @HostBinding('class.lg-alert') class = true;
  @HostBinding('attr.role') get roleAttr(): string | null {
    if (this.explicitRole) {
      if (this.explicitRole !== 'none') {
        return this.explicitRole;
      }

      return null;
    }

    switch (this.status) {
      case 'error':
      case 'warning':
      case 'success':
        return 'alert';
      default:
        return null;
    }
  }

  get statusIcon(): IconName {
    if ((this.status === 'generic' || this.status === 'info') && this.icon) {
      return this.icon;
    }

    return statusIcons[this.status];
  }

  get status(): Status {
    return this.statusDirective.status;
  }

  get statusTheme(): Theme {
    return this.statusDirective.statusTheme;
  }

  @Input() set role(role: string) {
    this.explicitRole = role;
  }
}
