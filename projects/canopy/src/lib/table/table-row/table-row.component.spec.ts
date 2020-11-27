import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { MockComponents } from 'ng-mocks';

import { LgTableCellComponent } from '../table-cell/table-cell.component';
import { LgTableRowToggleComponent } from '../table-row-toggle/table-row-toggle.component';
import { LgTableRowComponent } from './table-row.component';

describe('LgTableRowComponent', () => {
  let component: LgTableRowComponent;
  let fixture: ComponentFixture<LgTableRowComponent>;
  let debugElement: DebugElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [
          LgTableRowComponent,
          MockComponents(LgTableCellComponent, LgTableRowToggleComponent),
        ],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LgTableRowComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the table row class', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain('lg-table-row');
  });

  describe('when the id by is not set', () => {
    it('should not set the id attribute', () => {
      expect(debugElement.nativeElement.getAttribute('id')).toBeNull();
    });
  });

  describe('when the id attribute is set', () => {
    beforeEach(() => {
      component.ariaId = 'test';
      fixture.detectChanges();
    });

    it('should set the id attribute', () => {
      expect(debugElement.nativeElement.getAttribute('id')).toBe('test');
    });
  });

  describe('when the row is not hidden', () => {
    beforeEach(() => {
      component.isHidden = false;
      fixture.detectChanges();
    });

    it('should set the id attribute', () => {
      expect(debugElement.nativeElement.getAttribute('aria-hidden')).toBeNull();
    });
  });

  describe('when the row is hidden', () => {
    beforeEach(() => {
      component.isHidden = true;
      fixture.detectChanges();
    });

    it('should set the id attribute', () => {
      expect(debugElement.nativeElement.getAttribute('aria-hidden')).toBe('true');
    });
  });

  describe('when the aria labelled by is not set', () => {
    it('should not set the aria-labelledby attribute', () => {
      expect(debugElement.nativeElement.getAttribute('aria-labelledby')).toBeNull();
    });
  });

  describe('when the aria labelled by is set', () => {
    beforeEach(() => {
      component.ariaLabelledBy = 'test';
      fixture.detectChanges();
    });

    it('should set the aria-labelledby attribute', () => {
      expect(debugElement.nativeElement.getAttribute('aria-labelledby')).toBe('test');
    });
  });
});
