import {
  AfterViewInit,
  Component,
  HostBinding,
  Input,
  OnChanges,
  ViewEncapsulation,
  inject,
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
export class LgAlertComponent implements OnChanges, AfterViewInit {
  private statusDirective = inject(LgStatusDirective);
  private explicitRole: string;

  @Input() showIcon = true;
  @Input() status: Status = 'generic';
  @Input() statusTheme: Theme = 'neutral';

  @HostBinding('class.lg-alert') class = true;
  @HostBinding('attr.role') roleAttr: string;

  ngAfterViewInit() {
    // Ensure the directive has the initial values
    this.statusDirective.lgStatus = this.status;
    this.statusDirective.lgStatusTheme = this.statusTheme;
  }

  ngOnChanges() {
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
