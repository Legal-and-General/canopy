import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  Output,
  ViewEncapsulation,
} from '@angular/core';

import { keyName } from '../../../utils/keyboard-keys';

@Component({
  selector: 'lg-account-menu-list-item',
  template: '<ng-content></ng-content>',
  styleUrls: [ './account-menu-list-item.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'lg-account-menu-list-item',
    role: 'listitem',
  },
  standalone: true,
})
export class LgAccountMenuListItemComponent {
  @Output() clicked: EventEmitter<Event> = new EventEmitter();
  @Output() tabbedOut: EventEmitter<KeyboardEvent> = new EventEmitter();

  @HostListener('click', [ '$event' ]) handleClick(event: Event) {
    this.clicked.emit(event);
  }

  @HostListener('keydown', [ '$event' ]) handleKeyDown(event: KeyboardEvent) {
    if (event.key === keyName.KEY_TAB) {
      this.tabbedOut.emit(event);
    }
  }
}
