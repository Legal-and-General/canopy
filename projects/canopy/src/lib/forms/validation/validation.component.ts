import { Component, HostBinding, Input, ViewEncapsulation, inject } from '@angular/core';

import type { Status } from '../../status';
import { LgStatusDirective } from '../../status';
import { LgIconComponent } from '../../icon';
import { randomUniqueId } from '../../utils';

@Component({
  selector: 'lg-validation',
  templateUrl: './validation.component.html',
  styleUrls: [ './validation.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  imports: [ LgIconComponent ],
  hostDirectives: [
    {
      directive: LgStatusDirective,
      inputs: [ 'lgStatus:status', 'lgStatusTheme:statusTheme' ],
    },
  ],
})
export class LgValidationComponent {
  private readonly statusDirective = inject(LgStatusDirective);

  @Input() showIcon = true;

  get status(): Status {
    return this.statusDirective.status;
  }

  @HostBinding('id')
  @Input()
  id = `lg-validation-${randomUniqueId()}`;

  @HostBinding('class.lg-validation') class = true;

  constructor() {
    this.statusDirective.lgStatus = 'error';
  }
}
