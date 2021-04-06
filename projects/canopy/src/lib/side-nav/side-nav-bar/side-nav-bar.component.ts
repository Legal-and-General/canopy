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
import { LgTabNavBarLinkDirective } from '../../tabs';

@Component({
  selector: 'lg-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgSideNavBarComponent implements AfterContentChecked, OnDestroy {
  selectedIndex = 0;
  navs: Array<LgTabNavBarLinkDirective>;
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  @Input() label = 'Nav';
  @ContentChildren(forwardRef(() => LgTabNavBarLinkDirective), {
    descendants: true,
  })
  navQueryList: QueryList<LgTabNavBarLinkDirective>;

  @HostBinding('class.lg-side-nav-bar') class = true;
  @HostBinding('attr.role') ariaRole = 'tablist';
  @HostBinding('attr.aria-label')
  get ariaLabel() {
    return this.label ? this.label : 'Nav';
  }

  @HostListener('keyup', ['$event']) onKeyUp(event: KeyboardEvent): void {
    const isPreviousKey = isKeyLeft(event) || isKeyUp(event);
    const isNextKey = isKeyRight(event) || isKeyDown(event);

    if (!isPreviousKey && !isNextKey) {
      return;
    }

    event.preventDefault();

    const currentSelectedTabIndex = this.navs.findIndex((tab) => tab.isActive);

    if (isPreviousKey) {
      this.selectedIndex =
        currentSelectedTabIndex === 0
          ? this.navs.length - 1
          : currentSelectedTabIndex - 1;
    }

    if (isNextKey) {
      this.selectedIndex =
        currentSelectedTabIndex === this.navs.length - 1
          ? 0
          : currentSelectedTabIndex + 1;
    }

    this.navs[this.selectedIndex].selectByKeyboard();
  }

  constructor(private cd: ChangeDetectorRef) {}

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  ngAfterContentChecked() {
    this.setTabs();

    this.navQueryList.changes.pipe(takeUntil(this.ngUnsubscribe)).subscribe(() => {
      this.setTabs();
      this.cd.detectChanges();
    });
  }

  setTabs() {
    this.navs = this.navQueryList.toArray();

    // Set the tab indexes and initial selected tab index
    this.navs.forEach((nav, index: number) => {
      nav.index = index;
    });

    // Update tab link active states when active tab changes
    const navOutputs = this.navs.map((tab) => tab.selectedTabIndexChange);

    merge(...navOutputs)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((nextSelectedIndex: number) =>
        this.updateSelectedNav(nextSelectedIndex),
      );
  }

  updateSelectedNav(index: number) {
    this.navs.forEach((tab, i: number) => {
      tab.isActive = i === index;
    });
    this.selectedIndex = index;
  }
}
