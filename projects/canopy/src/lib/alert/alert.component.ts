import { Component, HostBinding, Input, ViewEncapsulation, inject } from '@angular/core';

import type { Status, Theme } from '../status';
import { LgStatusDirective } from '../status';
import { LgIconComponent } from '../icon';

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
