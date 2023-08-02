import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef,
  forwardRef,
  HostBinding,
  Input,
  OnDestroy,
  Renderer2,
  ViewEncapsulation,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { LgButtonToggleDirective } from '../button';

import {
  CardVariant,
  lgCardPanelIdPrefix,
  lgCardToggleIdPrefix,
  OrientationResponsive,
} from './card.interface';
import { LgCardToggableContentComponent } from './card-toggable-content/card-toggable-content.component';
import { LgCardNavigationTitleComponent } from './card-navigation-title/card-navigation-title.component';

let nextUniqueId = 0;

@Component({
  selector: 'lg-card',
  templateUrl: './card.component.html',
  styleUrls: [ './card.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'lg-card',
  },
})
export class LgCardComponent implements AfterContentInit, OnDestroy {
  private subscription: Subscription;
  private uniqueId = nextUniqueId++;
  orientationClasses: Array<string> = [];

  @ContentChild(forwardRef(() => LgButtonToggleDirective))
  buttonToggle: LgButtonToggleDirective;
  @ContentChild(forwardRef(() => LgCardToggableContentComponent))
  cardToggableContent: LgCardToggableContentComponent;
  @ContentChild(forwardRef(() => LgCardNavigationTitleComponent))
  cardNavigationTitle: LgCardNavigationTitleComponent;
  @Input() variant: CardVariant = 'default';

  constructor(private renderer: Renderer2, private hostElement: ElementRef) {}

  @Input()
  set orientation(orientation: OrientationResponsive) {
    this.orientationClasses = this.toggleClasses(
      this.createNewOrientationClasses(orientation),
      this.orientationClasses,
    );
  }
  @HostBinding('class.lg-card-orientation') get orientationClass(): boolean {
    return this.orientationClasses.length !== 0;
  }

  @HostBinding('class') get variantClass(): string {
    return `lg-card--${this.variant}`;
  }

  ngAfterContentInit(): void {
    if (this.cardNavigationTitle) {
      this.variant = 'navigation';
    }

    if (this.buttonToggle && this.cardToggableContent) {
      this.buttonToggle.id = `${lgCardToggleIdPrefix}${this.uniqueId}`;

      this.buttonToggle.ariaControls = `${lgCardPanelIdPrefix}${this.uniqueId}`;

      this.cardToggableContent.uniqueId = this.uniqueId;

      this.subscription = this.buttonToggle.toggleActive.subscribe(isActive => {
        this.cardToggableContent.isActive = isActive;
      });
    }
  }

  toggleClasses(newClasses: Array<string>, oldClasses: Array<string>): Array<string> {
    if (oldClasses.length) {
      oldClasses.forEach(oldClass => {
        this.renderer.removeClass(this.hostElement.nativeElement, oldClass);
      });
    }

    newClasses.forEach(newClass => {
      this.renderer.addClass(this.hostElement.nativeElement, newClass);
    });

    return newClasses;
  }

  createNewOrientationClasses(rules: OrientationResponsive): Array<string> {
    const newClasses = [];

    Object.keys(rules).forEach(key => {
      newClasses.push(`lg-orientation--${key}--${rules[key]}`);
    });

    return newClasses;
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
