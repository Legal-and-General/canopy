import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Output,
} from '@angular/core';

import {
  lgFilterContainerPanelIdPrefix,
  lgFilterContainerToggleIdPrefix,
} from '../filter-container.constants';

@Directive({
  selector: '[lgFilterContainerToggle]',
})
export class lgFilterContainerToggleDirective {
  private uniqueId = 0;
  private isActive: boolean;

  @Output() toggleActive: EventEmitter<boolean> = new EventEmitter();

  @HostBinding('class.lg-filter-container-toggle') class = true;
  @HostBinding('class.lg-filter-container-toggle--active')
  @HostBinding('attr.aria-expanded')
  get active(): boolean {
    return this.isActive;
  }
  @HostBinding('id') id = `${lgFilterContainerToggleIdPrefix}${this.uniqueId}`;
  @HostBinding('role') role = 'button';
  @HostBinding('attr.aria-controls')
  ariaControls = `${lgFilterContainerPanelIdPrefix}${this.uniqueId}`;

  @HostListener('click') onClick(): void {
    this.toggle();
  }

  toggle(): void {
    this.isActive = !this.isActive;
    this.toggleActive.emit(this.isActive);
  }
}
