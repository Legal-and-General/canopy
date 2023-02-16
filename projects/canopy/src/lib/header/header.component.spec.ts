import { TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {
  DefaultRenderComponent,
  MockComponents,
  MockedComponentFixture,
  MockRender,
  ngMocks,
} from 'ng-mocks';

import { LgHeaderComponent } from './header.component';
import { LgHeaderLogoComponent } from './header-logo/header-logo.component';
import { LgPrimaryNavComponent } from './primary-navigation/primary-navigation.component';
import { LgPrimaryNavListItemComponent } from './primary-navigation/primary-navigation-list-item/primary-navigation-list-item.component';
import { LgPrimaryNavItemDirective } from './primary-navigation/primary-navigation-item.directive';
import { LgAccountMenuItemDirective } from './account-menu/account-menu-item.directive';
import { LgIconComponent } from './../icon/icon.component';
import { LgAccountMenuListItemComponent } from './account-menu/account-menu-list-item/account-menu-list-item.component';
import { LgAccountMenuComponent } from './account-menu/account-menu.component';
import { LgNotificationBadgeComponent } from './notification-badge/notification-badge.component';
import { LgAccountMenuItemLabelComponent } from './account-menu/account-menu-item-label/account-menu-item-label.component';

describe('HeaderComponent', () => {
  let component: DefaultRenderComponent<LgHeaderComponent>;
  let fixture: MockedComponentFixture<LgHeaderComponent>;
  let logoDebugElements: Array<DebugElement>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        LgHeaderComponent,
        LgHeaderLogoComponent,
        LgPrimaryNavItemDirective,
        LgPrimaryNavListItemComponent,
        LgPrimaryNavComponent,
        LgAccountMenuItemDirective,
        LgAccountMenuComponent,
        LgAccountMenuListItemComponent,
        MockComponents(
          LgIconComponent,
          LgNotificationBadgeComponent,
          LgAccountMenuItemLabelComponent,
        ),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    ngMocks.flushTestBed();

    fixture = MockRender(`
      <header lg-header>
        <lg-header-logo src="http://a.b/logo.png" href="http://a.b"></lg-header-logo>
      </header>
    `);

    component = fixture.componentInstance;
    logoDebugElements = fixture.debugElement.queryAll(By.css('.lg-header-logo img'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('adds a class to the logo', () => {
    expect(logoDebugElements[0].nativeElement.getAttribute('class')).toContain(
      'lg-header-logo__img',
    );
  });

  describe('co-branding', () => {
    it('adds a class to each of the logos', () => {
      ngMocks.flushTestBed();

      fixture = MockRender(`
        <header lg-header>
          <lg-header-logo src="http://a.b/logo.png" href="http://a.b"></lg-header-logo>
          <lg-header-logo src="http://second/logo.png" href="http://a.b.c"></lg-header-logo>
        </header>
      `);

      component = fixture.componentInstance;
      logoDebugElements = fixture.debugElement.queryAll(By.css('.lg-header-logo img'));
      fixture.detectChanges();

      logoDebugElements.forEach((el, i) => {
        expect(el.nativeElement.getAttribute('class')).toContain(
          i === 0
            ? 'lg-header-logo__img'
            : 'lg-header-logo__second-img',
        );
      });
    });
  });

  describe('menu toggle button', () => {
    let toggle: Array<DebugElement>;

    beforeEach(() => {
      ngMocks.flushTestBed();
    });

    it('should not be rendered when no nav items', () => {
      fixture = MockRender(`
        <header lg-header>
          <lg-header-logo src="http://a.b/logo.png" href="http://a.b"></lg-header-logo>
        </header>
      `);

      toggle = fixture.debugElement.queryAll(By.css('.primary-nav-toggle'));

      expect(toggle.length).toBe(0);
    });

    it('should be rendered when nav items exist', () => {
      fixture = MockRender(`
        <header lg-header>
          <lg-header-logo src="http://a.b/logo.png" href="http://a.b"></lg-header-logo>

          <lg-primary-nav>
            <lg-primary-nav-list-item>
              <a href="" lgPrimaryNavItem>Link</a>
            </lg-primary-nav-list-item>
          </lg-primary-nav>
        </header>
      `);

      toggle = fixture.debugElement.queryAll(By.css('.primary-nav-toggle'));

      expect(toggle.length).toBe(1);
    });
  });

  describe('with primary navigation', () => {
    let primaryNavEl: HTMLElement;
    let toggleEl: HTMLButtonElement;
    let primaryNavFocusSpy: jasmine.Spy;
    let menuToggledSpy: jasmine.Spy;

    beforeEach(() => {
      ngMocks.flushTestBed();

      fixture = MockRender(`
        <header lg-header>
          <lg-header-logo src="http://a.b/logo.png" href="http://a.b"></lg-header-logo>

          <lg-primary-nav>
            <lg-primary-nav-list-item>
              <a href="" lgPrimaryNavItem>Link</a>
            </lg-primary-nav-list-item>
            <lg-primary-nav-list-item>
              <button type="button" lgPrimaryNavItem>Button</button>
            </lg-primary-nav-list-item>
          </lg-primary-nav>
        </header>
      `);

      component = fixture.componentInstance;

      primaryNavEl = fixture.debugElement.queryAll(By.css('.lg-primary-nav'))[0]
        .nativeElement;

      toggleEl = fixture.debugElement.queryAll(By.css('.primary-nav-toggle'))[0]
        .nativeElement;

      primaryNavFocusSpy = spyOn(primaryNavEl, 'focus');
      menuToggledSpy = spyOn(component.menuToggled, 'emit');
      fixture.detectChanges();
    });

    describe('host listener binding', () => {
      describe('with open menu', () => {
        beforeEach(() => {
          component.toggleResponsiveMenu();
        });

        describe('when clicking outside of the menu', () => {
          beforeEach(() => {
            document.body.style.overflow = 'hidden';
            component.showResponsiveMenu = true;
            fixture.detectChanges();
          });

          it('closes the menu', () => {
            document.querySelector('body').click();

            expect(component.showResponsiveMenu).toBe(false);
          });

          it('removes the overflow style from the document body', () => {
            document.querySelector('body').click();

            expect(document.body.style.overflow).toBe('');
          });

          describe('when the toggle button and the primary nav are undefined', () => {
            it('should not close the menu', () => {
              component.menuToggleButton = undefined;
              component.primaryNav = undefined;
              document.querySelector('body').click();

              expect(component.showResponsiveMenu).toBe(true);
            });
          });
        });

        describe('when clicking on the overlay', () => {
          beforeEach(() => {
            document.body.style.overflow = 'hidden';
            component.showResponsiveMenu = true;
            fixture.detectChanges();
            const el = document.querySelectorAll(
              '.lg-primary-nav-overlay',
            )[0] as HTMLElement;

            el.click();
          });

          it('closes the menu', () => {
            expect(component.showResponsiveMenu).toBe(false);
          });

          it('removes the overflow style fro mthe document body', () => {
            expect(document.body.style.overflow).toBe('');
          });
        });
      });
    });

    it('closes menu when an nav item is clicked', () => {
      component.navItems.last.clicked.emit();

      expect(component.showResponsiveMenu).toBe(false);
      expect(component.primaryNav.showResponsiveMenu).toBe(false);
    });

    it('removes the overflow style from the body when a nav item is clicked', () => {
      document.body.style.overflow = 'hidden';
      component.showResponsiveMenu = true;
      component.navItems.last.clicked.emit();

      expect(document.body.style.overflow).toBe('');
    });

    describe('toggle button', () => {
      it('should have correct class', () => {
        expect(toggleEl.getAttribute('class')).toContain('primary-nav-toggle');
      });

      describe('toggled on', () => {
        it('should have correct aria attributes', () => {
          expect(toggleEl.getAttribute('aria-expanded')).toBe('false');
          expect(toggleEl.getAttribute('aria-controls')).toBe('primary-nav');
          expect(toggleEl.getAttribute('aria-haspopup')).toBe('true');
        });
      });
    });

    describe('toggle responsive menu on', () => {
      beforeEach(() => {
        component.showResponsiveMenu = false;
        component.toggleResponsiveMenu();
        fixture.detectChanges();
      });

      it('should set correct aria attributes on toggle button', () => {
        expect(toggleEl.getAttribute('aria-expanded')).toBe('true');
      });

      it('should set showResponsiveMenu to true', () => {
        expect(component.showResponsiveMenu).toBe(true);
      });

      it('should focus the primary nav if toggled on', () => {
        expect(primaryNavFocusSpy).toHaveBeenCalledTimes(1);
      });

      it('emits an event', () => {
        expect(menuToggledSpy).toHaveBeenCalledWith(true);
      });

      it('sets the overflow on the document body to hidden', () => {
        expect(document.body.style.overflow).toBe('hidden');
      });
    });

    describe('toggle responsive menu off', () => {
      beforeEach(() => {
        component.showResponsiveMenu = true;
        component.toggleResponsiveMenu();
        fixture.detectChanges();
      });

      it('should set correct aria attributes on toggle button', () => {
        expect(toggleEl.getAttribute('aria-expanded')).toBe('false');
        expect(toggleEl.getAttribute('aria-controls')).toBe('primary-nav');
        expect(toggleEl.getAttribute('aria-haspopup')).toBe('true');
      });

      it('should showResponsiveMenu to false', () => {
        expect(component.showResponsiveMenu).toBe(false);
      });

      it('does not focus the primary nav', () => {
        expect(primaryNavFocusSpy).toHaveBeenCalledTimes(0);
      });

      it('emits an event', () => {
        expect(menuToggledSpy).toHaveBeenCalledWith(false);
      });

      it('removes the overflow style from document body', () => {
        fixture.detectChanges();

        expect(document.body.style.overflow).toBe('');
      });
    });

    describe('trap focus', () => {
      let tabKeyDownEvent: KeyboardEvent;
      let focusSpy: jasmine.Spy;
      let preventDefaultSpy: jasmine.Spy;

      beforeEach(() => {
        focusSpy = spyOn(toggleEl, 'focus');
      });

      describe('shift + tabbing out of first listitem when toggle button is visible', () => {
        beforeEach(() => {
          tabKeyDownEvent = new KeyboardEvent('keydown', { key: 'Tab', shiftKey: true });
          preventDefaultSpy = spyOn(tabKeyDownEvent, 'preventDefault');
          component.navItems.first.tabbedOut.emit(tabKeyDownEvent);
          fixture.detectChanges();
        });

        it('prevents default event bubbling', () => {
          expect(preventDefaultSpy).toHaveBeenCalledTimes(1);
        });

        it('focuses toggle button', () => {
          expect(focusSpy).toHaveBeenCalledTimes(1);
        });
      });

      describe('shift + tabbing out of last listitem', () => {
        beforeEach(() => {
          tabKeyDownEvent = new KeyboardEvent('keydown', { key: 'Tab', shiftKey: true });
          preventDefaultSpy = spyOn(tabKeyDownEvent, 'preventDefault');
          toggleEl.style.display = 'none';
          component.navItems.last.tabbedOut.emit(tabKeyDownEvent);
          fixture.detectChanges();
        });

        it('does not prevent event from bubbling', () => {
          expect(preventDefaultSpy).not.toHaveBeenCalled();
        });

        it('does not focus toggle button', () => {
          expect(focusSpy).not.toHaveBeenCalled();
        });
      });

      describe('tabbing out of last listitem when toggle button is visible', () => {
        beforeEach(() => {
          tabKeyDownEvent = new KeyboardEvent('keydown', { key: 'Tab', shiftKey: false });
          preventDefaultSpy = spyOn(tabKeyDownEvent, 'preventDefault');
          component.navItems.last.tabbedOut.emit(tabKeyDownEvent);
          fixture.detectChanges();
        });

        it('prevents default event bubbling', () => {
          expect(preventDefaultSpy).toHaveBeenCalledTimes(1);
        });

        it('focuses toggle button', () => {
          expect(focusSpy).toHaveBeenCalledTimes(1);
        });
      });

      describe('tabbing out of last listitem when toggle button is hidden', () => {
        beforeEach(() => {
          tabKeyDownEvent = new KeyboardEvent('keydown', { key: 'Tab', shiftKey: false });
          preventDefaultSpy = spyOn(tabKeyDownEvent, 'preventDefault');
          toggleEl.style.display = 'none';
          component.navItems.last.tabbedOut.emit(tabKeyDownEvent);
          fixture.detectChanges();
        });

        it('does not prevent event from bubbling', () => {
          expect(preventDefaultSpy).not.toHaveBeenCalled();
        });

        it('does not focus toggle button after tabbing out of last listitem', () => {
          expect(focusSpy).not.toHaveBeenCalled();
        });
      });
    });

    describe('handle toggle keydown', () => {
      let tabKeyDownEvent: KeyboardEvent;

      beforeEach(() => {
        tabKeyDownEvent = new KeyboardEvent('keydown', { key: 'Tab', shiftKey: false });
      });

      it('focuses primary nav when tabbing out of toggle button and menu is open', () => {
        component.showResponsiveMenu = true;
        component.handleToggleKeydown(tabKeyDownEvent);

        expect(primaryNavFocusSpy).toHaveBeenCalledTimes(1);
      });

      it('does not focus primary nav when tabbing out of toggle button and menu is closed', () => {
        component.showResponsiveMenu = false;
        component.handleToggleKeydown(tabKeyDownEvent);

        expect(primaryNavFocusSpy).toHaveBeenCalledTimes(0);
      });

      it('does not focus the toggle button if the user tabs to previous focusable element', () => {
        tabKeyDownEvent = new KeyboardEvent('keydown', { key: 'Tab', shiftKey: true });

        component.showResponsiveMenu = true;
        component.handleToggleKeydown(tabKeyDownEvent);

        expect(primaryNavFocusSpy).toHaveBeenCalledTimes(0);
      });
    });
  });

  describe('with account menu', () => {
    let tabKeyDownEvent: KeyboardEvent;
    let focusSpy: jasmine.Spy;
    let preventDefaultSpy: jasmine.Spy;

    beforeEach(() => {
      ngMocks.flushTestBed();

      fixture = MockRender(`
        <header lg-header>
          <lg-header-logo src="http://a.b/logo.png" href="http://a.b"></lg-header-logo>

          <lg-account-menu>
            <lg-account-menu-list-item>
              <button type="button" lgAccountMenuItem>
                <lg-account-menu-item-label>Button</lg-account-menu-item-label>
                <lg-icon name="radio-button-unselected"></lg-icon>
                <lg-notification-badge count="3" accessText="You have 3 unread messages"></lg-notification-badge>
              </button>
            </lg-account-menu-list-item>
            <lg-account-menu-list-item>
              <a href="#" lgAccountMenuItem>
                <lg-account-menu-item-label>Link</lg-account-menu-item-label>
                <lg-icon name="radio-button-unselected"></lg-icon>
              </a>
            </lg-account-menu-list-item>
          </lg-account-menu>
        </header>
      `);

      component = fixture.componentInstance;

      const logoEl = fixture.debugElement.queryAll(By.css('.lg-header-logo__link'))[0]
        .nativeElement;

      focusSpy = spyOn(logoEl, 'focus');
      tabKeyDownEvent = new KeyboardEvent('keydown', { key: 'Tab', shiftKey: true });
      preventDefaultSpy = spyOn(tabKeyDownEvent, 'preventDefault');

      component.showResponsiveMenu = true;
    });

    it('prevents the default event', () => {
      component.accountMenuItems.first.tabbedOut.emit(tabKeyDownEvent);
      fixture.detectChanges();

      expect(preventDefaultSpy).toHaveBeenCalledTimes(1);
    });

    it('focuses the logo when shift + tabbing out of the first item when primary nav is open', () => {
      component.accountMenuItems.first.tabbedOut.emit(tabKeyDownEvent);
      fixture.detectChanges();

      expect(focusSpy).toHaveBeenCalledTimes(1);
    });

    it('does not focus the logo when shift + tabbing out of the first item when primary nav is closed', () => {
      component.showResponsiveMenu = false;
      component.accountMenuItems.first.tabbedOut.emit(tabKeyDownEvent);
      fixture.detectChanges();

      expect(focusSpy).not.toHaveBeenCalled();
    });

    it('does not focus the logo when tabbing out of the first item', () => {
      tabKeyDownEvent = new KeyboardEvent('keydown', { key: 'Tab', shiftKey: false });
      component.showResponsiveMenu = true;
      component.accountMenuItems.first.tabbedOut.emit(tabKeyDownEvent);
      fixture.detectChanges();

      expect(focusSpy).not.toHaveBeenCalled();
    });
  });
});
