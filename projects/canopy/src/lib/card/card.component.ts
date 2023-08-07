import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  forwardRef,
  HostBinding,
  Input,
  OnDestroy,
  ViewEncapsulation,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { LgButtonToggleDirective } from '../button';

import { CardVariant, lgCardPanelIdPrefix, lgCardToggleIdPrefix } from './card.interface';
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

  @ContentChild(forwardRef(() => LgButtonToggleDirective))
  buttonToggle: LgButtonToggleDirective;
  @ContentChild(forwardRef(() => LgCardToggableContentComponent))
  cardToggableContent: LgCardToggableContentComponent;
  @ContentChild(forwardRef(() => LgCardNavigationTitleComponent))
  cardNavigationTitle: LgCardNavigationTitleComponent;
  @Input() variant: CardVariant = 'default';

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

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
