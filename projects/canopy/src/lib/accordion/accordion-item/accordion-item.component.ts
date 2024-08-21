import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  EventEmitter,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  Optional,
  Output,
  SimpleChanges,
  SkipSelf,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
  HostBinding,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { UniqueSelectionDispatcher } from '../../utils/unique-selection-dispatcher';
import { LgAccordionPanelHeadingComponent } from '../accordion-panel-heading/accordion-panel-heading.component';
import { LG_ACCORDION, LgAccordionComponent } from '../accordion.component';

import { LgAccordionItemContentDirective } from './accordion-item-content.directive';

let nextUniqueId = 0;

@Component({
  selector: 'lg-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: [ './accordion-item.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  // Do not provide LG_ACCORDION to nested accordion components
  providers: [ { provide: LG_ACCORDION, useValue: undefined } ],
})
export class LgAccordionItemComponent implements AfterContentInit, OnChanges, OnDestroy {
  private _toggleSubscription: Subscription;
  _id = `${nextUniqueId++}`;
  _toggleId = `lg-accordion-panel-heading-${this._id}`;
  _panelId = `lg-accordion-panel-${this._id}`;
  _showContent = false;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _contentTemplate: TemplateRef<any>;

  @HostBinding('role') role = 'listitem';
  // used for adding more context to the heading
  @Input() ariaDescribedBy: string = null;
  @Input() isActive = false;
  @Output() opened = new EventEmitter<void>();
  @Output() closed = new EventEmitter<void>();

  @ViewChild(LgAccordionItemContentDirective, { static: true })
  defaultContent: LgAccordionItemContentDirective;
  @ContentChild(LgAccordionItemContentDirective)
  lazyContent: LgAccordionItemContentDirective;
  @ContentChild(LgAccordionPanelHeadingComponent)
  accordionPanelHeading: LgAccordionPanelHeadingComponent;

  constructor(
    @Optional() @SkipSelf() @Inject(LG_ACCORDION) public accordion: LgAccordionComponent,
    private selectionDispatcher: UniqueSelectionDispatcher,
    private cdr: ChangeDetectorRef,
  ) {
    this._removeSingleItemSelectionListener = selectionDispatcher.listen(
      (id: string, accordionId: string) => {
        if (
          accordion &&
          !accordion.multi &&
          accordion.id === accordionId &&
          this._id !== id
        ) {
          this.isActive = false;
          this.accordionPanelHeading.isActive = false;

          this.closed.emit();
          this.cdr.markForCheck();
        }
      },
    );
  }

  ngAfterContentInit() {
    this.accordionPanelHeading.isActive = this.isActive;
    this._showContent = this.isActive || !this.lazyContent;
    /* eslint-disable-next-line no-underscore-dangle */
    this._contentTemplate = (this.lazyContent || this.defaultContent)._template;

    if (this.isActive) {
      this.toggleActiveState(this.isActive);
    }

    this._toggleSubscription = this.accordionPanelHeading.toggleActive.subscribe(
      isActive => {
        this.isActive = isActive;

        this.toggleActiveState(isActive);
        this.cdr.markForCheck();
      },
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.accordionPanelHeading && changes.isActive) {
      const isActive = changes.isActive.currentValue || false;

      this.accordionPanelHeading.isActive = isActive;
      this.toggleActiveState(isActive);
    }
  }

  ngOnDestroy() {
    this._toggleSubscription?.unsubscribe();
    this._removeSingleItemSelectionListener();
  }

  private toggleActiveState(isActive: boolean) {
    if (isActive) {
      if (!this._showContent) {
        this._showContent = true;
      }

      this.opened.emit();

      this.selectionDispatcher.notify(
        this._id,
        this.accordion
          ? this.accordion.id
          : this._panelId,
      );
    } else {
      this.closed.emit();
    }
  }

  private readonly _removeSingleItemSelectionListener: () => void = () => {};
}
