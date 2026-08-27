import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { QueryList } from '@angular/core';
import { MockComponent } from 'ng-mocks';

import { LgTableRowComponent } from '../table-row/table-row.component';

import { LgTableFootComponent } from './table-foot.component';

describe('LgTableFootComponent', () => {
  let component: LgTableFootComponent;
  let fixture: ComponentFixture<LgTableFootComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ LgTableFootComponent, MockComponent(LgTableRowComponent) ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgTableFootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the table foot class', () => {
    expect(fixture.nativeElement.getAttribute('class')).toContain('lg-table-foot');
  });

  describe('when foot rows are present', () => {
    it('should mark all rows as foot rows', () => {
      const firstRow = { isFootRow: false } as Partial<LgTableRowComponent>;
      const secondRow = { isFootRow: false } as Partial<LgTableRowComponent>;
      const rows = new QueryList<LgTableRowComponent>();

      rows.reset([ firstRow, secondRow ] as Array<LgTableRowComponent>);
      component.footRows = rows;
      component.ngAfterContentChecked();

      expect(firstRow.isFootRow).toBe(true);
      expect(secondRow.isFootRow).toBe(true);
    });
  });
});
