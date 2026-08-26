import {
  Component,
  HostBinding,
  Input,
  OnInit,
  ViewEncapsulation,
  inject,
} from '@angular/core';

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
      inputs: [ 'lgStatusTheme:statusTheme' ],
    },
  ],
})
export class LgValidationComponent implements OnInit {
  private readonly statusDirective = inject(LgStatusDirective);
  private validationStatus: Status = 'error';

  @Input() showIcon = true;

  @Input()
  set status(status: Status) {
    this.validationStatus = status;
    this.statusDirective.lgStatus = status;
  }

  get status(): Status {
    return this.validationStatus;
  }

  @HostBinding('id')
  @Input()
  id = `lg-validation-${randomUniqueId()}`;

  @HostBinding('class.lg-validation') class = true;

  ngOnInit(): void {
    this.statusDirective.lgStatus = this.validationStatus;
  }
}
