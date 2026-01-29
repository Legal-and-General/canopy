import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  OnDestroy,
  Output,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { Subscription } from 'rxjs';

import type { Status } from '../status';

import { LgDetailsPanelHeadingComponent } from './details-panel-heading/details-panel-heading.component';

let nextUniqueId = 0;

@Component({
  selector: 'lg-details',
  templateUrl: './details.component.html',
  styleUrls: [ './details.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class LgDetailsComponent implements AfterContentInit, OnDestroy {
  private renderer = inject(Renderer2);
  private hostElement = inject(ElementRef);
  private cdr = inject(ChangeDetectorRef);

  private subscription: Subscription;
  uniqueId = nextUniqueId++;
  _showIcon = true;
  _status: Status;

  @Input() isActive = false;
  @Input()
  set showIcon(showIcon: boolean) {
    this._showIcon = showIcon;

    if (this.panelHeading) {
      this.panelHeading.showIcon = showIcon;
    }
  }
  get showIcon(): boolean {
    return this._showIcon;
  }

  @Input()
  set status(status: Status) {
    if (this._status) {
      this.renderer.removeClass(
        this.hostElement.nativeElement,
        `lg-status-${this._status}`,
      );
    }

    if (this.panelHeading) {
      this.panelHeading.status = status;
    }

    this.renderer.addClass(this.hostElement.nativeElement, `lg-status-${status}`);
    this._status = status;
  }
  get status(): Status {
    return this._status;
  }

  @Output() opened = new EventEmitter<void>();
  @Output() closed = new EventEmitter<void>();

  @HostBinding('class.lg-details') class = true;
  @HostBinding('attr.role') get role(): string {
    if (this.status !== 'info' && this.status !== 'generic') {
      return 'alert';
    }
  }

  @ContentChild(LgDetailsPanelHeadingComponent)
  panelHeading: LgDetailsPanelHeadingComponent;

  constructor() {
    this.status = 'generic';
  }

  ngAfterContentInit(): void {
    this.panelHeading.uniqueId = this.uniqueId;
    this.panelHeading.isActive = this.isActive;
    this.panelHeading.status = this.status;
    this.panelHeading.showIcon = this.showIcon;

    this.subscription = this.panelHeading.toggleActive.subscribe(isActive => {
      this.isActive = isActive;

      if (isActive) {
        this.opened.emit();
      } else {
        this.closed.emit();
      }

      this.cdr.markForCheck();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
