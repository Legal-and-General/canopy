import {
  AfterContentInit,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { Subscription } from 'rxjs';
import { LgAccordionPanelHeadingComponent } from '../accordion-panel-heading/accordion-panel-heading.component';
import { LgAccordionItemContentDirective } from './accordion-item-content.directive';

let nextUniqueId = 0;

@Component({
  selector: 'lg-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LgAccordionItemComponent implements AfterContentInit, OnChanges, OnDestroy {
  @Input() isActive = false;
  @Output() opened = new EventEmitter<void>();
  @Output() closed = new EventEmitter<void>();

  @ViewChild(LgAccordionItemContentDirective, { static: true }) defaultContent: LgAccordionItemContentDirective;
  @ContentChild(LgAccordionItemContentDirective, { static: false }) lazyContent: LgAccordionItemContentDirective;
  @ContentChild(LgAccordionPanelHeadingComponent, { static: false })
  accordionPanelHeading: LgAccordionPanelHeadingComponent;

  _id = nextUniqueId++;
  _toggleId = `lg-accordion-panel-heading-${this._id}`;
  _panelId = `lg-accordion-panel-${this._id}`;
  _showContent = false;
  _contentTemplate: TemplateRef<any>;

  private _toggleSubscription: Subscription;

  ngAfterContentInit() {
    this.accordionPanelHeading.isActive = this.isActive;
    this._showContent = this.isActive || !this.lazyContent;
    this._contentTemplate = (this.lazyContent || this.defaultContent)._template;

    this._toggleSubscription = this.accordionPanelHeading.toggleActive.subscribe(isActive => {
      this.isActive = isActive;
      this.toggleActiveState(isActive);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.accordionPanelHeading && changes.isActive) {
      const isActive = changes.isActive.currentValue || false;

      this.accordionPanelHeading.isActive = isActive;
      this.toggleActiveState(isActive);
    }
  }

  ngOnDestroy() {
    if (this._toggleSubscription) {
      this._toggleSubscription.unsubscribe();
    }
  }

  private toggleActiveState(isActive: boolean) {
    if (isActive) {
      if (!this._showContent) {
        this._showContent = true;
      }

      this.opened.emit();
    } else {
      this.closed.emit();
    }
  }
}
