import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';

import type { HeadingLevel } from '../../heading';
import { LgModalService } from '../modal.service';

@Component({
  selector: 'lg-modal-header',
  templateUrl: './modal-header.component.html',
  styleUrls: [ './modal-header.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgModalHeaderComponent {
  @Input() headingLevel: HeadingLevel = 2;
  @Output() closed: EventEmitter<void> = new EventEmitter();
  modalId: string;

  @HostBinding('class.lg-modal-header') class = true;
  @HostBinding('id') id: string;

  constructor(private modalService: LgModalService) {}

  close(): void {
    this.modalService.close(this.modalId);
  }
}
