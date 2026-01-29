import {
  Component,
  HostBinding,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
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
export class LgAlertComponent implements OnInit, OnChanges {
  private explicitRole: string;
  private statusDirective = inject(LgStatusDirective);

  @Input() showIcon = true;

  @HostBinding('class.lg-alert') class = true;
  @HostBinding('attr.role') roleAttr: string;

  get status(): Status {
    return this.statusDirective.status;
  }

  get statusTheme(): Theme {
    return this.statusDirective.statusTheme;
  }

  ngOnInit() {
    this.statusDirective.lgStatus = this.statusDirective.status || 'generic';
    this.statusDirective.lgStatusTheme = this.statusDirective.statusTheme || 'neutral';
  }

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
