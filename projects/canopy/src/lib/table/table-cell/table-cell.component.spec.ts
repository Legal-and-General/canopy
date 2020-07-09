import { async, ComponentFixture, TestBed } from '@angular/core/testing';

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
});
