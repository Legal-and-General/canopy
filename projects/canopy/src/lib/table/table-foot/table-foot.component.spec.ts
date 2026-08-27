import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
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

  describe('when a foot row is present', () => {
    it('should mark the row as a foot row', () => {
      const row = { isFootRow: false } as Partial<LgTableRowComponent>;

      component.footRow = row as LgTableRowComponent;
      component.ngAfterContentChecked();

      expect(component.footRow.isFootRow).toBe(true);
    });
  });
});
