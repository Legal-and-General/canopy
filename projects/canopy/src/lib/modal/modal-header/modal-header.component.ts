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
import { LgIconComponent } from '../../icon';
import { LgHeadingComponent } from '../../heading';

@Component({
  selector: 'lg-modal-header',
  templateUrl: './modal-header.component.html',
  styleUrls: [ './modal-header.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'lg-modal-header',
  },
  standalone: true,
  imports: [ LgHeadingComponent, LgIconComponent ],
})
export class LgModalHeaderComponent {
  @Input() headingLevel: HeadingLevel = 2;
  @Output() closed: EventEmitter<void> = new EventEmitter();
  modalId: string;

  @HostBinding('id') id: string;

  constructor(private modalService: LgModalService) {}

  close(): void {
    this.closed.emit();
    this.modalService.close(this.modalId);
  }
}
