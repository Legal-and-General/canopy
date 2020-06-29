import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation
} from '@angular/core';
import { HeadingLevel } from '../../heading';

let nextUniqueId = 0;

@Component({
  selector: 'lg-accordion-panel-heading',
  templateUrl: './accordion-panel-heading.component.html',
  styleUrls: ['./accordion-panel-heading.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LgAccordionPanelHeadingComponent {
  @Input() headingLevel: HeadingLevel;
  @Input() isActive = false;
  @Output() toggleActive = new EventEmitter<boolean>();

  _id = nextUniqueId++;
  _toggleId = `lg-accordion-panel-heading-${this._id}`;
  _panelId = `lg-accordion-panel-${this._id}`;

  toggle() {
    this.isActive = !this.isActive;
    this.toggleActive.emit(this.isActive);
  }
}
