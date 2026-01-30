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
      inputs: [ 'lgStatus:status' ],
    },
  ],
})
export class LgValidationComponent implements OnInit {
  private readonly statusDirective = inject(LgStatusDirective);

  @Input() showIcon = true;

  get status(): Status {
    return this.statusDirective.status;
  }

  @HostBinding('id')
  @Input()
  id = `lg-validation-${nextUniqueId++}`;

  @HostBinding('class.lg-validation') class = true;

  ngOnInit() {
    this.statusDirective.lgStatus = 'error';
  }
}
