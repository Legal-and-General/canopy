import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  ViewEncapsulation,
  inject,
} from '@angular/core';

import { lgCardPanelIdPrefix, lgCardToggleIdPrefix } from '../card.interface';

@Component({
  selector: 'lg-card-toggable-content',
  templateUrl: './card-toggable-content.component.html',
  styleUrls: [ './card-toggable-content.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class LgCardToggableContentComponent {
  private host = inject(ElementRef);

  uniqueId: number;
  isActive: boolean;

  @HostBinding('class.lg-card-toggable-content') class = true;
  @HostBinding('attr.role') role = 'region';
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

  @HostListener('blur') onBlur(): void {
    this.host.nativeElement.removeAttribute('tabindex');
  }
}
