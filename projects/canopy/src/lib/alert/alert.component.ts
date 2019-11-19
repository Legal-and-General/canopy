import {
  Component,
  HostBinding,
  Input,
  ViewEncapsulation
} from '@angular/core';

import classnames from 'classnames';

import { AlertVariant } from './alert.interface';

@Component({
  selector: 'lg-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LgAlertComponent {
  @HostBinding('class') get classes(): string {
    return classnames('lg-alert', {
      [`lg-alert--${this.variant}`]: this.variant
    });
  }
  @HostBinding('attr.role') get role(): string {
    if (this.variant !== 'info' && this.variant !== 'generic') {
      return 'alert';
    }
  }
  @Input() variant: AlertVariant = 'generic';
}
