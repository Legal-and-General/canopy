import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MockComponent } from 'ng-mocks';

import { LgIconComponent } from '../../icon';

import { LgBreadcrumbItemComponent } from './breadcrumb-item.component';
import { BreadcrumbVariant } from './breadcrumb-item.interface';

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

  describe('when the variant is set to light', () => {
    beforeEach(() => {
      component.variant = BreadcrumbVariant.light;
    });

    it('the class should contain \'lg-breadcrumb-item--light\'', () => {
      expect(breadcrumbItemEl.getAttribute('class')).toContain(
        'lg-breadcrumb-item--light',
      );
    });

    it('the class should not contain \'lg-breadcrumb-item--dark\'', () => {
      expect(breadcrumbItemEl.getAttribute('class')).not.toContain(
        'lg-breadcrumb-item--dark',
      );
    });
  });

  describe('when the variant is set to dark', () => {
    beforeEach(() => {
      component.variant = BreadcrumbVariant.dark;
    });

    it('the class should contain \'lg-breadcrumb-item--dark\'', () => {
      expect(breadcrumbItemEl.getAttribute('class')).toContain(
        'lg-breadcrumb-item--dark',
      );
    });

    it('the class should not contain \'lg-breadcrumb-item--light\'', () => {
      expect(breadcrumbItemEl.getAttribute('class')).not.toContain(
        'lg-breadcrumb-item--light',
      );
    });
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
});
