import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lg-side-nav-bar-item',
  templateUrl: './side-nav-bar-item.component.html',
  styleUrls: ['./side-nav-bar-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgSideNavBarItemComponent {
  @HostBinding('class.lg-side-nav-bar-item') class = true;

  _isActive = false;

  @Input()
  set isActive(isActive) {
    if (isActive) {
      this.activated.emit();
    }

    this._isActive = isActive;
  }
  @HostBinding('class.lg-side-nav-bar-item--selected') get isActiveClass() {
    return this._isActive;
  }

  @Output() activated: EventEmitter<void> = new EventEmitter();
}
