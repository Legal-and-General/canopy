import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LgTableBodyComponent } from './table-body.component';

describe('LgTableBodyComponent', () => {
  let component: LgTableBodyComponent;
  let fixture: ComponentFixture<LgTableBodyComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ LgTableBodyComponent ],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LgTableBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the table body class', () => {
    expect(fixture.nativeElement.getAttribute('class')).toBe('lg-table-body');
  });
});
