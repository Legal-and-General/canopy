import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { MockRender } from 'ng-mocks';

import { LgTableHeadComponent } from './table-head.component';

describe('LgTableHeadComponent', () => {
  let component: LgTableHeadComponent;
  let fixture: ComponentFixture<LgTableHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LgTableHeadComponent],
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

  it('should not have the align class applied', () => {
    expect(fixture.nativeElement.getAttribute('class')).not.toContain(
      'lg-table-head--align-end',
    );
  });

  describe('when component is set to align end', () => {
    beforeEach(() => {
      fixture = MockRender(`<lg-table-head [align]="'end'"></lg-table-head>`);
    });

    it('should have the align class applied', () => {
      const headDebugElement = fixture.debugElement.query(By.css('.lg-table-head'));
      expect(headDebugElement.nativeElement.getAttribute('class')).toContain(
        'lg-table-head--align-end',
      );
    });
  });
});
