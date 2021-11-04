import { TestBed, waitForAsync } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { MockComponent, MockRender, MockedComponentFixture } from 'ng-mocks';

import { LgDetailsPanelHeadingComponent } from './details-panel-heading/details-panel-heading.component';
import { LgDetailsComponent } from './details.component';

describe('LgDetailsComponent', () => {
  let component: LgDetailsComponent;
  let fixture: MockedComponentFixture<LgDetailsComponent>;
  let detailsDebugElement: DebugElement;
  let detailsEl: HTMLElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [LgDetailsComponent, MockComponent(LgDetailsPanelHeadingComponent)],
      }).compileComponents();
    }),
  );

  describe('component', () => {
    beforeEach(() => {
      fixture = MockRender(`
        <lg-details>
          <lg-details-panel-heading></lg-details-panel-heading>
        </lg-details>
      `);
      detailsDebugElement = fixture.debugElement;
      component = detailsDebugElement.children[0].componentInstance;
      detailsEl = detailsDebugElement.children[0].nativeElement;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should have the default class', () => {
      expect(detailsEl.getAttribute('class')).toContain('lg-details');
    });

    it('adds generic as the default variant', () => {
      expect(detailsEl.getAttribute('class')).toContain('generic');
    });
  });

  describe('Aria roles', () => {
    beforeEach(() => {
      fixture = MockRender(`
        <lg-details>
          <lg-details-panel-heading></lg-details-panel-heading>
        </lg-details>
      `);
      detailsDebugElement = fixture.debugElement;
      detailsEl = detailsDebugElement.children[0].nativeElement;
      component = fixture.point.componentInstance;
      fixture.detectChanges();
    });

    it('does not add an Aria role for the generic variant', () => {
      expect(detailsEl.getAttribute('role')).toBeNull();
    });

    it('does not add an Aria role for the info variant', () => {
      component.variant = 'info';
      expect(detailsEl.getAttribute('role')).toBeNull();
    });

    it('adds an Aria role "alert" for the warning variant', () => {
      component.variant = 'warning';
      fixture.detectChanges();
      expect(detailsEl.getAttribute('role')).toBe('alert');
    });

    it('adds an Aria role "alert" for the error variant', () => {
      component.variant = 'error';
      fixture.detectChanges();
      expect(detailsEl.getAttribute('role')).toBe('alert');
    });

    it('adds an Aria role "success" for the error variant', () => {
      component.variant = 'success';
      fixture.detectChanges();
      expect(detailsEl.getAttribute('role')).toBe('alert');
    });
  });

  describe('when details are active', () => {
    beforeEach(() => {
      fixture = MockRender(`
        <lg-details [isActive]="true">
          <lg-details-panel-heading></lg-details-panel-heading>
        </lg-details>
      `);
      detailsDebugElement = fixture.debugElement;
      component = detailsDebugElement.children[0].componentInstance;
      fixture.detectChanges();
    });

    it('should have active panels', () => {
      expect(component.panelHeading.isActive).toEqual(true);
    });
  });

  describe('when details are inactive', () => {
    beforeEach(() => {
      fixture = MockRender(`
        <lg-details [isActive]="false">
          <lg-details-panel-heading></lg-details-panel-heading>
        </lg-details>
      `);
      detailsDebugElement = fixture.debugElement;
      component = detailsDebugElement.children[0].componentInstance;
      fixture.detectChanges();
    });

    it('should have inactive panels', () => {
      expect(component.panelHeading.isActive).toEqual(false);
    });

    it(`should emit the isActive status of true`, () => {
      const componentEventSpy = spyOn(component.opened, 'emit');
      component.panelHeading.toggleActive.emit(true);
      expect(componentEventSpy).toHaveBeenCalled();
    });

    it(`should emit the isActive status of false`, () => {
      const componentEventSpy = spyOn(component.closed, 'emit');
      component.panelHeading.toggleActive.emit(false);
      expect(componentEventSpy).toHaveBeenCalled();
    });
  });
});
