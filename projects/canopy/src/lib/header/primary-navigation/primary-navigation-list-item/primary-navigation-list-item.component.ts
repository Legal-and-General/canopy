import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';

import { keyName } from '../../../utils/keyboard-keys';

@Component({
  selector: 'lg-primary-nav-list-item',
  template: '<ng-content></ng-content>',
  styleUrls: [ './primary-navigation-list-item.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class LgPrimaryNavListItemComponent {
  @Input() alignRight = false;

  @Output() tabbedOut: EventEmitter<KeyboardEvent> = new EventEmitter();
  @Output() clicked: EventEmitter<Event> = new EventEmitter();

  @HostBinding('attr.role') role = 'listitem';
  @HostBinding('class.lg-primary-nav-list-item') defaultClass = true;
  @HostBinding('class.lg-primary-nav-list-item--right') get alignRightClass(): boolean {
    return this.alignRight;
  }

  @HostListener('click', [ '$event' ]) handleClick(event: Event) {
    this.clicked.emit(event);
  }

  @HostListener('keydown', [ '$event' ]) handleKeyDown(event: KeyboardEvent) {
    if (event.key === keyName.KEY_TAB) {
      this.tabbedOut.emit(event);
    }
  }
}
