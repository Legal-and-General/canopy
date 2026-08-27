import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef,
  forwardRef,
  HostBinding,
  inject,
  Input,
  OnDestroy,
  ViewEncapsulation,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { LgButtonToggleDirective } from '../button';
import { randomUniqueId } from '../utils';

import { CardVariant, lgCardPanelIdPrefix, lgCardToggleIdPrefix } from './card.interface';
import { LgCardToggableContentComponent } from './card-toggable-content/card-toggable-content.component';
import { LgCardNavigationTitleComponent } from './card-navigation-title/card-navigation-title.component';

@Component({
  selector: 'lg-card',
  templateUrl: './card.component.html',
  styleUrls: [ './card.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'lg-card',
  },
  standalone: true,
})
export class LgCardComponent implements AfterContentInit, OnDestroy {
  private readonly hostElement = inject<ElementRef<HTMLElement>>(ElementRef);
  private subscription?: Subscription;
  private resizeObserver?: ResizeObserver;
  private contentElement?: HTMLElement | null;
  private headerElement?: HTMLElement | null;
  private footerElement?: HTMLElement | null;
  private uniqueId = randomUniqueId();

  @ContentChild(forwardRef(() => LgButtonToggleDirective))
  buttonToggle?: LgButtonToggleDirective;
  @ContentChild(forwardRef(() => LgCardToggableContentComponent))
  cardToggableContent?: LgCardToggableContentComponent;
  @ContentChild(forwardRef(() => LgCardNavigationTitleComponent))
  cardNavigationTitle?: LgCardNavigationTitleComponent;
  @Input() variant: CardVariant = 'default';

  @HostBinding('class') get variantClass(): string {
    return `lg-card--${this.variant}`;
  }

  ngAfterContentInit(): void {
    if (this.cardNavigationTitle) {
      this.variant = 'interactive';
    }

    if (this.buttonToggle && this.cardToggableContent) {
      const cardToggableContent = this.cardToggableContent;

      this.buttonToggle.id = `${lgCardToggleIdPrefix}${this.uniqueId}`;

      this.buttonToggle.ariaControls = `${lgCardPanelIdPrefix}${this.uniqueId}`;

      cardToggableContent.uniqueId = this.uniqueId;

      this.subscription = this.buttonToggle.toggleActive.subscribe(isActive => {
        cardToggableContent.isActive = isActive;
      });
    }

    this.initialiseContentCentreObserver();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    this.resizeObserver?.disconnect();
  }

  private initialiseContentCentreObserver(): void {
    const host = this.hostElement.nativeElement;

    this.contentElement = host.querySelector<HTMLElement>('lg-card-content');
    this.headerElement = host.querySelector<HTMLElement>('lg-card-header');
    this.footerElement = host.querySelector<HTMLElement>('lg-card-footer');

    const needsContentCentreOffset =
      (this.variant === 'default' || this.variant === 'interactive') &&
      !!host.querySelector('lg-card-hero-img.lg-card-hero-img__icon');

    if (!needsContentCentreOffset) {
      return;
    }

    this.updateContentCentreOffset();

    if (typeof ResizeObserver === 'undefined') {
      return;
    }

    this.resizeObserver = new ResizeObserver(() => {
      this.updateContentCentreOffset();
    });

    this.resizeObserver.observe(host);

    if (this.contentElement) {
      this.resizeObserver.observe(this.contentElement);
    }

    if (this.headerElement) {
      this.resizeObserver.observe(this.headerElement);
    }

    if (this.footerElement) {
      this.resizeObserver.observe(this.footerElement);
    }
  }

  private updateContentCentreOffset(): void {
    const host = this.hostElement.nativeElement;
    const content = this.contentElement;

    if (!content) {
      host.style.setProperty('--lg-card-content-centre-offset', '0px');

      return;
    }

    const cardRect = host.getBoundingClientRect();
    const contentRect = content.getBoundingClientRect();
    const cardCentre = cardRect.top + cardRect.height / 2;
    const contentCentre = contentRect.top + contentRect.height / 2;
    const offset = contentCentre - cardCentre;
    const snappedOffset = Math.sign(offset) * Math.round(Math.abs(offset));

    host.style.setProperty('--lg-card-content-centre-offset', `${snappedOffset}px`);
  }
}
