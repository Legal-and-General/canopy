import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  ViewEncapsulation,
  inject,
} from '@angular/core';

import type { HeadingLevel } from '../../heading';
import { LgHeadingComponent } from '../../heading';
import { LgModalService } from '../modal.service';
import { LgIconComponent } from '../../icon';

@Component({
  selector: 'lg-modal-header',
  templateUrl: './modal-header.component.html',
  styleUrls: [ './modal-header.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'lg-modal-header',
  },
  imports: [ LgHeadingComponent, LgIconComponent ],
})
export class LgModalHeaderComponent {
  private modalService = inject(LgModalService);
  private cdr = inject(ChangeDetectorRef);

  private _id: string;

  @Input() headingLevel: HeadingLevel = 2;
  @Output() closed: EventEmitter<void> = new EventEmitter();
  modalId: string;

  @HostBinding('id') get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = value;
    this.cdr.markForCheck();
  }

  close(): void {
    this.closed.emit();
    this.modalService.close(this.modalId);
  }
}
