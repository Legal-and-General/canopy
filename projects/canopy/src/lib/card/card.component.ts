import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef,
  ElementRef,
  forwardRef,
  HostBinding,
  HostListener,
  inject,
  Input,
  OnDestroy,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { LgButtonToggleDirective } from '../button';
import { randomUniqueId } from '../utils';

import { CardVariant, lgCardPanelIdPrefix, lgCardToggleIdPrefix } from './card.interface';
import { LgCardToggableContentComponent } from './card-toggable-content/card-toggable-content.component';
import { LgCardNavigationTitleComponent } from './card-navigation-title/card-navigation-title.component';
import { LgCardContentComponent } from './card-content/card-content.component';
import { LgCardHeroImageComponent } from './card-hero-img/card-hero-img.component';

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
  private static readonly minWidths = {
    md: 768,
    lg: 1024,
    xl: 1280,
    xxl: 1440,
  };

  private readonly renderer = inject(Renderer2);
  private readonly hostElement = inject<ElementRef<HTMLElement>>(ElementRef);
  private subscription?: Subscription;
  private readonly uniqueId = randomUniqueId();

  @ContentChild(forwardRef(() => LgButtonToggleDirective))
  buttonToggle?: LgButtonToggleDirective;
  @ContentChild(forwardRef(() => LgCardToggableContentComponent))
  cardToggableContent?: LgCardToggableContentComponent;
  @ContentChild(forwardRef(() => LgCardNavigationTitleComponent))
  cardNavigationTitle?: LgCardNavigationTitleComponent;
  @ContentChild(forwardRef(() => LgCardContentComponent), { read: ElementRef })
  cardContentElement?: ElementRef<HTMLElement>;
  @ContentChild(forwardRef(() => LgCardHeroImageComponent))
  cardHeroImage?: LgCardHeroImageComponent;
  @ContentChild(forwardRef(() => LgCardHeroImageComponent), { read: ElementRef })
  cardHeroImageElement?: ElementRef<HTMLElement>;
  @Input() variant: CardVariant = 'default';

  @HostBinding('class') get variantClass(): string {
    return `lg-card--${this.variant}`;
  }

  ngAfterContentInit(): void {
    if (this.cardNavigationTitle) {
      this.variant = 'interactive';
    }

    this.syncPictogramPlacement();

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
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    this.syncPictogramPlacement();
  }

  private syncPictogramPlacement(): void {
    if (!this.cardHeroImageElement || !this.cardHeroImage || !this.cardContentElement) {
      return;
    }

    if (this.shouldProjectPictogramInCardContent()) {
      this.renderer.appendChild(
        this.cardContentElement.nativeElement,
        this.cardHeroImageElement.nativeElement,
      );

      return;
    }

    const host: HTMLElement = this.hostElement.nativeElement;
    const body: Element | null = host.querySelector('.lg-card__body');

    if (body) {
      this.renderer.insertBefore(host, this.cardHeroImageElement.nativeElement, body);
    }
  }

  private shouldProjectPictogramInCardContent(): boolean {
    if (!this.hasHorizontalOrientationAtCurrentViewport() || this.cardHeroImage?.src) {
      return false;
    }

    return true;
  }

  private hasHorizontalOrientationAtCurrentViewport(): boolean {
    const orientation = this.getCurrentOrientation();

    return !!orientation && orientation.includes('horizontal');
  }

  private getCurrentOrientation(): string | undefined {
    const classList: Array<string> = Array.from(this.hostElement.nativeElement.classList);
    const orientationByBreakpoint = new Map<string, string>();

    classList.forEach(className => {
      const match = /^lg-orientation--(sm|md|lg|xl|xxl)--([a-z-]+)$/.exec(className);

      if (match) {
        orientationByBreakpoint.set(match[1], match[2]);
      }
    });

    if (
      this.matchesMinWidth(LgCardComponent.minWidths.xxl) &&
      orientationByBreakpoint.has('xxl')
    ) {
      return orientationByBreakpoint.get('xxl');
    }

    if (
      this.matchesMinWidth(LgCardComponent.minWidths.xl) &&
      orientationByBreakpoint.has('xl')
    ) {
      return orientationByBreakpoint.get('xl');
    }

    if (
      this.matchesMinWidth(LgCardComponent.minWidths.lg) &&
      orientationByBreakpoint.has('lg')
    ) {
      return orientationByBreakpoint.get('lg');
    }

    if (
      this.matchesMinWidth(LgCardComponent.minWidths.md) &&
      orientationByBreakpoint.has('md')
    ) {
      return orientationByBreakpoint.get('md');
    }

    return orientationByBreakpoint.get('sm');
  }

  private matchesMinWidth(minWidth: number): boolean {
    if (typeof window !== 'undefined') {
      if (typeof window.matchMedia === 'function') {
        return window.matchMedia(`(min-width: ${minWidth}px)`).matches;
      }

      return window.innerWidth >= minWidth;
    }

    return false;
  }
}
