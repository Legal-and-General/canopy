import { TestBed, waitForAsync } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { MockComponents, MockedComponentFixture, MockRender, ngMocks } from 'ng-mocks';

import { LgIconComponent } from '../icon';
import { LgHeadingComponent } from '../heading';

import { LgDetailsPanelHeadingComponent } from './details-panel-heading/details-panel-heading.component';
import { LgDetailsComponent } from './details.component';

describe('LgDetailsComponent', () => {
  let component: LgDetailsComponent;
  let fixture: MockedComponentFixture<LgDetailsComponent>;
  let detailsDebugElement: DebugElement;
  let detailsEl: HTMLElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        LgDetailsComponent,
        LgDetailsPanelHeadingComponent,
        MockComponents(LgIconComponent, LgHeadingComponent),
      ],
    }).compileComponents();
  }));

  describe('component', () => {
    beforeEach(() => {
      ngMocks.flushTestBed();

      fixture = MockRender(`
        <lg-details>
          <lg-details-panel-heading></lg-details-panel-heading>
        </lg-details>
      `);

      detailsDebugElement = fixture.debugElement;
      component = detailsDebugElement.children[0].componentInstance;
      detailsEl = detailsDebugElement.children[0].nativeElement;
    });

    afterEach(() => {
      ngMocks.flushTestBed();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should have the default class', () => {
      expect(detailsEl.getAttribute('class')).toContain('lg-details');
    });

    it('should add an id and aria-labelledby attribute to the panel that matches the values of the attributes of the toggle', () => {
      const panelEl = detailsEl.getElementsByClassName('lg-details__panel')[0];
      const toggleEl = detailsEl.getElementsByClassName(
        'lg-details-panel-heading__toggle',
      )[0];

      const toggleElId = toggleEl.getAttribute('id');
      const toggleElAriaControls = toggleEl.getAttribute('aria-controls');

      expect(panelEl.getAttribute('id')).toBe(toggleElAriaControls);
      expect(panelEl.getAttribute('aria-labelledby')).toBe(toggleElId);
    });
  });

  describe('Aria roles', () => {
    beforeEach(() => {
      ngMocks.flushTestBed();
    });

    it('does not add an Aria role for the generic status', () => {
      fixture = MockRender(`
        <lg-details>
          <lg-details-panel-heading></lg-details-panel-heading>
        </lg-details>
      `);

      detailsDebugElement = fixture.debugElement;
      detailsEl = detailsDebugElement.children[0].nativeElement;
      fixture.detectChanges();

      expect(detailsEl.getAttribute('role')).toBeNull();
    });

    it('does not add an Aria role for the info status', () => {
      fixture = MockRender(`
        <lg-details status="info">
          <lg-details-panel-heading></lg-details-panel-heading>
        </lg-details>
      `);

      detailsDebugElement = fixture.debugElement;
      detailsEl = detailsDebugElement.children[0].nativeElement;
      fixture.detectChanges();

      expect(detailsEl.getAttribute('role')).toBeNull();
    });

    it('adds an Aria role "alert" for the warning status', () => {
      fixture = MockRender(`
        <lg-details status="warning">
          <lg-details-panel-heading></lg-details-panel-heading>
        </lg-details>
      `);

      detailsDebugElement = fixture.debugElement;
      detailsEl = detailsDebugElement.children[0].nativeElement;
      fixture.detectChanges();

      expect(detailsEl.getAttribute('role')).toBe('alert');
    });

    it('adds an Aria role "alert" for the error status', () => {
      fixture = MockRender(`
        <lg-details status="error">
          <lg-details-panel-heading></lg-details-panel-heading>
        </lg-details>
      `);

      detailsDebugElement = fixture.debugElement;
      detailsEl = detailsDebugElement.children[0].nativeElement;
      fixture.detectChanges();

      expect(detailsEl.getAttribute('role')).toBe('alert');
    });

    it('adds an Aria role "alert" for the success status', () => {
      fixture = MockRender(`
        <lg-details status="success">
          <lg-details-panel-heading></lg-details-panel-heading>
        </lg-details>
      `);

      detailsDebugElement = fixture.debugElement;
      detailsEl = detailsDebugElement.children[0].nativeElement;
      fixture.detectChanges();

      expect(detailsEl.getAttribute('role')).toBe('alert');
    });
  });

  describe('when details are active', () => {
    beforeEach(() => {
      ngMocks.flushTestBed();

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
      ngMocks.flushTestBed();

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

    it('should emit the isActive status of true', () => {
      const componentEventSpy = jest.spyOn(component.opened, 'emit');

      component.panelHeading.toggleActive.emit(true);

      expect(componentEventSpy).toHaveBeenCalled();
    });

    it('should emit the isActive status of false', () => {
      const componentEventSpy = jest.spyOn(component.closed, 'emit');

      component.panelHeading.toggleActive.emit(false);

      expect(componentEventSpy).toHaveBeenCalled();
    });
  });
});
