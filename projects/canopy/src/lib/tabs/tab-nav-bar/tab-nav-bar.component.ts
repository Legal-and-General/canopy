import {
  AfterContentChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  forwardRef,
  HostBinding,
  HostListener,
  Input,
  OnDestroy,
  QueryList,
  ViewEncapsulation,
} from '@angular/core';

import { merge, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { isKeyDown, isKeyLeft, isKeyRight, isKeyUp } from '../../utils/keyboard-keys';
import { LgTabNavBarLinkDirective } from './tab-nav-bar-link.directive';

@Component({
  selector: 'lg-tab-nav-bar',
  templateUrl: './tab-nav-bar.component.html',
  styleUrls: ['./tab-nav-bar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgTabNavBarComponent implements AfterContentChecked, OnDestroy {
  selectedIndex = 0;
  tabs: Array<LgTabNavBarLinkDirective>;
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  @Input() label = 'Tabs';
  @ContentChildren(forwardRef(() => LgTabNavBarLinkDirective), {
    descendants: true,
  })
  tabQueryList: QueryList<LgTabNavBarLinkDirective>;

  @HostBinding('class.lg-tab-nav-bar') class = true;
  @HostBinding('attr.role') ariaRole = 'tablist';
  @HostBinding('attr.aria-label')
  get ariaLabel() {
    return this.label ? this.label : 'Tabs';
  }

  @HostListener('keyup', ['$event']) onKeyUp(event: KeyboardEvent): void {
    const isPreviousKey = isKeyLeft(event) || isKeyUp(event);
    const isNextKey = isKeyRight(event) || isKeyDown(event);

    if (!isPreviousKey && !isNextKey) {
      return;
    }

    event.preventDefault();

    const currentSelectedTabIndex = this.tabs.findIndex(tab => tab.isActive);

    if (isPreviousKey) {
      this.selectedIndex =
        currentSelectedTabIndex === 0
          ? this.tabs.length - 1
          : currentSelectedTabIndex - 1;
    }

    if (isNextKey) {
      this.selectedIndex =
        currentSelectedTabIndex === this.tabs.length - 1
          ? 0
          : currentSelectedTabIndex + 1;
    }

    this.tabs[this.selectedIndex].selectByKeyboard();
  }

  constructor(private cd: ChangeDetectorRef) {}

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  ngAfterContentChecked() {
    this.setTabs();

    this.tabQueryList.changes.pipe(takeUntil(this.ngUnsubscribe)).subscribe(() => {
      this.setTabs();
      this.cd.detectChanges();
    });
  }

  setTabs() {
    this.tabs = this.tabQueryList.toArray();

    // Set the tab indexes and initial selected tab index
    this.tabs.forEach((tab, index: number) => {
      tab.index = index;
    });

    // Update tab link active states when active tab changes
    const tabOutputs = this.tabs.map(tab => tab.selectedTabIndexChange);

    merge(...tabOutputs)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((nextSelectedIndex: number) =>
        this.updateSelectedTab(nextSelectedIndex),
      );
  }

  updateSelectedTab(index: number) {
    this.tabs.forEach((tab, i: number) => {
      tab.isActive = i === index ? true : false;
    });
    this.selectedIndex = index;
  }
}
