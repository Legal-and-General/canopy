import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
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
import { merge, Subscription } from 'rxjs';

import { LgPrimaryNavListItemComponent } from './primary-navigation-list-item/primary-navigation-list-item.component';

@Component({
  selector: 'lg-primary-nav',
  templateUrl: './primary-navigation.component.html',
  styleUrls: [ './primary-navigation.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'lg-primary-nav-wrapper',
  },
})
export class LgPrimaryNavComponent implements AfterContentInit, OnDestroy {
  private tabOutSubscription: Subscription;
  private clickedSubscription: Subscription;
  showResponsiveMenu = false;

  @Output() toggleMenu: EventEmitter<boolean> = new EventEmitter();

  @ViewChild('menuToggleButton') menuToggleButton: ElementRef;
  @ViewChild('primaryNav') primaryNav: ElementRef;
  @ContentChildren(forwardRef(() => LgPrimaryNavListItemComponent), { descendants: true })
  navItems: QueryList<LgPrimaryNavListItemComponent>;

  constructor(private cdr: ChangeDetectorRef) {}

  @HostListener('document:click', [ '$event' ])
  onDocumentClickout({ target }: MouseEvent): void {
    if (this.menuToggleButton && this.primaryNav) {
      const { nativeElement: menuToggleButtonEl } = this.menuToggleButton;
      const { nativeElement: primaryNavEl } = this.primaryNav;
      const isOuterEl =
        !menuToggleButtonEl.contains(target) && !primaryNavEl.contains(target);

      if (isOuterEl && this.showResponsiveMenu) {
        this.showResponsiveMenu = false;
        this.cdr.markForCheck();
      }
    }
  }

  toggleResponsiveMenu(): void {
    this.showResponsiveMenu = !this.showResponsiveMenu;
    this.toggleMenu.emit(this.showResponsiveMenu);
    this.cdr.markForCheck();
  }

  ngAfterContentInit(): void {
    this.tabOutSubscription = this.navItems.last.tabbedOut.subscribe(
      (event: KeyboardEvent) => {
        const isToggleVisible = !!this.menuToggleButton.nativeElement.offsetParent;

        if (isToggleVisible) {
          event.preventDefault();
          this.menuToggleButton.nativeElement.focus();
          this.cdr.markForCheck();
        }
      },
    );

    const clickedOutputs = this.navItems.map(({ clicked }) => clicked);

    this.clickedSubscription = merge(...clickedOutputs).subscribe(() => {
      if (this.showResponsiveMenu) {
        this.showResponsiveMenu = false;
        this.cdr.markForCheck();
      }
    });
  }

  ngOnDestroy(): void {
    this.tabOutSubscription?.unsubscribe();
    this.clickedSubscription?.unsubscribe();
  }
}
