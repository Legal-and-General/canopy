import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';

import type { HeadingLevel } from '../../heading';

let nextUniqueId = 0;

@Component({
  selector: 'lg-accordion-panel-heading',
  templateUrl: './accordion-panel-heading.component.html',
  styleUrls: [ './accordion-panel-heading.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgAccordionPanelHeadingComponent implements AfterViewChecked {
  @Input() headingLevel: HeadingLevel;
  // used for adding more context to the heading
  @Input() ariaDescription;
  @Input()
  get isActive() {
    return this._isActive;
  }
  set isActive(isActive: boolean) {
    this._isActive = isActive;
    this.cdr.markForCheck();
  }
  @Output() toggleActive = new EventEmitter<boolean>();

  _id = nextUniqueId++;
  _toggleId = `lg-accordion-panel-heading-${this._id}`;
  _panelId = `lg-accordion-panel-${this._id}`;
  _isActive = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewChecked() {
    this.cdr.detectChanges();
  }

  toggle() {
    this.isActive = !this.isActive;
    this.toggleActive.emit(this.isActive);
  }
}
