import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  inject,
  Input,
  NgZone,
  OnDestroy,
  ViewEncapsulation,
} from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { NgClass, NgIf } from '@angular/common';

import type { SpinnerSize, SpinnerVariant } from './spinner.interface';

@Component({
  selector: 'lg-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: [ './spinner.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ NgClass, NgIf ],
})
export class LgSpinnerComponent implements OnDestroy {
  private subscription: Subscription;
  readScreenReaderAlert = true;

  @Input() variant: SpinnerVariant = 'dark';
  @Input() size: SpinnerSize = 'md';
  /*
   * Until the below issue is resolved we've decided to pass the content via an input instead of <ng-content>:
   * https://github.com/angular/angular/issues/26083#issuecomment-425227938.
   */
  @Input() text: string;

  @HostBinding('class.lg-spinner') class = true;

  @HostBinding('class.lg-spinner--sm') get sizeClass() {
    return this.size === 'sm';
  }

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

  constructor(private cdr: ChangeDetectorRef) {
    inject(NgZone).runOutsideAngular(() => {
      this.subscription = interval(2500).subscribe(() => {
        this.readScreenReaderAlert = !this.readScreenReaderAlert;
        this.cdr.markForCheck();
      });
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
