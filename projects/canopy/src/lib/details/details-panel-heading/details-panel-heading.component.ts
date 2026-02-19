import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
  inject,
} from '@angular/core';

import { LgIconComponent } from '../../icon';
import type { Status } from '../../status';
import { LgStatusDirective } from '../../status';
import { LgHeadingComponent } from '../../heading';

@Component({
  selector: 'lg-details-panel-heading',
  templateUrl: './details-panel-heading.component.html',
  styleUrls: [ './details-panel-heading.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ LgHeadingComponent, LgIconComponent ],
})
export class LgDetailsPanelHeadingComponent {
  private cdr = inject(ChangeDetectorRef);

  @Input() headingLevel;
  @Input() isActive = false;

  _showIcon = true;
  @Input()
  set showIcon(showIcon: boolean) {
    this._showIcon = showIcon;
    this.cdr.detectChanges();
  }
  get showIcon(): boolean {
    return this._showIcon;
  }

  _status: Status = 'generic';
  @Input()
  set status(status: Status) {
    this._status = status;
    this.cdr.detectChanges();
  }
  get status(): Status {
    return this.statusDirective?.status ?? this._status;
  }

  statusDirective: LgStatusDirective;

  @Output() toggleActive = new EventEmitter<boolean>();

  uniqueId: number;

  toggle(): void {
    this.isActive = !this.isActive;
    this.toggleActive.emit(this.isActive);
  }
}
