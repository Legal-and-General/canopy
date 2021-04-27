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
} from '@angular/core';

import { Subscription } from 'rxjs';

import { Variant } from '../variant';
import { LgDetailsPanelHeadingComponent } from './details-panel-heading/details-panel-heading.component';

let nextUniqueId = 0;

@Component({
  selector: 'lg-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgDetailsComponent implements AfterContentInit, OnDestroy {
  @HostBinding('class.lg-details') class = true;

  @ContentChild(LgDetailsPanelHeadingComponent)
  panelHeading: LgDetailsPanelHeadingComponent;

  @Input() isActive = false;

  _showIcon = true;
  @Input()
  set showIcon(showIcon: boolean) {
    this._showIcon = showIcon;
    if (this.panelHeading) {
      this.panelHeading.showIcon = showIcon;
    }
  }
  get showIcon() {
    return this._showIcon;
  }

  _variant: Variant;
  @Input()
  set variant(variant: Variant) {
    if (this._variant) {
      this.renderer.removeClass(
        this.hostElement.nativeElement,
        `lg-variant--${this._variant}`,
      );
    }
    if (this.panelHeading) {
      this.panelHeading.variant = variant;
    }
    this.renderer.addClass(this.hostElement.nativeElement, `lg-variant--${variant}`);
    this._variant = variant;
  }
  get variant() {
    return this._variant;
  }

  @HostBinding('attr.role') get role(): string {
    if (this.variant !== 'info' && this.variant !== 'generic') {
      return 'alert';
    }
  }

  @Output() opened = new EventEmitter<void>();
  @Output() closed = new EventEmitter<void>();

  id = nextUniqueId++;
  toggleId = `lg-details-header-${this.id}`;
  panelId = `lg-details-content-${this.id}`;

  private subscription: Subscription;

  constructor(
    private renderer: Renderer2,
    private hostElement: ElementRef,
    private cdr: ChangeDetectorRef,
  ) {
    this.variant = Variant.Generic;
  }

  ngAfterContentInit() {
    this.panelHeading.isActive = this.isActive;
    this.panelHeading.variant = this.variant;
    this.panelHeading.showIcon = this.showIcon;

    this.subscription = this.panelHeading.toggleActive.subscribe((isActive) => {
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
