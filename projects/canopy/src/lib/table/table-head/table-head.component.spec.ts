import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LgTableHeadComponent } from './table-head.component';

describe('LgTableHeadComponent', () => {
  let component: LgTableHeadComponent;
  let fixture: ComponentFixture<LgTableHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LgTableHeadComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgTableHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the table head class', () => {
    expect(fixture.nativeElement.getAttribute('class')).toBe('lg-table-head');
  });

  it('should have the "columnheader" role applied', () => {
    expect(fixture.nativeElement.getAttribute('role')).toBe('columnheader');
  });
});
