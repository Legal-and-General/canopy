import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { MockComponent, MockRender, MockedComponentFixture } from 'ng-mocks';

import { LgIconComponent } from '../../icon/icon.component';
import { LgBreadcrumbItemComponent } from './breadcrumb-item.component';
import {
  BreadcrumbVariant,
  BreadcrumbItemBreakpoints,
} from './breadcrumb-item.interface';

describe('LgBreadcrumbItemComponent', () => {
  let component: LgBreadcrumbItemComponent;
  let fixture: ComponentFixture<LgBreadcrumbItemComponent>;
  let breadcrumbItemDebugElement: DebugElement;
  let breadcrumbItemEl: HTMLElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [LgBreadcrumbItemComponent, MockComponent(LgIconComponent)],
      }).compileComponents();
    }),
  );

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

  it(`the class should contain 'lg-breadcrumb-item'`, () => {
    expect(breadcrumbItemEl.getAttribute('class')).toContain('lg-breadcrumb-item');
  });

  describe('when the variant is set to light', () => {
    beforeEach(() => {
      component.variant = BreadcrumbVariant.light;
    });

    it(`the class should contain 'lg-breadcrumb-item--light'`, () => {
      expect(breadcrumbItemEl.getAttribute('class')).toContain(
        'lg-breadcrumb-item--light',
      );
    });

    it(`the class should not contain 'lg-breadcrumb-item--dark'`, () => {
      expect(breadcrumbItemEl.getAttribute('class')).not.toContain(
        'lg-breadcrumb-item--dark',
      );
    });
  });

  describe('when the variant is set to dark', () => {
    beforeEach(() => {
      component.variant = BreadcrumbVariant.dark;
    });

    it(`the class should contain 'lg-breadcrumb-item--dark'`, () => {
      expect(breadcrumbItemEl.getAttribute('class')).toContain(
        'lg-breadcrumb-item--dark',
      );
    });

    it(`the class should not contain 'lg-breadcrumb-item--light'`, () => {
      expect(breadcrumbItemEl.getAttribute('class')).not.toContain(
        'lg-breadcrumb-item--light',
      );
    });
  });

  describe('when showItemAt is sm', () => {
    let localFixture: MockedComponentFixture<LgBreadcrumbItemComponent>;
    beforeEach(() => {
      localFixture = MockRender(
        `<lg-breadcrumb-item showItemAt="${BreadcrumbItemBreakpoints.Small}"></lg-breadcrumb-item>`,
      );
      component = localFixture.debugElement.children[0].componentInstance;
      localFixture.detectChanges();
    });

    it(`the class should contain small screen visibility class`, () => {
      const containerEL = localFixture.debugElement.query(
        By.css('.lg-breadcrumb-item__container'),
      );
      expect(containerEL.nativeElement.getAttribute('class')).toContain(
        'lg-breadcrumb-item__container--visible-sm',
      );
    });
  });
});
