import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { MockRender, MockComponent } from 'ng-mocks';

import { LgTableCellComponent } from './table-cell.component';
import { AlignmentOptions } from '../table.interface';
import { LgTableExpandedDetailComponent } from '../table-expanded-detail/table-expanded-detail.component';

describe('LgTableCellComponent', () => {
  let component: LgTableCellComponent;
  let fixture: ComponentFixture<LgTableCellComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LgTableCellComponent, MockComponent(LgTableExpandedDetailComponent)],
    }).compileComponents();
  }));

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

  describe('when there is a expandable detail', () => {
    beforeEach(() => {
      fixture = MockRender(`
        <td lg-table-cell>
          <lg-table-expanded-detail>
          </lg-table-expanded-detail>
        </td>
      `);
    });

    it('should set the expanding detail class', () => {
      expect(fixture.debugElement.children[0].nativeElement.getAttribute('class')).toBe(
        'lg-table-cell lg-table-cell--expandable-content',
      );
    });
  });
});
