import {
  ChangeDetectorRef,
  Directive,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
  inject,
} from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Directive({
  selector: '[lgSrAlertMessage]',
  standalone: true,
})
export class LgSrAlertMessageDirective implements OnInit, OnDestroy {
  private cdr = inject(ChangeDetectorRef);

  private subscription: Subscription;

  @Input() lgSrAlertMessage: boolean;
  @Input() timer = 8000;

  @HostBinding('class.lg-visually-hidden') class = true;

  @HostBinding('attr.aria-hidden') get ariaHidden() {
    return !this.lgSrAlertMessage;
  }

  @HostBinding('attr.role') get role() {
    if (this.lgSrAlertMessage) {
      return 'alert';
    }

    return null;
  }

  @HostBinding('attr.aria-live') get ariaLive() {
    if (this.lgSrAlertMessage) {
      return 'assertive';
    }

    return null;
  }

  ngOnInit(): void {
    this.subscription = timer(this.timer).subscribe(() => {
      this.lgSrAlertMessage = false;
      this.cdr.detectChanges();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
