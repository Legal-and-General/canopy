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
  OnDestroy,
  Output,
  QueryList,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { merge, skipWhile, Subscription } from 'rxjs';

import { keyName } from '../utils/keyboard-keys';

import { LgHeaderLogoComponent } from './header-logo/header-logo.component';
import { LgPrimaryNavComponent } from './primary-navigation/primary-navigation.component';
import { LgPrimaryNavListItemComponent } from './primary-navigation/primary-navigation-list-item/primary-navigation-list-item.component';

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
  private menuTabOutSubscription: Subscription;
  private menuItemClickedSubscription: Subscription;
  showResponsiveMenu = false;

  @Output() menuToggled = new EventEmitter<boolean>();

  @ViewChild('menuToggleButton') menuToggleButton: ElementRef;
  @ContentChild(forwardRef(() => LgPrimaryNavComponent), { read: ElementRef })
  primaryNavEl: ElementRef;
  @ContentChild(forwardRef(() => LgPrimaryNavComponent))
  primaryNav: LgPrimaryNavComponent;
  @ContentChildren(forwardRef(() => LgPrimaryNavListItemComponent), { descendants: true })
  navItems: QueryList<LgPrimaryNavListItemComponent>;
  @ContentChildren(forwardRef(() => LgHeaderLogoComponent), {
    descendants: true,
  })
  headerLogos: QueryList<LgHeaderLogoComponent>;

  constructor(private cdr: ChangeDetectorRef) {}

  @HostListener('document:click', [ '$event' ])
  onDocumentClickout({ target }: MouseEvent): void {
    if (this.menuToggleButton && this.primaryNavEl) {
      const { nativeElement: menuToggleButtonEl } = this.menuToggleButton;
      const { nativeElement: primaryNavEl } = this.primaryNavEl;
      const isOuterEl =
        !menuToggleButtonEl.contains(target) && !primaryNavEl.contains(target);

      if (isOuterEl && this.showResponsiveMenu) {
        this.showResponsiveMenu = false;
        this.primaryNav.showResponsiveMenu = false;
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

    if (this.navItems.length) {
      this.menuTabOutSubscription = this.navItems.last.tabbedOut.subscribe(
        (event: KeyboardEvent) => {
          const isToggleVisible = !!this.menuToggleButton.nativeElement.offsetParent;

          if (isToggleVisible) {
            event.preventDefault();
            this.menuToggleButton.nativeElement.focus();
            this.cdr.markForCheck();
          }
        },
      );
    }

    const clickedOutputs = this.navItems.map(({ clicked }) => clicked);

    this.menuItemClickedSubscription = merge(...clickedOutputs)
      .pipe(skipWhile(() => !this.showResponsiveMenu))
      .subscribe(() => {
        this.showResponsiveMenu = false;
        this.primaryNav.showResponsiveMenu = this.showResponsiveMenu;
        this.cdr.markForCheck();
      });
  }

  toggleResponsiveMenu(): void {
    this.showResponsiveMenu = !this.showResponsiveMenu;
    this.primaryNav.showResponsiveMenu = this.showResponsiveMenu;

    if (this.showResponsiveMenu) {
      this.primaryNavEl.nativeElement.focus();
    }

    this.menuToggled.emit(this.showResponsiveMenu);

    this.cdr.markForCheck();
  }

  handleToggleKeydown(event: KeyboardEvent): void {
    if (event.key === keyName.KEY_TAB && this.showResponsiveMenu) {
      this.primaryNavEl.nativeElement.focus();
    }
  }

  ngOnDestroy(): void {
    this.menuTabOutSubscription?.unsubscribe();
    this.menuItemClickedSubscription?.unsubscribe();
  }
}
