import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LgTableRowComponent } from './table-row.component';

describe('LgTableRowComponent', () => {
  let component: LgTableRowComponent;
  let fixture: ComponentFixture<LgTableRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LgTableRowComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the table row class', () => {
    expect(fixture.nativeElement.getAttribute('class')).toBe('lg-table-row');
  });

  it('should have the "row" role applied', () => {
    expect(fixture.nativeElement.getAttribute('role')).toBe('row');
  });
});
