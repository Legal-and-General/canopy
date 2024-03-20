import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  forwardRef,
  HostBinding,
  InjectionToken,
  Input,
  QueryList,
  ViewEncapsulation,
} from '@angular/core';

import type { HeadingLevel } from '../heading';

import { LgAccordionPanelHeadingComponent } from './accordion-panel-heading/accordion-panel-heading.component';

export const LG_ACCORDION = new InjectionToken<LgAccordionComponent>('LG_ACCORDION');

let nextUniqueId = 0;

@Component({
  selector: 'lg-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: [ './accordion.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ { provide: LG_ACCORDION, useExisting: LgAccordionComponent } ],
  standalone: true,
})
export class LgAccordionComponent implements AfterContentInit {
  @HostBinding('class.lg-accordion') class = true;
  @HostBinding('id') @Input() id = `lg-accordion-${nextUniqueId++}`;
  @Input() headingLevel: HeadingLevel;
  @Input() multi = true;

  @ContentChildren(forwardRef(() => LgAccordionPanelHeadingComponent), {
    descendants: true,
  })
  panelHeadings: QueryList<LgAccordionPanelHeadingComponent>;

  ngAfterContentInit() {
    this.panelHeadings.forEach(panelHeading => {
      panelHeading.headingLevel = this.headingLevel;
    });
  }
}
