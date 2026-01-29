import { Directive, ElementRef, Input, Renderer2, inject } from '@angular/core';

import type { Status, Theme } from './status.interface';
import { StatusClassService } from './status-class.service';

@Directive({
  selector: '[lgStatus]',
  standalone: true,
  providers: [ StatusClassService ],
})
export class LgStatusDirective {
  private readonly renderer = inject(Renderer2);
  private readonly hostElement = inject(ElementRef);
  private readonly statusClassService = inject(StatusClassService);

  private _status: Status = 'generic';
  private _statusTheme: Theme = 'neutral';
  private appliedClasses: Array<string> = [];

  @Input()
  set lgStatus(status: Status) {
    this._status = status;
    this.applyClasses();
  }

  @Input()
  set lgStatusTheme(theme: Theme) {
    this._statusTheme = theme;
    this.applyClasses();
  }

  get status(): Status {
    return this._status;
  }

  get statusTheme(): Theme {
    return this._statusTheme;
  }

  private applyClasses(): void {
    if (!this._status) {
      return;
    }

    this.appliedClasses = this.statusClassService.applyStatusClasses(
      this.renderer,
      this.hostElement.nativeElement,
      this._status,
      this._statusTheme,
      this.appliedClasses,
    );
  }
}
