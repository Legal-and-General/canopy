import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  EventEmitter,
  HostBinding,
  Input,
  OnDestroy,
  Output,
  ViewEncapsulation
} from '@angular/core';
import { Subscription } from 'rxjs';
import { LgDetailsPanelHeadingComponent } from './details-panel-heading/details-panel-heading.component';

let nextUniqueId = 0;

@Component({
  selector: 'lg-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LgDetailsComponent implements AfterContentInit, OnDestroy {
  @HostBinding('class.lg-details') class = true;

  @ContentChild(LgDetailsPanelHeadingComponent, { static: false })
  panelHeading: LgDetailsPanelHeadingComponent;

  @Input() isActive = false;
  @Output() opened = new EventEmitter<void>();
  @Output() closed = new EventEmitter<void>();

  id = nextUniqueId++;
  toggleId = `lg-details-header-${this.id}`;
  panelId = `lg-details-content-${this.id}`;

  private subscription: Subscription;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterContentInit() {
    this.panelHeading.isActive = this.isActive;

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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
