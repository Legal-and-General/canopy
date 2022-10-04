import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import {
  DefaultRenderComponent,
  MockComponents,
  MockedComponentFixture,
  MockRender,
} from 'ng-mocks';

import { LgIconComponent } from '../../icon';
import { LgFocusDirective } from '../../focus';
import { LgAccountMenuItemDirective } from '../account-menu/account-menu-item.directive';

import { LgPrimaryNavComponent } from './primary-navigation.component';
import { LgPrimaryNavListItemComponent } from './primary-navigation-list-item/primary-navigation-list-item.component';

describe('PrimaryNavigationComponent', () => {
  let component: DefaultRenderComponent<LgPrimaryNavComponent>;
  let fixture: MockedComponentFixture<LgPrimaryNavComponent>;
  let debugElement: DebugElement;
  let navEl: HTMLElement;
  let toggleEl: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        LgPrimaryNavComponent,
        LgFocusDirective,
        LgPrimaryNavListItemComponent,
        LgAccountMenuItemDirective,
        MockComponents(LgIconComponent),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = MockRender(`
      <lg-primary-nav>
        <lg-primary-nav-list-item>
          <a href="/test1">Link 1</a>
        </lg-primary-nav-list-item>
        <lg-primary-nav-list-item>
          <button type="button">Button</button>
        </lg-primary-nav-list-item>
      </lg-primary-nav>
    `);

    debugElement = fixture.debugElement;
    component = fixture.componentInstance;
    navEl = debugElement.queryAll(By.css('.lg-primary-nav'))[0].nativeElement;

    toggleEl = debugElement.queryAll(By.css('.lg-primary-nav-menu-toggle'))[0]
      .nativeElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('responsive menu', () => {
    it('nav menu should have the navigation role', () => {
      expect(navEl.getAttribute('role')).toBe('navigation');
    });

    it('nav menu button should have default class', () => {
      expect(navEl.getAttribute('class')).toContain('lg-primary-nav');
    });

    it('nav menu should have correct aria attributes', () => {
      expect(navEl.getAttribute('aria-hidden')).toBeNull();
    });

    it('toggle button should have default class', () => {
      expect(toggleEl.getAttribute('class')).toContain('lg-primary-nav-menu-toggle');
    });

    it('toggle button should have correct aria attributes', () => {
      expect(toggleEl.getAttribute('aria-expanded')).toBe('false');
      expect(toggleEl.getAttribute('aria-controls')).toBe('primary-nav');
      expect(toggleEl.getAttribute('aria-haspopup')).toBe('true');
    });

    describe('toggled state', () => {
      beforeEach(() => {
        component.toggleResponsiveMenu();
        fixture.detectChanges();
      });

      it('nav menu button should have active class', () => {
        expect(navEl.getAttribute('class')).toContain('lg-primary-nav--active');
      });

      it('nav menu should have correct aria attributes', () => {
        expect(navEl.getAttribute('aria-hidden')).toBe('false');
      });

      it('toggle button should have correct aria attributes', () => {
        expect(toggleEl.getAttribute('aria-expanded')).toBe('true');
      });
    });
  });

  describe('host listener binding', () => {
    describe('with open menu', () => {
      beforeEach(() => {
        component.showResponsiveMenu = true;
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

        describe('when the profileMenuToggle and the profileMenu are undefined', () => {
          it('should not close the menu', fakeAsync(() => {
            component.showResponsiveMenu = true;
            component.menuToggleButton = undefined;
            component.primaryNav = undefined;
            setup();

            expect(component.showResponsiveMenu).toBe(true);
          }));
        });
      });
    });
  });

  describe('toggleResponsiveMenu', () => {
    let toggleMenuSpy: jasmine.Spy;

    beforeEach(() => {
      toggleMenuSpy = spyOn(component.toggleMenu, 'emit');
      component.toggleResponsiveMenu();
      fixture.detectChanges();
    });

    it('toggles variable', () => {
      expect(component.showResponsiveMenu).toBe(true);
      expect(navEl.getAttribute('class')).toContain('lg-primary-nav--active');

      component.toggleResponsiveMenu();
      fixture.detectChanges();

      expect(component.showResponsiveMenu).toBe(false);
      expect(navEl.getAttribute('class')).not.toContain('lg-primary-nav--active');
    });

    it('emits an event', () => {
      expect(toggleMenuSpy).toHaveBeenCalledTimes(1);

      toggleMenuSpy.calls.reset();
      component.toggleResponsiveMenu();
      fixture.detectChanges();

      expect(toggleMenuSpy).toHaveBeenCalledTimes(1);
    });
  });

  it('closes menu when an nav item is clicked', fakeAsync(() => {
    component.showResponsiveMenu = true;
    component.navItems.last.clicked.emit();
    tick();

    expect(component.showResponsiveMenu).toBe(false);
  }));

  describe('trap focus', () => {
    let tabKeyDownEvent: KeyboardEvent;
    let focusSpy: jasmine.Spy;
    let preventDefaultSpy: jasmine.Spy;
    let setup: () => void;

    beforeEach(() => {
      tabKeyDownEvent = new KeyboardEvent('keydown', { key: 'Tab' });
      focusSpy = spyOn(toggleEl, 'focus');
      preventDefaultSpy = spyOn(tabKeyDownEvent, 'preventDefault');
    });

    describe('tabbing out of last listitem when toggle button is visible', () => {
      beforeEach(() => {
        setup = () => {
          component.navItems.last.tabbedOut.emit(tabKeyDownEvent);
          tick();
          fixture.detectChanges();
        };
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
      });

      it('does not call prevent event from bubbling', fakeAsync(() => {
        setup();

        expect(preventDefaultSpy).not.toHaveBeenCalled();
      }));

      it('does not focus toggle button after tabbing out of last listitem', fakeAsync(() => {
        setup();

        expect(focusSpy).not.toHaveBeenCalled();
      }));
    });
  });
});
