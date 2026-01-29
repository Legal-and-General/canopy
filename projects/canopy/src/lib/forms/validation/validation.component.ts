import {
  Component,
  ElementRef,
  HostBinding,
  Input,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

import type { Status } from '../../status';
import { LgIconComponent } from '../../icon';

let nextUniqueId = 0;

@Component({
  selector: 'lg-validation',
  templateUrl: './validation.component.html',
  styleUrls: [ './validation.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  imports: [ LgIconComponent ],
})
export class LgValidationComponent {
  private renderer = inject(Renderer2);
  private hostElement = inject(ElementRef);

  private _status: Status;

  @Input() showIcon = true;
  @Input()
  set status(status: Status) {
    if (this._status) {
      this.renderer.removeClass(
        this.hostElement.nativeElement,
        `lg-status-${this._status}`,
      );
    }

    this.renderer.addClass(this.hostElement.nativeElement, `lg-status-${status}`);
    this._status = status;
  }
  get status() {
    return this._status;
  }

  @HostBinding('id')
  @Input()
  id = `lg-validation-${nextUniqueId++}`;

  @HostBinding('class.lg-validation') class = true;

  constructor() {
    this.status = 'error';
  }
}
