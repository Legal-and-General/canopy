import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  Output,
  ViewEncapsulation,
} from '@angular/core';

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
})
export class LgAccountMenuListItemComponent {
  @Output() clicked: EventEmitter<Event> = new EventEmitter();

  @HostListener('click', [ '$event' ]) handleClick(event: Event) {
    this.clicked.emit(event);
  }
}
