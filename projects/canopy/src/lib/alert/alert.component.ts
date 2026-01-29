import {
  Component,
  HostBinding,
  Input,
  OnChanges,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';

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
export class LgAlertComponent implements OnChanges {
  private explicitRole: string;

  @Input() showIcon = true;
  @Input() status: Status = 'generic';
  @Input() statusTheme: Theme = 'neutral';

  @HostBinding('class.lg-alert') class = true;
  @HostBinding('attr.role') roleAttr: string;

  ngOnChanges(_changes: SimpleChanges) {
    this.initRole();
  }

  @Input() set role(role: string) {
    this.explicitRole = role;
  }

  private initRole() {
    if (this.explicitRole) {
      if (this.explicitRole !== 'none') {
        this.roleAttr = this.explicitRole;
      }
    } else {
      switch (this.status) {
        case 'error':
        case 'warning':
        case 'success':
          this.roleAttr = 'alert';
      }
    }
  }
}
