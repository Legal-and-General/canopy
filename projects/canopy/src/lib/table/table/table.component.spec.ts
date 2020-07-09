import { DebugElement } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { MockRender } from 'ng-mocks';

import { LgTableComponent } from './table.component';
import { LgTableCellComponent } from '../table-cell/table-cell.component';
import { LgTableHeadComponent } from '../table-head/table-head.component';
import { LgTableRowComponent } from '../table-row/table-row.component';
import { LgTableHeadCellComponent } from '../table-head-cell/table-head-cell.component';
import { LgTableBodyComponent } from '../table-body/table-body.component';
import { AlignmentOptions } from '../table.interface';

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

describe('TableComponent', () => {
  let component: LgTableComponent;
  let fixture;
  let debugElement: DebugElement;
  let tableDebugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LgTableComponent,
        LgTableHeadComponent,
        LgTableBodyComponent,
        LgTableRowComponent,
        LgTableHeadCellComponent,
        LgTableCellComponent,
      ],
    }).compileComponents();

    fixture = MockRender(
      `
    <table lg-table>
      <thead lg-table-head>
        <tr lg-table-row>
          <th lg-table-head-cell>Author</th>
          <th lg-table-head-cell>Title</th>
          <th lg-table-head-cell [align]="alignPublishColumn">Published</th>
        </tr>
      </thead>

      <tbody lg-table-body>
        <tr lg-table-row *ngFor="let book of books">
          <td lg-table-cell>{{book.author}}</td>
          <td lg-table-cell>{{book.title}}</td>
          <td lg-table-cell>{{book.published}}</td>
        </tr>
      </tbody>
    </table>
    `,
      {
        books,
        alignPublishColumn: AlignmentOptions.End,
      },
    );

    debugElement = fixture.debugElement;
    component = fixture.debugElement.children[0].componentInstance;
    tableDebugElement = debugElement.query(By.directive(LgTableComponent));
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the default class', () => {
    expect(tableDebugElement.nativeElement.getAttribute('class')).toBe('lg-table');
  });

  it('passes the head content to the respective label template', () => {
    const [authorCell, titleCell, publishedCell] = tableDebugElement.queryAll(
      By.directive(LgTableCellComponent),
    );

    expect(
      authorCell.query(By.css('.lg-table-cell__label')).nativeElement.innerHTML,
    ).toBe('Author');
    expect(titleCell.query(By.css('.lg-table-cell__label')).nativeElement.innerHTML).toBe(
      'Title',
    );
    expect(
      publishedCell.query(By.css('.lg-table-cell__label')).nativeElement.innerHTML,
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
    expect(titleCell.query(By.css('.lg-table-cell__label')).nativeElement.innerHTML).toBe(
      'Title',
    );
    expect(
      publishedCell.query(By.css('.lg-table-cell__label')).nativeElement.innerHTML,
    ).toBe('Published');
  });

  describe('when the publish column has align set to end', () => {
    beforeEach(() => {
      fixture = MockRender(getAlignmentMockRender(), {
        alignPublishColumn: AlignmentOptions.End,
      });
      debugElement = fixture.debugElement;
      tableDebugElement = debugElement.query(By.directive(LgTableComponent));
      fixture.detectChanges();
    });

    it('should set the align end class on the cell', () => {
      const [titleCell] = tableDebugElement.queryAll(By.directive(LgTableCellComponent));

      expect(
        titleCell
          .query(By.css('.lg-table-cell__content'))
          .nativeElement.getAttribute('class'),
      ).toContain('lg-table-cell__content--align-end');
    });
  });

  describe('when the publish column has align set to start', () => {
    beforeEach(() => {
      fixture = MockRender(getAlignmentMockRender(), {
        alignPublishColumn: AlignmentOptions.Start,
      });
      debugElement = fixture.debugElement;
      tableDebugElement = debugElement.query(By.directive(LgTableComponent));
      fixture.detectChanges();
    });

    it('should not set the align end class on the cell ', () => {
      const [titleCell] = tableDebugElement.queryAll(By.directive(LgTableCellComponent));

      expect(
        titleCell
          .query(By.css('.lg-table-cell__content'))
          .nativeElement.getAttribute('class'),
      ).not.toContain('lg-table-cell__content--align-end');
    });
  });

  describe('when the publish column has no alignment set', () => {
    beforeEach(() => {
      fixture = MockRender(`
      <table lg-table>
        <thead lg-table-head>
          <tr lg-table-row>
            <th lg-table-head-cell>Title</th>
          </tr>
        </thead>

        <tbody lg-table-body>
          <tr lg-table-row>
            <td lg-table-cell>Accelerate: The Science of Lean Software and Devops</td>
          </tr>
        </tbody>
      </table>`);
      debugElement = fixture.debugElement;
      tableDebugElement = debugElement.query(By.directive(LgTableComponent));
      fixture.detectChanges();
    });

    it('should not set the align end class on the cell ', () => {
      const [titleCell] = tableDebugElement.queryAll(By.directive(LgTableCellComponent));

      expect(
        titleCell
          .query(By.css('.lg-table-cell__content'))
          .nativeElement.getAttribute('class'),
      ).not.toContain('lg-table-cell__content--align-end');
    });
  });

  function getAlignmentMockRender() {
    return `
    <table lg-table>
      <thead lg-table-head>
        <tr lg-table-row>
          <th lg-table-head-cell [align]="alignPublishColumn">Title</th>
        </tr>
      </thead>

      <tbody lg-table-body>
        <tr lg-table-row>
          <td lg-table-cell>Accelerate: The Science of Lean Software and Devops</td>
        </tr>
      </tbody>
    </table>`;
  }
});
