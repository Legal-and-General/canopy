import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';

import { lgIconChevronDown } from '../../icon';

let nextUniqueId = 0;
@Component({
  selector: 'lg-details-panel-heading',
  templateUrl: './details-panel-heading.component.html',
  styleUrls: ['./details-panel-heading.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgDetailsPanelHeadingComponent {
  @Input() headingLevel;
  @Input() isActive = false;
  @Output() toggleActive = new EventEmitter<boolean>();

  chevronDown = lgIconChevronDown.name;
  id = nextUniqueId++;
  toggleId = `lg-details-header-${this.id}`;
  panelId = `lg-details-content-${this.id}`;

  toggle() {
    this.isActive = !this.isActive;
    this.toggleActive.emit(this.isActive);
  }
}
