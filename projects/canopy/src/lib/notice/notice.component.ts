import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef,
  HostBinding,
  Input,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

import { LgPictogramComponent } from '../pictogram';
import type { Status } from '../status';
import { StatusClassService } from '../status/status-class.service';

@Component({
  selector: 'lg-notice',
  templateUrl: './notice.component.html',
  styleUrls: [ './notice.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  providers: [ StatusClassService ],
})
export class LgNoticeComponent implements AfterContentInit {
  private readonly renderer = inject(Renderer2);
  private readonly statusClassService = inject(StatusClassService);
  private hasExplicitStatus = false;
  private appliedStatusClasses: Array<string> = [];
  private _status: Status = 'generic';

  @Input() hasRole = true;

  @Input()
  set status(status: Status | undefined) {
    if (status === undefined) {
      this.hasExplicitStatus = false;
      this._status = 'generic';
      this.applyStatusClasses();

      return;
    }

    this.hasExplicitStatus = true;
    this._status = status;
    this.applyStatusClasses();
  }

  get status(): Status {
    return this._status;
  }

  @ContentChild(LgPictogramComponent, { read: ElementRef })
  pictogram?: ElementRef<HTMLElement>;

  @HostBinding('class.lg-notice') class = true;

  ngAfterContentInit(): void {
    this.applyStatusClasses();
  }

  @HostBinding('attr.role') get roleAttr(): string | null {
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

  private applyStatusClasses(): void {
    if (!this.pictogram) {
      return;
    }

    this.appliedStatusClasses = this.statusClassService.applyStatusClasses(
      this.renderer,
      this.pictogram.nativeElement,
      this.status,
      'neutral',
      this.appliedStatusClasses,
    );
  }
}
