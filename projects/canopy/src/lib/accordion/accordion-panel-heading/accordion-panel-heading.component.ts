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

  _id = nextUniqueId++;
  _toggleId = `lg-accordion-panel-heading-${this._id}`;
  _panelId = `lg-accordion-panel-${this._id}`;
  isActive: boolean;

  @Output() event: EventEmitter<boolean> = new EventEmitter();

  toggle() {
    this.isActive = !this.isActive;
    this.event.emit(this.isActive);
  }
}
