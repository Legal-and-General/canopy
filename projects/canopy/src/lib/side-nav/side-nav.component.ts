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

import { LgSideNavContentComponent } from './side-nav-content/side-nav-content.component';
import { LgSideNavBarLinkDirective } from './side-nav-bar-link/side-nav-bar-link.directive';

@Component({
  selector: 'lg-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: [ './side-nav.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgSideNavComponent implements AfterViewInit, OnDestroy {
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  @HostBinding('class.lg-side-nav') class = true;

  @ContentChildren(forwardRef(() => LgSideNavBarLinkDirective), {
    descendants: true,
  })
  navQueryList: QueryList<LgSideNavBarLinkDirective>;

  @ContentChild(LgSideNavContentComponent, { read: ElementRef })
  sideNavContent: ElementRef;

  ngAfterViewInit(): void {
    this.navQueryList.forEach((navItem: LgSideNavBarLinkDirective) => {
      navItem.activated
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe(() => this.focusContent());
    });
  }

  focusContent(): void {
    this.sideNavContent.nativeElement.focus();
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
