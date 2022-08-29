import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  ViewEncapsulation,
} from '@angular/core';

import { lgCardPanelIdPrefix, lgCardToggleIdPrefix } from '../card.interface';

@Component({
  selector: 'lg-card-toggable-content',
  templateUrl: './card-toggable-content.component.html',
  styleUrls: [ './card-toggable-content.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgCardToggableContentComponent {
  uniqueId: number;
  isActive: boolean;

  @HostBinding('class.lg-card-toggable-content') class = true;
  @HostBinding('role') role = 'region';
  @HostBinding('tabindex') get tabindex(): string {
    return this.isActive
      ? '-1'
      : null;
  }
  @HostBinding('class.lg-card-toggable-content--hidden') get activeClass(): boolean {
    if (this.isActive) {
      this.host.nativeElement.focus();
    }

    return !this.isActive;
  }
  @HostBinding('attr.aria-labelledby') get ariaLabelledBy(): string {
    return `${lgCardToggleIdPrefix}${this.uniqueId}`;
  }
  @HostBinding('id') get id(): string {
    return `${lgCardPanelIdPrefix}${this.uniqueId}`;
  }

  constructor(private host: ElementRef) {}

  @HostListener('blur') onBlur(): void {
    this.host.nativeElement.removeAttribute('tabindex');
  }
}
