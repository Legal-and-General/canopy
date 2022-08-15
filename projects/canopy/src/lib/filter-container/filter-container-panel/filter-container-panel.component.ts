import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';

import {
  lgFilterContainerPanelIdPrefix,
  lgFilterContainerToggleIdPrefix,
} from '../filter-container.constants';

@Component({
  selector: 'lg-filter-container-panel',
  templateUrl: './filter-container-panel.component.html',
  styleUrls: [ './filter-container-panel.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'lg-filter-container-panel',
  },
})
export class LgFilterContainerPanelComponent {
  isActive: boolean;
  uniqueId: number;

  @HostBinding('class.lg-filter-container-panel--active') get activeClass(): boolean {
    return this.isActive;
  }
  @HostBinding('id') get id(): string {
    return `${lgFilterContainerPanelIdPrefix}${this.uniqueId}`;
  }
  @HostBinding('attr.role') role = 'region';
  @HostBinding('attr.aria-labelledby')
  get ariaLabelledBy(): string {
    return `${lgFilterContainerToggleIdPrefix}${this.uniqueId}`;
  }
}
