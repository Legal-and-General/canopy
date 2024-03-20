import { TestBed, waitForAsync } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { MockComponent, MockedComponentFixture, MockRender } from 'ng-mocks';

import { LgIconComponent } from '../../icon/icon.component';

import { LgTableRowToggleComponent } from './table-row-toggle.component';

describe('LgTableRowToggleComponent', () => {
  let component: LgTableRowToggleComponent;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let fixture: MockedComponentFixture<LgTableRowToggleComponent, any>;
  let debugElement: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ LgTableRowToggleComponent, MockComponent(LgIconComponent) ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = MockRender('<lg-table-row-toggle></lg-table-row-toggle>');
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when the row index and table id are set', () => {
    beforeEach(() => {
      fixture = MockRender(
        `<lg-table-row-toggle>
        </lg-table-row-toggle>`,
      );

      fixture.debugElement.children[0].componentInstance.tableId = 0;
      fixture.debugElement.children[0].componentInstance.rowId = 0;
      fixture.detectChanges();
      debugElement = fixture.debugElement.query(By.css('.lg-table-row-toggle__btn'));
    });

    it('should set aria controls', () => {
      expect(debugElement.nativeElement.getAttribute('aria-controls')).toEqual(
        'lg-table-0-detail-row-0',
      );
    });

    it('should set the id', () => {
      expect(debugElement.nativeElement.getAttribute('id')).toEqual(
        'lg-table-0-toggle-row-0',
      );
    });
  });

  describe('when the parent row is expanded', () => {
    let toggleDebugElement: DebugElement;

    beforeEach(() => {
      fixture = MockRender(
        '<lg-table-row-toggle [isActive]="isActive"></lg-table-row-toggle>',
        {
          isActive: true,
        },
      );

      debugElement = fixture.debugElement.query(By.css('.lg-table-row-toggle__label'));

      toggleDebugElement = fixture.debugElement.query(
        By.css('.lg-table-row-toggle__btn'),
      );

      fixture.detectChanges();
    });

    it('should set the text to Collapse', () => {
      expect(debugElement.nativeElement.innerText).toEqual('Collapse');
    });

    it('should set the aria expanded attribute to true', () => {
      expect(toggleDebugElement.nativeElement.getAttribute('aria-expanded')).toEqual(
        'true',
      );
    });
  });

  describe('when the parent row is not expanded', () => {
    let toggleDebugElement: DebugElement;

    beforeEach(() => {
      fixture = MockRender(
        '<lg-table-row-toggle [isActive]="isActive"></lg-table-row-toggle>',
        {
          isActive: false,
        },
      );

      fixture.detectChanges();
      debugElement = fixture.debugElement.query(By.css('.lg-table-row-toggle__label'));

      toggleDebugElement = fixture.debugElement.query(
        By.css('.lg-table-row-toggle__btn'),
      );
    });

    it('should set the text to Expand', () => {
      expect(debugElement.nativeElement.innerText).toEqual('Expand');
    });

    it('should not set the aria expanded attribute', () => {
      expect(toggleDebugElement.nativeElement.getAttribute('aria-expanded')).toEqual(
        'false',
      );
    });
  });
});
