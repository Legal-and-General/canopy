import { DebugElement } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { MockRender } from 'ng-mocks';

import { LgTableCellComponent } from '../table-cell/table-cell.component';
import { LgTableHeadComponent } from '../table-head/table-head.component';
import { LgTableRowComponent } from '../table-row/table-row.component';
import { LgTableComponent } from './table.component';

describe('TableComponent', () => {
  let component: LgTableComponent;
  let fixture;
  let debugElement: DebugElement;
  let tableDebugElement: DebugElement;

  const books = [
    {
      author: 'Orhan Pamuk',
      title: 'Strangeness In My Mind',
      published: '2016',
    },
    {
      author: 'Albert Camus',
      title: 'The Plague',
      published: '1947',
    },
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LgTableComponent,
        LgTableCellComponent,
        LgTableRowComponent,
        LgTableHeadComponent,
      ],
    }).compileComponents();

    fixture = MockRender(
      `
      <lg-table>
        <lg-table-row>
          <lg-table-head>Author</lg-table-head>
          <lg-table-head>Title</lg-table-head>
          <lg-table-head>Published</lg-table-head>
        </lg-table-row>
        <lg-table-row *ngFor="let book of books">
          <lg-table-cell>{{ book.author }}</lg-table-cell>
          <lg-table-cell>{{ book.title }}</lg-table-cell>
          <lg-table-cell>{{ book.published }}</lg-table-cell>
        </lg-table-row>
      </lg-table>
    `,
      {
        books,
      },
    );

    debugElement = fixture.debugElement;
    component = fixture.componentInstance;
    tableDebugElement = debugElement.query(By.directive(LgTableComponent));
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the default class', () => {
    expect(tableDebugElement.nativeElement.getAttribute('class')).toBe(
      'lg-table',
    );
  });

  it('should have the "table" role applied', () => {
    expect(tableDebugElement.nativeElement.getAttribute('role')).toBe('table');
  });

  it('passes the head content to the respective label template', () => {
    const [authorCell, titleCell, publishedCell] = tableDebugElement.queryAll(
      By.directive(LgTableCellComponent),
    );

    expect(
      authorCell.query(By.css('.lg-table-cell__label')).nativeElement.innerHTML,
    ).toBe('Author');
    expect(
      titleCell.query(By.css('.lg-table-cell__label')).nativeElement.innerHTML,
    ).toBe('Title');
    expect(
      publishedCell.query(By.css('.lg-table-cell__label')).nativeElement
        .innerHTML,
    ).toBe('Published');
  });

  it('updates the labels when the head data changes', () => {
    fixture.componentInstance.books.push({
      author: 'George Orwell',
      title: 'Animal Farm',
      published: '1945',
    });

    fixture.detectChanges();

    const [authorCell, titleCell, publishedCell] = tableDebugElement.queryAll(
      By.directive(LgTableCellComponent),
    );

    expect(
      authorCell.query(By.css('.lg-table-cell__label')).nativeElement.innerHTML,
    ).toBe('Author');
    expect(
      titleCell.query(By.css('.lg-table-cell__label')).nativeElement.innerHTML,
    ).toBe('Title');
    expect(
      publishedCell.query(By.css('.lg-table-cell__label')).nativeElement
        .innerHTML,
    ).toBe('Published');
  });

  describe('when the publish column has align set to end', () => {
    beforeEach(() => {
      fixture = MockRender(`
        <lg-table>
          <lg-table-row>
            <lg-table-head [align]="'end'">Title</lg-table-head>
          </lg-table-row>
          <lg-table-row>
            <lg-table-cell>Accelerate: The Science of Lean Software and Devops</lg-table-cell>
          </lg-table-row>
        </lg-table>`);
      debugElement = fixture.debugElement;
      tableDebugElement = debugElement.query(By.directive(LgTableComponent));
      fixture.detectChanges();
    });

    it('should set the align end class on the cell', () => {
      const [titleCell] = tableDebugElement.queryAll(
        By.directive(LgTableCellComponent),
      );

      expect(
        titleCell
          .query(By.css('.lg-table-cell__content'))
          .nativeElement.getAttribute('class'),
      ).toContain('lg-table-cell__content--align-end');
    });
  });
});
