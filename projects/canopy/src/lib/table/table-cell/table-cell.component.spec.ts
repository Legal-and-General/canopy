import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { MockComponent, MockedComponentFixture, MockRender } from 'ng-mocks';

import { LgTableExpandedDetailComponent } from '../table-expanded-detail/table-expanded-detail.component';
import { AlignmentOptions } from '../table.interface';

import { LgTableCellComponent } from './table-cell.component';

describe('LgTableCellComponent', () => {
  let component: LgTableCellComponent;
  let fixture:
    | ComponentFixture<LgTableCellComponent>
    | MockedComponentFixture<LgTableCellComponent>;
  let debugElement: DebugElement;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [
          LgTableCellComponent,
          MockComponent(LgTableExpandedDetailComponent),
        ],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LgTableCellComponent);
    debugElement = fixture.debugElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the table cell class', () => {
    expect(fixture.nativeElement.getAttribute('class')).toBe('lg-table-cell');
  });

  it('should have the aria hidden attribute', () => {
    const label = debugElement.query(By.css('.lg-table-cell__label'));
    expect(label.nativeElement.getAttribute('aria-hidden')).toBe('true');
  });

  describe('when align is set to end', () => {
    beforeEach(() => {
      component.align = AlignmentOptions.End;
      fixture.detectChanges();
    });

    it('should set the alignment class', () => {
      const contentElement = debugElement.query(By.css('.lg-table-cell__content'));
      expect(contentElement.nativeElement.getAttribute('class')).toContain(
        'lg-table-cell__content--align-end',
      );
    });
  });

  describe('when align is set to start', () => {
    beforeEach(() => {
      component.align = AlignmentOptions.Start;
      fixture.detectChanges();
    });

    it('should set the alignment class', () => {
      const contentElement = debugElement.query(By.css('.lg-table-cell__content'));
      expect(contentElement.nativeElement.getAttribute('class')).not.toContain(
        'lg-table-cell__content--align-end',
      );
    });
  });

  describe('when stack is set to true', () => {
    beforeEach(() => {
      component.stack = true;
      fixture.detectChanges();
    });

    it('should set the lg-table-cell--stacked class', () => {
      expect(fixture.nativeElement.getAttribute('class')).toContain(
        'lg-table-cell--stacked',
      );
    });
  });

  describe('when stack is set to false', () => {
    beforeEach(() => {
      component.stack = false;
      fixture.detectChanges();
    });

    it('should not set the lg-table-cell--stacked class', () => {
      expect(fixture.nativeElement.getAttribute('class')).not.toContain(
        'lg-table-cell--stacked',
      );
    });
  });

  describe('when showLabel is set to true', () => {
    beforeEach(() => {
      component.showLabel = true;
      fixture.detectChanges();
    });

    it('should not set the lg-visually-hidden class', () => {
      const labelElement = debugElement.query(By.css('.lg-table-cell__label'));
      expect(labelElement.nativeElement.getAttribute('class')).not.toContain(
        'lg-visually-hidden',
      );
    });

    it('should set the content class', () => {
      const contentElement = debugElement.query(By.css('.lg-table-cell__content'));
      expect(contentElement.nativeElement).toBeDefined();
    });
  });

  describe('when showLabel is set to false', () => {
    beforeEach(() => {
      component.showLabel = false;
      fixture.detectChanges();
    });

    it('should set the lg-visually-hidden class', () => {
      const labelElement = debugElement.query(By.css('.lg-table-cell__label'));
      expect(labelElement.nativeElement.getAttribute('class')).toContain(
        'lg-visually-hidden',
      );
    });

    it('should set the hidden class on the content', () => {
      const contentElement = debugElement.query(
        By.css('.lg-table-cell__content--hidden-label'),
      );
      expect(contentElement).toBeDefined();
    });
  });

  describe('when there is a expandable detail', () => {
    beforeEach(() => {
      fixture = (MockRender(`
        <td lg-table-cell>
          <lg-table-expanded-detail>
          </lg-table-expanded-detail>
        </td>
      `) as unknown) as ComponentFixture<LgTableCellComponent>;
    });

    it('should set the expanding detail class', () => {
      expect(fixture.debugElement.children[0].nativeElement.getAttribute('class')).toBe(
        'lg-table-cell lg-table-cell--expandable-content',
      );
    });
  });
});
