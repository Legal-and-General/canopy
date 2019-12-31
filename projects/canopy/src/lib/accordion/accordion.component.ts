import {
  AfterContentInit,
  Component,
  ContentChildren,
  forwardRef,
  HostBinding,
  Input,
  QueryList,
  ViewEncapsulation
} from '@angular/core';
import { HeadingLevel } from '../heading';
import { LgAccordionPanelHeadingComponent } from './accordion-panel-heading/accordion-panel-heading.component';

let nextUniqueId = 0;

@Component({
  selector: 'lg-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LgAccordionComponent implements AfterContentInit {
  @HostBinding('class.lg-accordion') class = true;
  @HostBinding('id')
  @Input()
  id = `lg-accordion-${nextUniqueId++}`;
  @Input()
  headingLevel: HeadingLevel;

  @ContentChildren(forwardRef(() => LgAccordionPanelHeadingComponent), {
    descendants: true
  })
  panelHeadings: QueryList<LgAccordionPanelHeadingComponent>;

  ngAfterContentInit() {
    this.panelHeadings.forEach(panelHeading => {
      panelHeading.headingLevel = this.headingLevel;
    });
  }
}
