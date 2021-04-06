import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  forwardRef,
  HostBinding,
  OnDestroy,
  QueryList,
  ViewEncapsulation,
} from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { LgSideNavBarItemComponent } from './side-nav-bar-item/side-nav-bar-item.component';
import { LgSideNavContentComponent } from './side-nav-content/side-nav-content.component';

@Component({
  selector: 'lg-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgSideNavComponent implements AfterViewInit, OnDestroy {
  @HostBinding('class.lg-side-nav') class = true;

  @ContentChildren(forwardRef(() => LgSideNavBarItemComponent), {
    descendants: true,
  })
  navQueryList: QueryList<LgSideNavBarItemComponent>;

  @ContentChild(LgSideNavContentComponent, { read: ElementRef })
  sideNavContent: ElementRef;

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  ngAfterViewInit() {
    this.navQueryList.forEach((navItem) => {
      navItem.activated
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe(() => this.focusContent());
    });
  }

  focusContent() {
    this.sideNavContent.nativeElement.focus();
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
