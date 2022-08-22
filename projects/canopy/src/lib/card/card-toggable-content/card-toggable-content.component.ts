import { Component, HostBinding, ViewEncapsulation } from '@angular/core';

import { lgCardPanelIdPrefix, lgCardToggleIdPrefix } from '../card.interface';

@Component({
  selector: 'lg-card-toggable-content',
  templateUrl: './card-content.component.html',
  styleUrls: [ './card-content.component.scss' ],
  encapsulation: ViewEncapsulation.None,
})
export class LgCardToggableContentComponent {
  uniqueId: number;
  isActive = true;

  @HostBinding('class.lg-card-toggable-content') class = true;
  @HostBinding('class.lg-card-toggable-content--hidden') get hiddenClass(): boolean {
    return !this.isActive;
  }
  @HostBinding('attr.aria-labelledby') get ariaLabelledBy(): string {
    return this.uniqueId
      ? `${lgCardToggleIdPrefix}${this.uniqueId}`
      : null;
  }
  @HostBinding('id') get id(): string {
    return this.uniqueId
      ? `${lgCardPanelIdPrefix}${this.uniqueId}`
      : null;
  }
}
