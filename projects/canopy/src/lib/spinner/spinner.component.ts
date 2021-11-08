import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

import { interval, Subscription } from 'rxjs';

import type { SpinnerSize, SpinnerVariant } from './spinner.interface';

@Component({
  selector: 'lg-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgSpinnerComponent implements OnInit, OnDestroy {
  @HostBinding('class.lg-spinner') class = true;

  @Input() variant: SpinnerVariant = 'dark';

  @Input() size: SpinnerSize = 'md';
  @HostBinding('class.lg-spinner--sm') get sizeClass() {
    return this.size === 'sm';
  }

  /*
   * Until the below issue is resolved we've decided to pass the content via an input instead of <ng-content>:
   * https://github.com/angular/angular/issues/26083#issuecomment-425227938.
   */
  @Input() text: string;

  readScreenReaderAlert = true;
  private subscription: Subscription;

  @HostBinding('attr.role') get role() {
    if (this.readScreenReaderAlert) {
      return 'alert';
    }
    return null;
  }

  @HostBinding('attr.aria-live') get ariaLive() {
    if (this.readScreenReaderAlert) {
      return 'assertive';
    }
    return null;
  }

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.subscription = interval(2500).subscribe(() => {
      this.readScreenReaderAlert = !this.readScreenReaderAlert;
      this.cdr.markForCheck();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
