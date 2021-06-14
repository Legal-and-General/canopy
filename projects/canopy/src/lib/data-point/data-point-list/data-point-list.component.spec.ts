import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MockComponent, MockRender } from 'ng-mocks';

import { LgDataPointComponent } from '../data-point/data-point.component';
import { LgDataPointListComponent } from './data-point-list.component';

describe('LgDataPointListComponent', () => {
  let component: LgDataPointListComponent;
  let fixture: ComponentFixture<LgDataPointListComponent>;
  let debugElement: DebugElement;
  let el: HTMLElement;
  let dataPointDebugElements: Array<DebugElement>;
  let dataPointInstances: Array<LgDataPointComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [LgDataPointListComponent, MockComponent(LgDataPointComponent)],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = MockRender(`
      <lg-data-point-list>
      </lg-data-point-list>
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
    expect(el.getAttribute('class')).toContain('lg-data-point-list');
  });

  it('should have the role list', () => {
    expect(el.getAttribute('role')).toEqual('list');
  });

  describe('when there are 3 items', () => {
    beforeEach(() => {
      fixture = MockRender(`
        <lg-data-point-list>
          <lg-data-point></lg-data-point>
          <lg-data-point></lg-data-point>
          <lg-data-point></lg-data-point>
        </lg-data-point-list>
      `);
      debugElement = fixture.debugElement;
      component = fixture.componentInstance;
      el = debugElement.children[0].nativeElement;
      fixture.detectChanges();

      dataPointDebugElements = fixture.debugElement.queryAll(By.css('lg-data-point'));

      dataPointInstances = dataPointDebugElements.map(
        (debugEl) => debugEl.componentInstance,
      );
    });

    it('should expect 3 items to render', () => {
      expect(el.children.length).toEqual(3);
    });

    it('should set isListItem to true on all data points', () => {
      dataPointInstances.forEach((dataPoint) => {
        expect(dataPoint.isListItem).toBe(true);
      });
    });
  });
});
