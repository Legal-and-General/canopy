import { TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DefaultRenderComponent, MockedComponentFixture, MockRender } from 'ng-mocks';

import { LgPrimaryNavComponent } from './primary-navigation.component';
import { LgPrimaryNavListItemComponent } from './primary-navigation-list-item/primary-navigation-list-item.component';

describe('PrimaryNavigationComponent', () => {
  let component: DefaultRenderComponent<LgPrimaryNavComponent>;
  let fixture: MockedComponentFixture<LgPrimaryNavComponent>;
  let debugElement: DebugElement;
  let navEl: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ LgPrimaryNavComponent, LgPrimaryNavListItemComponent ],
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

    describe('toggled state', () => {
      beforeEach(() => {
        component.showResponsiveMenu = true;
        fixture.detectChanges();
      });

      it('nav menu button should have active class', () => {
        expect(navEl.getAttribute('class')).toContain('lg-primary-nav--active');
      });

      it('nav menu should have correct aria attributes', () => {
        expect(navEl.getAttribute('aria-hidden')).toBe('false');
      });
    });
  });
});
