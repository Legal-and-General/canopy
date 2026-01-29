import { Directive, ElementRef, Input, Renderer2, inject } from '@angular/core';

import type { Status, Theme } from './status.interface';
import { StatusClassService } from './status-class.service';

@Directive({
  selector: '[lgStatus]',
  standalone: true,
  providers: [ StatusClassService ],
})
export class LgStatusDirective {
  private renderer = inject(Renderer2);
  private hostElement = inject(ElementRef);
  private statusClassService = inject(StatusClassService);

  private currentStatus: Status = 'generic';
  private currentTheme: Theme = 'neutral';
  private appliedClasses: Array<string> = [];

  @Input()
  set lgStatus(status: Status) {
    this.currentStatus = status;
    this.applyClasses();
  }

  @Input()
  set lgStatusTheme(theme: Theme) {
    this.currentTheme = theme;
    this.applyClasses();
  }

  private applyClasses(): void {
    if (!this.currentStatus) {
      return;
    }

    this.appliedClasses = this.statusClassService.applyStatusClasses(
      this.renderer,
      this.hostElement.nativeElement,
      this.currentStatus,
      this.currentTheme,
      this.appliedClasses,
    );
  }
}
