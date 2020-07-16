import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AlignmentOptions } from '../table.interface';
import { LgTableCellComponent } from './table-cell.component';

describe('LgTableCellComponent', () => {
  let component: LgTableCellComponent;
  let fixture: ComponentFixture<LgTableCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LgTableCellComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgTableCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the table cell class', () => {
    expect(fixture.nativeElement.getAttribute('class')).toBe('lg-table-cell');
  });

  it('should have the "cell" role applied', () => {
    expect(fixture.nativeElement.getAttribute('role')).toBe('cell');
  });

  describe('when align is set to end', () => {
    beforeEach(() => {
      component.align = AlignmentOptions.End;
      fixture.detectChanges();
    });

    it('should set the alignment class modifier', () => {
      const headDebugElement = fixture.debugElement.query(
        By.css('.lg-table-cell__content'),
      );
      expect(headDebugElement.nativeElement.getAttribute('class')).toContain(
        'lg-table-cell__content--align-end',
      );
    });
  });
});
