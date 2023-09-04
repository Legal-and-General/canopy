import { TestBed, waitForAsync } from '@angular/core/testing';
import { MockRender, MockedComponentFixture } from 'ng-mocks';

import { LgTableHeadCellComponent } from './table-head-cell.component';

describe('LgTableHeadCellComponent', () => {
  let component: LgTableHeadCellComponent;
  let fixture: MockedComponentFixture<LgTableHeadCellComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LgTableHeadCellComponent ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = MockRender(`
      <th lg-table-head-cell align="end">Hello</th>
    `);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the table head cell class', () => {
    expect(fixture.debugElement.children[0].nativeElement.getAttribute('class')).toBe(
      'lg-table-head-cell',
    );
  });

  it('should contain the header Hello', () => {
    expect(fixture.debugElement.children[0].nativeElement.innerText).toEqual('Hello');
  });

  it('should have the text-align style set to right', () => {
    expect(fixture.debugElement.children[0].nativeElement.getAttribute('style')).toBe(
      'text-align: right;',
    );
  });
});
