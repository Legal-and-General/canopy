import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  EventEmitter,
  forwardRef,
  HostBinding,
  Input,
  OnDestroy,
  Output,
  QueryList,
  ViewEncapsulation,
} from '@angular/core';

import { Subscription } from 'rxjs';

import { isKeyDown, isKeyLeft, isKeyRight, isKeyUp } from '../utils/keyboard-keys';
import { LgTabItemComponent } from './tab-item/tab-item.component';

let nextUniqueId = 0;

@Component({
  selector: 'lg-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgTabsComponent implements AfterContentInit, OnDestroy {
  @HostBinding('class.lg-tabs') class = true;

  @ContentChildren(forwardRef(() => LgTabItemComponent), {
    descendants: true,
  })
  tabQueryList: QueryList<LgTabItemComponent>;

  @Input() label = 'tabs';

  @Output() tabEvent: EventEmitter<{ index: number }> = new EventEmitter();

  selectedIndex = 0;

  isKeyboardEvent = false;

  tabs: Array<LgTabItemComponent>;

  id = nextUniqueId++;

  private subscription: Subscription;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngAfterContentInit() {
    this.setTabs();

    this.subscription = this.tabQueryList.changes.subscribe(() => {
      this.setTabs();
      this.cd.detectChanges();
    });
  }

  setTabs() {
    this.tabs = this.tabQueryList.toArray();
  }

  navigateToTab(index: number) {
    this.selectedIndex = index;
    this.cd.detectChanges();
    this.tabEvent.emit({ index: this.selectedIndex });
  }

  keyboardNavigation(event: KeyboardEvent): void {
    this.isKeyboardEvent = true;
    const isPreviousKey = isKeyLeft(event) || isKeyUp(event);
    const isNextKey = isKeyRight(event) || isKeyDown(event);
    let newSelectedIndex = this.selectedIndex;

    if (!isPreviousKey && !isNextKey) {
      return;
    }

    event.preventDefault();

    if (isPreviousKey) {
      newSelectedIndex =
        this.selectedIndex === 0 ? this.tabs.length - 1 : this.selectedIndex - 1;
    }

    if (isNextKey) {
      newSelectedIndex =
        this.selectedIndex === this.tabs.length - 1 ? 0 : this.selectedIndex + 1;
    }

    this.navigateToTab(newSelectedIndex);
  }

  blur(index: number) {
    if (this.selectedIndex !== index) {
      return;
    }

    this.isKeyboardEvent = false;
  }
}
