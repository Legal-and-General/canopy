import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Input,
  ViewEncapsulation,
} from '@angular/core';

import { LgPictogramComponent } from '../pictogram';
import type { Status } from '../status';

@Component({
  selector: 'lg-notice',
  templateUrl: './notice.component.html',
  styleUrls: [ './notice.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  host: {
    class: 'lg-notice',
    '[attr.role]': 'roleAttr',
  },
})
export class LgNoticeComponent {
  private hasExplicitStatus = false;
  private _status: Exclude<Status, 'generic'> = 'info';
  private _pictogram?: LgPictogramComponent;

  @Input() hasRole = true;

  @Input()
  set status(status: Exclude<Status, 'generic'> | undefined) {
    if (status === undefined) {
      this.hasExplicitStatus = false;
      this._status = 'info';
      this.applyPictogramStatus();

      return;
    }

    this.hasExplicitStatus = true;
    this._status = status;
    this.applyPictogramStatus();
  }

  get status(): Exclude<Status, 'generic'> {
    return this._status;
  }

  @ContentChild(LgPictogramComponent)
  set pictogram(pictogram: LgPictogramComponent | undefined) {
    this._pictogram = pictogram;
    this.applyPictogramStatus();
  }
  get pictogram(): LgPictogramComponent | undefined {
    return this._pictogram;
  }

  get roleAttr(): string | null {
    if (!this.hasExplicitStatus) {
      return this.hasRole
        ? 'alert'
        : null;
    }

    switch (this.status) {
      case 'error':
      case 'warning':
      case 'success':
        return 'alert';
      default:
        return null;
    }
  }

  private applyPictogramStatus(): void {
    if (this.pictogram) {
      this.pictogram.status = this.status;
      this.pictogram.hasFill = true;
    }
  }
}
