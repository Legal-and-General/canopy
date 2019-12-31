import {
  AfterContentInit,
  Component,
  ContentChild,
  OnDestroy,
  ViewEncapsulation
} from '@angular/core';
import { Subscription } from 'rxjs';
import { LgAccordionPanelHeadingComponent } from '../accordion-panel-heading/accordion-panel-heading.component';

let nextUniqueId = 0;

@Component({
  selector: 'lg-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LgAccordionItemComponent implements AfterContentInit, OnDestroy {
  isActive: boolean;

  _subscriptions: Array<Subscription> = [];
  _id = nextUniqueId++;
  _toggleId = `lg-accordion-panel-heading-${this._id}`;
  _panelId = `lg-accordion-panel-${this._id}`;

  @ContentChild(LgAccordionPanelHeadingComponent, { static: false })
  accordionPanelHeading: LgAccordionPanelHeadingComponent;

  ngAfterContentInit() {
    this._subscriptions.push(
      this.accordionPanelHeading.event.subscribe(
        value => (this.isActive = value)
      )
    );
  }

  ngOnDestroy() {
    this._subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
