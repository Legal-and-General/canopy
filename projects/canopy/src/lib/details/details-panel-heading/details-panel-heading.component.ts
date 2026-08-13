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
import type { IconName } from '../../icon/ui-icons-files.interface';
import type { Status } from '../../status';
import { LgStatusDirective } from '../../status';
import { LgHeadingComponent } from '../../heading';

const statusIcons: Record<Status, IconName> = {
  generic: 'globe',
  info: 'information-filled',
  success: 'checkmark-spot-filled',
  warning: 'warning-filled',
  error: 'crossmark-spot-filled',
};

@Component({
  selector: 'lg-details-panel-heading',
  templateUrl: './details-panel-heading.component.html',
  styleUrls: [ './details-panel-heading.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ LgHeadingComponent, LgIconComponent ],
})
export class LgDetailsPanelHeadingComponent {
  private readonly cdr = inject(ChangeDetectorRef);

  @Input() headingLevel;
  @Input() isActive = false;

  _icon?: string;
  @Input()
  set icon(icon: string | undefined) {
    this._icon = icon;
    this.cdr.markForCheck();
  }
  get icon() {
    return this._icon;
  }

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

  get statusIcon(): IconName {
    if ((this.status === 'generic' || this.status === 'info') && this.icon) {
      return this.icon as IconName;
    }

    return statusIcons[this.status];
  }

  statusDirective: LgStatusDirective;

  @Output() toggleActive = new EventEmitter<boolean>();

  uniqueId: string;

  toggle(): void {
    this.isActive = !this.isActive;
    this.toggleActive.emit(this.isActive);
  }
}
