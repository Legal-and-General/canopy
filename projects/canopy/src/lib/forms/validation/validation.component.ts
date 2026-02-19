import { Component, HostBinding, Input, ViewEncapsulation, inject } from '@angular/core';

import type { Status } from '../../status';
import { LgStatusDirective } from '../../status';
import { LgIconComponent } from '../../icon';

let nextUniqueId = 0;

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
  id = `lg-validation-${nextUniqueId++}`;

  @HostBinding('class.lg-validation') class = true;

  constructor() {
    this.statusDirective.lgStatus = 'error';
  }
}
