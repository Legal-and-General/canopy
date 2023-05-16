import { DebugElement } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MockRender, MockComponent } from 'ng-mocks';

import { LgTableRowComponent } from '../table-row/table-row.component';

import { LgTableHeadComponent } from './table-head.component';

describe('LgTableHeadComponent', () => {
  let component: LgTableHeadComponent;
  let fixture;
  let debugElement: DebugElement;
  let tableHeadDebugElement: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LgTableHeadComponent, MockComponent(LgTableRowComponent) ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = MockRender(`
      <thead lg-table-head><tr lg-table-row></tr></thead>
    `);

    debugElement = fixture.debugElement;
    component = fixture.debugElement.children[0].componentInstance;
    tableHeadDebugElement = debugElement.query(By.directive(LgTableHeadComponent));
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

  describe('stackOnSm flag', () => {
    describe('when stackOnSm is set', () => {
      beforeEach(() => {
        fixture = MockRender(getStackOnSmMockRender());

        debugElement = fixture.debugElement;
        tableHeadDebugElement = debugElement.query(By.directive(LgTableHeadComponent));
        fixture.detectChanges();
      });

      it('should add the lg-table--sm class to the table', () => {
        expect(tableHeadDebugElement.classes['lg-table-head--sm']).toBe(true);
        expect(tableHeadDebugElement.classes['lg-table-head--lg']).toBe(undefined);
        expect(tableHeadDebugElement.classes['lg-table-head--md']).toBe(undefined);
      });
    });

    describe('when stackOnSm is not set', () => {
      beforeEach(() => {
        fixture = MockRender(getStackOnSmMockRenderDefault());
        debugElement = fixture.debugElement;
        tableHeadDebugElement = debugElement.query(By.directive(LgTableHeadComponent));
        fixture.detectChanges();
      });

      it('should not append the sm class to the lg-table class', () => {
        expect(tableHeadDebugElement.classes['lg-table-head']).toBe(true);
        expect(tableHeadDebugElement.classes['lg-table-head--sm']).toBe(undefined);
        expect(tableHeadDebugElement.classes['lg-table-head--lg']).toBe(undefined);
        expect(tableHeadDebugElement.classes['lg-table-head--md']).toBe(undefined);
      });
    });
  });

  function getStackOnSmMockRender() {
    return `
    <thead lg-table-head [stackOnSm]="true"><tr lg-table-row></tr></thead>
    `;
  }

  function getStackOnSmMockRenderDefault() {
    return `
    <thead lg-table-head><tr lg-table-row></tr></thead>`;
  }
});
