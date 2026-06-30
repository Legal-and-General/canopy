import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MockComponent, MockRender, ngMocks } from 'ng-mocks';

import { LgDataPointComponent } from '../data-point/data-point.component';

import { LgDataPointGroupComponent } from './data-point-group.component';

describe('LgDataPointGroupComponent', () => {
  let component: LgDataPointGroupComponent;
  let fixture: ComponentFixture<LgDataPointGroupComponent>;
  let debugElement: DebugElement;
  let el: HTMLElement;
  let dataPointDebugElements: Array<DebugElement>;
  let dataPointInstances: Array<LgDataPointComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ LgDataPointGroupComponent, MockComponent(LgDataPointComponent) ],
    }).compileComponents();
  });

  beforeEach(() => {
    ngMocks.flushTestBed();

    fixture = MockRender(`
      <lg-data-point-group>
      </lg-data-point-group>
    `);

    debugElement = fixture.debugElement;
    component = fixture.componentInstance;
    el = debugElement.children[0].nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the default class', () => {
    expect(el.getAttribute('class')).toContain('lg-data-point-group');
  });

  it('should apply horizontal orientation by default', () => {
    expect(el.getAttribute('class')).toContain('lg-data-point-group--horizontal');
    expect(el.getAttribute('class')).not.toContain('lg-data-point-group--vertical');
  });

  it('should apply vertical orientation when orientation is vertical', () => {
    ngMocks.flushTestBed();

    const localFixture = MockRender(`
      <lg-data-point-group orientation="vertical">
      </lg-data-point-group>
    `);
    const localEl = localFixture.debugElement.children[0].nativeElement;

    localFixture.detectChanges();

    expect(localEl.getAttribute('class')).toContain('lg-data-point-group--vertical');

    expect(localEl.getAttribute('class')).not.toContain(
      'lg-data-point-group--horizontal',
    );
  });

  it('should not apply role when there are no data points', () => {
    expect(el.getAttribute('role')).toBeNull();
  });

  describe('when there is only 1 data point', () => {
    beforeEach(() => {
      ngMocks.flushTestBed();

      fixture = MockRender(`
        <lg-data-point-group>
          <lg-data-point></lg-data-point>
        </lg-data-point-group>
      `);

      debugElement = fixture.debugElement;
      el = debugElement.children[0].nativeElement;
      fixture.detectChanges();

      dataPointInstances = fixture.debugElement
        .queryAll(By.css('lg-data-point'))
        .map(debugEl => debugEl.componentInstance);
    });

    it('should not apply role="list" to the wrapper', () => {
      expect(el.getAttribute('role')).toBeNull();
    });

    it('should not set isListItem on the single data point', () => {
      expect(dataPointInstances[0].isListItem).not.toBe(true);
    });
  });

  describe('when there are 3 items', () => {
    beforeEach(() => {
      ngMocks.flushTestBed();

      fixture = MockRender(`
        <lg-data-point-group>
          <lg-data-point></lg-data-point>
          <lg-data-point></lg-data-point>
          <lg-data-point></lg-data-point>
        </lg-data-point-group>
      `);

      debugElement = fixture.debugElement;
      component = fixture.componentInstance;
      el = debugElement.children[0].nativeElement;
      fixture.detectChanges();

      dataPointDebugElements = fixture.debugElement.queryAll(By.css('lg-data-point'));

      dataPointInstances = dataPointDebugElements.map(
        debugEl => debugEl.componentInstance,
      );
    });

    it('should expect 3 items to render', () => {
      expect(el.children.length).toEqual(3);
    });

    it('should apply role="list" to the wrapper', () => {
      expect(el.getAttribute('role')).toEqual('list');
    });

    it('should set isListItem to true on all data points', () => {
      dataPointInstances.forEach(dataPoint => {
        expect(dataPoint.isListItem).toBe(true);
      });
    });
  });

  describe('when there are more than 4 data points', () => {
    it('should log a console error', () => {
      ngMocks.flushTestBed();

      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

      MockRender(`
        <lg-data-point-group>
          <lg-data-point></lg-data-point>
          <lg-data-point></lg-data-point>
          <lg-data-point></lg-data-point>
          <lg-data-point></lg-data-point>
          <lg-data-point></lg-data-point>
        </lg-data-point-group>
      `);

      expect(consoleSpy).toHaveBeenCalledWith(
        'LgDataPointGroupComponent: a maximum of 4 data points are allowed, but 5 were provided.',
      );

      consoleSpy.mockRestore();
    });
  });
});
