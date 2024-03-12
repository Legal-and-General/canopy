import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MockRender, MockComponent } from 'ng-mocks';

import { LgTableRowComponent } from '../table-row/table-row.component';

import { LgTableHeadComponent } from './table-head.component';

describe('LgTableHeadComponent', () => {
  let component: LgTableHeadComponent;
  let fixture: ComponentFixture<LgTableHeadComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ LgTableHeadComponent, MockComponent(LgTableRowComponent) ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = MockRender(`
      <thead lg-table-head><tr lg-table-row></tr></thead>
    `);

    component = fixture.debugElement.children[0].componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the table head class', () => {
    expect(fixture.debugElement.children[0].nativeElement.getAttribute('class')).toBe(
      'lg-table-head',
    );
  });

  it('should set the head row flag on the child rows', () => {
    component = fixture.debugElement.children[0].componentInstance;

    expect(component.headRow.isHeadRow).toEqual(true);
  });
});
