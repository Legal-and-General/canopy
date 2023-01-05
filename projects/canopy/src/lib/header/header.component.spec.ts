import { fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
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
        MockComponents(LgIconComponent),
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
      fixture = MockRender(`
        <header lg-header>
          <lg-header-logo src="http://a.b/logo.png" href="http://a.b"></lg-header-logo>
        </header>
      `);

      toggle = fixture.debugElement.queryAll(By.css('.primary-nav-toggle'));
    });

    it('should not be rendered when no nav items', () => {
      expect(toggle.length).toBe(0);
    });
  });

  describe('with primary navigation', () => {
    let primaryNavEl: HTMLElement;
    let toggleEl: HTMLButtonElement;
    let primaryNavFocusSpy: jasmine.Spy;
    let menuToggledSpy: jasmine.Spy;

    beforeEach(() => {
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
          let setup: () => void;

          beforeEach(() => {
            setup = () => {
              fixture.detectChanges();
              tick();
              const el = document.querySelector('body');

              el.click();
            };
          });

          it('closes the menu', fakeAsync(() => {
            setup();

            expect(component.showResponsiveMenu).toBe(false);
          }));

          describe('when the toggle button and the primary nav are undefined', () => {
            it('should not close the menu', fakeAsync(() => {
              component.menuToggleButton = undefined;
              component.primaryNav = undefined;
              setup();

              expect(component.showResponsiveMenu).toBe(true);
            }));
          });
        });
      });
    });

    it('closes menu when an nav item is clicked', fakeAsync(() => {
      component.navItems.last.clicked.emit();
      tick();

      expect(component.showResponsiveMenu).toBe(false);
      expect(component.primaryNav.showResponsiveMenu).toBe(false);
    }));

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
      let setup: () => void;

      beforeEach(() => {
        focusSpy = spyOn(toggleEl, 'focus');
      });

      describe('shift + tabbing out of first listitem when toggle button is visible', () => {
        beforeEach(() => {
          setup = () => {
            component.navItems.first.tabbedOut.emit(tabKeyDownEvent);
            tick();
            fixture.detectChanges();
          };

          tabKeyDownEvent = new KeyboardEvent('keydown', { key: 'Tab', shiftKey: true });
          preventDefaultSpy = spyOn(tabKeyDownEvent, 'preventDefault');
        });

        it('prevents default event bubbling', fakeAsync(() => {
          setup();

          expect(preventDefaultSpy).toHaveBeenCalledTimes(1);
        }));

        it('focuses toggle button', fakeAsync(() => {
          setup();

          expect(focusSpy).toHaveBeenCalledTimes(1);
        }));
      });

      describe('shift + tabbing out of last listitem', () => {
        beforeEach(() => {
          setup = () => {
            toggleEl.style.display = 'none';
            component.navItems.last.tabbedOut.emit(tabKeyDownEvent);
            tick();
            fixture.detectChanges();
          };

          tabKeyDownEvent = new KeyboardEvent('keydown', { key: 'Tab', shiftKey: true });
          preventDefaultSpy = spyOn(tabKeyDownEvent, 'preventDefault');
        });

        it('does not prevent event from bubbling', fakeAsync(() => {
          setup();

          expect(preventDefaultSpy).not.toHaveBeenCalled();
        }));

        it('does not focus toggle button', fakeAsync(() => {
          setup();

          expect(focusSpy).not.toHaveBeenCalled();
        }));
      });

      describe('tabbing out of last listitem when toggle button is visible', () => {
        beforeEach(() => {
          setup = () => {
            component.navItems.last.tabbedOut.emit(tabKeyDownEvent);
            tick();
            fixture.detectChanges();
          };

          tabKeyDownEvent = new KeyboardEvent('keydown', { key: 'Tab', shiftKey: false });
          preventDefaultSpy = spyOn(tabKeyDownEvent, 'preventDefault');
        });

        it('prevents default event bubbling', fakeAsync(() => {
          setup();

          expect(preventDefaultSpy).toHaveBeenCalledTimes(1);
        }));

        it('focuses toggle button', fakeAsync(() => {
          setup();

          expect(focusSpy).toHaveBeenCalledTimes(1);
        }));
      });

      describe('tabbing out of last listitem when toggle button is hidden', () => {
        beforeEach(() => {
          setup = () => {
            toggleEl.style.display = 'none';
            component.navItems.last.tabbedOut.emit(tabKeyDownEvent);
            tick();
            fixture.detectChanges();
          };

          tabKeyDownEvent = new KeyboardEvent('keydown', { key: 'Tab', shiftKey: false });
          preventDefaultSpy = spyOn(tabKeyDownEvent, 'preventDefault');
        });

        it('does not prevent event from bubbling', fakeAsync(() => {
          setup();

          expect(preventDefaultSpy).not.toHaveBeenCalled();
        }));

        it('does not focus toggle button after tabbing out of last listitem', fakeAsync(() => {
          setup();

          expect(focusSpy).not.toHaveBeenCalled();
        }));
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
});
