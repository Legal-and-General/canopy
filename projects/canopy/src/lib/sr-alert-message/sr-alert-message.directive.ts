import {
  ChangeDetectorRef,
  Directive,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Directive({
  selector: '[lgSrAlertMessage]',
})
export class LgSrAlertMessageDirective implements OnInit, OnDestroy {
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

  constructor(private cdr: ChangeDetectorRef) {}

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
