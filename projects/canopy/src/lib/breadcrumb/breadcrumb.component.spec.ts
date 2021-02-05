import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MockComponent, MockRender } from 'ng-mocks';

import { LgBreadcrumbItemEllipsisComponent } from './breadcrumb-item-ellipsis/breadcrumb-item-ellipsis.component';
import { LgBreadcrumbItemComponent } from './breadcrumb-item/breadcrumb-item.component';
import { BreadcrumbVariant } from './breadcrumb-item/breadcrumb-item.interface';
import { LgBreadcrumbComponent } from './breadcrumb.component';

describe('LgBreadcrumbComponent', () => {
  let component: LgBreadcrumbComponent;
  let fixture: ComponentFixture<LgBreadcrumbComponent>;
  let breadcrumbDebugElement: DebugElement;
  let breadcrumbEl: HTMLElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [
          LgBreadcrumbComponent,
          LgBreadcrumbItemComponent,
          MockComponent(LgBreadcrumbItemEllipsisComponent),
        ],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LgBreadcrumbComponent);
    component = fixture.componentInstance;
    breadcrumbDebugElement = fixture.debugElement;
    breadcrumbEl = breadcrumbDebugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the aria label Breadcrumb', () => {
    expect(breadcrumbEl.getAttribute('aria-label')).toEqual('breadcrumb');
  });

  it('should have the role navigation', () => {
    expect(breadcrumbEl.getAttribute('role')).toEqual('navigation');
  });

  it('should contain the class lg-breadcrumb', () => {
    expect(breadcrumbEl.getAttribute('class')).toContain('lg-breadcrumb');
  });

  describe('where there is 1 breadcrumb item', () => {
    beforeEach(() => {
      const localFixture = MockRender(`
        <lg-breadcrumb>
          <lg-breadcrumb-item [showOnSmScreens]="true">Home</lg-breadcrumb-item>
        </lg-breadcrumb>
      `);
      component = localFixture.debugElement.children[0].componentInstance;
      localFixture.detectChanges();
    });

    it('show back button should be false', () => {
      expect(component.crumbs.first.showBackChevron).toBe(false);
    });

    it('show forward button should be false', () => {
      expect(component.crumbs.first.showForwardChevron).toBe(false);
    });

    it('the first item should set showOnSmScreens to true', () => {
      expect(component.crumbs.first.showOnSmScreens).toBe(true);
    });

    it('the breadcrumb item variant should be dark', () => {
      component.variant = BreadcrumbVariant.dark;
      fixture.detectChanges();
      expect(component.crumbs.first.variant).toEqual(BreadcrumbVariant.dark);
    });
  });

  describe('where there are 2 breadcrumb items', () => {
    beforeEach(() => {
      const localFixture = MockRender(`
        <lg-breadcrumb>
          <lg-breadcrumb-item [showOnSmScreens]="true">Home</lg-breadcrumb-item>
          <lg-breadcrumb-item>Retirement</lg-breadcrumb-item>
        </lg-breadcrumb>
      `);
      component = localFixture.debugElement.children[0].componentInstance;
      localFixture.detectChanges();
    });

    it('show back button should be true for first item', () => {
      expect(component.crumbs.first.showBackChevron).toBe(true);
    });

    it('show forward button should be true for first item', () => {
      expect(component.crumbs.first.showForwardChevron).toBe(true);
    });

    it('the first item should set showOnSmScreens to true', () => {
      expect(component.crumbs.first.showOnSmScreens).toBe(true);
    });
  });

  describe('where there are 3 breadcrumb items', () => {
    beforeEach(() => {
      const localFixture = MockRender(`
        <lg-breadcrumb>
          <lg-breadcrumb-item>Home</lg-breadcrumb-item>
          <lg-breadcrumb-item [showOnSmScreens]="true">Retirement</lg-breadcrumb-item>
          <lg-breadcrumb-item-ellipsis></lg-breadcrumb-item-ellipsis>
          <lg-breadcrumb-item>Pensions</lg-breadcrumb-item>
        </lg-breadcrumb>
      `);
      component = localFixture.debugElement.children[0].componentInstance;
      localFixture.detectChanges();
    });

    it('show back button should be true for first item', () => {
      expect(component.crumbs.first.showBackChevron).toBe(true);
    });

    it('show back button should be true for second item', () => {
      expect(component.crumbs.toArray()[1].showBackChevron).toBe(true);
    });

    it('show back button should be true for third item', () => {
      expect(component.crumbs.toArray()[2].showBackChevron).toBe(true);
    });

    it('show forward button should be true for first item', () => {
      expect(component.crumbs.first.showForwardChevron).toBe(true);
    });

    it('show forward button should be true for second item', () => {
      expect(component.crumbs.toArray()[1].showForwardChevron).toBe(true);
    });

    it('show forward button should be false for third item', () => {
      expect(component.crumbs.toArray()[2].showForwardChevron).toBe(false);
    });

    it('the first item should set showOnSmScreens to false', () => {
      expect(component.crumbs.toArray()[0].showOnSmScreens).toBe(false);
    });

    it('the second item should set showOnSmScreens to true', () => {
      expect(component.crumbs.toArray()[1].showOnSmScreens).toBe(true);
    });

    it('the third item should set showOnSmScreens to false', () => {
      expect(component.crumbs.toArray()[2].showOnSmScreens).toBe(false);
    });

    it('the breadcrumb item ellipsis variant should be dark', () => {
      component.variant = BreadcrumbVariant.dark;
      fixture.detectChanges();
      expect(component.ellipsis.first.variant).toEqual(BreadcrumbVariant.dark);
    });
  });
});
