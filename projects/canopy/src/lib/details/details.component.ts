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

import type { Variant } from '../variant';

import { LgDetailsPanelHeadingComponent } from './details-panel-heading/details-panel-heading.component';

let nextUniqueId = 0;

@Component({
  selector: 'lg-details',
  templateUrl: './details.component.html',
  styleUrls: [ './details.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgDetailsComponent implements AfterContentInit, OnDestroy {
  private subscription: Subscription;
  uniqueId = nextUniqueId++;
  _showIcon = true;
  _variant: Variant;

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
  get variant(): Variant {
    return this._variant;
  }

  @Output() opened = new EventEmitter<void>();
  @Output() closed = new EventEmitter<void>();

  @HostBinding('class.lg-details') class = true;
  @HostBinding('attr.role') get role(): string {
    if (this.variant !== 'info' && this.variant !== 'generic') {
      return 'alert';
    }
  }

  @ContentChild(LgDetailsPanelHeadingComponent)
  panelHeading: LgDetailsPanelHeadingComponent;

  constructor(
    private renderer: Renderer2,
    private hostElement: ElementRef,
    private cdr: ChangeDetectorRef,
  ) {
    this.variant = 'generic';
  }

  ngAfterContentInit(): void {
    this.panelHeading.uniqueId = this.uniqueId;
    this.panelHeading.isActive = this.isActive;
    this.panelHeading.variant = this.variant;
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
