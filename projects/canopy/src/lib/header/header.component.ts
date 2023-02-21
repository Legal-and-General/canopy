import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostListener,
  Inject,
  OnDestroy,
  Output,
  QueryList,
  Renderer2,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { startWith, filter, merge, skipWhile, Subscription, switchMap } from 'rxjs';

import { keyName } from '../utils/keyboard-keys';

import { LgAccountMenuComponent } from './account-menu/account-menu.component';
import { LgHeaderLogoComponent } from './header-logo/header-logo.component';
import { LgPrimaryNavComponent } from './primary-navigation/primary-navigation.component';
import { LgPrimaryNavListItemComponent } from './primary-navigation/primary-navigation-list-item/primary-navigation-list-item.component';
import { LgAccountMenuListItemComponent } from './account-menu/account-menu-list-item/account-menu-list-item.component';

@Component({
  selector: '[lg-header]',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'lg-header',
  },
})
export class LgHeaderComponent implements AfterContentInit, OnDestroy {
  private subscriptions: Array<Subscription> = [];
  showResponsiveMenu = false;

  @Output() menuToggled = new EventEmitter<boolean>();

  @ViewChild('menuToggleButton') menuToggleButton: ElementRef;
  @ContentChild(forwardRef(() => LgPrimaryNavComponent), { read: ElementRef })
  primaryNavEl: ElementRef;
  @ContentChild(forwardRef(() => LgAccountMenuComponent), { read: ElementRef })
  accountMenuEl: ElementRef;
  @ContentChild(forwardRef(() => LgPrimaryNavComponent))
  primaryNav: LgPrimaryNavComponent;
  @ContentChildren(forwardRef(() => LgPrimaryNavListItemComponent), { descendants: true })
  navItems: QueryList<LgPrimaryNavListItemComponent>;
  @ContentChildren(forwardRef(() => LgAccountMenuListItemComponent), {
    descendants: true,
  })
  accountMenuItems: QueryList<LgAccountMenuListItemComponent>;
  @ContentChildren(forwardRef(() => LgHeaderLogoComponent), { descendants: true })
  headerLogos: QueryList<LgHeaderLogoComponent>;

  constructor(
    private cdr: ChangeDetectorRef,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
  ) {}

  @HostListener('document:click', [ '$event' ])
  onDocumentClickout(event: MouseEvent): void {
    const target = event.target as HTMLElement;

    if (this.menuToggleButton && this.primaryNavEl) {
      const { nativeElement: menuToggleButtonEl } = this.menuToggleButton;
      const { nativeElement: primaryNavEl } = this.primaryNavEl;
      const isNavOverlay = target.classList.contains('lg-primary-nav-overlay');
      const isOuterEl =
        (!menuToggleButtonEl.contains(target) && !primaryNavEl.contains(target)) ||
        isNavOverlay;

      if (isOuterEl && this.showResponsiveMenu) {
        this.showResponsiveMenu = false;
        this.primaryNav.showResponsiveMenu = false;
        this.renderer.removeStyle(this.document.body, 'overflow');
        this.cdr.markForCheck();
      }
    }
  }

  ngAfterContentInit(): void {
    this.headerLogos.forEach((headerLogo, i) => {
      headerLogo.class = i === 0
        ? 'lg-header-logo__img'
        : 'lg-header-logo__second-img';
    });

    this.subscriptions.push(
      // When tabbing out of the logo on sm devices, focus the account menu not the primary nav if the primary nav is open
      this.headerLogos.last.tabbedOut
        .pipe(
          filter((event: KeyboardEvent) => !event.shiftKey && this.showResponsiveMenu),
        )
        .subscribe(() => {
          this.accountMenuEl.nativeElement.focus();
          this.cdr.markForCheck();
        }),
    );

    if (this.accountMenuItems.length) {
      // When the user shift + tabs of the first account menu item, which could be added asyncronously
      this.subscriptions.push(
        this.accountMenuItems.changes
          .pipe(
            startWith(this.accountMenuItems),
            switchMap(
              (item: QueryList<LgAccountMenuListItemComponent>) => item.first.tabbedOut,
            ),
            filter((event: KeyboardEvent) => event.shiftKey && this.showResponsiveMenu),
          )
          .subscribe((event: KeyboardEvent) => {
            event.preventDefault();
            this.headerLogos.last.focus();
            this.cdr.markForCheck();
          }),
      );
    }

    if (this.navItems.length) {
      this.subscriptions.push(
        // When the user tabs out of the last primary nav item, focus the menu toggle button
        this.navItems.last.tabbedOut
          .pipe(
            filter(
              (event: KeyboardEvent) =>
                !!this.menuToggleButton.nativeElement.offsetParent && !event.shiftKey,
            ),
          )
          .subscribe((event: KeyboardEvent) => {
            event.preventDefault();
            this.menuToggleButton.nativeElement.focus();
            this.cdr.markForCheck();
          }),

        // When the user shift + tabs out of the first primary nav item, focus the menu toggle button instead of the logo
        this.navItems.first.tabbedOut
          .pipe(
            filter(
              (event: KeyboardEvent) =>
                !!this.menuToggleButton.nativeElement.offsetParent && event.shiftKey,
            ),
          )
          .subscribe((event: KeyboardEvent) => {
            event.preventDefault();
            this.menuToggleButton.nativeElement.focus();
            this.cdr.markForCheck();
          }),

        // Ensure we show/hide the burger menu if the number of nav items change to/from 0
        this.navItems.changes.subscribe(() => {
          this.cdr.markForCheck();
        }),
      );
    }

    const clickedOutputs = this.navItems.map(({ clicked }) => clicked);

    this.subscriptions.push(
      merge(...clickedOutputs)
        .pipe(skipWhile(() => !this.showResponsiveMenu))
        .subscribe(() => {
          this.showResponsiveMenu = false;
          this.primaryNav.showResponsiveMenu = this.showResponsiveMenu;
          this.renderer.removeStyle(this.document.body, 'overflow');
          this.cdr.markForCheck();
        }),
    );
  }

  toggleResponsiveMenu(): void {
    this.showResponsiveMenu = !this.showResponsiveMenu;
    this.primaryNav.showResponsiveMenu = this.showResponsiveMenu;

    if (this.showResponsiveMenu) {
      this.primaryNavEl.nativeElement.focus();
    }

    this.menuToggled.emit(this.showResponsiveMenu);

    // Prevent the page from scrolling when the menu is open
    if (this.showResponsiveMenu) {
      this.renderer.setStyle(this.document.body, 'overflow', 'hidden');
    } else {
      this.renderer.removeStyle(this.document.body, 'overflow');
    }

    this.cdr.markForCheck();
  }

  handleToggleKeydown(event: KeyboardEvent): void {
    if (event.key === keyName.KEY_TAB && !event.shiftKey && this.showResponsiveMenu) {
      this.primaryNavEl.nativeElement.focus();
      this.cdr.markForCheck();
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
