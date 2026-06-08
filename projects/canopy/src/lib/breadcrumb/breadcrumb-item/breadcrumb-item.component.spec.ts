import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MockComponent } from 'ng-mocks';

import { LgIconComponent } from '../../icon';

import { LgBreadcrumbItemComponent } from './breadcrumb-item.component';

describe('LgBreadcrumbItemComponent', () => {
  let component: LgBreadcrumbItemComponent;
  let fixture: ComponentFixture<LgBreadcrumbItemComponent>;
  let breadcrumbItemDebugElement: DebugElement;
  let breadcrumbItemEl: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ LgBreadcrumbItemComponent, MockComponent(LgIconComponent) ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgBreadcrumbItemComponent);
    component = fixture.componentInstance;
    breadcrumbItemDebugElement = fixture.debugElement;
    breadcrumbItemEl = breadcrumbItemDebugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('the class should contain \'lg-breadcrumb-item\'', () => {
    expect(breadcrumbItemEl.getAttribute('class')).toContain('lg-breadcrumb-item');
  });

  describe('when isSmScreenFeaturedItem is true', () => {
    beforeEach(() => {
      component.isSmScreenFeaturedItem = true;
      fixture.detectChanges();
    });

    it('the class should contain small screen visibility class', () => {
      const containerEL = fixture.debugElement.query(
        By.css('.lg-breadcrumb-item__container'),
      );

      expect(containerEL.nativeElement.getAttribute('class')).toContain(
        'lg-breadcrumb-item__container--visible-sm',
      );
    });
  });

  describe('when hideIcons is true', () => {
    beforeEach(() => {
      component.hideIcons = true;
      fixture.detectChanges();
    });

    it('the class should contain hide-icons class', () => {
      const containerEL = fixture.debugElement.query(
        By.css('.lg-breadcrumb-item__container'),
      );

      expect(containerEL.nativeElement.getAttribute('class')).toContain(
        'lg-breadcrumb-item__container--hide-icons',
      );
    });
  });

  describe('when isCurrentPage is true', () => {
    beforeEach(() => {
      component.isCurrentPage = true;
      fixture.detectChanges();
    });

    it('should set aria-current to page on the host element', () => {
      expect(breadcrumbItemEl.getAttribute('aria-current')).toBe('page');
    });
  });

  describe('when isCurrentPage is false', () => {
    beforeEach(() => {
      component.isCurrentPage = false;
      fixture.detectChanges();
    });

    it('should not set aria-current on the host element', () => {
      expect(breadcrumbItemEl.getAttribute('aria-current')).toBeNull();
    });
  });
});
